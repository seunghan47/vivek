import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

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
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "service",
          element: <ServicePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
