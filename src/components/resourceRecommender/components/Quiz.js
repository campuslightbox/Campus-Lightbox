import "../ResourceRecommender.css";

import React, { useState } from "react";

import AnswerOption from "./AnswerOption";
import { CSSTransition } from "react-transition-group";
import GetHelpModal from "../../getHelpModal/GetHelpModal";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import { logicChecker } from "../helper/logicHelper";

// Refactor note: Need to turn App.js into functional component to use Context
function Quiz(props) {
  const [isCrisis, setIsCrisis] = useState(true);
  // const [CRState, setCRState] = useState(null);
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
  function renderWelcome() {
    return (
      <div className="welcomeContainer">
        <p>
          {" "}
          Welcome to the resource finder! Our tool is meant to help you find a
          resource based on your mental health needs. Please note: The
          information provided by this tool is not meant to substitute
          professional medical advice, diagnosis or treatment.{" "}
        </p>
        <p>
          We will try to recommend a resource based on your needs and
          preferences however we cannot guarantee that all your preferences will
          be met.
        </p>

        <button onClick={props.handleClick} className="welcome">
          {" "}
          I understand{" "}
        </button>
      </div>
    );
  }

  const crisisResponse = logicChecker(props.answerLists);

  return crisisResponse && props.counter < 3 ? (
    <>
      <GetHelpModal isCrisis={isCrisis} setIsCrisis={setIsCrisis} />
      <>
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <div>
          {props.counter > 0 && props.doneFlag === 0 ? (
            props.answerLists[props.counter] === undefined ? (
              <div className="ArrowButtons">
                <Icon
                  name="arrow left"
                  size="big"
                  onClick={() => {
                    props.setPreviousQuestion();
                    // handleCRState();
                  }}
                  disabled={props.selected}
                />
                <Icon
                  name="arrow right"
                  size="big"
                  disabled={true}
                  onClick={(e) => props.onAnswerSelected(e, props.answer)}
                />
              </div>
            ) : (
              <div className="ArrowButtons">
                <Icon
                  name="arrow left"
                  size="big"
                  onClick={() => {
                    props.setPreviousQuestion();
                    // handleCRState();
                  }}
                  disabled={props.selected}
                />
                <Icon
                  name="arrow right"
                  size="big"
                  disabled={false}
                  onClick={(e) => props.onAnswerSelected(e, props.answer)}
                />
              </div>
            )
          ) : props.answerLists[0] === undefined ? (
            <div className="rightArrow">
              <Icon
                name="arrow right"
                size="big"
                disabled={true}
                onClick={(e) => props.onAnswerSelected(e, props.answer)}
              />
            </div>
          ) : (
            <div className="rightArrow">
              <Icon
                name="arrow right"
                size="big"
                disabled={false}
                onClick={(e) => props.onAnswerSelected(e, props.answer)}
                //call on answer selected
              />
            </div>
          )}
        </div>
        <br />
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />{" "}
      </>
    </>
  ) : (
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
        {props.counter === -1 ? (
          renderWelcome()
        ) : (
          <>
            {" "}
            <Question content={props.question} />
            <ul className="answerOptions">
              {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <div>
              {props.counter > 0 && props.doneFlag === 0 ? (
                props.answerLists[props.counter] === undefined ? (
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
                      disabled={true}
                      // onClick={props.onAnswerSelected()}
                      onClick={(e) => props.onAnswerSelected(e, props.answer)}
                    />
                  </div>
                ) : (
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
                      // onClick={props.onAnswerSelected()}
                      disabled={false}
                      onClick={(e) => props.onAnswerSelected(e, props.answer)}
                    />
                  </div>
                )
              ) : props.answerLists[0] === undefined ? (
                <div className="rightArrow">
                  <Icon
                    name="arrow right"
                    size="big"
                    disabled={true}
                    onClick={(e) => props.onAnswerSelected(e, props.answer)}
                  />
                </div>
              ) : (
                <div className="rightArrow">
                  <Icon
                    name="arrow right"
                    size="big"
                    disabled={false}
                    onClick={(e) => props.onAnswerSelected(e, props.answer)}
                    //call on answer selected
                  />
                </div>
              )}
            </div>
            <br />
            <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            />{" "}
          </>
        )}
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
  answerLists: PropTypes.array.isRequired,
};

export default Quiz;
