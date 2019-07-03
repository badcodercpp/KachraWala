import React, { Component } from "react";
import "./App.css";
import { StackNavigator } from "./routes/routeConfig";
//import classNames from "classnames";
import * as Screen from "./screen/screenContainer";
import { RouteCreator } from "./routes/routeCreator";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/index";
import { Provider } from "react-redux";
import { PRATIBHA_KEY_DEMO_STORE } from "./store/key/storeKey";
import * as StoreKeys from "./store/key/storeKey";
import GUID from "./util/storeKeyToIdMapper";
import SnackbarContent from "./components/Snackbar/SnackbarContent.jsx";
//import FixedHeader from "./views/HomePage/Sections/SectionNavbars.jsx";
import FixedFooter from "./views/HomePage/Sections/SectionFooter.jsx";
import FixedHeader from "./container/fixedHeaderContainer.js";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


import "assets/scss/material-kit-pro-react.css?v=1.2.0";


const persistConfig = {
  key: 'PRATIBHA',
  storage,
}


window.StoreContainer = [];

for (const a in StoreKeys) {
  let g = new GUID();
  let d = g.getGUID();
  window.StoreContainer[a] = d;
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store)
window.store = store;

window.addEventListener("load", ()=> {
  // tobe change in future
  //window.location.href=`${window.location.href}/components/HomeComponent`
  // end dummy testing
  let loc = window.location.href.split("/");
  //alert(loc[loc.length - 3] === "components")
  if (loc[loc.length - 3] === "components") {
    let comp = loc[loc.length - 2];
    const iiid=loc[loc.length-1]
    //let screen=
    let navScreen;
    for (const s in Screen) {
      //console.log(Screen[s])
      //console.log(s)
      if (Screen[s].name == comp) {
        navScreen = Screen[s];

        break;
      } else {
        navScreen = Screen.HomeScreen;
      }
    }
    const r = new RouteCreator();
    r.createRouteWithId(navScreen, window.StoreContainer[PRATIBHA_KEY_DEMO_STORE],iiid);
  } else if(loc[loc.length - 2] === "components"){
    let comp = loc[loc.length - 1];
    //let screen=
    let navScreen;
    for (const s in Screen) {
      //console.log(Screen[s])
      //console.log(s)
      if (Screen[s].name == comp) {
        navScreen = Screen[s];

        break;
      } else {
        navScreen = Screen.HomeScreen;
      }
    }
    const r = new RouteCreator();
    r.createRoute(navScreen, window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);
  } else {
    throw new Error("Invalid Component name or destination");
  }
});

//let historyContainer = [];
//window.historyContainer = historyContainer;
//window.__start_from_home = 0;

