import { connect } from "react-redux";
import {
  updateFormServiceActionCreator,
  updateMessageTextActionCreator,
  fetchAnswerActionCreator
} from "../redux/reducers/form-reducer";

import Interface from "./Interface";

const mapStateToProps = (state) => ({
  service: state.formReducer.service,
  message_text: state.formReducer.message_text,
  answer: state.formReducer.answer
});

const mapDispatchToProps = (dispatch) => ({
  onServiceChange: (event) =>
    dispatch(updateFormServiceActionCreator(event.target.value)),
  onMessageTextChange: (event) =>
    dispatch(updateMessageTextActionCreator(event.target.value)),
  onSubmit: (event) => {
    event.preventDefault()
    dispatch(fetchAnswerActionCreator())}
});

const InterfaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Interface);

export default InterfaceContainer;
