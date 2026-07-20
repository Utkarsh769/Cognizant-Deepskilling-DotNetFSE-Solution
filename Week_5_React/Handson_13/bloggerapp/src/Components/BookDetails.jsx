function BookDetails() {
  const books = [
    {
      id: 1,
      name: "React Explained",
      author: "Zac Gordon",
      price: 550,
    },

    {
      id: 2,
      name: "Learning JavaScript",
      author: "Ethan Brown",
      price: 650,
    },

    {
      id: 3,
      name: "Node.js Design Patterns",
      author: "Mario Casciaro",
      price: 780,
    },
  ];

  return (
    <div>
      <h2>Book Details</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Book</th>

            <th>Author</th>

            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>

              <td>{book.author}</td>

              <td>₹ {book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookDetails;
