import BookBox from "@/components/BookBox/BookBox";
import {Book, BookBoxType} from "@/types";

/**
 * Creates an array of BookBoxes and fills them with book info from input array.
 * @param books {Array}
 */
const populateBookBoxes = (books: Array<Book>) => {
    const bookBoxes: Array<BookBoxType> = [];
    books.forEach(book => {
        bookBoxes.push(BookBox({inputBook : book}));
    });
    return bookBoxes;
}

export default populateBookBoxes;
