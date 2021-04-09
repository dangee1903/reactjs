import React from "react";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import { AppRouter } from './routers'
const App = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
    >
      <AppRouter />
    </ReactKeycloakProvider>
  );
}
export default App;
