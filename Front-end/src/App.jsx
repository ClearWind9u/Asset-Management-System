// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
import OverView from "./components/OverView";
import Detail from "./components/Detail";
import DepreciationCal from "./components/DepreciationCal";
import History from "./components/History";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";
import AddAssetModal from "./components/AddAsset";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/add" element={<AddAssetModal isOpen={true} onClose={false} />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Navigate to="/home/overview" replace />} />
          <Route path="overview" element={<OverView />} />
          <Route path="history" element={<History />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="detail/calculation" element={<DepreciationCal />} />
        </Route>
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;