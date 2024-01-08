import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// <div className="flex h-4/5 w-3/5 border-solid border-2 text-xl justify-center items-center">
//   <Category title={"Test1"} expenses={["2", 5, 3]} />
// </div>
