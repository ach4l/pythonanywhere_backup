import React, { useState, useContext } from "react";
import { View, TextInput, Switch, Text, StyleSheet, Button, Picker } from "react-native";
import Colors from "../constants/Colors";
import WebContext from "../components/WebContext";
import * as ajax from "../ajax";

export default function AddRequestScreen(props) {
  const [query, setQuery] = useState("");
  const [video, setVideo] = useState(false);
  const [level, setLevel] = useState(0);

  const context = useContext(WebContext);


  // Add New request !
  async function addRequestHandler() {
    let mode = video ? 'video' : 'audio';

    if (context.source === "Wikitravel") mode = level;

    const request = {
      user_id: context.userId,
      id: context.nextReqId,
      query,
      status: "saved",
      type: context.source,
      mode
    };

    // Add request to context
    context.dispatchAllRequests({ type: "add", newReq: request });
    context.setNextReqId(val => val + 1);

    // Go back
    context.setCurrentScreen("RequestsList");
  }

  // Video / Audio Switch 
  let videoSwitch = null;

  if (context.source === "Youtube") {
    videoSwitch = (
      <View style={styles.video}>
        <Text
          style={{ marginRight: "3%" }}
        >
          {video ? "Video & Audio" : "Only Audio"}</Text>
        <Switch
          value={video}
          onValueChange={input => setVideo(input)}
        />
      </View>
    );
  }

  // Level for wikitravel
  let levelSelect = null;
  if (context.source === "Wikitravel") {
    levelSelect = (
      <View style={styles.levelSelect}>
        <Text>Level: </Text>
        <Picker
          selectedValue={level}
          onValueChange={value => setLevel(value)}
          style={styles.levelPicker}
        >
          <Picker.Item value="0" label="0" />
          <Picker.Item value="1" label="1" />
        </Picker>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        value={query}
        onChangeText={input => setQuery(input)}
        placeholder="What are you looking for ?"
      />
      {videoSwitch}
      {levelSelect}
      <View style={styles.buttons}>
        <Button
          onPress={addRequestHandler}
          title="Add"
          color={Colors.headerBackground}
        />
        <Button
          onPress={() => context.setCurrentScreen("RequestsList")}
          title="Cancel"
          color={Colors.headerBackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // height: "100%",
    height: 200,
    minHeight: "50%",
    padding: "10%",
    justifyContent: "space-around",
  },

  video: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },

  buttons: {
    // alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  levelSelect: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  levelPicker: {
    width: "29%",
    height: 20,
    // fontSize: 15,
  }
});