class App extends Component {
  constructor(props) {
    super(props);
    let ll=window.location.href.split("/")
    let ll1=ll[ll.length-2]=="Profile"?ll[ll.length-1]:0
    this.state = {
      name: "APP",
      screen: {},
      _change_h: true,
      lookForComponentId: false,
      Id: window.location.href.split("/")
    };
  }
  UNSAFE_componentWillMount() {
    this._remove_route = window.addEventListener("newRoute", evt => {
      this.setState(
        {
          screen: evt.detail.message,
          store: evt.detail.store,
          _change_h: evt.detail.c,
          lookForComponentId: evt.detail.lookForComponentId,
          Id: evt.detail.Id !== undefined ? evt.detail.Id : 0
        },
        () => {
          //console.log(this.state)
          //et delIndex = 0;
          // let a =
          //   window.historyContainer === undefined
          //     ? []
          //     : window.historyContainer;
          // a.push({ screen: this.state.screen });
          // window.historyContainer = a;
        }
      );
    });

    this.__remove_bm = window.addEventListener("popstate", e => {
      //window.history.go(-1)
      //console.log(e.state)
      //alert("routes will be change");
      let loc = window.location.href.split("/");
      //console.log(loc[loc.length-1])
      //console.log(Screen.HomeScreen);

      // if (this.state.lookForComponentId) {
      //   if(loc[loc.length - 3] === "components"){
      //     let comp = loc[loc.length - 2];
      //     //let screen=
      //     let navScreen;
      //     for (const s in Screen) {
      //       //console.log(Screen[s])
      //       //console.log(s)
      //       if (Screen[s].name == comp) {
      //         navScreen = Screen[s];
      
      //         break;
      //       } else {
      //         navScreen = Screen.HomeScreen;
      //       }
      //     }
      //     const r = new RouteCreator();
      //     r.createRouteHistory(navScreen, window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);
      //   }else{
      //     throw new Error("Invalid Component name or destination");
      //   }
      // } else {
      //   if (loc[loc.length - 2] === "components") {
      //     let undef = loc[loc.length - 1];
      //     let navScreen;
      //     for (const s in Screen) {
      //       //console.log(Screen[s])
      //       //console.log(s)
      //       if (Screen[s].name == undef) {
      //         navScreen = Screen[s];
  
      //         break;
      //       } else {
      //         navScreen = Screen.LoadingScreen;
      //       }
      //     }
      //     //console.log("navscreen")
      //     //console.log(navScreen)
      //     const r = new RouteCreator();
      //     r.createRouteHistory(
      //       navScreen,
      //       window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]
      //     );
      //   }else{
      //     throw new Error("Invalid Component name or destination");
      //   }
      // }
      if (loc[loc.length - 3] === "components") {
        let undef = loc[loc.length - 2];
        let navScreen;
        for (const s in Screen) {
          //console.log(Screen[s])
          //console.log(s)
          if (Screen[s].name == undef) {
            navScreen = Screen[s];

            break;
          } else {
            navScreen = Screen.LoadingScreen;
          }
        }
        //console.log("navscreen")
        //console.log(navScreen)
        const r = new RouteCreator();
        r.createRouteHistory(
          navScreen,
          window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]
        );
      } else if(loc[loc.length - 2] === "components"){
        let comp = loc[loc.length - 1];
        //let screen=
        let navScreen;
        for (const s in Screen) {
          //console.log(Screen[s])
          //console.log(s)
          if (Screen[s].name == comp) {
            navScreen = Screen[s];
    
            break;
          } else {
            navScreen = Screen.HomeScreen;
          }
        }
        const r = new RouteCreator();
        r.createRouteHistory(navScreen, window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);
      } else {
        throw new Error("Invalid Component name or destination");
      }
      //window.history.back();
      //window.history.go(-1);
      //console.log("url change " + window.location.href);
      // let delIndex = 0;
      // let a =
      // window.historyContainer === undefined
      //   ? []
      //   : window.historyContainer;
      // for (let m in a) {
      //   if (a[m].name === this.state.screen.name) {
      //     delIndex = m;
      //     break;
      //   }
      // }
      // a.splice(delIndex, 1);
      //console.log(window.location.href)
    });

    let loc = window.location.href.split("/");
    //console.log(loc[loc.length-1])
    //console.log(Screen.HomeScreen);
    if (loc[loc.length - 3] === "components") {
      let undef = loc[loc.length - 2];
      let navScreen;
      for (const s in Screen) {
        //console.log(Screen[s])
        //console.log(s)
        if (Screen[s].name == undef) {
          navScreen = Screen[s];

          break;
        } else {
          navScreen = Screen.LoadingScreen;
        }
      }

      const r = new RouteCreator();
      r.createRouteWithId(navScreen, window.StoreContainer[PRATIBHA_KEY_DEMO_STORE],loc[loc.length-1]);
    } else if(loc[loc.length - 2] === "components"){
      let comp = loc[loc.length - 1];
      //let screen=
      let navScreen;
      for (const s in Screen) {
        //console.log(Screen[s])
        //console.log(s)
        if (Screen[s].name == comp) {
          navScreen = Screen[s];
  
          break;
        } else {
          navScreen = Screen.HomeScreen;
        }
      }
      const r = new RouteCreator();
      r.createRoute(navScreen, window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]);
    } else {
      //throw new Error("Unvalid component route");
      window.location.href = window.location.href + "/components/Home";
    }

    this.setState({
      _g_store_key: window.StoreContainer[PRATIBHA_KEY_DEMO_STORE]
    });
  }
  componentDidMount() {}
  componentWillUnmount() {
    window.removeEventListener(this._remove_route,()=>{

    });
    window.removeEventListener(this.__remove_bm,() => {
      
    });
  }
  render() {
    return (
      <Provider store={store} storeKey={this.state._g_store_key}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <SnackbarContent
              message={
                <span>
                  <b>Free WORLDWIDE Shipping</b>
                </span>
              }
              color="info"
            />
            <FixedHeader />
            <div
              style={{
                minHeight: 600
              }}
            >
              <StackNavigator
                screen={this.state.screen}
                store_key={this.state._g_store_key}
                changeHistory={this.state._change_h}
                lookForComponentId={this.state.lookForComponentId}
                Id={this.state.Id}
              />
            </div>
            <FixedFooter />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
