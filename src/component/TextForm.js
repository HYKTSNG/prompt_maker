import React, { useState } from "react";

function TextForm() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputText);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="input-text">Enter some text:</label>
      </div>
      <textarea
        id="input-text"
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />

      <div>
        <label htmlFor="select-options">Choose a closing statement: </label>
        <select
          id="select-options"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">---</option>
          <option value="箇条書きで教えてください">箇条書き</option>
          <option value="200文字以内で教えてください">200文字以内</option>
          <option value="簡潔に教えてください">簡潔に</option>
          <option value="小学生にもわかるように教えてください">
            小学生にもわかるように
          </option>
          <option value="ステップ形式で教えてください">ステップ形式</option>
        </select>
      </div>

      {inputText && (
        <div>
          <p>
            あなたはプログラマーです。 <br />
            {inputText}
            {selectedOption && <p>{selectedOption}</p>}
          </p>
          <button onClick={handleCopyClick}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default TextForm;
