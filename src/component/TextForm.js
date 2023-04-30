import React, { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>先頭に追加する文字: </div>
      <div>あなたはプログラマーです</div>
      <textarea
        type="text"
        onChange={handleChange}
        value={text}
        style={styles.inputLarge}
      />
      <p>
        あなたはプログラマーです。 <br />
        {text} <br />
        小学生にもわかるように教えてください
      </p>
    </div>
  );
}

const styles = {
  inputLarge: {
    width: "50%",
  },
};

export default TextForm;
