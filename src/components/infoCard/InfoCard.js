import React from 'react';
import { Button, Card, Image, Icon, Popup } from 'semantic-ui-react';
import 'components/infoCard/InfoCard.css';
import Tags from 'static/Tags';

import _ from 'underscore';

const style={
    infoCard: {
        width: 260,
    },
    link: {
        color: 'blue',
    }
}

class InfoCard extends React.Component {
    constructor(props) {
        super(props);

        this.allTags = Tags.getAllTags();

        this.state = {
            side: "front",
        }
    }

    onContactButtonClick = () => {
        this.setState({side: "back"});
    }

    onCloseButtonClick = () => {
        this.setState({side: "front"});
    }

    renderFront = () => {
        return [
            <Image
                src={this.props.logo || 'https://i0.wp.com/www.littlebitesofbeauty.com/wp-content/uploads/2015/06/default-placeholder.png?zoom=2&resize=1170%2C658&ssl=1'}
                size='medium'
                key="front-image"
                style={{objectFit: "cover", height: 200}}
            />,
            <Card.Content key="front-content">
                <Card.Header>{this.props.name}</Card.Header>
                <Card.Description>{this.props.description}</Card.Description>
            </Card.Content>,
            <Card.Content key="front-extra" extra>
                <Card.Meta><Icon name='circle' color="green"/>9am - 3pm<Icon name='caret down'/></Card.Meta>
                <Card.Meta style={{marginTop: 8}}>
                    {_.map(this.props.tags, tag => this.renderTagIcon(tag))}
                </Card.Meta>
                <Button onClick={this.onContactButtonClick} style={{marginTop: 18}} fluid>View Details</Button>
            </Card.Content>
        ];
    }

    renderTagIcon = (tag) => {
        const displayName = this.allTags[tag].displayName;
        const iconName = this.allTags[tag].iconName;

        return <Popup
            trigger={<Icon name={iconName} />}
            content={displayName}
            key={tag}
            size='small'
            basic
        />;
    }

    renderBack = () => {
        return [
            <Card.Content key="back-header">
                <Card.Header style={{color: '#0E6EB8', float: 'left'}}>{this.props.name}</Card.Header>
            </Card.Content>,
            <Card.Content key="back-contact">
                <Card.Header>Phone number</Card.Header>
                <Card.Description>{this.props.phone}</Card.Description>
            </Card.Content>,
            <Card.Content key="back-address">
                <Card.Header>Address</Card.Header>
                <Card.Description>{this.props.address}</Card.Description>
            </Card.Content>,
            <Card.Content key="back-hours">
                <Card.Header>Hours of Operation</Card.Header>
                <Card.Description>Monday: 9:00 - 15:00</Card.Description>
                <Card.Description>Tuesday: 9:00 - 15:00</Card.Description>
                <Card.Description>Wednesday: 9:00 - 15:00</Card.Description>
                <Card.Description>Thursday: 9:00 - 15:00</Card.Description>
                <Card.Description>Friday: 9:00 - 15:00</Card.Description>
                <Card.Description>Saturday: Closed</Card.Description>
                <Card.Description>Sunday: Closed</Card.Description>
                <Button icon onClick={this.onCloseButtonClick} style={{marginTop: 18}} fluid><Icon name='close'/> Go Back</Button>
            </Card.Content>,
        ];
    }

    render = () => (
        <Card style={style.infoCard}>
            {this.state.side === "front" ? this.renderFront() : this.renderBack()}
        </Card>
    )
}

export default InfoCard;