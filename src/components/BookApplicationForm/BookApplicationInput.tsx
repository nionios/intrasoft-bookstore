import SampleInfoInputs from "@/components/SampleInfoInputs/SampleInfoInputs";
import SubmitButton from "@/components/Buttons/SubmitButton/SubmitButton";
import PriceBox from "@/components/PriceBox/PriceBox";

export default function BookApplicationInput() {
    return (
        <>
            <SampleInfoInputs/>
            <div className="mt-3">
                <PriceBox price={123.213}/>
                <SubmitButton buttonText="Buy Now"/>
            </div>
        </>
    );
}
