import * as React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter } from "react-router-dom";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import { AppRouter } from './routers'
import * as serviceWorker from './serviceWorker'
import App from './App'
// const eventLogger = (event: unknown, error: unknown) => {
//   console.log('onKeycloakEvent', event, error)
// }

// const tokenLogger = (tokens: unknown) => {
//   console.log('onKeycloakTokens', tokens)
// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
    // <ReactKeycloakProvider
    //   authClient={keycloak}
    //   onEvent={eventLogger}
    //   onTokens={tokenLogger}
    // >
    //   <AppRouter />
    // </ReactKeycloakProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
