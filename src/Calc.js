import React from 'react';
class MiniCalc extends React.Component
{
  constructor(props){
    super(props);
    this.state ={
      num1: '',
      num2:'',
      result:''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
        this.setState({ [name]: value });
  }

  minicalcOperation = (operator) => {
    const { num1, num2 } = this.state;
    let result;
    switch (operator) {
      case '+':
        result = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        result = parseInt(num1) - parseInt(num2);
        break;
      case '*':
        result = parseInt(num1) * parseInt(num2);
        break;
      case '/':
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        result ="";
    }
    if (isNaN(result)) {
      this.setState({ result: 'Invalid operation' });
    } else {
      this.setState({ result });
    }
  }
  render(){
    return(<>
    <div>
      <h1>Mini Calculator</h1>
      Num1: <input type="text" placeholder='Enter Number' name="num1"  onChange={this.handleChange}/> <br/>
      Num2: <input type="text" placeholder='Enter Number' name="num2"  onChange={this.handleChange}/><br/>
      <button onClick={() => this.minicalcOperation('+')}>Add</button>
        <button onClick={() => this.minicalcOperation('-')}>Subtract</button>
        <button onClick={() => this.minicalcOperation('*')}>Multiply</button>
        <button onClick={() => this.minicalcOperation('/')}>Divide</button>
        <br/>
        <p>Ans : {this.state.result}</p>
    </div>
    </>);
  }
}
export default MiniCalc;
