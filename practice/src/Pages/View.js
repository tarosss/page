import React from 'react';
import Tab from '../components/tab.js'
import Baseball from './baseball.js'
class View extends React.Component{
  viewBaseball(){
    return (
      <Baseball/>
    )
  }
  render(){

    return(
      <div>
        <Tab tab1={this.viewBaseball()}/>
      </div>
    )
  }
}

export default View
