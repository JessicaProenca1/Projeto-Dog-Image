import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.api = this.api.bind(this);
    this.botao = this.botao.bind(this);

    this.state = {
      imageUrl: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.api();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate(prevProps, prevState) {
    const { imageUrl } = this.state;
    if (prevState.imageUrl !== imageUrl) {
      localStorage.setItem('imageUrl', JSON.stringify(imageUrl));
    }
    this.alert();
  }

  async api() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const result = await response.json();
    this.setState({
      imageUrl: result.message,
      isLoading: false,
    });
  }

  botao() {
    this.api();
  }

  alert() {
    const { imageUrl } = this.state;
    const arr = imageUrl.split('/', 5);
    const raca = arr[arr.length - 1];
    alert(`A próxima doguinho é da raça: ${raca}`);
  }

  render() {
    const { isLoading, imageUrl } = this.state;
    const div = (
      <div>
        <img
          src={ imageUrl }
          alt="Doguinho aleatório"
        />
        <button
          type="button"
          onClick={ this.botao }
        >
          Novo doguinho!
        </button>
      </div>);

    return (
      <>
        <h1>Doguinhos</h1>
        {isLoading
          ? <p>Loading...</p>
          : div}
      </>
    );
  }
}

export default App;
