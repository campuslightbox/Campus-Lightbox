// import React from "react";
// import PropTypes from "prop-types";

// function QuestionCount(props) {
//   return (
//     <div className="questionCount">
//       Question <span>{props.counter}</span> of <span>{props.total}</span>
//     </div>
//   );
// }

// QuestionCount.propTypes = {
//   counter: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
// };

// export default QuestionCount;

import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

export default class QuestionCount extends Component {

  render() {
    return (
      <div>
        <Progress percent={(this.props.counter - 1)/this.props.total*100} indicating />
      </div>
    )
  }
}
