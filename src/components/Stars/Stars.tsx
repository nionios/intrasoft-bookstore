"use client";
import React, {useState} from "react";
import {Rating} from 'react-simple-star-rating'

export default function Stars(props: { rating: number, readonly: boolean }) {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }

    const handleReset = () => {
        // Set the initial value
        setRating(0)
    }

    // Optional callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
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

