import {

    Card,
    CardContent,
    Grid,
    Typography

} from "@mui/material";

import { useFocus } from "../../context/FocusContext";

function SessionStats() {

    const {

        todayMinutes,

        sessionsToday,

        xpEarned

    } = useFocus();

    return (

        <Card>

            <CardContent>

                <Grid container spacing={3}>

                    <Grid size={{ xs: 4 }}>

                        <Typography color="text.secondary">

                            Focus Time

                        </Typography>

                        <Typography variant="h5">

                            {todayMinutes} min

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 4 }}>

                        <Typography color="text.secondary">

                            Sessions

                        </Typography>

                        <Typography variant="h5">

                            {sessionsToday}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 4 }}>

                        <Typography color="text.secondary">

                            XP

                        </Typography>

                        <Typography variant="h5">

                            {xpEarned}

                        </Typography>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

}

export default SessionStats;