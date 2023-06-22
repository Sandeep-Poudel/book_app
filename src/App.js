import { useEffect } from "react";
import useBookContext from "./hooks/useBookContext";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);



  return (
    <div className="app">
      <h1>Reading List:</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
