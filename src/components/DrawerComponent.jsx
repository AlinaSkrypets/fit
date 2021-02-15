import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "@material-ui/icons/Dashboard";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import { exercisesActions } from "../store/actions";
import { exercisesActionTypes } from "../store/actionTypes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer({ exerciseList, window, addExercise }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [exerciseItem, setExerciseItem] = useState({
    exerciseName: "",
    exerciseMeasurement: "kilograms",
  });
  /*create exercises list in local storage*/
  // localStorage.setItem('exercisesList', JSON.stringify([]));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          "Dashboard",
          "New Exercise",
          "Edit Exercises",
          "New Workout",
          "Edit Workout",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <Dashboard /> : <ReceiptIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //add "exerciseMeasurement" fieled to exerciseItem object(is state) when user selects exercise Measurement
  const exerciseMeasurementTypeHandler = (event) => {
    setExerciseItem({
      ...exerciseItem,
      exerciseMeasurement: event.target.value,
    });
  };

  //add "exerciseName" fieled to exerciseItem object(is state) when user enters exercise Name in input
  const exerciseNameHandler = (event) => {
    setExerciseItem({ ...exerciseItem, exerciseName: event.target.value });
  };

  /*create new Exercise by click on "create Exercise" button
  And push new exercise to Exercises list(array) with all created exercises(objects) in localstorage*/
  const createExerciseBtnHandler = () => {
    /*create fullExerciseItem: add ID field to exerciseItem*/
    const fullExerciseItem = { id: Date.now(), ...exerciseItem };
    /*get Exercises List from local storage in variable "newLocalStorageExercisesList"
     and push new Exercise to newLocalStorageExercisesList */
    const newLocalStorageExercisesList =
      JSON.parse(localStorage.getItem("exercisesList")) || [];
    newLocalStorageExercisesList.push(fullExerciseItem);
    localStorage.setItem(
      "exercisesList",
      JSON.stringify(newLocalStorageExercisesList)
    );
    console.log(newLocalStorageExercisesList);

    // exerciseList.dispatch(exercisesActions.addExercise);
  };

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <Card>
          <CardHeader>card header111 </CardHeader>
          <CardContent>
            <TextField onChange={exerciseNameHandler} label="Exercise name" />
            <div>
              <Select
                value={exerciseItem.exerciseMeasurement}
                onChange={exerciseMeasurementTypeHandler}
              >
                <MenuItem value="kilograms">kilograms</MenuItem>
                <MenuItem value="minutes">minutes</MenuItem>
                <MenuItem value="kilometers">kilometers</MenuItem>
              </Select>
            </div>
          </CardContent>
          <CardActions>
            <Button
              onClick={createExerciseBtnHandler}
              color="primary"
              variant="contained"
            >
              Create Exercise
            </Button>
          </CardActions>
        </Card>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  const { exerciseList, loading } = state.exercises;
  return { exerciseList, loading };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: (payload) =>
      dispatch({ type: exercisesActionTypes.ADD_EXERCISE, payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
