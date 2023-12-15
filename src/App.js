import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import General from "./Pages/General";
import Footer from "./Components/Footer";

function App() {
  const pageSize=9;
  return (
    <div
      style={{
        fontFamily: "monospace",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          {/* defining the pageSize , category and the key from the the api req parameters.. */}
          <Route
            path="/general"
            element={<General key={"general"} pageSize={pageSize} category="general" />}
          />
          <Route
            path="/science"
            element={<General key={"science"} pageSize={pageSize} category="science" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
