import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import WebContext from "../components/WebContext";
import RequestDisplay from "../components/RequestDisplay";

export default function RequestsListScreen(props) {
  const context = useContext(WebContext);

  let reqElements = context.allRequests
    .filter(req => req.type === context.source)
    .map(req => (
      <RequestDisplay
        request={req}
        key={req.id}
        downloaded={req.status.indexOf("downloaded")>=0}
      />
    ));

  return (
    <View>
      {reqElements}
    </View>
  );

}


const styles = StyleSheet.create({

});

