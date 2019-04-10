import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [
    {
      id: 1,
      title: "React Oficial Doc",
      link: "https://reactjs.org/docs/getting-started.html"
    },
    {
      id: 1,
      title: "Redux Oficial Doc",
      link: "https://redux.js.org/introduction/getting-started"
    }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;