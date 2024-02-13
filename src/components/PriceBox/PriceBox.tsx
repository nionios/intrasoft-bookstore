/**
 * A box with the price of the book.
 * @param props
 * @constructor
 */
export default function PriceBox(props: { price: number }) {
    const priceString: string = props.price.toString().split(".");
    const priceBeforeVATString: string = ((props.price * 0.76).toFixed(2)).toString().split(".");

    return (
        <>
            <div>
                Price
            </div>
            <div>
                <span className="text-4xl">{priceString[0]}</span>.<span className="text-lg">{priceString[1]}</span> €
                <span className="text-xs">
                    <span className="mx-2">
                        &nbsp;before VAT:&nbsp;
                    </span>
                    <span className="text-xl">{priceBeforeVATString[0]}</span>.<span className="text-md">{priceBeforeVATString[1]}</span> €
                </span>
            </div>
        </>
    );
}
