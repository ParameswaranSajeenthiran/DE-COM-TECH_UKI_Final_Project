import { Grid ,Typography} from "@material-ui/core";
import React, { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
    
        }

        render(){
            return (
              <Grid container>
                <Grid item  xs={6}>
                <Typography variant="h3">
                    About <section id="about">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">About Us</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
          </div>
        </div>
      </div>
      <div class="container about-container wow fadeInUp">
        <div class="row">

          <div class="col-lg-6 about-img">
            <img src="assets/img/about-img.jpg" alt=""/>
          </div>

          <div class="col-md-6 about-content">
            <h2 class="about-title">We provide great services and ideass</h2>
            <p class="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate
            </p>
            <p class="about-text">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum
            </p>
            <p class="about-text">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.
            </p>
          </div>
        </div>
      </div>
    </section>End About Section
                </Typography>
                              </Grid>

                              </Grid>
            )
        }
    }
    export default About
  