import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import WebContext from "./WebContext";

export default function RequestDisplay(props) {

  const context = useContext(WebContext);

  function detailRequestHandler() {
    // props.navigation.navigate('RequestContent', { request });
    if (props.downloaded) {
      context.setCurrentScreen("RequestContent");
      context.setCurrentRequest(props.request);
    }
  }

  function removeRequestHandler() {
    context.dispatchAllRequests(
      {
        type: "remove",
        reqId: props.request.id
      }
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.firstColumn}>
        <TouchableOpacity 
          style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}
          onPress={detailRequestHandler}
        >
          <Text style={styles.infos}>
            {props.request.id} / {props.request.mode} / {props.request.status}
          </Text>
          <Text style={styles.query}>{props.request.query}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={removeRequestHandler}>
        <Ionicons name="md-trash" size={30} color="pink" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: "1%",
    margin: "2%",
    maxWidth: "90%",
    flexDirection: "row",
    alignItems: "center",
  },

  firstColumn: {
    flexGrow: 1,
    marginRight: "5%",
    maxWidth: "90%",
  },

  infos: {
    color: "grey",
    fontSize: 12,
  },

  query: {
    fontWeight: "bold",
    // fontStyle: "italic",
    marginHorizontal: "2%",
    fontSize: 16,
    marginVertical: "1%",
    maxWidth: "100%",
  }



});





// const colors = {
//   saved: {
//     textColor: "black",
//     backgroundColor: "white",
//     borderColor: "black"
//   },

//   sent: {
//     textColor: "red",
//     backgroundColor: "white",
//     borderColor: "black"
//   },

//   receivedServer : {
//     textColor: "orange",
//     backgroundColor: "white",
//     borderColor: "black"
//   },

//   // greenish
//   receivedLocal: {
//     textColor: "yellow",
//     backgroundColor: "#3e9455",
//     borderColor: "#235230"
//   },

//   failure: {
//     textColor: "white",
//     backgroundColor: "red",
//     borderColor: "red"
//   }
// };