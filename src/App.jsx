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
import { RestrictedRoute } from "./routes_restriction/RestrictedRoute";
import { PrivateRoute } from "./routes_restriction/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<Login />} />} />
        <Route path="/registration" element={<RestrictedRoute redirectTo="/" component={<Registration />} />} />
        <Route path="/todos" element={<PrivateRoute redirectTo="/" component={<Todos />} />} />
        <Route path="/about" element={<PrivateRoute redirectTo="/" component={<About />} />} />
      </Route>
    </Routes>
  );
}

export default App;
