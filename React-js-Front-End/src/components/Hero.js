import { Typography ,Grid} from "@material-ui/core";
import React, { Component } from "react";
import logo from"./tayu3.png";


class Hero extends Component{
    constructor(props){
        super(props);
    
        }

        render(){
            return (
              <div>
                <section id="hero">
    <div className="hero-container">
      <div className="wow fadeIn">
        <div  className="hero-logo">
     
          <img  src={logo} alt="logo"/>
        </div>
 <h1>DE-COM-TECH</h1>

<div class="typewriter">
  <h2><strong>DE</strong>volope <strong>COM </strong>  munities through <strong>TECH     
</strong> nology<span class="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps"></span></h2>
</div>


      
       
        <div class="actions">
          <a href="#exploreCom" class="btn-get-started">join community </a>
          <a href="/createCommunity" class="btn-services">create comunity</a>
        </div>
      </div>
    </div>
  </section>
  </div>
                              
            )
        }
    }
    export default Hero
  
