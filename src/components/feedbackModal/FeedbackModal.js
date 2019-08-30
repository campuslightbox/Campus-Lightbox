import React from 'react';
import { Modal, Button, Form, Message } from 'semantic-ui-react';

const styles = {
    textValue: {
        fontSize: 14,
    }
}

class FeedbackModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            feedback: "",
            sent: false,
            error: false,
        }
    }

    onChange = (_, {name, value}) => {
        this.setState({[name]: value});
    }

    onClose = () => {
        this.setState({
            name: "",
            email: "",
            feedback: "",
            sent: false,
            error: false,
        });
    }

    onSubmitFeedback = () => {
        console.log(this.state);

        window.emailjs.send(
            'mailgun',
            'template_SXphDtLl',
            {
                name: this.state.name || "Anonymous",
                email: this.state.email || "Anonymous",
                feedback: this.state.feedback,
            })
            .then(res => {
                this.setState({
                    sent: true,
                    error: false,
                });
            })
            .catch(err => {
                this.setState({
                    sent: false,
                    error: true,
                });
                console.error('Failed to send feedback. Error: ', err);
            })
    }

    render = () => (
        <Modal trigger={<Button color='orange'>Give Us Feedback</Button>} onClose={this.onClose}>
            <Modal.Content>
                <Modal.Description>
                    <Form success={this.state.sent} error={this.state.error}>
                        <Form.TextArea
                            label='Feedback'
                            name="feedback"
                            value={this.state.feedback}
                            placeholder='Tell us what you think...'
                            style={styles.textValue}
                            onChange={this.onChange}
                        />
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                label='Name'
                                name="name"
                                value={this.state.name}
                                placeholder='Optional'
                                style={styles.textValue}
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                label='Email'
                                name="email"
                                value={this.state.email}
                                placeholder='Optional'
                                style={styles.textValue}
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Message
                            success
                            header='Feedback Sent!'
                            content="Thank you for helping us help you better :)"
                        />
                        <Message
                            error
                            header='Opps...'
                            content="Something went wrong when trying to send this feedback :("
                        />
                        <Button
                            type='submit'
                            color="green"
                            disabled={!this.state.feedback}
                            onClick={this.onSubmitFeedback}
                        >Submit</Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default FeedbackModal;