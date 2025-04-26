import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Stock from "./challenges/1-trading-application/pages/Stock";
import Stocks from "./challenges/1-trading-application/pages/Stocks";
import "./App.css";

const Home = () => {
  return <Link to="/stocks">Stocks</Link>;
};

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "stocks",
      element: <Stocks />,
    },
    {
      path: "stocks/:id",
      element: <Stock />,
    },
  ];
  const route = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={route} />
      Hello world
    </div>
  );
}

export default App;
