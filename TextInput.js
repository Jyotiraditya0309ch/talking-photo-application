import React, { useState } from "react";

const TextInput = ({ onTextSubmit }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    onTextSubmit(text);
  };

  return (
    <div>
      <textarea
        placeholder="Enter text to speak"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <button onClick={handleSubmit}>Generate Talking Avatar</button>
    </div>
  );
};

export default TextInput;
