import React, { useState } from "react";
import { Icon, Button, Modal, Header, Table } from "semantic-ui-react";

const CrisisResponse = () => {
  const [open, setOpen] = useState(true);
  // initial state is open so that it will appear immediately if users select suicidal,selfHarm,high
  return (
    <Modal
      dimmer="blurring"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button
          onClick={() => setOpen(true)}
          color="red"
          style={{ marginLeft: "45%" }}
        >
          <Icon name="heart outline" />
          Crisis Response
        </Button>
      }
      closeIcon
    >
      <Modal.Header>Get Help Now</Modal.Header>
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
                  Crisis Center Line 24/7 <Icon name="phone" /> (604-872-3311)
                  BC-Wide: (1-800-784-2433)
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
};

export default CrisisResponse;
