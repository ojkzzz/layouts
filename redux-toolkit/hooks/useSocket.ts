import { useEffect } from "react";
import { io } from "socket.io-client";
import { setActive, setDisabled } from "../slices/activeButtonSlice";
import { getData, getLink, getLogs, getRegions } from "../slices/dataSlice";
import { setRes } from "../slices/filesSlice";
import { getProgress } from "../slices/radioSlice";
import { socketInit } from "../slices/socketSlice";
import { useAppDispatch } from "./hooks";

export const useSocket = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const API_URL = "";
    const socket = io(API_URL);
    socket.on("connect", () => {
      const processId = localStorage.getItem("processId");
      if (processId) {
        socket.send({ action: "check_process", id: processId });
      }
      setInterval(() => {
        socket.send({
          action: "check_process",
          id: localStorage.getItem("processId"),
        });
      }, 5000);
      socket.send({ action: "get_start_data" });
      socket.on("message", (e: any) => {
        switch (e.action) {
          case "set_data": {
            dispatch(getData(e));
            break;
          }
          case "set_region": {
            dispatch(getRegions(e));
            break;
          }
          case "set_logs": {
            dispatch(getLogs(e));
            break;
          }
          case "success_loading": {
            dispatch(getLink(e));
            dispatch(getProgress(0));
            dispatch(setActive());
            break;
          }
          case "loading": {
            dispatch(getProgress(Math.round(e.progress * 100)));
            dispatch(setDisabled());
            break;
          }
          case "get_files_for_clear": {
            dispatch(setRes(e.res));
            break;
          }
          default:
            break;
        }

        console.log(e);
      });
    });
    dispatch(socketInit(socket));
  }, []);
};
