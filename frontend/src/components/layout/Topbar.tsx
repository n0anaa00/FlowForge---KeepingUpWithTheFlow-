import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { useAuth } from "../../context/AuthContext";

function TopBar() {
  const { user, logout } = useAuth();

  const initials = user?.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom:
          "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            Developer Dashboard
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Maintain focus. Build momentum.
          </Typography>
        </Box>

        <IconButton color="inherit">
          <NotificationsNoneIcon />
        </IconButton>

        <Avatar
          sx={{
            ml: 2,
            bgcolor: "primary.main",
            width: 36,
            height: 36,
          }}
        >
          {initials}
        </Avatar>

        <Tooltip title="Logout">
          <IconButton
            color="inherit"
            onClick={logout}
            sx={{ ml: 1 }}
          >
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;