import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/RootLayout";
import Home from "./pages/Home";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: 1,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
