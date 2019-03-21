import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import './CardContainer.css';
import InfoCard from '../../components/infoCard/InfoCard';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => (
        <Segment basic>
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