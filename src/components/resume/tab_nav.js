import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class TabNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="#5d5d5d"
          textColor="inherit"
          centered
        >
          <Tab label="Full" />
          <Tab label="Skills" />
          <Tab label="Experience" />
          <Tab label="Education" />
        </Tabs>
      </Paper>
    );
  }
}

TabNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabNav);
