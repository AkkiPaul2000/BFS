import "./App.css";
import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Content() {
  var pic = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuT4lKOE9f13AfGP9r9KL69Wx3jh5AzI75-Ctu8wm-p6uUFFmqYuaBDmQat5bhZuKqUOI&usqp=CAU",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3KI29zxUtOHHuOplEiGtgN8l8PW_dxKhkU0AXTCPbc8JqB5q1-GQpAxlTINDLdjBZC4&usqp=CAU",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Item>
            <Carousel>
              {pic.map((item, i) => (
                <Box m={2} pt={3}>
                  {/* <h2>{item.name}</h2>
                  <p>{item.description}</p> */}

                  <img src={item.image} alt="yoo" height={450} width={600} />
                  {/* <Button className="CheckButton">Check it out!</Button> */}
                </Box>
              ))}
            </Carousel>
          </Item>
        </Grid>
        <Grid container spacing={2} xs={5}>
          <Grid item className="button-header" xs={12}>
            <Typography variant="h5" gutterBottom>
              Our Services
            </Typography>
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined">
              <Item>Taking half size</Item>
            </Button>
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined" size="large">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined" size="large">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined" size="large">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined" size="large">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined" size="large">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
          <Grid item xs={6} className="button-item">
            <Button variant="outlined" size="large">
              <Item>Taking half size</Item>
            </Button>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Content;
