/**
 * User information object that contains all the personal info of user returned from endpoint.
 */
export type UserInfo = {
    userLastName: string | undefined,
    userEmail: string | undefined,
    userFirstName: string | undefined,
}

/** Type of Book */
export type Book = {
    isbn: string,
    title: string,
    subtitle: string,
    author: string,
    published: string,
    publisher: string,
    pages: number,
    description: string,
    website: string,
    price: number,
    rating: number
}

/**
 * The type of the BookBoxes
 */
export type BookBoxType = {
    props: {
        isbn: string,
        title: string,
        subtitle: string,
        author: string,
        published: string,
        publisher: string,
        pages: number,
        description: string,
        website: string,
        price: number,
        rating: number
    }
}

/*
 * This is different from BookBoxType only because in the future its attributes may change.
 * If they do, the attributes may change here without too much refactoring.
 */
export type BookBoxDetailedType = BookBoxType;
