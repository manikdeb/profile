import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <Grid className="about-grid">
          <Cell col={6}>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464) center / cover'}} >Sea</CardTitle>
                <CardText >
                  A simple psd to html practices. Using html5, css3 , jquery. 
                  Created date: October, 2018
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='https://softminister.netlify.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>

          <Cell col={6}>
            {/* Project 4 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464) center / cover'}} >Hill</CardTitle>
              <CardText >
                A simple psd to html practices. Using html5, css3 , jquery. 
                Created date: December, 2018
              </CardText>
              <CardActions border>
                <Button colored className="demoLink" ><a href='https://tripcast.netlify.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={6}>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464) center / cover'}} >WhiteIceland</CardTitle>
              <CardText >
                A simple psd to html practices. Using html5, css3 , jquery. 
                Created date: May, 2018
              </CardText>
              <CardActions border>
                <Button colored className="demoLink" ><a href='https://manikdeb.github.io/whiteiceland/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={6}>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464) center / cover'}} >SkyFly</CardTitle>
              <CardText >
                A simple psd to html practices. Using html5, css3 , jquery. 
                Created date: February, 2018
              </CardText>
              <CardActions border>
                <Button colored className="demoLink"><a href='https://manikdeb.github.io/skyFly/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          
        </Grid>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <Grid className="about-grid">
          <Cell col={4}>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}} >School App</CardTitle>
                <CardText >
                This project covered by react redux (ES6), using REST API and css modules (fully dynamic). 
                Id: 10419150003 <br/>
                Password: 123456   <br/>
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='http://marmaschool.bdstylefashion.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>

          <Cell col={4}>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}} >Note Status</CardTitle>
                <CardText >
                This project covered by react redux javascript and material design. 
                For database  here i used firebase. 
                This project  provides authtication system, create project and show notifications.  
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='https://react-project-status.netlify.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>

          <Cell col={4}>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}} >Mobile Shopping</CardTitle>
                <CardText >
                  Online mobile phone shopping system  covered by react javascript.
                  You can choose mobile phone and add to cart. You also able to change your products quantity before checkout.
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='https://react-onlineshopping-store-recording.netlify.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>

          <Cell col={4}>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}} >Burgerbuilder Shopping</CardTitle>
                <CardText >
                  A fully dynamic burgerbuilder projects covered by react redux and firebase. 
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='https://react-my-burger-1100b.firebaseapp.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>

          <Cell col={4}>
            {/* Project 4 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}} >Budget Calculator</CardTitle>
                <CardText >
                  React hook budget calculator. 
                  You can add items and calculate of total cost of items. 
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='https://mybudgetnotes.netlify.com/' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>

          <Cell col={4}>
            {/* Project 5 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold' , background: 'url(https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png) center / cover'}} >Api Data Practices</CardTitle>
                <CardText >
                  A good practice of vanilla api data. 
                  Post view and create.
                </CardText>
                <CardActions border>
                  <Button colored className="demoLink" ><a href='https://simplepost.netlify.com' rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
          </Cell>
          
        </Grid>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
            <Grid className="about-grid">
              <Cell col={6}>
                <img src={require('../img/add1.png')} alt="Advertisement" style={{height: '600px', opacity: '0.97', border: '1px solid yellow'}} />
              </Cell>
              <Cell col={6}>
                <img src={require('../img/add2.png')} alt="Advertisement" style={{height: '600px', opacity: '0.97', border: '1px solid yellow'}} />
              </Cell>
              <Cell col={12}>
                <img src={require('../img/ui2.jpg')} alt="ConsultancyLogo" style={{opacity: '0.97', border: '1px solid yellow'}} />  
              </Cell>
              <Cell col={12}>
                <img src={require('../img/ui3.jpg')} alt="ConsultancyLogo" style={{ opacity: '0.97', border: '1px solid yellow'}} />  
              </Cell>
              <Cell col={12}>
                <img src={require('../img/ui1.jpg')} alt="ConsultancyLogo" style={{opacity: '0.97', border: '1px solid yellow'}} />  
              </Cell>
              <Cell col={12}>
                <img src={require('../img/add3.png')} alt="Advertisement" style={{width: '700px' , opacity: '0.97', border: '1px solid yellow'}} />  
              </Cell>
            </Grid>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>PSD TO HTML</Tab>
          <Tab>React</Tab>
          <Tab>Photoshop</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
