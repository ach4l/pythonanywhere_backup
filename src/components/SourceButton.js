import React, {useContext} from "react";
import WebContext from "./WebContext";
import Colors from "../constants/Colors";

export default function SourceButton(props) {
  const context = useContext(WebContext);

  // const radiusCircle = 35 + 4*context.vh;

  const styles = {
    screen: {
      backgroundColor: Colors.headerBackground,
      borderRadius: 3,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5*context.vh,
      padding: 5,
    },
  
    text: {
      fontSize: 18,
      color: props.textColor || Colors.headerTitle
    }
  };
  return (
    <div onClick={props.onClick}>
      <div style={styles.screen}>
        <div style={styles.text}>{props.title}</div>
      </div>
    </div>
  );
}

