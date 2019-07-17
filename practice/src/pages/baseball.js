import React ,{Component} from 'react'
import Paper from  '../components/paper.js'


class Baseball extends Component{
  render(){
    return(
      <div>
        <Paper text='パ・リーグ'/>
        <Paper text='セ・リーグ'/>
      </div>
    )
  }
}

export default Baseball
