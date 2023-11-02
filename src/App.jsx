import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home";
import { Todos } from "./pages/Todos";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrent } from "./redux/user/authOperations";
import { About } from "./pages/About";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
