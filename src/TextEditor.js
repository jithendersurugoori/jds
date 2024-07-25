
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addText ,addImage} from "./actions";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleAddText = () => {
    dispatch(addText(text));
    setText("");
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(addImage(imageUrl));
      setImage(null)
    }
    
  };

  return (
    <div className="text-editor">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button className="button" onClick={handleAddText}>Post</button>
      <div className="image-editor">
      <input type="file" onChange={handleAddImage} />
    </div>
    </div>
  );
};

export default TextEditor;




