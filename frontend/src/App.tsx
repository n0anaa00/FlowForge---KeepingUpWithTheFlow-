import { Typography } from "@mui/material";

import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <AppLayout>
      <Typography variant="h4">
        Welcome back, User
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Ready to enter the flow?
      </Typography>
    </AppLayout>
  );
}

export default App;