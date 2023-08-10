import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Tables from "./components/Tables";
import Dashboard from "./components/Dashboard";
import Adminpage from "./components/Adminpage";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Adminpage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
