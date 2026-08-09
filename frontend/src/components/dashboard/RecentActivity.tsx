import {

Card,
CardContent,
List,
ListItem,
Typography

}
from "@mui/material";

import {
useAnalytics
}
from "../../context/AnalyticsContext";

function RecentActivity(){

const{
events
}=useAnalytics();

return(

<Card>

<CardContent>

<Typography
variant="h6"
mb={2}
>

Recent Activity

</Typography>

<List>

{events.map(event=>(

<ListItem
key={event.id}
>

{event.title}

&nbsp;

+{event.xp} XP

</ListItem>

))}

</List>

</CardContent>

</Card>

);

}

export default RecentActivity;