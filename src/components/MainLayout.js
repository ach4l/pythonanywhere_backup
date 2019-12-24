import React, { useContext } from "react";
import Colors from "../constants/Colors";
import WebContext from "./WebContext";
import Add from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Replay from "@material-ui/icons/Replay";
import Fullscreen from "@material-ui/icons/Fullscreen";

const ICON_SIZE = 25;

export default function MainLayout(props) {
  const context = useContext(WebContext);

  const styles = {
    screen: {
      height: "100%"
    },
  
    header: {
      height: 60,
      backgroundColor: Colors.headerBackground,
      justifyContent: "space-between",
      paddingHorizontal: "8%",
      alignItems: "center",
      flexDirection: "row",
      display: "flex",
    },
  
    title: {
      color: Colors.headerTitle,
      fontSize: 20,
    }, 
  
    supHeader: {
      backgroundColor: "pink",
      height: "5%",
    },

    videoControl: {
      flexDirection: "row"
    }
  };

  // Add + at RHS if currentScreen==RequestsList
  let addRequest = <div style={{width: ICON_SIZE}}></div>;
  if (context.currentScreen === "RequestsList") addRequest = (
    <div onClick={() => context.setCurrentScreen("AddRequest")}>
      <Add fontSize={ICON_SIZE} color={Colors.headerTitle} />
    </div>
  );

  // Add Left Button
  let leftIcon = <div style={{width: ICON_SIZE}}></div>;
  if (context.currentScreen === "RequestContent") leftIcon = (
    <div onClick={() => context.setCurrentScreen("RequestsList")} >
      <ArrowBack fontSize={ICON_SIZE} color={Colors.headerTitle} />
    </div>
  );
  else if (context.currentScreen !== "SelectSource") leftIcon = (
    <div onClick={() => context.setCurrentScreen("SelectSource")} >
      <Home fontSize={ICON_SIZE} color={Colors.headerTitle} />
    </div>
  )



  // // Add something for header on android
  // let supHeader = null;
  // if (Platform.OS === "android") supHeader = <div style={styles.supHeader}></div>;

  // *** Icons for RequestContent Video ***
  // Deprecated !!!
  function controlVideoHandler(action) {
    const videoEl = context.videoRef.current;
    if (videoEl) {
      if (action === "play") videoEl.playAsync();
      else if (action === "pause") videoEl.pauseAsync();
      else if (action === "replay") videoEl.replayAsync();
      else if (action === "fullscreen") videoEl.presentFullscreenPlayer();
    }
  }


  let videoControl = null;
  // const videoElement = context.videoRef.current;
  console.log("videoRef", context.videoRef);
  if (
    context.currentScreen==="RequestContent" && 
    context.currentRequest.type === "Youtube"
    ) {
    videoControl = (
      <div style = {styles.videoControl}>
        <div onClick={() => controlVideoHandler("play")}>
          <PlayArrow fontSize={ICON_SIZE} color={Colors.videoControlIcons} />
        </div>

        <div onClick={() => controlVideoHandler("pause")}>
          <Pause fontSize={ICON_SIZE} color={Colors.videoControlIcons} />
        </div>

        <div onClick={() => controlVideoHandler("replay")}>
          <Replay fontSize={ICON_SIZE} color={Colors.videoControlIcons} />
        </div>

        <div onClick={() => controlVideoHandler("fullscreen")}>
          <Fullscreen fontSize={ICON_SIZE} color={Colors.videoControlIcons} />
        </div>
      </div>
    );
  }

  return (
    <div style={styles.screen}>
      {/* {supHeader} */}
      <div style={styles.header}>
        {leftIcon}
        <div style={styles.title}>{props.title}</div>
        {addRequest}
        {videoControl}
      </div>
      {props.children}
    </div>
  );
}

