import './App.scss';
import Banner from './Banner';
import Footer from './Footer';
import Main from './Main';
import Navigation from './Navigation';
import { Route, Routes } from "react-router-dom";
import Contact from './Contact';
import Skills from './Skills';
import AboutMe from './AboutMe';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about me' element={<AboutMe />}></Route>
        {/* <Route path='/news' element={<News />}></Route> */}
        <Route path='/skills' element={<Skills />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
