import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require('../img/manik.png')}
              alt="avatar"
              className="avatar-img"
              style={{opacity: '0.90'}}
              />

            <div className="banner-text">
              <h1>Front End Developer</h1>

            <hr/>

          <p>HTML5/CSS3 | BOOTSTRAP | JQUERY | PHOTOSHOP | REACT | FIREBASE | FILMORA | LARAVEL  </p>

        <div className="social-links">

          {/* LinkedIn */}
            <i className="fa fa-linkedin-square" aria-hidden="true" />

          {/* Github */}
            <i className="fa fa-github-square" aria-hidden="true" />

          {/* Freecodecamp */}
            <i className="fa fa-free-code-camp" aria-hidden="true" />

          {/* Youtube */}
            <i className="fa fa-youtube-square" aria-hidden="true" />

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
