export class BrowserManager {
  constructor(_window) {
    this._window = _window;
  }
  updateRoute(_state, _title, _dNmae) {
    this._window.history.pushState(_state, _title, _dNmae);
  }
}
