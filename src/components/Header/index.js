import { Button, Typography, Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";

export default (props) => (
  <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Open Job Listing</Typography>
          <Button
            onClick={props.openNewJobModal}
            variant="contained"
            color="primary"
            disableElevation
          >
            Post a job
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
