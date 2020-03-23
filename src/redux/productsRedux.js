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

// action creators
export const createActionAddFavorite = payload => ({
  payload: payload,
  type: CHANGE_FAVORITE,
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
    default:
      return statePart;
  }
}
