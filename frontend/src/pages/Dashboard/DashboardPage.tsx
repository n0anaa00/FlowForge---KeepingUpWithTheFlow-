import {

    Typography,

    Box

} from "@mui/material";

import AppLayout from "../../components/layout/AppLayout";

import StatsGrid from "../../components/dashboard/StatsGrid";

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

                mb={4}

            >

                Ready to enter the flow?

            </Typography>

            <Box>

                <StatsGrid />

            </Box>

        </AppLayout>

    );

}

export default DashboardPage;