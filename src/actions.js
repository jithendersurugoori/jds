
export const ADD_TEXT = "ADD_TEXT";
export const ADD_IMAGE = "ADD_IMAGE";
export const LIKE_CONTENT = "LIKE_CONTENT";
export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";
export const ADD_COMMEN = 'ADD_COMMEN'; 
export const EDIT_CONTENT = 'EDIT_CONTENT';

export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text,
});

export const addImage = (imageUrl) => ({
  type: ADD_IMAGE,
  payload: imageUrl,
});

export const likeContent = (id) => ({
  type: LIKE_CONTENT,
  payload: id,
});

export const toggleBookmark = (id) => ({
  type: TOGGLE_BOOKMARK,
  payload: id,
});


export const editContent = (id, newItem) => ({
  type: EDIT_CONTENT,
  payload: { id, newItem },
});



export const addComment = (id, comment) => ({
  type: 'ADD_COMMENT',
  payload: { id, comment },
});



  



