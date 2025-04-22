import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet, useNavigation } from "react-router-dom";

import About from "@/pages/about";
// import CssBaseline from '@mui/material/CssBaseline';
import Home from "@/pages/home";
import Promise from "@/pages/promise";
import theme from "@/theme";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <ThemeProvider theme={theme}>
      {navigation.state === "loading" ? <h1>Loading..</h1> : <Outlet />}
      {/* <CssBaseline /> */}
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      {
        path: "promise",
        element: <Promise />,
      },
    ],
  },
]);

export default function Index() {
  return <RouterProvider router={router} />;
}
