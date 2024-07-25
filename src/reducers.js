// reducers.js
import { ADD_TEXT, ADD_IMAGE, EDIT_CONTENT,LIKE_CONTENT, TOGGLE_BOOKMARK } from "./actions";

const initialState = {
  items: [],
  bookmarks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now(),
            type: "text",
            content: action.payload,
            color: "normal",
          },
        ],
      };
    case ADD_IMAGE:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now(),
            type: "image",
            content: action.payload,
            color: "normal",
          },
        ],
      };
      case LIKE_CONTENT:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, liked: !item.liked } : item
          ),
      };
    case TOGGLE_BOOKMARK:
      const isBookmarked = state.bookmarks.includes(action.payload);
      return {
        ...state,
        bookmarks: isBookmarked
          ? state.bookmarks.filter((id) => id !== action.payload)
          : [...state.bookmarks, action.payload],
      };

      case EDIT_CONTENT:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload.newItem } : item
          ),
        }
          case 'ADD_COMMENT':
            return {
              ...state,
              items: state.items.map((item) =>
                item.id === action.payload.id
                  ? {
                      ...item,
                      comments: [...(item.comments || []), action.payload.comment],
                    }
                  : item
              ),
        }
    default:
      return state;
  }
};

export default rootReducer;



// reducer.js
// const initialState = {
//   items: [],
//   bookmarks: [],
//   // other states
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_COMMENT':
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? {
//                 ...item,
//                 comments: [...(item.comments || []), action.payload.comment],
//               }
//             : item
//         ),
//       };
//     // other cases
//     default:
//       return state;
//   }
// };

// export default rootReducer;





// reducer.js

// import { ADD_TEXT, ADD_IMAGE, EDIT_TEXT, EDIT_IMAGE } from './actions';

// const initialState = {
//   text: '',
//   image: null,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TEXT:
//       return {
//         ...state,
//         text: action.payload,
//       };
//     case EDIT_TEXT:
//       return {
//         ...state,
//         text: action.payload,
//       };
//     case ADD_IMAGE:
//       return {
//         ...state,
//         image: action.payload,
//       };
//     case EDIT_IMAGE:
//       return {
//         ...state,
//         image: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
