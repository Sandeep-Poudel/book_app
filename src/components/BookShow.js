import { useState} from "react";
import BookEdit from './BookEdit'
import useBookContext from "../hooks/useBookContext";


function BookShow({book}){
    
    const [showEdit,setShowEdit]=useState(false)
    const {deleteBookById}=useBookContext();

    const handleDeleteClick = ()=>{
        deleteBookById(book.id);
    }
    const handleEditClick= () =>{
        setShowEdit(!showEdit)
    }

    const handleSubmit = ()=>{
        setShowEdit(false);
    }

    return(<div className="book-show">
        <img 
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            alt="books"
        />
        <div>
            {showEdit?<BookEdit onSubmit={handleSubmit} book={book}/>:<h3>{book.title}</h3>}
        </div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>

        </div>
        </div>
        )

}
export default BookShow;