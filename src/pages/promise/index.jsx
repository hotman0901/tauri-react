/**
This page invokes an async Tauri function, which returns a Promise.
The goal is to demonstrate how to handle data promises, with loaders, Suspend, and Await
*/
import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";


/**
Page data loader
This function returns a Promise via DeferredData.  This enables the use of Suspend within the component
*/
export const promiseLoader = async () => {
  // let dataPromise = invoke("promise");
  // console.log("promiseLoader returned");
  return 123123;
};

const Fallback = () => {
  return (
    <>
      <div>fallback ...</div>
    </>
  );
};

const Resolved = ({ data }) => {
  return (
    <div>
      <div>{data}</div>
    </div>
  );
};

export default function Promise() {
  const dataPromise = useLoaderData(); // DeferredData returns an object with Promises
  console.log("🚀 ~ Promise ~ dataPromise:", dataPromise)
  console.log("Made it to Promise");

  // Demonstrate a typical pattern with a "fallback" and "resolved" path
  return (
      <Suspense fallback={<Fallback />}>
        <Await resolve={dataPromise.data} errorElement={<p>Error loading the data!</p>}>
          {(data) => <Resolved data={data} />}
        </Await>
      </Suspense>
  );
}
