import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [validate, setValidate] = useState(false);
  function updateValidate() {
    setValidate(true);
  }

  return (
    <BrowserRouter>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Login validated={updateValidate} />} />
            <Route path="/todo" element={<Todo validate={validate} />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
