import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Offers from "./src/components/Offers";
import SignUp from "./src/components/SignUp";
import Cart from "./src/components/Cart";
import Help from "./src/components/Help";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";
const App = () => {
  return (
    <Provider store={appStore}>
      <div className="font-nunito">
        <Heading />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
