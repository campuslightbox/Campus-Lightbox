import React, { Component } from "react";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import logo from "./svg/logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      previousAnswer: "",
      flag: 0,
      selected: false,
      tags: [], // how to return tags correctly based on useranswers (dummy data)
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
   // this.setNextQuestion = this.setNextQuestion.bind(this);

  }

  componentDidMount() {
    const staticAnswerOptions = quizQuestions.map(
      (question) => question.answers
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: staticAnswerOptions[0],
    });
  }

  handleAnswerSelected(e) {
    console.log(e.target.value);
    this.setUserAnswer(e.target.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }



  setUserAnswer(answer) {
    this.setState(
      (state) => ({
        answersCount: {
          ...state.answersCount,
          [answer]: (state.answersCount[answer] || 0) + 1,
          previousAnswerCount: this.state.answersCount,
        },

        answer: answer,
        selected: true,
      }),
      () => {
         console.log(this.state);
      }
    );
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
      previousAnswer: this.state.answer,
      selected: true,
    });
    console.log(this.state);
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    this.setState(
      {
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: this.state.previousAnswer,
        selected: false,
        answersCount: this.state.answersCount.previousAnswerCount,
       // forwardAnswer: this.state.answer
        
      },
      () => {
        console.log(this.state);
      }
    );
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount).sort(function (a, b) {
      return answersCount[b] - answersCount[a];
    });
    //const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const choices = answersCountKeys.includes("previousAnswerCount")
      ? answersCountKeys.length - 1
      : answersCountKeys.length;
    const filterResult = answersCountKeys.filter(
      (x) => x !== "previousAnswerCount"
    );
    return `Top ${choices} resource: ${filterResult}`;
  }

  setResults(result) {
    if (result.length !== 0) {
      this.setState({
        result: result,
        flag: 1,
      }); // set result to result array
    } else {
      this.setState({ result: "Undetermined", flag: 1 });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        doneFlag={this.state.flag}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        selected={this.selected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
