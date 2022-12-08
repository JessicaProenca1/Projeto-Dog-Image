import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.api = this.api.bind(this);

    this.state = {
      imageUrl: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.api();
  }

  async api() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const result = await response.json();
    this.setState({
      imageUrl: result.message,
      isLoading: false,
    });
  }

  // shouldComponentUpdate(/* nextProps, nextState */) {
  //   // Implemente sua lógica aqui
  //   return true;
  // }

  // componentDidUpdate() {
  //   // Implemente sua lógica aqui
  // }

  render() {
    const { isLoading, imageUrl } = this.state;
    return (
      <>
        <h1>Doguinhos</h1>
        {isLoading
          ? <p>Loading...</p>
          : <img src={ imageUrl } alt="Doguinho aleatório" />}
      </>
    );
  }
}

export default App;
