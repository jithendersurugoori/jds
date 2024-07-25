
import React from "react";
import { useSelector } from "react-redux";

const BookmarkList = () => {
  const items = useSelector((state) => state.items);
  const bookmarks = useSelector((state) => state.bookmarks);

  const bookmarkedItems = items.filter((item) => bookmarks.includes(item.id));

  return (
    <div className="bookmark-list">
      {bookmarkedItems.map((item) => (
        <div key={item.id} className="item">
          {item.type === "text" && <p>{item.content}</p>}
          {item.type === "image" && <img src={item.content} alt="bookmarked" />}
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
