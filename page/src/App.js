import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './component/AppBar.js'
import PopMene from './component/menu.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      log:'login',
      test: null
    }
  }

  switch_log(){
    let s = (this.state.log === 'login') ? 'logout':'login'
    this.setState({log:s})
  }

  openHandle() {
    this.setState({test: "right on!気に入ったわ"})
  }

  render(){
    return(
      <div>
        <AppBar
        switch={()=>this.switch_log()}
        text='BAR'
        log={this.state.log}
        openHandle={() => this.openHandle()}
        />
        <PopMene open={false} test={this.state.test}/>
      </div>
    )
  }


}
export default App;
