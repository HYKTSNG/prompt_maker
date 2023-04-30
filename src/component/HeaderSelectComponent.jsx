import React from "react";

function HeaderSelectComponent({ selectedOption, onChange }) {
  return (
    <div>
      <label htmlFor="select-options">Choose a firstly statement:　</label>
      <select
        id="select-options"
        value={selectedOption}
        onChange={onChange}
      >
        <option value="">---</option>
        <option value="あなたはプログラマーです。">プログラマー</option>
        <option value="あなたは不動産業者です。">不動産業者</option>
        <option value="あなたは投資家です。">投資家</option>
        <option value="あなたは経営者です。">経営者</option>
      </select>
    </div>
  );
}

export default HeaderSelectComponent;
