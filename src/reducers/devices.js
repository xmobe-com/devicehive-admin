import constants from '../constants';
import { List, Map } from 'immutable';

const initialState = Map({
  devicesList : List([]),
  device : ``
});

export default function devices(state = initialState, action){
  switch(action.type){
  case constants.devices.GET_DEVICES_REQUEST:
    return state
      .set(`devicesList`, List([]));
  case constants.devices.GET_DEVICES_SUCCESS:
    return state
      .set(`devicesList`, List(action.payload));
  case constants.devices.GET_DEVICES_FAILURE:
    return state;
  case constants.devices.REMOVE_DEVICE_REQUEST:
    return state;
  case constants.devices.REMOVE_DEVICE_SUCCESS:
    return state;
  case constants.devices.REMOVE_DEVICE_FAILURE:
    return state;
  case constants.devices.SET_DEVICE:
    return state
      .set(`device`, action.payload);
  case constants.devices.REMOVE_DEVICE:
    return state
      .set(`device`, ``);
  default:
    return state;
  }
}