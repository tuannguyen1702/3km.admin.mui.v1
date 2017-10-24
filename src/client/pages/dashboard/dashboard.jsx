import React, { createElement, Component } from "react";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { GridList, GridTile } from 'material-ui/GridList';
// import UserReport from 'material-ui/svg-icons/av/equalizer';
// import Person from 'material-ui/svg-icons/social/person';
// import Item from 'material-ui/svg-icons/av/art-track';
// import Category from 'material-ui/svg-icons/action/list';
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// const styles = {
//   card1: { borderLeft: 'solid 4px #31708f', flex: '1', marginRight: '1em' },
//   icon1: { float: 'right', width: 64, height: 64, padding: 16, color: '#31708f' },
//   card2: { borderLeft: 'solid 4px #ff9800', flex: '1', marginRight: '1em' },
//   icon2: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff9800' },
//   card3: { borderLeft: 'solid 4px #4caf50', flex: '1', marginRight: '1em' },
//   icon3: { float: 'right', width: 64, height: 64, padding: 16, color: '#4caf50' },
//   card4: { borderLeft: 'solid 4px #f44336', flex: '1', marginRight: '1em' },
//   icon4: { float: 'right', width: 64, height: 64, padding: 16, color: '#f44336' },
//   card5: { borderLeft: 'solid 4px #f44336', flex: '1', marginRight: '1em' },
//   icon5: { float: 'right', width: 64, height: 64, padding: 16, color: '#f44336' },
// };

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

export default () =>
  <div><h5>Dashboard</h5>
    {/* <MuiThemeProvider>

      <GridList cellHeight={120} coxl={3}>
        <Card style={styles.card1}>
          <Category style={styles.icon1} />
          <CardTitle title={"85"} subtitle={"Categories"} />
        </Card>
        <Card style={styles.card2}>
          <Person style={styles.icon2} />
          <CardTitle title={"1732"} subtitle={"Users"} />
        </Card>
        <Card style={styles.card3}>
          <Item style={styles.icon3} />
          <CardTitle title={"997"} subtitle={"Items"} />
        </Card>
        <Card style={styles.card4}>
          <UserReport style={styles.icon4} />
          <CardTitle title={"5"} subtitle={"Product Reports"} />
        </Card>
        <Card style={styles.card4}>
          <UserReport style={styles.icon4} />
          <CardTitle title={"55"} subtitle={"User Reports"} />
        </Card>


      </GridList>



    </MuiThemeProvider> */}
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card className={styles.card}>
          <CardContent>
            <Typography type="headline" component="h1">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
          </Button>
            <Button dense color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card className={styles.card}>
          <CardContent>
            <Typography type="headline" component="h1">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
          </Button>
            <Button dense color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card className={styles.card}>
          <CardContent>
            <Typography type="headline" component="h1">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
          </Button>
            <Button dense color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card className={styles.card}>
          <CardContent>
            <Typography type="headline" component="h1">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
          </Button>
            <Button dense color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card className={styles.card}>
          <CardContent>
            <Typography type="headline" component="h1">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
          </Button>
            <Button dense color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>

  </div>
