import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Index() {
  return (
    <>
      <h1>Welcome to Tauri + React</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Link to="/promise">go About</Link>
    </>
  );
}

export default Index;
