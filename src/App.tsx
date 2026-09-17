import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Home from "./containers/Home/Home.tsx";
import Projects from "./containers/Projects/Projects.tsx";
import Skills from "./containers/Skills/Skills.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";
import './App.css'

const App = () => (
  <>
    <div className='app'>
    <Header />
      <main className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </>
);

export default App;