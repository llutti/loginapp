// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDZD0KMJ0jaEMoLJ8-mTrDarSuIvWXj7jc",
    authDomain: "loginapp-681a6.firebaseapp.com",
    databaseURL: "https://loginapp-681a6.firebaseio.com",
    projectId: "loginapp-681a6",
    storageBucket: "loginapp-681a6.appspot.com",
    messagingSenderId: "794893028687"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
