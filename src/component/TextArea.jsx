import React from "react";

function TextArea(props) {
  const { inputText, handleInputChange } = props;
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
    </div>
  );
}

export default TextArea;
