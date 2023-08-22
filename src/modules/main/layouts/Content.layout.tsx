import { Box } from "@mui/material";
import TopBar from "./TopBar.layout";

export default function Content({ children }: React.PropsWithChildren) {
  return (
    <>
      <TopBar />
      <Box sx={{ py: 2 }}>{children}</Box>
      {/* <Footer /> */}
    </>
  );
}
