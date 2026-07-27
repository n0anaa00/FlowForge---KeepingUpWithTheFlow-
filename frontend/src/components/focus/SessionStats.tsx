import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

function SessionStats() {
  return (
    <Card>
      <CardContent>

        <Grid container spacing={3}>

          <Grid size={{ xs: 4 }}>
            <Typography
              color="text.secondary"
            >
              Focus Time
            </Typography>

            <Typography variant="h5">
              2h 41m
            </Typography>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Typography
              color="text.secondary"
            >
              Sessions
            </Typography>

            <Typography variant="h5">
              4
            </Typography>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Typography
              color="text.secondary"
            >
              XP
            </Typography>

            <Typography variant="h5">
              +240
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  );
}

export default SessionStats;