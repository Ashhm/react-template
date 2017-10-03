import {EventEmitter} from 'events';
import AppDispatcher from '../Dispatcher/AppDispatcher';
import Constants from '../Constants/AppConstants';

const CHANGE_EVENT = 'change';

//store of models
const state = {};

const AppStore = Object.assign({}, EventEmitter.prototype, {
  getState() {
    return state;
  },

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

//registering an action type and emitting CHANGE_EVENT
//CHANGE_EVENT inform components about state change
//and force update its own state
AppDispatcher.register(action => {
  switch(action.type) {
    case Constants.EXAMPLE_REQUEST: {
      Store.emitChange();
      break;
    }
    case Constants.EXAMPLE_SUCCESS: {
      Store.emitChange();
      break;
    }
    case Constants.EXAMPLE_FAIL: {
      Store.emitChange();
      break;
    }
    default: {
      console.info('Nothing happend');
    }
  }
});

export default AppStore;
