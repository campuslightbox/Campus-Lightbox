import { Button, Form, Message, Modal } from "semantic-ui-react";

import React from "react";

const styles = {
  title: {
    fontSize: 20,
  },
  textValue: {
    fontSize: 14,
  },
};
// this component can still be class component?
// this component is used in Footer and InforCard flag as well

class FeedbackModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: this.props.subject,
      message: this.props.message,
      sent: false,
      error: false,
    };
  }

  onChange = (_, { name, value }) => {
    this.setState({ [name]: value });
  };

  onClose = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: false,
      error: false,
    });
  };

  onSubmitFeedback = () => {
    console.log(this.state);

    window.emailjs
      .send("mailgun", "template_qCO0QsXD", {
        name: this.state.name || "(Empty)",
        email: this.state.email || "(Empty)",
        subject: this.state.subject,
        message: this.state.message,
      })
      .then((res) => {
        this.setState({
          sent: true,
          error: false,
        });
      })
      .catch((err) => {
        this.setState({
          sent: false,
          error: true,
        });
        console.error("Failed to send feedback. Error: ", err);
      });
  };

  render = () => (
    <Modal trigger={this.props.trigger} onClose={this.onClose} closeIcon>
      <Modal.Header style={styles.title}>
        Have feedback, questions, comments, or want to reach out to us? Send us
        a message here, or email us at admin@campuslightbox.com.
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form success={this.state.sent} error={this.state.error}>
            <Form.Group>
              <Form.Input
                width={4}
                label="Name (Optional)"
                name="name"
                value={this.state.name}
                style={styles.textValue}
                onChange={this.onChange}
              />
              <Form.Input
                width={14}
                label="Your Email Address (Required if you would like a response. If not, Optional)"
                name="email"
                value={this.state.email}
                style={styles.textValue}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Input
              label="Subject"
              name="subject"
              value={this.state.subject}
              style={styles.textValue}
              onChange={this.onChange}
            />
            <Form.TextArea
              label="Message"
              name="message"
              value={this.state.message}
              style={styles.textValue}
              onChange={this.onChange}
            />
            <Message
              success
              header="Feedback Sent!"
              content="Thank you for helping us help you better :)"
            />
            <Message
              error
              header="Opps..."
              content="Something went wrong when trying to send this feedback :("
            />
            <Button
              type="submit"
              color="green"
              disabled={!this.state.message || !this.state.subject}
              onClick={this.onSubmitFeedback}
            >
              Submit
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

FeedbackModal.defaultProps = {
  trigger: <Button color="orange">Feedback</Button>,
  subject: "",
  message: "hello",
};

export default FeedbackModal;
