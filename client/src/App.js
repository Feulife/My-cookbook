import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Recipes from ''
import CreateRecipe from ''
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <nav className='navbar navbar-dark bg-dark'>
          <div className='navbar-nav mr-auto flex-row'>
            <Link to='/' className='nav-link mr-2'>Home</Link>
            <Link to='/recipes' className='nav-link mr-2'>Recipes</Link>
            <Link to='/create' className='nav-link mr-2'>Create new Recipe</Link>
          </div>
        </nav>
        <div className='conteiner mt-5'>
          <Routes>
            <Route path='/' element={< H/>} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/create' element={<CreateRecipe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
