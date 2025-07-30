import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
          <div>
            <button
              onClick={() => this.updateEntry()}
              style={{
                backgroundColor: 'lightgreen',
                border: '1px solid black'
              }}
            >
              Login
            </button>
            <span style={{ color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>
              {this.state.entrycount} People Entered!!!
            </span>
          </div>

          <div>
            <button
              onClick={() => this.updateExit()}
              style={{
                backgroundColor: 'lightgreen',
                border: '1px solid black'
              }}
            >
              Exit
            </button>
            <span style={{ color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>
              {this.state.exitcount} People Left!!!
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
