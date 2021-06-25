import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import React from "react";

function Result(props) {
  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionname="fade"
      transitionentertimeout={800}
      transitionleavetimeout={500}
      transitionappear="true"
      transitionappeartimeout={500}
      timeout={100}
    >
      <div>
        <strong>{props.quizResult}</strong>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
