import React from 'react';
import logo1 from './Components/img/logo1.jpg';
import logo2 from './Components/img/nysl_logo.png';
import './App.css';
import { QueryClient, QueryClientProvider } from "react-query"
import { Navbar } from './Components/Navbar';
import { Locations } from './Components/Locations';
import { Info } from './Components/Info';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderHome, Home } from './Components/Home';
import { Games } from './Components/Games';
import { Chat } from './Components/MessageList';
import { Gallery } from './Components/Gallery';

const Main = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 className='Title'>{HeaderHome.title}</h1>
        <div className='Navbar-container'>
          <Navbar />
        </div>
      </div>
      <div className='App-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/games/:location' element={<Locations />} />
          <Route path='/messages' element={<Chat />} />
          <Route path='/info' element={<Info />} />
          <Route path='/images' element={<Gallery />} />
        </Routes>
        <div className='Container'></div>
        <div className='Logo2'>
          <img src={logo2} className='App-logo-2' alt='logo2' />
        </div>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
