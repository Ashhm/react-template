import AppDispatcher from '../Dispatcher/AppDispatcher';
import Constants from '../Constants/AppConstants';
import * as AppAPI from '../utils/AppAPI';

const AppActions = {
  async exampleActionGet() {
    AppDispatcher.dispatch({
      type: Constants.EXAMPLE_REQUEST
    });

    try {
      const result = await AppAPI.exampleGet();
      AppDispatcher.dispatch({
        type: Constants.EXAMPLE_SUCCESS,
        data: result
      })
    } catch (err) {
      AppDispatcher.dispatch({
        type: Constants.EXAMPLE_FAIL,
        error: err
      })
    }

  },

  async exampleActionPost(data) {
    AppDispatcher.dispatch({
      type: Constants.EXAMPLE_REQUEST
    });

    try {
      const result = await AppAPI.examplePost(data);
      AppDispatcher.dispatch({
        type: Constants.EXAMPLE_SUCCESS,
        data: result
      })
    } catch (err) {
      AppDispatcher.dispatch({
        type: Constants.EXAMPLE_FAIL,
        error: err
      })
    }

  }
};

export default AppActions;