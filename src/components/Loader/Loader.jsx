import React, { Component } from 'react';
import { Grid } from 'react-loader-spinner';



export class Loader extends Component {
  render() {
    return (
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
        }}
        wrapperClass="grid-wrapper"
      />
    );
  }
}