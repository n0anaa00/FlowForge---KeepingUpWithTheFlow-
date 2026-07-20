import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

import type { ReactNode } from "react";

interface StatCardProps {

    title: string;

    value: string | number;

    subtitle?: string;

    icon: ReactNode;
}

function StatCard({

    title,

    value,

    subtitle,

    icon

}: StatCardProps) {

    return (

        <Card>

            <CardContent>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            mt={1}
                        >
                            {value}
                        </Typography>

                        {subtitle && (

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mt={1}
                            >
                                {subtitle}
                            </Typography>

                        )}

                    </Box>

                    {icon}

                </Box>

            </CardContent>

        </Card>

    );

}

export default StatCard;