import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

function Chips() {
  const classes = useStyles();

  function handleClick() {
    <Chip
        background-color="primary"
      />
      
  }

  return (
    <div className={classes.root}>
        <Chip
        avatar={<Avatar>{<DoneIcon />}</Avatar>}
        label="ALL"
        onClick={handleClick}
        color=""
        className={classes.chip}
      />
    
      
    </div>
  );
}

export default Chips;
