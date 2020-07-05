import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";
import { Icon } from "semantic-ui-react";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        letter={key.letter}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <CSSTransition
      className="container"
      component="div"
      transitionname="fade"
      transitionentertimeout={800}
      transitionleavetimeout={500}
      transitionappear="true"
      transitionappeartimeout={500}
      timeout={100}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <div>
          {props.counter > 0 && props.doneFlag === 0 ? (
            <div className="ArrowButtons">
              <Icon
                name="arrow left"
                size="big"
                onClick={props.setPreviousQuestion}
                disabled={props.selected}

              />
              <Icon 
              name="arrow right" 
              size="big"
            //  onClick={props.onAnswerSelected}
              />
            </div>
          ) : (
            <div className="rightArrow">
              <Icon
                name="arrow right"
                size="big"
                disabled={!props.selected}
                onClick={props.onAnswerSelected}

              />
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  doneFlag: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  setPreviousQuestion: PropTypes.func.isRequired,
};

export default Quiz;
