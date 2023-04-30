import React, { useState } from "react";
import FooterSelectComponent from "./FooterSelectComponent";
import HeaderSelectComponent from "./HeaderSelectComponent";
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

  const [footerSelectedOption, setFooterSelectedOption] = useState("");
  const [headerSelectedOption, setHeaderSelectedOption] = useState("");

  const handleFooterSelectChange = (event) => {
    setFooterSelectedOption(event.target.value);
  };

  const handleHeaderSelectChange = (event) => {
    setHeaderSelectedOption(event.target.value);
  };

  return (
    <div>
      <TextArea inputText={inputText} handleInputChange={handleInputChange} />

      <HeaderSelectComponent
        selectedOption={headerSelectedOption}
        onChange={handleHeaderSelectChange}
      />

      <FooterSelectComponent
        selectedOption={footerSelectedOption}
        onChange={handleFooterSelectChange}
      />

      <section>
        {inputText && (
          <div>
            {headerSelectedOption && <p>{headerSelectedOption}</p>}
            {inputText}
            {footerSelectedOption && <p>{footerSelectedOption}</p>}
          </div>
        )}
      </section>
      <button onClick={handleCopyClick}>Copy</button>
    </div>
  );
}

export default TextForm;
