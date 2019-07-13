import React,{Component} from 'react';

import AppBar from './components/appbar.js'
import H from './components/horizontal.js'



class App extends Component{

  render(){
    return(
      <div>
        <AppBar tab1='プロ野球' tab2='艦これ' tab3='プログラミング'/>
      </div>
    )
  }
}

export default App;
