import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
        
  }

  shouldComponentUpdate(/* nextProps, nextState */) {
    // Implemente sua lógica aqui
    return true;
  }

  componentDidUpdate() {
    // Implemente sua lógica aqui
  }

  render() {
    return <h1>Doguinhos</h1>;
  }
}

export default App;
