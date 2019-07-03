import { connect } from "react-redux";
//import {PRATIBHA_KEY_DEMO} from './../store/key/storeKey';

export class DynamicConnect {
  constructor(key) {
    this._key = key;
  }
  connect = (mapStateToProps, mapDispatchToProps, mergeProps, options = {}) => {
    options.storeKey = this.key;
    return connect(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps,
      options
    );
  };
}
