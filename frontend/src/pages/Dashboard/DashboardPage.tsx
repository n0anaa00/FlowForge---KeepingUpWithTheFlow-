import {

    Typography,

    Box

} from "@mui/material";

import Grid from "@mui/material/Grid";

import AppLayout from "../../components/layout/AppLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";
import { useAuth } from "../../context/AuthContext";
import ProductivityChart from "../../components/dashboard/ProductivityChart";
import TaskList from "../../components/dashboard/TaskList";
import AchievementList from "../../components/dashboard/AchievementList";

function DashboardPage() {

    const { user } = useAuth();

    return (

        <AppLayout>

            <Typography variant="h4">

                Welcome back, {user?.name.split(" ")[0]}

            </Typography>

            <Typography

                color="text.secondary"

                mb={4}

            >

                Ready to enter the flow?

            </Typography>

            <Box>

                <StatsGrid />

            </Box>



            <Box mt={4}>

                <ProductivityChart />

                </Box>

                <Box mt={4}>

                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, md: 6 }}>
                    <TaskList />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                    <AchievementList />
                    </Grid>

                </Grid>

            </Box>

        </AppLayout>

    );

}

export default DashboardPage;