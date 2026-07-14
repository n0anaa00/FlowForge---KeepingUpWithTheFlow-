import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function TopBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            Developer Dashboard
          </Typography>

          <Typography variant="body2" color="text.secondary">
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
          AA
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;