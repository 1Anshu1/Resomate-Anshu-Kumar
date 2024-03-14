import { useState } from "react";
import { GoEye } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";

const FileCard = ({ file, color }) => {
    const [preview, setPreview] = useState();
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    };

    return (
        <div className="rounded-lg bg-white bg-opacity-10 p-2 w-[350px] h-[300px]">
            <img src={preview} alt="" className="w-full h-[200px] rounded-lg" />
            <p className="text-white">{file.name}</p>
            <p className="text-white opacity-70">{new Date(file.lastModified).toLocaleDateString()}</p>
            <div className="flex justify-between">
                <button className={`${color} flex items-center gap-2 px-2 py-1 rounded-lg text-sm font-semibold`}>
                    <GoEye />
                    View dashboard
                </button>
                <div className="border-2 border-lime-400 self-center p-1">
                    <a href={preview} target="_blank">
                        <FiArrowRight className="text-lime-400 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default FileCard;
