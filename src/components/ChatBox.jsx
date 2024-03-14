import { RxCountdownTimer } from "react-icons/rx";
import { GoArrowUp } from "react-icons/go";

const chatBox = () => {
    return (
        <div className="flex justify-center items-center h-[10vh] gap-2 bg-lime-950">
            <div className="w-[60%] h-10 bg-gray-400 flex items-center rounded-lg px-2 shadow-custom">
                <input
                    type="text"
                    placeholder="Message AI assistant"
                    className="bg-transparent w-full border-none outline-none placeholder-gray-800"
                />
                <GoArrowUp className="rounded-full bg-gray-500" />
            </div>
            <RxCountdownTimer className="rounded-full bg-lime-400 text-3xl p-2" />
        </div>
    );
};
export default chatBox;
