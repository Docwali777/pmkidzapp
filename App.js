import React from "react"

import { ApolloProvider,  ApolloClient, InMemoryCache } from '@apollo/client';


//State Management
import {  createStore } from "redux"
import { Provider } from "react-redux"

import reducers from './_STATE_MANAGEMENT/REDUCERS'

import MainAppNavigator from "./MainAppNavigator"

const ngrokHTTP= "https://2242e43afee4.ngrok.io/graphql"

  const client = new ApolloClient({
    uri: `${ngrokHTTP}`,
    cache: new InMemoryCache()
  });


//redux store
  const store = createStore(reducers)

function AppNavigator(){

  return(
   <ApolloProvider client={client} >
      <Provider store={store}>
      <MainAppNavigator />
      </Provider>
   </ApolloProvider>
  )
}




export default AppNavigator