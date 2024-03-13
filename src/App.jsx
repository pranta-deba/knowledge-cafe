import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [read, setRead] = useState([]);

  const handleAddToBookmark = (blog) => {
    if (bookmarks.includes(blog)) {
      alert("Already Bookmark this blog.");
      return;
    }
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    if (read.includes(time)) {
      alert("Already read this blog.");
      return;
    }
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
    setReadingTime(readingTime + time);
    setRead([...read, time]);

  };

  return (
    <>
      <Header></Header>
      <div className="max-w-[1500px] w-[90%] mx-auto md:flex md:gap-6 mb-6">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
