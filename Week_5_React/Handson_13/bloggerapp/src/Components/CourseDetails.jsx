function CourseDetails() {
  const courses = [
    {
      id: 1,
      course: "React",
      duration: "2 Months",
    },

    {
      id: 2,
      course: "Angular",
      duration: "3 Months",
    },

    {
      id: 3,
      course: "Node.js",
      duration: "2 Months",
    },
  ];

  return (
    <div>
      <h2>Course Details</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.course}

            {" - "}

            {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
