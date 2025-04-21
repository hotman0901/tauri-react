import { usePromise } from "@mittwald/react-use-promise";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import wait from "waait";

const fetchData = async (id) => {
  await wait(3000);
  return { name: "benny-" + id };
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
};

function Item({ id }) {
  const news = usePromise(fetchData, [id], {
    // ✨ Use the async loader 👆 function with its ID-parameter
    tags: [`news/${id}`],
    // Use tags 🏷️ with support for "tree structures" 🌳
  });
  return <p>Here is the message: {news?.name}</p>;
}

const Fallback = () => {
  return (
    <>
      <div>fallback ...</div>
    </>
  );
};

export default function Promise() {
  return (
    <div>
      <Link to="/">go Home</Link>
      <Suspense
        fallback={
          <Stack spacing={1}>
            <Skeleton variant="circular" width={40} height={40} />
          </Stack>
        }
      >
        <Item id={1} />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Item id={2} />
      </Suspense>
      <Suspense
        fallback={
          <Stack spacing={1}>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "1rem", bgcolor: "grey.500" }}
            />
          </Stack>
        }
      >
        <Item id={new Date() / 1} />
      </Suspense>
    </div>
  );
}
