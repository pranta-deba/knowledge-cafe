import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 space-y-6">
      <div className="bg-[#6047EC1A] border-2 border-[#6047EC] rounded-lg text-center px-11 py-5">
        <p className="text-[#6047EC] text-2xl font-bold">
          Spent time on read : {readingTime} min
        </p>
      </div>
      <div className="bg-[#1111110D] p-7 rounded-lg space-y-4">
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        <div className="space-y-4">
          {bookmarks.map((books) => (
            <p
              key={books.id}
              className="bg-[#FFF] rounded-lg p-4 text-lg font-semibold"
            >
              {books.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
