import { updateAnswerActionCreator } from './reducers/form-reducer'

const loggingMiddleware = (store) => (next) => (action) => {
  if (!action.type || action.type !== "GET_ANSWER") {
    return next(action);
  }
  let message = {
    from: "view",
    to: store.getState().formReducer.service,
    text: store.getState().formReducer.message_text,
  };

  fetch("http://localhost:8049/api/dispatch", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:8049",
    },
    body: JSON.stringify(message),
    mode: 'cors'
  })
  .then(resp => resp.json())
  .then(json => {
    store.dispatch(updateAnswerActionCreator(json.text))
  }).catch( () => store.dispatch(updateAnswerActionCreator("Service not response")))
};

export default loggingMiddleware;
