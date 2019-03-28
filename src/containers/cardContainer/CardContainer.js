import React from 'react';
import { Segment, Card, Label } from 'semantic-ui-react';
import 'containers/cardContainer/CardContainer.css';
import InfoCard from 'components/infoCard/InfoCard';

import _ from 'underscore';

class CardContainer extends React.Component {
    // TODO: render cards here based on filter
    

    render = () => {
        return (
            <Segment basic>
                <Label style={{marginBottom: 16}}>{'DEBUG: ' + JSON.stringify(this.props.filter)}</Label>
                <Card.Group>
                    {_.map(this.props.resources, (resource, index) => <InfoCard key={index + ''} {...resource}/>)}
                </Card.Group>
            </Segment>
        );
    }
}

export default CardContainer;