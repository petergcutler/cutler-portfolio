// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EnvService {
//
//   constructor() { }
// }

export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public AT = '';
  public ATU = '';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {
  }

}
