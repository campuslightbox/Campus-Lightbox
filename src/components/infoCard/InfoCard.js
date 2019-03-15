import React from 'react';
import { Button, List, Card, Label, Image, Icon } from 'semantic-ui-react';
import './InfoCard.css';
import _ from 'underscore';

const style={
    infoCard: {
        width: 260,
    }
}

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => (
        <Card style={style.infoCard}>
            <Image
                src='https://ubyssey.storage.googleapis.com/media/images/2016/11/jack-skate-1-2_A1HlLVn-medium.jpg'
                size='medium'
            />
            <Card.Content>
                <Card.Header>UBC Counselling</Card.Header>
                <Card.Description>If you're feeling persistently stressed, anxious, or sad, make an appointment with a Wellness Advisor.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='tag' />
                    On campus, Professional
                </a>
            </Card.Content>
        </Card>
    )
}

export default InfoCard;