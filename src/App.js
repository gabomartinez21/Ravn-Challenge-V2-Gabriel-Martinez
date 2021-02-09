import React from 'react';
// import ListPeople from './components/listPeople';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './routes/Routes';
// import Person from './pages/person';

const cliente = new ApolloClient({
  uri:'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache:new InMemoryCache(),
})


function App() {
  return (
    
      <ApolloProvider client={cliente}>
      
        {/* <div className="App">
          
        </div> */}
        <Routes/>
      </ApolloProvider>
    
  );
}

export default App;
