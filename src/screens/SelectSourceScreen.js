import React, { useContext } from "react";
import SourceButton from "../components/SourceButton";
import WebContext from "../components/WebContext";


export default function SelectSourceScreen() {
  const context = useContext(WebContext);

  const styles = {
    screen: {
      
    }
  };

  function sourceClickHandler(source) {
    context.setCurrentScreen("RequestsList");
    context.setSource(source);
  }

  const sourceElements = context.sources.map(s => (
    <SourceButton
      title={s}
      onClick={sourceClickHandler.bind(this, s)}
      key={s}
    />
  ));
  return (
    <div style={styles.screen}>
      {sourceElements}
    </div>
  );

}


