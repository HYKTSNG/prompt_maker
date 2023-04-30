import React, { useState } from "react";
import FooterSelectComponent from "./FooterSelectComponent";
import TextArea from "./TextArea";

function TextForm() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopyClick = () => {
    const textToCopy = document.querySelector("section").innerText;
    navigator.clipboard.writeText(textToCopy);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <TextArea inputText={inputText} handleInputChange={handleInputChange} />

      <FooterSelectComponent
        selectedOption={selectedOption}
        handleSelectChange={handleSelectChange}
      />

      <section>
        {inputText && (
          <div>
            <p>
              <p>あなたはプログラマーです。</p>
              {inputText}
              {selectedOption && <p>{selectedOption}</p>}
            </p>
          </div>
        )}
      </section>
      <button onClick={handleCopyClick}>Copy</button>
    </div>
  );
}

export default TextForm;
