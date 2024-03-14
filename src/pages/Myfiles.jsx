import { useRef, useState } from "react";
import fileImg from "../assets/fileImg.jpg";
import FileCard from "../components/FileCard";

const Myfiles = () => {
    const [doc, setDoc] = useState([]);
    const inputFileRef = useRef();

    const handleFile = () => {
        inputFileRef.current.click();
    };

    const handleFileChange = (e) => {
        setDoc([...doc, e.target.files[0]]);
    };

    return (
        <div className="w-full">
            <div className="bg-[#101f1d]  px-10 py-5 h-[90vh] overflow-scroll overflow-x-hidden">
                <h1 className="text-white text-2xl mb-5">My Files</h1>
                <div className="flex flex-wrap gap-10">
                    <div className="w-[350px] h-[300px] border-2 border-dashed border-white flex flex-col items-center justify-center gap-10 rounded-lg">
                        <img src={fileImg} alt="" className="w-10 h-10 " />
                        <h2 className="text-white">Drag and Drop</h2>
                        <p className="text-white opacity-70">Upload images or documents</p>
                        <input ref={inputFileRef} type="file" className="hidden" onChange={handleFileChange} />
                        <button
                            className="bg-lime-400 rounded-lg px-5"
                            onClick={handleFile}
                            onDragEnter={handleFileChange}
                        >
                            Browse files
                        </button>
                    </div>

                    {doc?.map((item, idx) =>
                        idx === doc.length - 1 ? (
                            <FileCard key={idx} file={item} color={"text-black bg-lime-400"} />
                        ) : (
                            <FileCard key={idx} file={item} color={"text-white bg-black"} />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
export default Myfiles;
