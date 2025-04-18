/**
This page invokes an async Tauri function, which returns a Promise.
The goal is to demonstrate how to handle data promises, with loaders, Suspend, and Await
*/
import wait from "waait";

import { Suspense, lazy } from "react";
import { useLoaderData, Await } from "react-router";
const Albums = lazy(async () => {
  return import("@/components/albums")
});

const Fallback = () => {
  return (
    <>
      <div>fallback ...</div>
    </>
  );
};

export default function Promise() {
  return (
    <Suspense fallback={<Fallback />}>
      <Albums />
    </Suspense>
  );
}
