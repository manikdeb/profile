import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';
class About extends Component {
  render() {
    return(
      <div>
        <Grid className="about-grid">
          <Cell col={6} style={{border: '1px solid orange'}}>
            <img src={require('../img/MDN.jpg')} alt="manik" style={{height: '600px', opacity: '0.97'}} />
          </Cell>
          <Cell col={6}>
              <Cell col={12} className="shapeAbout comok">
                <div style={{margin: '10px 10px', height: '200px'}}>
                  {/* <h4> Keep creative mind and have to be passionate </h4>
                  <h4> Keep creative mind and have to be passionate </h4>
                  <h4> Keep creative mind and have to be passionate </h4>
                  <h4> Keep creative mind and have to be passionate </h4> */}
                </div>
              </Cell>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default About;

