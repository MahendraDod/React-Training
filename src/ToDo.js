import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      newarr: '',
      editid: null,
    };
  }

  add = () => {
    const { arr, newarr, editid } = this.state;
    if (newarr.trim() === '') {
      return;
    }
    if (editid !== null) {
      const updatedarr = [...arr];
      updatedarr[editid] = newarr;
      this.setState({
        arr: updatedarr,
        newarr: '',
        editid: null,
      });
    } else {
      this.setState({
        arr: [...arr, newarr],
        newarr: '',
      });
    }
  };

  edit = (index) => {
    const { arr } = this.state;
    this.setState({
      newarr: arr[index],
      editid: index,
    });
  };

  save = (index) => {
    const { arr, newarr } = this.state;
    const updatedarr = [...arr];
    updatedarr[index] = newarr;

    this.setState({
      arr: updatedarr,
      editid: null,
      newarr: '',
    });
  };

  remove = (index) => {
    const { arr } = this.state;
    const updatedarr = arr.filter((_, i) => i !== index);
    this.setState({ arr: updatedarr });
  };

  handleInputChange = (e) => {
    this.setState({ newarr: e.target.value });
  };

  render() {
    const { arr, newarr, editid } = this.state;

    return (
      <div className="App">
        <h1>Todo App</h1>
        <div>
          <input
            type="text"
            value={newarr}
            onChange={(e) => this.setState({ newarr: e.target.value })}
            placeholder="Add a new task"
          />
          <button onClick={this.add}>{editid !== null ? 'Edit Task' : 'Add Task'}</button>
        </div>
        <ul>
          {arr.map((arrItem, index) => (
            <li key={index}>
              {editid === index ? (
                <div>
                  <input type="text" value={newarr} onChange={this.handleInputChange} />
                  <a href="#" onClick={() => this.save(index)}>Save</a>
                </div>
              ) : (
                <div>
                  {arrItem}   
                  <a href="#" onClick={() => this.edit(index)}>Edit</a>| 
                  <a href="#" onClick={() => this.remove(index)}>Remove</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
