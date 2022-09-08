import React from 'react';
import GlobalStyle from './global/styles';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
