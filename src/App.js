import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Routes from './routes/Routes';


//With ApolloClient we can connect with a GraphQL API an get the information we want
const cliente = new ApolloClient({
  uri:'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache:new InMemoryCache(),
})


function App() {
  return (
      //Is necessary create the ApolloProvider tag in the top of our application
      <ApolloProvider client={cliente}>
        <Routes/>
      </ApolloProvider>
    
  );
}

export default App;
