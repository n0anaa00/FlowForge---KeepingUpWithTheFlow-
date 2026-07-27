import {
  Box,
  Typography,
} from "@mui/material";

import AppLayout from "../../components/layout/AppLayout";
import FocusTimer from "../../components/focus/FocusTimer";
import SessionStats from "../../components/focus/SessionStats";

function FocusPage() {
  return (
    <AppLayout>

      <Typography
        variant="h4"
        mb={4}
      >
        Focus Mode
      </Typography>

      <FocusTimer />

      <Box mt={4}>
        <SessionStats />
      </Box>

    </AppLayout>
  );
}

export default FocusPage;