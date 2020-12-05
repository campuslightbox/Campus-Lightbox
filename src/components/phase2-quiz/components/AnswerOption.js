import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        defaultChecked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        onClick={props.onAnswerSelected} // aka handleAnswerSelected function in App.js
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        <span>{props.letter}: </span>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  //answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOption;
