import ApplyButton from "@/components/Buttons/ApplyButton/ApplyButton";
import SampleInfoInputs from "@/components/SampleInfoInputs/SampleInfoInputs";

export default function JobApplicationInput () {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <input id="jobPostId"
                       name="id"
                       type="number"
                       autoComplete="number"
                       value={1}
                       hidden
                       readOnly={true}
                       required/>
                <label htmlFor="number"
                       className="block text-sm font-medium leading-6 text-gray-900">
                    Years of Experience*
                </label>
                <div className="mt-2">
                    <input id="yearsOfExperience"
                           name="yearsOfExperience"
                           type="number"
                           autoComplete="number"
                           placeholder="eg. 10"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <SampleInfoInputs/>
                <div className="text-sm">* Required Field</div>
            </div>
            <div className="mt-3">
                <ApplyButton buttonText="Send Application"/>
            </div>
        </div>
    );
}
