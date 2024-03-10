import React from "react";
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  getData() {
    const string = localStorage.getItem('count');
    const count = parseInt(string,10);
    if(!isNaN(count)){
      this.setState({count});
    }
  }
  componentDidMount()
  {
    this.getData();
  }
  componentDidUpdate() {
    localStorage.setItem('count',this.state.count.toString());
  }
  increment = () =>{
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  decrement = () =>{
    if(this.state.count>0){
      this.setState(prevState =>({
        count: prevState.count - 1
      }));
    }
  }
  reset = () =>{
    this.setState({count:0});
  };
  render(){
    return(<>
    <div>
      <h1>Counter App</h1>
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
      <input type="text" value={this.state.count} readonly />
      <button onClick={this.reset}>Reset</button>
    </div>
    </>);
  }
}

export default Home;
