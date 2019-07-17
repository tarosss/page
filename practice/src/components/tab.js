import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Baseball from '../Pages/baseball.js'
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    display:'flex',
    justifyContent:'center'
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} className={classes.tabs}>
          <Tab label="プロ野球" />
          <Tab label='艦これ' />
          <Tab label="プログラミング" />


        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>{props.tab1}</TabContainer>}
      {value === 1 && <TabContainer></TabContainer>}
      {value === 2 && <TabContainer></TabContainer>}
    </div>
  );
}
