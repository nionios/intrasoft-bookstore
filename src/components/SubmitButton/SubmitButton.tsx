"use client";
export default function SubmitButton(props: {buttonText: string, reqBody: any}) {
    const submitFunction = () => {
        fetch('/api/talk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.reqBody,
        })
    };

    return (
        <>
            <button onClick={submitFunction}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {props.buttonText}
            </button>
        </>
    );
}
