/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getOffer = ({ products }) => products.filter(item => item.offer === true);

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');
export const UPDATE_USER_RATE = createActionName('UPDATE_USER_RATE');

// action creators
export const createActionAddFavorite = payload => ({
  payload: payload,
  type: CHANGE_FAVORITE,
});
export const createActionUpdateUserRate = payload => ({
  payload: payload,
  type: UPDATE_USER_RATE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE: {
      for (let i = 0; i < statePart.length; i++) {
        if (statePart[i].id === action.payload) {
          statePart[i].favorite = !statePart[i].favorite;
        }
      }
      return [...statePart];
    }
    case UPDATE_USER_RATE: {
      for (let i = 0; i < statePart.length; i++) {
        if (statePart[i].id === action.payload.id) {
          statePart[i].userRate = action.payload.rating;
        }
      }
      return [...statePart];
    }
    default:
      return statePart;
  }
}
