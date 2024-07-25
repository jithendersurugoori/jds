
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { editContent,likeContent, toggleBookmark } from "./actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

// import './App.css';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);
//   const bookmarks = useSelector((state) => state.bookmarks);
//   const dispatch = useDispatch();

//   const handleEdit = (id, newItem) => {
//     dispatch(editContent(id, newItem));
//   };


//   const handleLike = (id) => {
//     dispatch(likeContent(id));
//   };

//   const handleToggleBookmark = (id) => {
//     dispatch(toggleBookmark(id));
//   };

//   return (
//     <div className="item-list">
//       {items.map((item) => (
//         <div key={item.id} className={`item ${item.color}`}>
//           {item.type === "text" && <p>{item.content}</p>}
//           {item.type === "image" && <img src={item.content} alt="uploaded" />}
//           <button onClick={() => handleLike(item.id)}>
//             <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
//           </button>
//           <button onClick={() => handleToggleBookmark(item.id)}>
//             <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
//             {bookmarks.includes(item.id) ? "Remove Bookmark" : "Add to Bookmarks"}
//           </button>
//           <button onClick={() => handleEdit(item.id, { text: prompt('Edit text:', item.text) })}>
//             Edit
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;





// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { likeContent, toggleBookmark } from "./actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons';
// import Modal from 'react-modal';

// import './App.css';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);
//   const bookmarks = useSelector((state) => state.bookmarks);
//   const dispatch = useDispatch();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editItem, setEditItem] = useState(null);
//   const [editContent, setEditContent] = useState("");

//   const handleLike = (id) => {
//     dispatch(likeContent(id));
//   };

//   const handleToggleBookmark = (id) => {
//     dispatch(toggleBookmark(id));
//   };

//   const handleEditText = (item) => {
//     setEditItem(item);
//     setEditContent(item.content);
//     setIsModalOpen(true);
//   };

//   const handleEditImage = (item) => {
//     setEditItem(item);
//     setEditContent(item.content);
//     setIsModalOpen(true);
//   };

//   const handleSaveEdit = () => {
//     // Dispatch an action to save the edited content
//     dispatch({
//       type: "EDIT_ITEM_CONTENT",
//       payload: { id: editItem.id, content: editContent }
//     });
//     setIsModalOpen(false);
//     setEditItem(null);
//     setEditContent("");
//   };

//   return (
//     <div className="item-list">
//       {items.map((item) => (
//         <div key={item.id} className={`item ${item.color}`}>
//           {item.type === "text" && (
//             <>
//               <p>{item.content}</p>
//               <button onClick={() => handleEditText(item)}>
//                 <FontAwesomeIcon icon={faEdit} /> Edit Text
//               </button>
//             </>
//           )}
//           {item.type === "image" && (
//             <>
//               <img src={item.content} alt="uploaded" />
//               <button onClick={() => handleEditImage(item)}>
//                 <FontAwesomeIcon icon={faEdit} /> Edit Image
//               </button>
//             </>
//           )}
//           <button onClick={() => handleLike(item.id)}>
//             <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
//           </button>
//           <button onClick={() => handleToggleBookmark(item.id)}>
//             <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
//             {bookmarks.includes(item.id) ? "Remove Bookmark" : "Add to Bookmarks"}
//           </button>
//         </div>
//       ))}
      
//       {isModalOpen && (
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={() => setIsModalOpen(false)}
//           contentLabel="Edit Item"
//         >
//           <h2>Edit {editItem.type === "text" ? "Text" : "Image"}</h2>
//           {editItem.type === "text" ? (
//             <textarea
//               value={editContent}
//               onChange={(e) => setEditContent(e.target.value)}
//             />
//           ) : (
//             <input
//               type="text"
//               value={editContent}
//               onChange={(e) => setEditContent(e.target.value)}
//             />
//           )}
//           <button onClick={handleSaveEdit}>Save</button>
//           <button onClick={() => setIsModalOpen(false)}>Cancel</button>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default ItemList;




// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { editContent, likeContent, toggleBookmark } from "./actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
// import './App.css';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);
//   const bookmarks = useSelector((state) => state.bookmarks);
//   const dispatch = useDispatch();
  
//   const [editingItemId, setEditingItemId] = useState(null);
//   const [newContent, setNewContent] = useState("");

//   const handleEdit = (id, newItem) => {
//     dispatch(editContent(id, newItem));
//     setEditingItemId(null); // Exit editing mode
//   };

//   const handleLike = (id) => {
//     dispatch(likeContent(id));
//   };

//   const handleToggleBookmark = (id) => {
//     dispatch(toggleBookmark(id));
//   };

//   const startEditing = (id, currentContent) => {
//     setEditingItemId(id);
//     setNewContent(currentContent);
//   };

//   const handleInputChange = (e) => {
//     setNewContent(e.target.value);
//   };

//   const handleInputBlur = (id) => {
//     handleEdit(id, { content: newContent });
//   };

//   const handleInputKeyPress = (e, id) => {
//     if (e.key === "Enter") {
//       handleEdit(id, { content: newContent });
//     }
//   };

//   return (
//     <div className="item-list">
//       {items.map((item) => (
//         <div key={item.id} className={`item ${item.color}`}>
//           {item.type === "text" ? (
//             editingItemId === item.id ? (
//               <input
//                 type="text"
//                 value={newContent}
//                 onChange={handleInputChange}
//                 onBlur={() => handleInputBlur(item.id)}
//                 onKeyPress={(e) => handleInputKeyPress(e, item.id)}
//                 autoFocus
//               />
//             ) : (
//               <p onClick={() => startEditing(item.id, item.content)}>
//                 {item.content}
//               </p>
//             )
//           ) : item.type === "image" ? (
//             <img src={item.content} alt="uploaded" />
//           ) : null}
//           <div >
//           <button className="btn1" onClick={() => handleLike(item.id)}>
//             <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
//           </button>
//           <button className="btn" onClick={() => handleToggleBookmark(item.id)}>
//             <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
//             {bookmarks.includes(item.id) ? "" : ""}
//           </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;





// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { editContent, likeContent, toggleBookmark } from "./actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

// import './App.css';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);
//   const bookmarks = useSelector((state) => state.bookmarks);
//   const dispatch = useDispatch();

//   const [editingItemId, setEditingItemId] = useState(null);
//   const [newContent, setNewContent] = useState('');

//   const handleEdit = (id) => {
//     dispatch(editContent(id, { text: newContent }));
//     setEditingItemId(null);
//     setNewContent('');
//   };

//   const handleLike = (id) => {
//     dispatch(likeContent(id));
//   };

//   const handleToggleBookmark = (id) => {
//     dispatch(toggleBookmark(id));
//   };

//   const handleChangeContent = (event) => {
//     setNewContent(event.target.value);
//   };

//   return (
//     <div className="item-list">
//       {items.map((item) => (
//         <div key={item.id} className={`item ${item.color}`}>
//           {item.type === "text" && (
//             editingItemId === item.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={newContent}
//                   onChange={handleChangeContent}
//                   placeholder="Edit text"
//                 />
//                 <button onClick={() => handleEdit(item.id)}>Save</button>
//                 <button onClick={() => setEditingItemId(null)}>Cancel</button>
//               </div>
//             ) : (
//               <p onDoubleClick={() => {
//                 setEditingItemId(item.id);
//                 setNewContent(item.content);
//               }}>
//                 {item.content}
//               </p>
//             )
//           )}
//           {item.type === "image" && <img src={item.content} alt="uploaded" />}
//           <button onClick={() => handleLike(item.id)}>
//             <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
//           </button>
//           <button onClick={() => handleToggleBookmark(item.id)}>
//             <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
//             {bookmarks.includes(item.id) ? "Remove Bookmark" : "Add to Bookmarks"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;






// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { editContent, likeContent, toggleBookmark, addComment } from "./actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons';
// import './App.css';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);
//   const bookmarks = useSelector((state) => state.bookmarks);
//   const dispatch = useDispatch();
  
//   const [editingItemId, setEditingItemId] = useState(null);
//   const [newContent, setNewContent] = useState("");
//   const [newComment, setNewComment] = useState("");
  
//   const handleEdit = (id, newItem) => {
//     dispatch(editContent(id, newItem));
//     setEditingItemId(null);
//   };

//   const handleLike = (id) => {
//     dispatch(likeContent(id));
//   };

//   const handleToggleBookmark = (id) => {
//     dispatch(toggleBookmark(id));
//   };

//   const startEditing = (id, currentContent) => {
//     setEditingItemId(id);
//     setNewContent(currentContent);
//   };

//   const handleInputChange = (e) => {
//     setNewContent(e.target.value);
//   };

//   const handleInputBlur = (id) => {
//     handleEdit(id, { content: newContent });
//   };

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleCommentSubmit = (e, id) => {
//     e.preventDefault();
//     dispatch(addComment(id, newComment));
//     setNewComment("");
//   };

//   return (
//     <div className="item-list">
//       {items.map((item) => (
//         <div key={item.id} className={`item ${item.color}`}>
//           {item.type === "text" ? (
//             editingItemId === item.id ? (
//               <input
//                 type="text"
//                 value={newContent}
//                 onChange={handleInputChange}
//                 onBlur={() => handleInputBlur(item.id)}
//               />
//             ) : (
//               <p>{item.content}</p>
//             )
//           ) : item.type === "image" ? (
//             <img src={item.content} alt="uploaded" />
//           ) : null}
          
//           <button className="btn" onClick={() => startEditing(item.id, item.content)}>
//             <FontAwesomeIcon icon={faEdit} />
//           </button>
//           <button className="btn" onClick={() => handleLike(item.id)}>
//             <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
//           </button>
//           <button className="btn" onClick={() => handleToggleBookmark(item.id)}>
//             <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
//           </button>
          
//           <form onSubmit={(e) => handleCommentSubmit(e, item.id)} className="comment-form">
//             <input
//               type="text"
//               value={newComment}
//               onChange={handleCommentChange}
//               placeholder="Add a comment"
//             />
//             <button className="btn" type="submit">comment</button>
//           </form>
          
//           {item.comments && item.comments.length > 0 && (
//             <div className="comments">
//               {item.comments.map((comment, index) => (
//                 <p key={index}>{comment}</p>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { editContent, likeContent, toggleBookmark, addComment } from "./actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons';
// import './App.css';

// const ItemList = () => {
//   const items = useSelector((state) => state.items);
//   const bookmarks = useSelector((state) => state.bookmarks);
//   const dispatch = useDispatch();
  
//   const [editingItemId, setEditingItemId] = useState(null);
//   const [newContent, setNewContent] = useState("");
//   const [newComment, setNewComment] = useState("");
//   const [newImage, setNewImage] = useState(null);

//   const handleEdit = (id, newItem) => {
//     dispatch(editContent(id, newItem));
//     setEditingItemId(null);
//     setNewContent("");
//     setNewImage(null);
//   };

//   const handleLike = (id) => {
//     dispatch(likeContent(id));
//   };

//   const handleToggleBookmark = (id) => {
//     dispatch(toggleBookmark(id));
//   };

//   const startEditing = (id, currentContent, type) => {
//     setEditingItemId(id);
//     if (type === "text") {
//       setNewContent(currentContent);
//     } else if (type === "image") {
//       setNewImage(currentContent);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewContent(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     setNewImage(e.target.files[0]);
//   };

//   const handleInputBlur = (id, type) => {
//     if (type === "text") {
//       handleEdit(id, { content: newContent });
//     } else if (type === "image") {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         handleEdit(id, { content: reader.result });
//       };
//       reader.readAsDataURL(newImage);
//     }
//   };

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleCommentSubmit = (e, id) => {
//     e.preventDefault();
//     dispatch(addComment(id, newComment));
//     setNewComment("");
//   };

//   return (
//     <div className="item-list">
//       {items.map((item) => (
//         <div key={item.id} className={`item ${item.color}`}>
//           {item.type === "text" ? (
//             editingItemId === item.id ? (
//               <input
//                 type="text"
//                 value={newContent}
//                 onChange={handleInputChange}
//                 onBlur={() => handleInputBlur(item.id, "text")}
//               />
//             ) : (
//               <p>{item.content}</p>
//             )
//           ) : item.type === "image" ? (
//             editingItemId === item.id ? (
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 onBlur={() => handleInputBlur(item.id, "image")}
//               />
//             ) : (
//               <img src={item.content} alt="uploaded" />
//             )
//           ) : null}
          
//           <button className="btn" onClick={() => startEditing(item.id, item.content, item.type)}>
//             <FontAwesomeIcon icon={faEdit} />
//           </button>
//           <button className="btn" onClick={() => handleLike(item.id)}>
//             <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
//           </button>
//           <button className="btn" onClick={() => handleToggleBookmark(item.id)}>
//             <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
//           </button>
          
//           <form onSubmit={(e) => handleCommentSubmit(e, item.id)} className="comment-form">
//             <input
//               type="text"
//               value={newComment}
//               onChange={handleCommentChange}
//               placeholder="Add a comment"
//             />
//             <button type="submit">comment</button>
//           </form>
          
//           {item.comments && item.comments.length > 0 && (
//             <div className="comments">
//               {item.comments.map((comment, index) => (
//                 <p key={index}>{comment}</p>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editContent, likeContent, toggleBookmark, addComment } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  
  const [editingItemId, setEditingItemId] = useState(null);
  const [newContent, setNewContent] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  
  const handleEdit = (id, newItem) => {
    dispatch(editContent(id, newItem));
    setEditingItemId(null);
  };

  const handleLike = (id) => {
    dispatch(likeContent(id));
  };

  const handleToggleBookmark = (id) => {
    dispatch(toggleBookmark(id));
  };

  const startEditing = (id, currentContent, type) => {
    setEditingItemId(id);
    if (type === "text") {
      setNewContent(currentContent);
    } else if (type === "image") {
      setNewImageFile(null);
    }
  };

  const handleInputChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleInputBlur = (id) => {
    handleEdit(id, { content: newContent });
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e, id) => {
    e.preventDefault();
    dispatch(addComment(id, newComment));
    setNewComment("");
  };

  const handleImageChange = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  const handleImageUpload = (id) => {
    const newImageUrl = URL.createObjectURL(newImageFile);
    handleEdit(id, { content: newImageUrl });
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className={`item ${item.color}`}>
          {item.type === "text" ? (
            editingItemId === item.id ? (
              <input
                type="text"
                value={newContent}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur(item.id)}
              />
            ) : (
              <p>{item.content}</p>
            )
          ) : item.type === "image" ? (
            editingItemId === item.id ? (
              <div>
                <input type="file" onChange={handleImageChange} />
                {newImageFile && (
                  <button onClick={() => handleImageUpload(item.id)}>Upload</button>
                )}
              </div>
            ) : (
              <img src={item.content} alt="uploaded" />
            )
          ) : null}
          
          <button className="btn" onClick={() => startEditing(item.id, item.content, item.type)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="btn" onClick={() => handleLike(item.id)}>
            <FontAwesomeIcon icon={faHeart} className={item.liked ? 'liked' : ''} />
          </button>
          <button className="btn" onClick={() => handleToggleBookmark(item.id)}>
            <FontAwesomeIcon icon={faBookmark} className={bookmarks.includes(item.id) ? 'bookmarked' : ''} />
          </button>
          
          <form onSubmit={(e) => handleCommentSubmit(e, item.id)} className="comment-form">
            <input
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
            />
            <button  type="submit">Comment</button>
          </form>
          
          {item.comments && item.comments.length > 0 && (
            <div className="comments">
              {item.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
