//# Global Directives
//
//** These `directives` are available in any template **

import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';

// Angular 2 Router
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Angular 2 Material
// TODO(datatypevoid): uncomment when material is fixed
// import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
// import {MdToolbar} from '@angular2-material/toolbar';
// import {MdButton} from '@angular2-material/button';
// import {MdCheckbox} from '@angular2-material/checkbox';
// import {MdRadioButton} from '@angular2-material/radio';
// import {MdSpinner} from '@angular2-material/progress-circle';
// import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
// const MATERIAL_DIRECTIVES = [
//   ...MD_SIDENAV_DIRECTIVES,
//   ...[ MdToolbar, MdButton, MdCheckbox, MdRadioButton, MdSpinner ],
//   ...MD_CARD_DIRECTIVES
// ];

// APPLICATION_DIRECTIVES
//
// directives that are global through out the application
export const APPLICATION_DIRECTIVES = [

  ...ROUTER_DIRECTIVES,
  // TODO(datatypevoid): uncomment when material is fixed
  //...MATERIAL_DIRECTIVES
];

export const DIRECTIVES = [

  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true})
];
