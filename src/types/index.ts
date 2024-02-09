/**
 * User information object that contains all the personal info of user returned from endpoint.
 */
export type UserInfo = {
    userLastName: string | undefined,
    userEmail: string | undefined,
    userFirstName: string | undefined,
}

/**
 * The type of the BookBoxes
 */
export type BookBoxType = {
    props: {
        id: number;
        companyName: string;
        address: string;
        createdAt: number;
        validUntil: number;
        title: string;
        description: string;
    }
}

/*
 * This is different from BookBoxType only because in the future its attributes may change.
 * If they do, the attributes may change here without too much refactoring.
 */
export type BookBoxDetailedType = BookBoxType;
