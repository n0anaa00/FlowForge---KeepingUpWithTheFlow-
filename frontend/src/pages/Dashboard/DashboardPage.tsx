import { Typography } from "@mui/material";

import AppLayout from "../../components/layout/AppLayout";
import { useAuth } from "../../context/AuthContext";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <AppLayout>
      <Typography variant="h4">
        Welcome back, {user?.name.split(" ")[0]}
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

export default DashboardPage;