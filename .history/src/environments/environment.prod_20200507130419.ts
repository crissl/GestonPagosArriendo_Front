export const environment = {
  production: true,
  url: 'https://servicios.espe.edu.ec:8443/Tutorias-0.0.1-SNAPSHOT/tutoring/',
  // url:"http://localhost:8083/tutoring/",
  servicioUser: 'https://servicios.espe.edu.ec:8443/UPBannerWS-0.0.1-SNAPSHOT/UPBannerWS/user/',
  servicioUserldap: 'https://miespemovil.espe.edu.ec/recovery/restWs/userldap/',
  servicioCedulaById: 'https://miespemovil.espe.edu.ec/reportes/reporteWs/cedulaById/',
  tipoPersonaE: 'ESTUDIANTE',
  tipoPersonaD: 'DOCENTE',
  tipoTutoriaA:  'ACOMPAÑAMIENTO',
  tipoTutoriaR:  'REFORZAMIENTO',
  estado: 'A',
  estadoC: 'C',
  interacion: '0',
  codigoFormulariosPR: '1',
  codigoFormulariosSR: '2',
  codigoFormulariosPA: '3',
  codigoFormulariosRA: '4',
  codigoFormulariosSA: '5',
  codigoFormulariosCA: '6',
  sso: {
    serverUrl: 'https://srvcas.espe.edu.ec',
    clientId: 'c0CZpsRpq1Vws5T97mq6eTwJBiwa',
    issuer: '/oauth2endpoints/token',
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
