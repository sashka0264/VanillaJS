import React from 'react';
import { gql } from "apollo-boost";
import ApolloClient from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://powerful-savannah-78956.herokuapp.com/',
});

const GET_MOVIES = gql`
  {
    movies {
      name
    }
  }
`

const AppConteiner = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}


const App = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Что-то пошло не так :(</div>

  return (
    <div className="App">
      {
        data.movies.map((item) => <div className="element" key={item.name}>{ item.name }</div>)
      }
    </div>
  )
}


export default AppConteiner;
