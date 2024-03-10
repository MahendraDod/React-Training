import React from 'react';

class CRUDOPeration extends React.Component {
  constructor(props) {
    super(props);
    const storedData = JSON.parse(localStorage.getItem('crudData')) || [];

    this.state = {
      data: storedData,
      newName: '',
      newEmail: '',
      newPassword: '',
      newMobile:'',
      editIndex: null,
    };
  }

  componentDidUpdate() {
    localStorage.setItem('crudData', JSON.stringify(this.state.data));
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addEntry = () => {
    const { data, newName, newEmail, newPassword, newMobile, editIndex } = this.state;

    if (newName.trim() === '' || newEmail.trim() === '' || newPassword.trim() === '' || newMobile.trim() === '') {
      return;
    }

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = { name: newName, email: newEmail, password: newPassword, mobile: newMobile };
      this.setState({
        data: updatedData,
        newName: '',
        newEmail: '',
        newPassword: '',
        newMobile: '',
        editIndex: null,
      });
    } else {
      this.setState({
        data: [...data, { name: newName, email: newEmail, password: newPassword, mobile: newMobile }],
        newName: '',
        newEmail: '',
        newPassword: '',
        newMobile: '',
      });
    }
  };

  editEntry = (index) => {
    const { data } = this.state;
    const { name, email, password, mobile } = data[index];
    this.setState({
      newName: name,
      newEmail: email,
      newPassword: password,
      newMobile: mobile,
      editIndex: index,
    });
  };

  deleteEntry = (index) => {
    const { data } = this.state;
    const updatedData = [...data];
    updatedData.splice(index, 1);
    this.setState({ data: updatedData,  editIndex: null });
  };

  render() {
    const { data, newName, newEmail, newPassword, newMobile, editIndex } = this.state;

    return (
      <div className="CRUDApp">
        <h1>CRUD App</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="newName"
            value={newName}
            onChange={this.handleInputChange}
            placeholder="Enter name"
          /><br></br>
          <label>Email:</label>
          <input
            type="text"
            name="newEmail"
            value={newEmail}
            onChange={this.handleInputChange}
            placeholder="Enter Email"
          /><br></br>
          <label>Password:</label>
          <input
            type="text"
            name="newPassword"
            value={newPassword}
            onChange={this.handleInputChange}
            placeholder="Enter Password"
          /><br></br>
          <label>Mobile:</label>
          <input
            type="text"
            name="newMobile"
            value={newMobile}
            onChange={this.handleInputChange}
            placeholder="Enter Mobile"
          /><br></br>
          <button onClick={this.addEntry}>{editIndex !== null ? 'Edit Entry' : 'Add Entry'}</button>
        </div>
        <table style={{ border: '1px solid black' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black' }}>Name</th>
              <th style={{ border: '1px solid black' }}>Email</th>
              <th style={{ border: '1px solid black' }}>Password</th>
              <th style={{ border: '1px solid black' }}>Mobile</th>
              <th style={{ border: '1px solid black' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black' }}>{entry.name}</td>
                <td style={{ border: '1px solid black' }}>{entry.email}</td>
                <td style={{ border: '1px solid black' }}>{entry.password}</td>
                <td style={{ border: '1px solid black' }}>{entry.mobile}</td>
                <td style={{ border: '1px solid black' }}>
                  <a href="#" onClick={() => this.editEntry(index)}>Edit</a> |
                  <a href="#" onClick={() => this.deleteEntry(index)}>Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CRUDOPeration;
