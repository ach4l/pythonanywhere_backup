import React from "react";
import Colors from "../constants/Colors";

export default function SourceButton(props) {
  

  const styles = {
    screen: {
      // backgroundColor: Colors.headerTitle,
      backgroundColor: props.title==="Youtube" ? "black" : "white",
      borderRadius: 10,
      // alignSelf: "center",
      // justifyContent: "center",
      // alignItems: "center",
      marginTop: "10px",
      padding: "5px",
      //background: #eaeaea,
      // minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100px",
      width: "100vw",

      /* Flex Fallback */
      //marginLeft: "5vw",
      //marginRight: "5vw",
      //flex: 1 1 0.2*context.vw,
    },

    text: {
      fontSize: 30,
      color: Colors.headerBackground,
      fontWeight: "bold",
    }
  };

  // const radiusCircle = 35 + 4*context.vh;

  // const styles = {
  //   screen: {
  //     backgroundColor: Colors.headerBackground,
  //     borderRadius: 3,
  //     alignSelf: "center",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginTop: 5*context.vh,
  //     padding: 5,
  //   },

  //   text: {
  //     fontSize: 18,
  //     color: props.textColor || Colors.headerTitle
  //   }
  // };
  return (
    <div onClick={props.onClick}>
      <div style={styles.screen}>
        <div style={styles.text}>{props.title}</div>
      </div>
    </div>
  );
}

