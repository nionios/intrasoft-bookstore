import BookBox from "@/components/BookBox/BookBox";
import {BookBoxType} from "@/types";

/**
 * Creates an array of BookBoxes and fills them with book info from input array.
 * @param books {Array}
 */
const populateBookBoxes = (books: Array<any>) => {
    const bookBoxes: Array<BookBoxType> = [];
    books.forEach(book => {
        bookBoxes.push(BookBox(book));
    });
    return bookBoxes;
}

export default populateBookBoxes;
