import { Button, Form, Message, Modal } from "semantic-ui-react";

import React, {useState} from "react";

const styles = {
  title: {
    fontSize: 20,
  },
  textValue: {
    fontSize: 14,
  },
};
function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleNameInput = e => {
    setName(e.target.value);
  }
  
  const handleEmailInput = e => {
    setEmail(e.target.value);
  }

  const handleSubjectInput = e => {
    setSubject(e.target.value);
  }

  const handleMessageInput = e => {
    setMessage(e.target.value);
  }

  const onSubmitFeedback = () => {
    // console.log(this.state);

    window.emailjs
      .send("mailgun", "template_qCO0QsXD", {
        name: {name} || "(Empty)",
        email: {email} || "(Empty)",
        subject: {subject},
        message: {message},
      })
      .then((res) => {
        setSent(true);
        setError(false);
      })
      .catch((err) => {
        setSent(false);
        setError(true);
        console.error("Failed to send feedback. Error: ", err);
      });
  };

  return (
    <Modal 
      trigger={<Button color="orange">Give Us Feedback</Button>} 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open = {open} 
      closeIcon>
      <Modal.Header style={styles.title}>
        Have feedback, questions, comments, or want to reach out to us? Send us
        a message here, or email us at admin@campuslightbox.com.
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form success={sent} error={error}>
            <Form.Group>
              <Form.Input
                width={4}
                label="Name (Optional)"
                name="name"
                style={styles.textValue}
                onChange={handleNameInput}
                value={name}
              />
              <Form.Input
                width={14}
                label="Your Email Address (Required if you would like a response. If not, Optional)"
                name="email"
                style={styles.textValue}
                onChange={handleEmailInput}
                value={email}
              />
            </Form.Group>
            <Form.Input
              label="Subject"
              name="subject"
              style={styles.textValue}
              onChange={handleSubjectInput}
              value={subject}
            />
            <Form.TextArea
              label="Message"
              name="message"
              style={styles.textValue}
              onChange={handleMessageInput}
              value={message}
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
              disabled={!message || !subject}
              onClick={onSubmitFeedback}
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
  message: "",
};

export default FeedbackModal;
