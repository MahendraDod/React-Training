import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Color from './Color';
import MiniCalc from './Calc';
import ToDo from './ToDo';
import TODOwithLocalStorage from './LocalStorage';
import CRUDOPeration from './CRUD';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>
        <Link to ="/Home">Counter</Link><br/>
        <Link to ="/Color">Color</Link><br/>
        <Link to ="/Calc">Calculator</Link><br/>
        <Link to ="/TODo">TODo</Link><br/>
        <Link to ="/LocalStorage">localstorage</Link><br/>
        <Link to = '/CRUD'>CRUD</Link><br/>
       
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Color' element={<Color/>}/>
          <Route path='/Calc' element={<MiniCalc/>}/>
          <Route path='/ToDo' element={<ToDo/>}/>
          <Route path="/LocalStorage" element={<TODOwithLocalStorage/>}/> 
          <Route path='/CRUD' element={<CRUDOPeration/>}/> 
        </Routes>
      </Router>
    );
  }
}
export default App;