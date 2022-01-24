import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Cards = (props) => {
  const [count, setCount] = React.useState(1);
  const click1 = () => {
    setCount(count + 1);
  };
  const click2 = () => {
    setCount(Math.max(count - 1, 1));
  };
  console.log(count);
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
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={props.object.image}
          alt="green iguana"
        />
        <Button
          onClick={() => props.addItem(props.object, count)}
          variant="contained"
        >
          add to cart
        </Button>
        <p>არჩეულია {count} ცალი</p>
        <Button onClick={click1} variant="contained">
          +
        </Button>

        <Button onClick={click2} variant="contained">
          -
        </Button>
      </Card>
    </Box>
  );
};
export default Cards;
