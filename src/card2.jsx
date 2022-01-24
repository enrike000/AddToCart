import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Cards2 = (props) => {
  return (
    <Box display="inline-block">
      <Card sx={{ maxWidth: 300, minWidth: 300, minHeight: 500, ml: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.object.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price = {props.object.price}
          </Typography>
          <Typography>raodenoba - {props.object.raodenoba}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={props.object.image}
          alt="green iguana"
        />
        <Button
          onClick={() => props.remove(props.object.id)}
          variant="contained"
        >
          remove
        </Button>
      </Card>
    </Box>
  );
};
export default Cards2;
