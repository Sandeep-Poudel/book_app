import { useContext } from "react";
import BooksContext from "../contexts/Books";

function useBookContext(){
    return(
        useContext(BooksContext)
    )
};
export default useBookContext;