import { useState } from "react";
import "./App.css";
import { translateText } from "./data/Api";

function App() {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("Bello cox amee nama to?");

  const handelSubmit = async () => {
    const response = await translateText(textInput);
    let translation = response.data.contents.translated;
    setTextOutput(translation);
    // console.log();
  };
  return (
    <>
      <h1>Get ready to go bananas with our minion-themed site!</h1>
      <div className="hero-area">
        <div className="use-me">Use me</div>
        <textarea
          id="txt-input"
          placeholder="type what you want to say!"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        ></textarea>
        <button className="btn" id="btn-translate" onClick={handelSubmit}>
          Translate Banana
        </button>

        <div style={{ fontSize: "larger" }}> This is what you meant: </div>
        <div id="output">{textOutput}</div>
        <div className="say">
          <div className="banana"> Banana </div>
          {/* <img className="bob" src="./banana.png" alt="image of mascot" /> */}
        </div>
      </div>
      <footer>Made with 💓 by Tathagata.</footer>
    </>
  );
}

export default App;
