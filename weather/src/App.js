import './App.css';
import Home from  "./pages/Home"
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    url : "https://graphql-weather-api.herokuapp.com/"
  })

  return (
    <ApolloProvider client={client}>
     <Home />
    </ApolloProvider>
  );
}

export default App;
