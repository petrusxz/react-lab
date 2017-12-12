import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MySkills extends React.Component {
  constructor(props) {
    // Access input data
    super(props);
    // Internal state data
    this.state = { items: [], text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>My Skills</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="skill-form">
              <input
                className="skill-input"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button
                className="skill-button">
                Add
              </button>
              </div>
          </form>
        </div>
        <div className="content">
          <SkillsList items={this.state.items} />
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
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

class SkillsList extends React.Component {
  render() {
    return (
      <div className="skill-list">
        {this.props.items.map(item => (
          <p className="skill-item" key={item.id}>{item.text}</p>
        ))}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MySkills />,
  document.getElementById('root')
);
