import React, {Component} from 'react';
import './project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      handleClick: () => this.handleClick
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className="project-header">
          <h3>My Projects</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="project-form">
              <input
                type="text"
                className="project-input"
                placeholder="Project name"
                onChange={this.handleChange}
                value={this.state.text}
                required />
              <button 
                type="submit"
                className="project-button">
                Add
              </button>
            </div>
          </form>
        </div>
        <ProjectList items={this.state.items} handleClick={this.handleClick}/>
      </div>
    );
  }

  handleClick(id) {
    this.setState(prevState => ({
      items: prevState.items.filter(el => el.id !== id)
    }));
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list">
          {this.props.items.map(item => (
            <div className="project-item" key={item.id} onClick={() => this.props.handleClick(item.id)}>
              <p key={item.id}>{item.text}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default Project;
