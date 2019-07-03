import {HomeScreen} from './../screen/screenContainer';
import { Observable } from 'rxjs';
// function RouteCreator(){

// }

// RouteCreator.prototype.createRoute = function(screen, store) {
//   let event = new CustomEvent("newRoute", {
//     detail: {
//       message: screen,
//       store: store,
//       time: new Date(),
//       c: true,
//       lookForComponentId: false
//     },
//     bubbles: true,
//     cancelable: true
//   });
//   window.dispatchEvent(event);
// }

// RouteCreator.prototype.createRouteHistory = function(screen, store) {
//   let event = new CustomEvent("newRoute", {
//     detail: {
//       message: screen,
//       store: store,
//       time: new Date(),
//       c: false,
//       lookForComponentId: false
//     },
//     bubbles: true,
//     cancelable: true
//   });
//   window.dispatchEvent(event);
// }

// RouteCreator.prototype.createRouteWithId = function(screen, store, id) {
//   let event = new CustomEvent("newRoute", {
//     detail: {
//       message: screen,
//       store: store,
//       time: new Date(),
//       c: true,
//       lookForComponentId: true,
//       Id: id
//     },
//     bubbles: true,
//     cancelable: true
//   });
//   window.dispatchEvent(event);
// }

// export default {
//   RouteCreator
// }


export class RouteCreator {
  createRoute = (screen, store) => {
    let event = new CustomEvent("newRoute", {
      detail: {
        message: screen,
        store: store,
        time: new Date(),
        c: true,
        lookForComponentId: false
      },
      bubbles: true,
      cancelable: true
    });
    window.dispatchEvent(event);
  };
  createRouteHistory = (screen, store) => {
    let event = new CustomEvent("newRoute", {
      detail: {
        message: screen,
        store: store,
        time: new Date(),
        c: false,
        lookForComponentId: false
      },
      bubbles: true,
      cancelable: true
    });
    window.dispatchEvent(event);
  };
  createRouteWithId = (screen, store, id) => {
    let event = new CustomEvent("newRoute", {
      detail: {
        message: screen,
        store: store,
        time: new Date(),
        c: true,
        lookForComponentId: true,
        Id: id
      },
      bubbles: true,
      cancelable: true
    });
    window.dispatchEvent(event);
  };
}
