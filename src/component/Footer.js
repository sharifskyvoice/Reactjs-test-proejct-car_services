
import React, {Component} from 'react';
import { Link} from "react-router-dom";
import {FiFacebook,FiTwitter,FiGithub,FiLinkedin} from 'react-icons/fi';

export default class Footer extends Component {
    state={
        social:[
            {
                icon:<FiFacebook/>,
             
            },
            {
               icon:<FiTwitter/>,
              
           },
           {
               icon:<FiGithub/>,
              
           },
           {
               icon:<FiLinkedin/>,
             
           }
        ]
       }
    
    render(){
        return (
             <footer className="footer footer-distributed">
                <div className="container ">
                    <span className="text-muted ">                                                
                       <div className="footer-right ">
                            {this.state.social.map((item,index)=>{
                                return <a href="#" key={index} >
                                       <span>{item.icon}</span>
                                      </a>
                            }
                          )
                        } 
                        </div>
                        <div className="footer-left">
                           <p className="footer-links">
                            <Link  className="link-1" to="/">Home &nbsp;&nbsp;</Link> 
                            <Link to="/cars">Store</Link>      
                            </p>
                            <p>Cmart &copy; 2020</p>
                        </div>                      
                    </span>
                </div>
             </footer>
 
        )
    }
}