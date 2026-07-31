import Grid from "@mui/material/Grid";

import AppLayout from "../../components/layout/AppLayout";
import PlayerLevelCard from "../../components/gamification/PlayerLevelCard";
import AchievementGrid from "../../components/gamification/AchievementGrid";
import DailyQuestCard from "../../components/gamification/DailyQuestCard";

function AchievementsPage() {
  return (
    <AppLayout>
      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 4 }}>
          <PlayerLevelCard />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AchievementGrid />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <DailyQuestCard />
        </Grid>

      </Grid>
    </AppLayout>
  );
}

export default AchievementsPage;