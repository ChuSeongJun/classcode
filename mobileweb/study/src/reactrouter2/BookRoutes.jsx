import { Routes, Route } from "react-router-dom";
import NewBook from "./NewBook";
import Book from "./Book";
import BookList from "./BookList";
import BookLayout from "./BookLayout";
import "./SecondRouter.css";
const BookRoutes = () => {
  return (
    <div className="content">
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </div>
  );
};
export default BookRoutes;
