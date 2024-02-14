import SampleInfoInputs from "@/components/SampleInfoInputs/SampleInfoInputs";
import SubmitButton from "@/components/Buttons/SubmitButton/SubmitButton";
import PriceBox from "@/components/PriceBox/PriceBox";

/**
 * Book buy application with sample inputs
 * @param props
 * @constructor
 */
export default function BookBuyApplicationInput(props: {price: number}) {
    return (
        <>
            <SampleInfoInputs/>
            <div className="mt-3">
                <PriceBox price={props.price}/>
                <SubmitButton buttonText="Buy Now"/>
            </div>
        </>
    );
}
