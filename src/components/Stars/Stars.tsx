"use client";
import React, {useState} from "react";
import {Rating} from 'react-simple-star-rating'

/**
 * A Widget that sets the rating of the book in question with react-simple-star-rating and places the result on a
 * hidden input. Can be reset with a button.
 * @param props
 * @param props.rating {number} The initial rating upon first render.
 * @param props.readonly {boolean} Flag to make star rating editable or not.
 * @constructor
 */
export default function Stars(props: { rating: number, readonly: boolean }) {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
    }

    const handleReset = () => {
        // Set the initial value
        setRating(0)
    }

    return (
        <>
            <input name="rating"
                   id="ratingInput"
                   value={rating} hidden/>
            <Rating
                onClick={handleRating}
                SVGclassName="inline-block"
                transition={true}
                allowFraction={true}
                initialValue={props.rating}
                readonly={props.readonly}
                /* Available Props */
            />
            {props.readonly ? null :
                <button className="px-5 ml-3 btn-animate rounded-full btn-red"
                        onClick={handleReset}>
                    Reset
                </button>
            }
        </>
    );
}

