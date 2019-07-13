import React , {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import './baseball.css'
const styles={
  title:{
    display:'flex',
    justifyContent:'space-around',

  }
}
class Baseball extends Component{

render(){
  return (
    <div>
      <h1 className='title'>プロ野球</h1>
    </div>
  )
}
}

export default withStyles(styles)(Baseball)
