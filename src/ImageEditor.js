// // ImageEditor.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addImage } from "./actions";

// const ImageEditor = () => {
//   const [image, setImage] = useState(null);
//   const dispatch = useDispatch();

//   const handleAddImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       dispatch(addImage(imageUrl));
//     }
//   };

//   return (
//     <div className="image-editor">
//       <input type="file" onChange={handleAddImage} />
//     </div>
//   );
// };

// export default ImageEditor;
