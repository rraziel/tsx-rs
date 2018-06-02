# ESX-RS Modules

This directory contains all ESX-RS modules.

## Modules

| Module                                             | Version                                                                                                                                                           | Dependencies                                                                                                                                                                                                          | Description                                                                       |
|:---------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [@esx-rs/core](/packages/core)                     | [![npm](https://img.shields.io/npm/v/@esx-rs/core.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/core)                     | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/core&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/core)                     | Base ESX-RS interfaces and decorators.                                            |
| [@esx-rs/client](/packages/client)                 | [![npm](https://img.shields.io/npm/v/@esx-rs/client.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/client)                 | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/client&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/client)                 | Common client implementation.                                                     |
| [@esx-rs/client-angular](/packages/client-angular) | [![npm](https://img.shields.io/npm/v/@esx-rs/client-angular.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/client-angular) | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/client-angular&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/client-angular) | Client transport: [Angular HttpClient](https://angular.io/guide/http).            |
| [@esx-rs/client-fetch](/packages/client-fetch)     | [![npm](https://img.shields.io/npm/v/@esx-rs/client-fetch.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/client-fetch)     | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/client-fetch&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/client-fetch)     | Client transport: [Fetch](https://fetch.spec.whatwg.org/).                        |
| [@esx-rs/client-http](/packages/client-http)       | [![npm](https://img.shields.io/npm/v/@esx-rs/client-http.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/client-http)       | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/client-http&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/client-http)       | Client transport: [Node http](https://nodejs.org/api/http.html).                  |
| [@esx-rs/client-xhr](/packages/client-xhr)         | [![npm](https://img.shields.io/npm/v/@esx-rs/client-xhr.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/client-xhr)         | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/client-xhr&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/client-xhr)         | Client transport: [XMLHttpRequest](https://en.wikipedia.org/wiki/XMLHttpRequest). |
| [@esx-rs/server](/packages/server)                 | [![npm](https://img.shields.io/npm/v/@esx-rs/server.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/server)                 | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/server&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/server)                 | Common server implementation.                                                     |
| [@esx-rs/router-express](/packages/router-express) | [![npm](https://img.shields.io/npm/v/@esx-rs/router-express.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/router-express) | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/router-express&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/router-express) | Server router: [Express](https://expressjs.com/).                                 |
| [@esx-rs/router-koa](/packages/router-koa)         | [![npm](https://img.shields.io/npm/v/@esx-rs/router-koa.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/router-koa)         | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/router-koa&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/router-koa)         | Server router: [Koa](http://koajs.com/).                                          |
| [@esx-rs/schema](/packages/schema)                 | [![npm](https://img.shields.io/npm/v/@esx-rs/schema.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/schema)                 | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/schema&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/schema)                 | Schema generation structure.                                                      |
| [@esx-rs/schema-openapi](/packages/schema-openapi) | [![npm](https://img.shields.io/npm/v/@esx-rs/schema-openapi.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/schema-openapi) | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/schema-openapi&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/schema-openapi) | Schema generation: [OpenAPI 3.0](https://www.openapis.org/).                      |
| [@esx-rs/validation](/packages/validation)         | [![npm](https://img.shields.io/npm/v/@esx-rs/validation.svg?maxAge=2592000&style=flat-square&logo=npm)](https://www.npmjs.com/package/@esx-rs/schema)                 | [![Dependencies](https://img.shields.io/david/rraziel/esx-rs.svg?path=packages/schema&label=Dependencies&maxAge=2592000&style=flat-square)](https://david-dm.org/rraziel/esx-rs?path=packages/validation)         | Schema validation via [es-validation](https://github.com/rraziel/es-validation).  |

[![Known Vulnerabilities](https://snyk.io/test/github/rraziel/esx-rs/badge.svg)](https://snyk.io/test/github/rraziel/esx-rs)
[![Greenkeeper](https://badges.greenkeeper.io/rraziel/esx-rs.svg)](https://greenkeeper.io/)