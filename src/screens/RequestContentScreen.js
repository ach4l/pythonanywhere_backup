import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import WebContext from "../components/WebContext";
import { Video } from "expo-av";
// import VideoPlayer from 'expo-video-player';
import { serverURL } from "../ajax";

export default function RequestContextScreen(props) {
  // const request = props.navigation.getParam('request');
  const context = useContext(WebContext);

  let content = null;
  if (context.currentRequest.type === "Youtube") content = (
    <Video
      source={{ uri: serverURL + context.currentRequest.links[0] }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode={Video.RESIZE_MODE_CONTAIN}
      shouldPlay
      // isLooping
      ref={context.videoRef}
      style={{ width:100*context.vw, height: 100*context.vh, backgroundColor: "black" }}
    />
  );

  return (
    <View styles={styles.screen}>
      {/* <Text style={styles.title}>{context.currentRequest.query}</Text> */}
      {content}
      {/* <Text>{context.currentRequest.links[0]}</Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    // justifyContent: "center",
    borderWidth: 2, 
    borderColor: "green",
    // alignItems: "center",
    height: "100%"
  },

  title: {
    fontSize: 16
  }
});
