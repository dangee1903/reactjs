import React from "react";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import { AppRouter } from './routers'
// const eventLogger = (event, error) => {
//   console.log('onKeycloakEvent', event, error)
// }

// const tokenLogger = (tokens) => {
//   console.log('onKeycloakTokens', tokens)
// }
const App = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      // onEvent={eventLogger}
      // onTokens={tokenLogger}
    >
      <AppRouter />
    </ReactKeycloakProvider>
  );
}
export default App;
