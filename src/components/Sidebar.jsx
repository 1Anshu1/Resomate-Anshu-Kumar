import { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profileImg.png";
const Sidebar = () => {
    const [select, setSelect] = useState(1);

    const handleSelect = (id) => {
        setSelect(id);
    };

    return (
        <div className=" relative bg-green-900 max-w-[300px] w-[30%] h-[100vh]">
            <h1 className="text-white text-center text-lg py-5">
                FinSight<span className="text-gray-400">AI</span>
            </h1>
            <div className="text-white px-5">
                <Link
                    to="/"
                    className={`flex items-center gap-2 px-5 py-1 my-5 rounded-md ${
                        select === 1 ? "bg-gray-400 bg-opacity-30" : ""
                    }`}
                    onClick={() => handleSelect(1)}
                >
                    <div className="w-5 h-5 border-2 border-green-300 rounded-full"></div>
                    <div className="opacity-70">Dashboard</div>
                </Link>
                <Link
                    to="/myfile"
                    className={`flex items-center gap-2 px-5 py-1 my-5 rounded-md ${
                        select === 2 ? "bg-gray-400 bg-opacity-30" : ""
                    }`}
                    onClick={() => handleSelect(2)}
                >
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                    <div className="opacity-70">My Files</div>
                </Link>
                <Link
                    to="/assistant"
                    className={`flex items-center gap-2 my-5 py-1 px-5 rounded-md ${
                        select === 3 ? "bg-gray-400 bg-opacity-30" : ""
                    }`}
                    onClick={() => handleSelect(3)}
                >
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                    <div className="opacity-70">AI assistant</div>
                </Link>
                <Link
                    to="/report"
                    className={`flex items-center gap-2 px-5 py-1 my-5 rounded-md ${
                        select === 4 ? "bg-gray-400 bg-opacity-30" : ""
                    }`}
                    onClick={() => handleSelect(4)}
                >
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                    <div className="opacity-70">My reports</div>
                </Link>
            </div>
            <div className="absolute bottom-5 left-4 flex items-center gap-2">
                <img src={profileImg} alt="" className="w-10 h-10 rounded-full bg-yellow-300" />
                <p className="text-white">Anshu Kumar</p>
            </div>
        </div>
    );
};
export default Sidebar;
