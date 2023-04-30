import React from "react";

function FooterSelectComponent({ selectedOption, onChange }) {
  return (
    <div>
      <label htmlFor="select-options">Choose a closing statement:　</label>
      <select
        id="select-options"
        value={selectedOption}
        onChange={onChange}
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
  );
}

export default FooterSelectComponent;
