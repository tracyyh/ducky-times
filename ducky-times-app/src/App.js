import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.tsx";
import Merch from "./pages/merch/merch.tsx";
import Signup from "./pages/signup/signup.tsx";
import Contact from "./pages/contact/contact.js";
import ContactThanks from "./pages/contact/contactThanks.js";
import Home from "./pages/home/home.tsx";
import SignupThanks from "./pages/signup/signupThanks.tsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupThanks" element={<SignupThanks />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='/contactThanks' element={<ContactThanks />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
