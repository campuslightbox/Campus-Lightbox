import React from 'react';
import { Segment, Card, Label } from 'semantic-ui-react';
import 'containers/cardContainer/CardContainer.css';
import InfoCard from 'components/infoCard/InfoCard';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    // TODO: render cards here based on filter
    render = () => (
        <Segment basic>
            <Label style={{marginBottom: 16}}>{'DEBUG: ' + JSON.stringify(this.props.filter)}</Label>
            <Card.Group>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </Card.Group>
        </Segment>
    )
}

export default CardContainer;