import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { weeklyFocus } from "../../mock/dashboardData";

function ProductivityChart() {
  return (
    <Card sx={{ height: 360 }}>
      <CardContent>

        <Typography variant="h6" mb={2}>
          Weekly Focus Time
        </Typography>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={weeklyFocus}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="hours"
              stroke="#7C5CFC"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
}

export default ProductivityChart;