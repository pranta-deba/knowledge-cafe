import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark , handleMarkAsRead}) => {
  const {
    id,
    cover,
    title,
    author_name,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4">
      <figure className="mb-8">
        <img src={cover} alt="" className="w-full max-h-[450px] rounded-lg" />
      </figure>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <figure className="w-[60px] h-[60px]">
            <img
              className="w-full h-full rounded-full"
              src={author_img}
              alt=""
            />
          </figure>
          <div>
            <h2 className="text-2xl font-bold">{author_name}</h2>
            <p className="text-[#11111199] text-base font-semibold">
              {posted_date}
            </p>
          </div>
        </div>
        <p className="text-[#11111199] text-xl font-medium flex items-center gap-2">
          {reading_time} min read{" "}
          <span
            onClick={() => handleAddToBookmark(blog)}
            className="cursor-pointer btn text-xl"
          >
            <FaBookmark></FaBookmark>
          </span>
        </p>
      </div>
      <h1 className="text-4xl font-bold leading-[50px]">{title}</h1>
      <div className="flex gap-3">
        {hashtags.map((hash, i) => (
          <p
            key={i}
            className="text-[#11111199] text-xl font-medium cursor-pointer hover:underline"
          >
            {hash}
          </p>
        ))}
      </div>
      <a onClick={()=> handleMarkAsRead(id, reading_time)} className="text-[#6047EC] text-xl font-semibold underline cursor-pointer block">
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
