import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Child from "@/components/Child";
import { useBearStore } from "@/store/count";

function Index() {
  const { t, i18n } = useTranslation();

  const count = useBearStore((state) => state.count);
  const increase = useBearStore((state) => state.increase);

  // 桌面 app 會拿不到 local storage
  const lng = i18n?.language || "en";

  return (
    <div>
      <h1>{t("Welcome")} Tauri + React</h1>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Button
          variant={lng === "en" ? "contained" : "outlined"}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </Button>
        <Button
          variant={lng === "zh" ? "contained" : "outlined"}
          onClick={() => i18n.changeLanguage("zh")}
        >
          ZH
        </Button>
      </Stack>

      <Stack
        spacing={2}
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Button z onClick={() => increase()}>
          Add Count
        </Button>
        <h4>count: {count}</h4>
      </Stack>

      <Link to="/promise" viewTransition>go tp promise</Link>
      <Child id={1} />
    </div>
  );
}

export default Index;
