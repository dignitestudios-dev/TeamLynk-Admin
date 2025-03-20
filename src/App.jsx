import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </>
  );
}

export default App;
