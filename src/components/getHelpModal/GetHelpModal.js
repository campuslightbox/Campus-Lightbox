import { Header, Icon, Modal, Table } from "semantic-ui-react";

function GetHelpModal({ isCrisis, setIsCrisis }) {
  // initial state is open so that it will appear immediately if selections match crisis response

  return (
    <Modal
      dimmer="blurring"
      open={isCrisis}
      onClose={() => setIsCrisis(false)}
      closeIcon
    >
      <Modal.Header>Get Help Now </Modal.Header>
      <Modal.Content image>
        <div className="image">
          <Icon name="right arrow" />
        </div>
        <Modal.Description>
          <Header>Help is Available!</Header>
          <p>
            If you or someone else is in immediate danger, or at risk of harming
            yourself or others <strong>CALL 911</strong> and state{" "}
            <strong>"UBC Dispatch"</strong>.
          </p>

          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  National Suicide Crisis Helpline 24/7, Call or Text <Icon name="phone" /> (9-8-8)
                  BC Mental Health & Crisis Response: (310-6789)
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Woman Against Violence Against Women 24/7{" "}
                  <Icon name="phone" />
                  (604-255-6344)
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  UBC Campus Security 24/7 <Icon name="phone" />
                  (604-822-2222)
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default GetHelpModal;
