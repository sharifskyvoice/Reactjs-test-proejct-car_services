import React, { Component } from 'react';
import Title from './Title';
import {FaUserSecret,FaHiking,FaAngellist,FaThumbsUp} from 'react-icons/fa';
export default class Services extends Component {
state={
 services:[
     {
         icon:<FaUserSecret/>,
         title:'Highly Secured',
         info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'
     },
     {
        icon:<FaHiking/>,
        title:'Trusted Agents',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'
    },
    {
        icon:<FaAngellist/>,
        title:'Get an Offer',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'
    },
    {
        icon:<FaThumbsUp/>,
        title:'Free Support',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam.'
    }
 ]
}

  render() {
    return (
      <section className="services">
        <Title title='Our Advantages'/>
          <div className="services-center">
            {this.state.services.map((item,index)=>{
              return <article key={index} className="services">

              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
              </article>
              }
             )
            } 
          </div>
       
      </section>
    );
  }
}
