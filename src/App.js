import React from 'react';
import './styles.css';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />

        <Main data={data} />
      </div>
    );
  }
}
