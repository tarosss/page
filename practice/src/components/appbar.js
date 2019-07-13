import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import H from './horizontal.js'
import Baseball from '../pages/baseball.js'

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
    justifyContent:'space-around',
    pudding:'70'

  }
}));

export default function SimpleTabs({tab1, tab2 , tab3}, props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value}
        onChange={handleChange}
        className={classes.tabs}>
          <Tab label={tab1} />
          <Tab label={tab2} />
          <Tab label={tab3} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Baseball/></TabContainer>}
      {value === 1 && <TabContainer><H/></TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
  );
}
