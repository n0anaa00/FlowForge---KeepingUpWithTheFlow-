import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TimerIcon from "@mui/icons-material/Timer";
import TaskIcon from "@mui/icons-material/Task";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const navigationItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Focus",
    icon: <TimerIcon />,
  },
  {
    label: "Tasks",
    icon: <TaskIcon />,
  },
  {
    label: "Achievements",
    icon: <EmojiEventsIcon />,
  },
  {
    label: "Analytics",
    icon: <AnalyticsIcon />,
  },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="primary">
          FlowForge
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Developer Flow Platform
        </Typography>
      </Box>

      <Divider />

      <List sx={{ px: 1 }}>
        {navigationItems.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{
              borderRadius: 2,
              mb: 0.5,

              "&:hover": {
                backgroundColor: "rgba(124, 92, 252, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: "text.secondary",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider />

      <List sx={{ px: 1 }}>
        <ListItemButton sx={{ borderRadius: 2 }}>
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: "text.secondary",
            }}
          >
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;