import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";

const Layout = ({ children }) => {
    return (
        <div className="flex w-[100vw]">
            <Sidebar />
            <div className="w-full">
                {children}
                <ChatBox />
            </div>
        </div>
    );
};
export default Layout;
