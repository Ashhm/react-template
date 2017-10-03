import React, {Component} from 'react';
import AppStore from '../Stores/AppStore';

import './App.less';

//initial state equals state of models in store
//on ANY change in store - fires on __onEmit
//__onEmit - changing state of component and after -
//it should re-render itself and its children
class App extends Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
    this.__onEmit = this.__onEmit.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this.__onEmit);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.__onEmit);
  }

  render() {
    return (
      <div>
        FLUXXX AND REACT
      </div>
    );
  }

  __onEmit() {
    this.setState(AppStore.getState());
  };
}

export default App;