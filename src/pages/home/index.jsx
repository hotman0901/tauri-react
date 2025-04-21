import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Index() {
  const { t, i18n } = useTranslation();
  // 桌面 app 會拿不到 local storage
  const lng = i18n?.language || "en";

  return (
    <>
      <h1>{t("Welcome")} Tauri + React</h1>
      <Stack spacing={2} direction="row">
        <Button variant={lng === "en" ? "contained" : "outlined"} onClick={() => i18n.changeLanguage("en")}>
          EN
        </Button>
        <Button variant={lng === "zh" ? "contained" : "outlined"} onClick={() => i18n.changeLanguage("zh")}>
          ZH
        </Button>
      </Stack>

      <Link to="/promise">go tp promise</Link>
    </>
  );
}

export default Index;
