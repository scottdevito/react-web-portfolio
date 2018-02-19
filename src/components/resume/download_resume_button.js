import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: '#93b18f',
    color: '#fff',
  },
});

function DownloadResumeButton(props) {
  const { classes } = props;
  return (
    <Button variant="raised" className={classes.button}>
      Download Resume
    </Button>
  );
}

DownloadResumeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadResumeButton);
