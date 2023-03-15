import Home from "./pages/home"
import CurrencyPage from "./pages/currencyPage";
import Exchanges from "./pages/Exchange";
import ExchangePage from "./pages/ExchangePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/exchanges" element={<Exchanges/>}></Route>
                <Route path="/assets/:id" element={<CurrencyPage/>}></Route>
                <Route path="/exchanges/:id" element={<ExchangePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}