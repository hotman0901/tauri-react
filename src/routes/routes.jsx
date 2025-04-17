import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import Home from "@/pages/home";
import About from "@/pages/about";
import Promise from "@/pages/promise";
import wait from "waait";
import { useLoaderData, Await } from "react-router-dom";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" ? <h1>Loading..</h1> : <Outlet />}
    </div>
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
        loader: async () => {
          await wait(2000);
          return { name: "benny" };
        },
        element: <Test />,
      },
    ],
  },
]);

function Test() {
  const { name } = useLoaderData();
  return (
    <Suspense fallback={<div>loading</div>}>
      <Await resolve={name} errorElement={<p>Error loading the data!</p>}>
        {(data) => {
          return data;
        }}
      </Await>
    </Suspense>
  );
}

export default function Index() {
  return <RouterProvider router={router} />;
}
