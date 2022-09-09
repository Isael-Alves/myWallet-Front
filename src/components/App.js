import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import GlobalStyle from "../styles/globalStyles";
import CashFlow from "./recordsScreen/cashFlow";
import CashIn from "./recordsScreen/cashIn";
import CashOut from "./recordsScreen/cashOut";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="cashFlow" element={<CashFlow />} />
          <Route path="cashIn" element={<CashIn />} />
          <Route path="cashOut" element={<CashOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}