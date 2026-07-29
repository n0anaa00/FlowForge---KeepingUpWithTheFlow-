import Grid from "@mui/material/Grid";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import TimerIcon from "@mui/icons-material/Timer";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import StatCard from "./StatCard";
import { useFocus } from "../../context/FocusContext";

function StatsGrid() {




    const {

    todayMinutes,

    sessionsToday,

    xpEarned

} = useFocus();
    
    return (

        <Grid
            container
            spacing={3}
        >

            <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Focus Score"
                    value="92%"
                    subtitle="Excellent"
                    icon={<PsychologyIcon color="primary" />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Current Streak"
                    value="18"
                    subtitle="days"
                    icon={<LocalFireDepartmentIcon color="warning" />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Tasks Finished"
                    value="7"
                    subtitle="today"
                    icon={<TaskAltIcon color="success" />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Flow Time"
                    value="5h 12m"
                    subtitle="today"
                    icon={<TimerIcon color="secondary" />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Cognitive Load"
                    value="Low"
                    subtitle="Healthy"
                    icon={<TrendingDownIcon color="success" />}
                />
            </Grid>


             <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Minutes Today"
                    value={`${todayMinutes} min`}
                    icon={<TrendingDownIcon color="success" />}
                />
            </Grid>


             <Grid size={{ xs: 12, md: 6, lg: 2.4 }}>
                <StatCard
                    title="Sessions Today"
                    value={sessionsToday}
                    subtitle={`+${xpEarned} XP`}
                    icon={<TrendingDownIcon color="success" />}
                />
            </Grid>

            

        </Grid>

    );

}

export default StatsGrid;