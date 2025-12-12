import { BrowserRouter, Route, Routes } from "react-router-dom";
import useSwitchPage from "./pages/UseSwitchPage";
import HomaPage from "./pages/HomePage";
import useDatePage from "./pages/UseDatePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={HomaPage} />

                    <Route path="snack1" Component={useSwitchPage} />
                    <Route path="snack2" Component={useDatePage} />
                    <Route path="snack3" />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
