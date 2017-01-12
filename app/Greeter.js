import React, { Component } from 'react';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>"Hi there and greetings"</h1>
      </div>
    );
  }
}

export default Greeter;