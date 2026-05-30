import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Heater.tsx";

import Home from "./containers/Home/Home.tsx";
import Projects from "./containers/Projects/Projects.tsx";
import Skills from "./containers/Skills/Skills.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </>
);

export default App;