const FORM_SERVICE_CHANGE = "FORM_SERVICE_CHANGE";
const FORM_MESSAGE_TEXT_CHANGE = "FORM_MESSAGE_TEXT_CHANGE";
const FORM_ANSWER_CHANGE = "FORM_ANSWER_CHANGE";
const GET_ANSWER = "GET_ANSWER";
const UPDATE_ANSWER = "UPDATE_ANSWER";

const init = {
  service: "aois-service-lab3",
  message_text: "",
  answer: ""
};

const formReducer = (state = init, action) => {
  console.log(action)
  switch (action.type) {
    case FORM_SERVICE_CHANGE:
      return {
        ...state,
        service: action.content,
      };
    case FORM_MESSAGE_TEXT_CHANGE:
      return {
        ...state,
        message_text: action.content,
      };

    case FORM_ANSWER_CHANGE:
      console.log(action)
      return {
        ...state,
        answer: action.content
      }
     
    case UPDATE_ANSWER: 
        return  {
          ...state,
          answer: action.content
        };
    
    default:
      return {
        ...state,
      };
    
  }
};


export const updateAnswerActionCreator = (text) => ({
  type: UPDATE_ANSWER,
  content: text,
});

export const fetchAnswerActionCreator = () => ({
  type: GET_ANSWER,
  content: null,
});

export const updateFormServiceActionCreator = (updated) => ({
  type: FORM_SERVICE_CHANGE,
  content: updated,
});

export const updateMessageTextActionCreator = (updated) => ({
  type: FORM_MESSAGE_TEXT_CHANGE,
  content: updated,
});

export default formReducer;
