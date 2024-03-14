import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myfiles from "./pages/Myfiles";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Assistant from "./pages/Assistant";
import Report from "./pages/Report";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index path="/" element={<Dashboard />} />
                    <Route index path="/myfile" element={<Myfiles />} />
                    <Route index path="/assistant" element={<Assistant />} />
                    <Route index path="/report" element={<Report />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
export default App;
