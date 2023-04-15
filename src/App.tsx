import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <BrowserRouter>
      <div className="App w-screen h-screen">
        <Navbar />
        <div className="mt-20 h-full">
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route index element={<Main />} />
              <Route path={`/watch`} element={<Video />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
