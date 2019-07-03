// /* eslint-disable no-undef */
// // hey k

// import produce, { applyPatches, createDraft, finishDraft } from "immer";
// import _isObjectLike from 'lodash/isObjectLike'

// const baseRoute = [
//     {
//         to: "/home",
//         time: new Date.now(),
//         state: {

//         }
//     },
//     {
//         to: "Try immer",
//         time: new Date.now(),
//         state : {

//         }
//     }
// ]

// // export const routeCreator = baseRoute = baseRoute => {
// //     name: "",
// //     baseRoute
// // }

// const defaultBaseRoute = suffix => produce(routes,draft=>{
//     for (let i = 0; i < draft.AppRoute.length; i++) {
//         draft.AppRoute[i].to=`/${suffix}${draft.to}`;
//     }
//     return
// })
// const routes = {AppRoute:defaultBaseRoute("/home")};



// const FORWARD = [];
// const BACKWARD = [];

// fork = produce(
//     fork,
//     draft => {
//         draft.age = 33
//     },
//     // The third argument to produce is a callback to which the patches will be fed
//     (patches, inversePatches) => {
//         changes.push(...patches)
//         inverseChanges.push(...inversePatches)
//     }
// )
// const defaultRouteMutation = (mutation = {
//     createdOn: Date.now()
// }) => {
//     Object.keys(mutation).forEach(param=>{
//         // this = draft
//         this.backward=98;
//     })
//     this.fgshgsf=gfhe;
//     return
// }

// // routes={
// //     backward:58,
// // }

// // Router.call(undefined,undefined,{backward:89},()=>{}, [])
// // {
// //     bac
// // }

// // function


// function Router(routerObject={forwardRoutes , backwardRoutes , routeMutation , mutationArgs}){
//     if (!_isObjectLike(mutationArgs)) {
//         return new Error(`mutationArgs should be type of ${typeof {}} found ${typeof mutationArgs}`)
//     }
//     this.forwardRoutes=forwardRoutes;
//     this.backwardRoutes = backwardRoutes
//     return async (component)=>{
//         produce(
//             routerObject,
//             draft => routeMutation.apply(draft,mutationArgs),
//             // The third argument to produce is a callback to which the patches will be fed
//             (patches, inversePatches) => {
//                 forward.push(...patches)
//                 backward.push(...inversePatches)
//             }
//         )
//     }
// }

// let r= new Router(undefined,undefined, defaultRouteMutation, baseRoute)
















// // import React, { Component } from "react";
// // import { BrowserManager } from "./routeUrlChanger";
// // import { DynamicRouter } from "./dynamicRouter";

// // import { LoadingModule } from "./../Loader/moduleLoader";

// // //import {PRATIBHA_KEY_DEMO_STORE} from './../store/key/storeKey'

// // export class Router extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       ...this.props,
// //       _route_module: LoadingModule
// //     };
// //     const d = new DynamicRouter(this.state.screen.componentDest);
// //     d.loadComponent().then(cmp => {
// //       this.setState({ _route_module: cmp.default });
// //     });
// //   }
// //   mapStoreToUrl = (store, suffix) => {
// //     //`/store/${store}/${suffix}`
// //     return `/${suffix}`;
// //   };
// //   UNSAFE_componentWillMount() {
// //     // const d = new DynamicRouter(this.state.screen.componentDest);
// //     // d.loadComponent().then(cmp => {
// //     //   this.setState({ _route_module: cmp.default });
// //     // });
// //   }
// //   UNSAFE_componentWillReceiveProps(nextProps) {
// //     this.setState({ ...nextProps }, () => {
// //       const d = new DynamicRouter(this.state.screen.componentDest);
// //       d.loadComponent().then(cmp => {
// //         this.setState({ _route_module: cmp.default });
// //       });
// //       if (this.state.Id===0) {
// //         if(this.state.changeHistory){
// //           let b = new BrowserManager(window);
// //           let m = this.mapStoreToUrl(
// //             this.state.store_key,
// //             `components/${this.state.screen.name}`
// //           );
// //           b.updateRoute({}, this.state.name, m);
// //         }
// //       } else {
// //         if(this.state.changeHistory){
// //           let b = new BrowserManager(window);
// //           let m = this.mapStoreToUrl(
// //             this.state.store_key,
// //             `components/${this.state.screen.name}/${this.state.Id}`
// //           );
// //           b.updateRoute({}, this.state.name, m);
// //         }
// //       }
// //     });
// //   }
// //   componentDidMount() {
// //     if (this.state.Id===0) {
// //       let b = new BrowserManager(window);
// //       let m = this.mapStoreToUrl(
// //         this.state.store_key,
// //         `components/${this.state.screen.name}`
// //       );
// //       b.updateRoute({}, this.state.name, m);
// //     } else {
// //       let b = new BrowserManager(window);
// //       let m = this.mapStoreToUrl(
// //         this.state.store_key,
// //         `components/${this.state.screen.name}/${this.state.Id}`
// //       );
// //       b.updateRoute({}, this.state.name, m);
// //     }
// //   }
// //   render() {
// //     return <this.state._route_module />;
// //   }
// // }
