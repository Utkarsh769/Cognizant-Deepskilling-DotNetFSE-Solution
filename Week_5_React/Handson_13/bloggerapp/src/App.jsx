import Header from "./Components/Header";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import "./App.css";

function App() {
  const showBooks = true;

  const showBlogs = true;

  const showCourses = true;

  let bookComponent;

  if (showBooks) {
    bookComponent = <BookDetails />;
  }

  return (
    <div className="container">
      <Header />

      {/* Method 1 - Element Variable */}

      {bookComponent}

      <hr />

      {/* Method 2 - Logical AND */}

      {showBlogs && <BlogDetails />}

      <hr />

      {/* Method 3 - Ternary */}

      {showCourses ? <CourseDetails /> : <h2>No Courses Available</h2>}
    </div>
  );
}

export default App;
