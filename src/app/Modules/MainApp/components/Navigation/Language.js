import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import deepOrange from '@material-ui/core/colors/deepOrange';
import "../componentsStyle/componentsStyle.css";
import DoneIcon from '@material-ui/icons/Done';
import red from '@material-ui/core/colors/red';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    display: 'flex',
    margin: 10,
  },

}));

function Chips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    
  }

  return (
    <div className={classes.root}>
      <Chip
      style={{ float: 'left'}}
        avatar={<Avatar tabIndex={-1} className={classes.avatar}>{<DoneIcon/>}</Avatar>}
        label="ALL"
        tabIndex={0}
        onClick={handleClick}
        className={classes.chip}  
      />
      <Chip
      tabIndex={-1}
      style={{ float: 'left'}}
        avatar={<Avatar tabIndex={-1} className={classes.avatar}>{<DoneIcon/>}</Avatar>}
        label="English"
        onClick={handleClick}
        className={classes.chip}  
      />
      <Chip
      tabIndex={-1}
      style={{ float: 'left'}}
        avatar={<Avatar tabIndex={-1} className={classes.avatar}>{<DoneIcon/>}</Avatar>}
        label="Hindhi"
        onClick={handleClick}
        className={classes.chip}  
      />
      <Chip
      tabIndex={-1}
      style={{ float: 'left'}}
        avatar={<Avatar tabIndex={-1} className={classes.avatar}>{<DoneIcon/>}</Avatar>}
        label="Telugu"
        onClick={handleClick}
        className={classes.chip}  
      />
      <Chip
      tabIndex={-1}
      style={{ float: 'left'}}
        avatar={<Avatar tabIndex={-1} className={classes.avatar}>{<DoneIcon/>}</Avatar>}
        label="kannada"
        onClick={handleClick}
        className={classes.chip}  
      />
      <Chip
      tabIndex={-1}
      style={{ float: 'left'}}
        avatar={<Avatar tabIndex={-1} className={classes.avatar}>{<DoneIcon/>}</Avatar>}
        label="Marati"
        onClick={handleClick}
        className={classes.chip}  
      />
    </div>  
  );
}

export default Chips;
