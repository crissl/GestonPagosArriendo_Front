export const environment = {
  production: true,
  returnUrl: 'http://localhost:4200//#/',
  returnUrlComplete: 'http://localhost:4200/#/correcto',
  cancelUrl: 'http://localhost:4200/#/cancelar',
  Endpoint: '/redirection/',
  locate: 'es_CO',
  Url: 'https://servicios.espe.edu.ec:8443/Tutorias-0.0.1-SNAPSHOT/tutoring/',
  typeDocument: 'CI',
  statusPending: 'PENDIENTE',
  moneda: 'USD',
  sso: {
    
    redirectUri: window.location.origin,
    postredirectUrL: window.location.origin,
    scope: 'openid profile email',
    logout: '/oidc/logout',
    tokenEndpoint: '/oauth2endpoints/token',
    userinfoEndpoint: '/oauth2/userinfo',
    authorizationEndpoint: '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token'
  }
};
