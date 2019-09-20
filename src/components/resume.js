import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'left'}}>
              <img src={require('../img/manik.png')} alt="manik" style={{height: '250px', width: '250px'}} />
            </div>

            <h2 style={{paddingTop: '2em'}}>Manik Deb Nath</h2>
            <h4 style={{color: 'grey'}}>Front-End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{textAlign: 'justify'}}>To join a company that offers me a stable and positive atmosphere and inspires me to enhance and to learn new technologies and implement them, therefore to innovate the work culture for the betterment of all parties concerned.   </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>264/1 Shaon Palace</p>
            <p>8/A, West Dhanmondi, Dhaka.</p>

            <h5>Phone</h5>
            <p>+880 1682 280434</p>
            <h5>Email</h5>
            <p>manikdeb012@gmail.com</p>
            <h5>Web</h5>
            <p>https://manikdeb.github.io/portfolio/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2017}
              schoolName="United International University"
              schoolDescription="Bachelor of Computer Science and Engineering (CSE)"
               />

               <Education
                 startYear={2007}
                 endYear={2011}
                 schoolName="Feni Computer Institute (Govt.)"
                 schoolDescription="Diploma in Computer Science and  Technology (CST)"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Bdeducation, United Trust, Gulshan-1, Dhaka."
              jobresponsibility="Working a school management project and making classwise content easier & user friendly."
              jobDescription="PSD to HTML5, Jquery problems, CSS3, Bootstrap, Photoshop, Filmora for animation and Microsoft office programs. Building React web app and worked as an IT trainer."
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML5"
                progress={95}
              />
              <Skills
                skill="CSS3"
                progress={90}
              />
              <Skills
                skill="BOOTSTRAP"
                progress={95}
              />
              <Skills
                skill="PHOTOSHOP"
                progress={85}
              />
              <Skills
                skill="JQUERY"
                progress={70}
              />
              <Skills
                skill="REACT"
                progress={80}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
