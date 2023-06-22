import { useState} from "react";
import useBookContext from "../hooks/useBookContext";


function BookCreate(){
    const [title,setTitle]=useState('');
    const {createBook} = useBookContext();


    const handleChange= (e)=>{
        setTitle(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title.trim().length !== 0){
            createBook(title);
        };
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a book:</h3>
            <form onSubmit={handleSubmit}>

                <label>Title:</label>
                <input  className="input" value={title} onChange={handleChange}/>
                <button className="button" type="submit">Create!</button>
            </form>
           
           
        </div>
    )
}
export default BookCreate;