import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import './App.scss';
import Dashboard from "./Dashboard";
import Footer from './Footer';
import Login from "./Login";
import News from "./News";
import NewsDetail from "./NewsDetail";
import NewsPresentation from "./NewsPresentation";
import Protected from "./Protected";
import Update from "./Update";


function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path='/news_detail/:id' element={<NewsDetail />}></Route>
        <Route path='/news_presentation' element={<NewsPresentation />}></Route>
        <Route path='/news_add' element={<Protected><Add /></Protected>}></Route>
        <Route path='/dashboard' element={<Protected><Dashboard /></Protected>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/update/:id' element={<Protected><Update /></Protected>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
