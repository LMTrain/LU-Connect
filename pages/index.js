import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Router from "next/router";

import PostFeed from "../components/index/PostFeed";
import UserFeed from "../components/index/UserFeed";
import withStyles from "@material-ui/core/styles/withStyles";
import { authInitialProps } from "../lib/auth";

const Index = ({ classes, auth }) => (
  <main className={classes.root}>
    {auth.user && auth.user._id ? (
      // Auth User Page
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <PostFeed auth={auth} />
        </Grid>
        <Grid item className={classes.drawerContainer}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper
            }}>
            <UserFeed auth={auth} />
          </Drawer>
        </Grid>
      </Grid>
    ) : (
      // Splash Page (UnAuth Page)
      <Grid
        justify="center"
        alignItems="center"
        direction="row"
        container
        className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom>
          Let's Unite,
          Collaborate, and
          Share ideas.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          component="p">
          We as a people need to unite as one, 
          be each others keeper, and uphold the truth.
         
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            <Button
              className={classes.fabButton}
              variant="extendedFab"
              color="primary"
              onClick={() => Router.push("/signup")}>
              Get Started
            </Button>
          </Typography>
        </Typography>
        <Button
          className={classes.fabButton}
          variant="extendedFab"
            color="primary"
            onClick={() => Router.push("/signup")}>
          <img className={classes.image} src="/static/images/lu1.jpg" />
        </Button>
      </Grid>
    )}
    <footer style={{textAlign: 'center'}}>
      <span>&copy; LM Systems LLC {new Date().getFullYear()}</span>
    </footer>
  </main>
);

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit * 5
    }
  },
  progressContainer: {
    height: "80vh"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.light
  },
  drawerContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  drawer: {
    width: 350
  },
  drawerPaper: {
    marginTop: 70,
    width: 350
  },
  fabButton: {
    margin: theme.spacing.unit * -3
  },
  heroContent: {
    maxWidth: 600,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 6,
    margin: "0 auto"
  }
});

Index.getInitialProps = authInitialProps();

export default withStyles(styles)(Index);
