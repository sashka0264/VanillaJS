// ------------ ИСХОДНИКИ ------------
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLInt, GraphQLList } = graphql;
// ------------ ИСХОДНИКИ ------------

// ------------ НАШИ ДАННЫЕ ------------
const movies = [
  {id: '1', name: 'Титаник', genre: 'Драма', directorID: '1'},
  {id: '2', name: 'Крепкий орешек', genre: 'Боевик', directorID: '2'},
  {id: '3', name: 'Аватар', genre: 'Фантастика', directorID: '1'}
];

const directors = [
  {id: '1', name: 'Джеймс Кэмерон', age: 65},
  {id: '2', name: 'Джон Мактирнан', age: 69}
];
// ------------ НАШИ ДАННЫЕ ------------

// ------------ ФУНКЦИОНАЛ ------------
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType, 
      resolve(parent, args) {
        return directors.find((director) => director.id === parent.id)
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: { 
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter((movie) => movie.directorID === parent.id)
      }
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType, 
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return movies.find((movie) => movie.id === args.id)
      }
    },
    director: {
      type: DirectorType, 
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return directors.find((director) => director.id === args.id)
      }
    }
  }
});
// ------------ ФУНКЦИОНАЛ ------------


module.exports = new GraphQLSchema({
  query: Query
});