import { use } from "react";
import wait from "waait";

const fetchData = new Promise(async(resolve, reject) => {
  await wait(4000)
  reject({ name: 'benny'});
}).catch(() => {
  return ({error: "no new message found."});
});

export default function Albums() {
  const data = use(fetchData);
  if (data?.error) return data.error 
  return (
    <div>
      {data.name}
    </div>
  );
}
