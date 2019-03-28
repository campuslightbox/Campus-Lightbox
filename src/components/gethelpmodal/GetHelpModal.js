import React, { Component } from 'react'
import { Icon, Button, Modal, Header, Table } from 'semantic-ui-react'

export default class MenuHeader extends Component {
    render() {
        return (
            <Modal dimmer="blurring" trigger={<Button color="red"><Icon name='heart outline' />Get Help Now</Button>} closeIcon>
                <Modal.Header>Get Help Now</Modal.Header>
                <Modal.Content image>
                    <div className='image'>
                        <Icon name='right arrow' />
                    </div>
                    <Modal.Description>
                        <Header>Help is Available!</Header>
                        <p>If you or someone else is in immediate danger,
                            or at risk of harming yourself or others <strong>CALL 911</strong> and
                            state <strong>"UBC Dispatch"</strong>.</p>

                        <Table definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Crisis Center Line
                                        24/7 <Icon name="phone" /> (604-872-3311)
                                        BC-Wide: (1-800-784-2433)
                                    </Table.Cell>
                                    <Table.Cell>“Here to Listen, Here to Help” - Crisis Center is committed to helping people help themselves and others deal with crisis
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Woman Against Violence Against Women
                                        24/7 <Icon name="phone" />
                                        (604-255-6344)
                                    </Table.Cell>
                                    <Table.Cell>WAVAW provides support services to survivors of sexulized volence who have shared experiences of gender marginalization.
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>UBC Campus Security
                                        24/7 <Icon name="phone" />
                                        (604-822-2222)
                                    </Table.Cell>
                                    <Table.Cell>The UBC Campus Security focuses on the delivery of safety and security services to everyone within the UBC community
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>





                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}
