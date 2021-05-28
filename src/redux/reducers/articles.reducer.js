import { FETCH_ARTICLES } from "../constants/actionTypes";
const initialState = {
  articles: [], // uses like for stepper in about // like in articles masonry
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES: {
      return { ...state, articles: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
