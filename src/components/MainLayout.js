import React, { useContext } from "react";
import Colors from "../constants/Colors";
import WebContext from "./WebContext";
import {mainIconStyle, videoIconStyle, ICON_SIZE} from "../constants/iconStyles";

// Import Icons
import Add from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Replay from "@material-ui/icons/Replay";
import Fullscreen from "@material-ui/icons/Fullscreen";


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
      padding: "0 3vw",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
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
    },


  };

  // Add + at RHS if currentScreen==RequestsList
  let addRequest = <div style={{ width: ICON_SIZE }}></div>;
  if (context.currentScreen === "RequestsList" ) addRequest = (
    <div onClick={() => context.setCurrentScreen("AddRequest")}>
      <Add style={mainIconStyle} />
    </div>
  );

  // Add Left Button
  let leftIcon = <div style={{ width: ICON_SIZE }}></div>;
  if (context.currentScreen === "RequestContent") leftIcon = (
    <div onClick={() => context.setCurrentScreen("RequestsList")} >
      <ArrowBack style={mainIconStyle} />
    </div>
  );
  else if (context.currentScreen !== "SelectSource") leftIcon = (
    <div onClick={() => context.setCurrentScreen("SelectSource")} >
      <Home style={mainIconStyle} />
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
    context.currentScreen === "RequestContent" &&
    context.currentRequest.type === "Youtube"
  ) {
    videoControl = (
      <div style={styles.videoControl}>
        <div onClick={() => controlVideoHandler("play")}>
          <PlayArrow style={videoIconStyle}/>
        </div>

        <div onClick={() => controlVideoHandler("pause")}>
          <Pause style={videoIconStyle} />
        </div>

        <div onClick={() => controlVideoHandler("replay")}>
          <Replay style={videoIconStyle} />
        </div>

        <div onClick={() => controlVideoHandler("fullscreen")}>
          <Fullscreen style={videoIconStyle} />
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

