/* selectors */
//export const getAll = ({ products }) => products;

// action name creator
const reducerName = 'deviceMode';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const UPDATE_DEVICE_MODE = createActionName('UPDATE_DEVICE_MODE');

// action creators
export const createActionUpdateDeviceMode = payload => ({
  payload: payload,
  type: UPDATE_DEVICE_MODE,
});

/* reducer */
export default function reducer(statePart = '', action = '') {
  switch (action.type) {
    case UPDATE_DEVICE_MODE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
