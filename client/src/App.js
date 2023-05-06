import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React, { useState } from 'react';
import Hello from './components/Hello';
import Titles from './components/Titles'
// import Recipes from './components/Recipes';
import CreateRecipe from './components/CreateRecipe';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})



function App() {
  const [mode, setMode] = useState('light')
  
  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <nav className="navbar navbar-custom">
          <div className="navbar-nav mr-auto flex-row">
            <Link to="/" className="nav-link mr-2">Home</Link>
            <Link to="/recipes//" className="nav-link mr-2">Recipes</Link>
            <Link to="/create" className="nav-link mr-2">Create Recipe</Link>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/recipes//" element={<Titles />} />
            <Route path="/create" element={<CreateRecipe />} />
          </Routes>
        </div>
        <div
      style={{
        background: mode === 'light' ? '#eee' : '#222',
        color: mode === 'light' ? '#222' : '#eee',
        display: 'grid',
        placeItems: 'center',
        minWidth: '320px',
        minHeight: '320px',
        borderRadius: '4px'
      }}
    >
      <p>Chosing theme: {mode}.</p>
      <button onClick={handleClick}>Change apperience theme</button>
    </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
