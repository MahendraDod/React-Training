import React from "react";
class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedColor: localStorage.getItem('selectedColor') || 'white'
      };
    }
  
    handleColorChange = (color) => {
      localStorage.setItem('selectedColor', color);
      this.setState({ selectedColor: color });
    };
  
    componentDidMount() {
      document.body.style.backgroundColor = this.state.selectedColor;
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.selectedColor !== this.state.selectedColor) {
        document.body.style.backgroundColor = this.state.selectedColor;
      }
    }
  
    render() {
      return (
        <div>
            <h1> Color Picker</h1>
            <button onClick={() => this.handleColorChange('red')}>Red</button>&nbsp;
            <button onClick={() => this.handleColorChange('green')}>Green</button>&nbsp;
            <button onClick={() => this.handleColorChange('blue')}>Blue</button>&nbsp;
            <button onClick={() => this.handleColorChange('White')}>Reset</button><br/>&nbsp;
        </div>
      );
    }
  }
  
  export default Color;