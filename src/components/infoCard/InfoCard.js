import React from 'react';
import { Button, Card, Image, Icon, Popup } from 'semantic-ui-react';
import Tags from 'static/Tags';

import _ from 'underscore';
import moment from 'moment';

const style= {
    infoCard: {
        width: 260,
    },
    infoCardSection: {
        flexGrow: 0,
    },
    infoCardLast: {
        flexGrow: 1,
        border: 'none',
        padding: 0,
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
                {this.props.hours && this.renderTodayHours()}
                <Card.Meta style={{marginTop: 8}}>
                    {_.map(this.props.tags, tag => this.renderTagIcon(tag))}
                </Card.Meta>
            </Card.Content>
        ];
    }

    renderTodayHours = () => {
        // Check if resource is 24/7
        if (this.props.tags.indexOf('allday') > -1) {
            return (
                <Card.Meta>
                    <Icon name='circle' color="green"/>
                    Open 24 / 7
                    <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                </Card.Meta>
            );
        }

        const todayDay = moment().format('dddd').toLowerCase();

        if (this.props.hours[todayDay]) {
            const hoursString = this.props.hours[todayDay];

            const openString = hoursString.split('-')[0];
            const closeString = hoursString.split('-')[1];

            const todayOpen = moment(openString, "h:mma");
            const todayClose = moment(closeString, "h:mma");
            const isOpen = moment().isBetween(todayOpen, todayClose);

            const iconColor = isOpen ? 'green' : 'red';

            return (
                <Card.Meta>
                    <Icon name='circle' color={iconColor}/>
                    {this.props.hours[todayDay]}
                    <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                </Card.Meta>
            );
        } else {
            if (this.props.hours.others) {
                // Resource has alternative hours
                return (
                    <Card.Meta>
                        View Hours Information
                        <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                    </Card.Meta>
                );
            } else {
                // Resource is closed
                return (
                    <Card.Meta>
                        <Icon name='circle' color="red"/>
                        Closed
                        <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                    </Card.Meta>
                );
            }
        }
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

    renderName = () => {
        return (
            <Card.Content key="back-header" style={style.infoCardSection}>
                <Card.Header style={{float: 'left'}}>{this.props.name}</Card.Header>
            </Card.Content>
        );
    }

    renderPhoneNumber = () => {
        const link = 'tel://1-' + this.props.phone;

        return (
            <Card.Content key="back-contact" style={style.infoCardSection}>
                <Card.Header>Phone number</Card.Header>
                <Card.Description><a href={link} target="_blank" rel="noopener noreferrer">{this.props.phone}</a></Card.Description>
            </Card.Content>
        );
    }

    renderAddress = () => {
        const link = 'https://maps.google.com/?q=' + this.props.address;

        return (
            <Card.Content key="back-address" style={style.infoCardSection}>
                <Card.Header>Address</Card.Header>
                {this.props.address && <Card.Description><a href={link} target="_blank" rel="noopener noreferrer">{this.props.address}</a></Card.Description>}
            </Card.Content>
        );
    }

    renderSocialAndEmail = () => {
        return (
            <Card.Content key="back-social-email" style={style.infoCardSection}>
                <Card.Header>Social</Card.Header>
                <Card.Description>
                    <Button.Group basic size="tiny">
                        {
                            this.props.social && this.props.social.website && 
                            <Popup trigger={<Button icon='world' onClick={() => window.open(this.props.social.website)}/>}
                            content='Visit website' basic size='small'/>}
                        {this.props.social && this.props.social.facebook && <Popup trigger={<Button icon='facebook' onClick={() => window.open(this.props.social.facebook)}/>}
                            content='Visit Facebook' basic size='small'/>}
                    </Button.Group>
                </Card.Description>
                {
                    this.props.email &&
                    <Card.Description style={{marginTop: 4}}>
                        <Icon name='mail outline'/>
                        <a href={'mailto:' + this.props.email} target="_blank" rel="noopener noreferrer">{this.props.email}</a>
                    </Card.Description>
                }
            </Card.Content>
        );
    }

    renderHours = () => {
        if (!this.props.hours) {
            return;
        }

        const content = [];

        if (this.props.hours.others) {
            content.push(<Card.Description key='others'>{this.props.hours.others}</Card.Description>);
        } else {
            const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            _.each(days, (dayInWeek, index) => {
                const hoursForDay = this.props.hours[dayInWeek];
                const isToday = (index + 1) === moment().isoWeekday();

                content.push(
                    <Card.Description key={dayInWeek}>
                        {this._capitalize(dayInWeek).slice(0, 3)}: {!hoursForDay ? 'Closed' : hoursForDay}
                        {isToday && <Icon name='star' size='small' style={{marginLeft:4}}/>}
                    </Card.Description>
                );
            });
        }

        return (
            <Card.Content key="back-hours" style={style.infoCardSection}>
                <Card.Header>Hours of Operation</Card.Header>
                {content}
            </Card.Content>
        );
    }

    renderNotes = () => {
        if (!this.props.notes) {
            return;
        }

        return (
            <Card.Content key="back-notes" style={style.infoCardSection}>
                <Card.Header>Notes</Card.Header>
                {this.props.notes}
            </Card.Content>
        );
    }

    renderLastElement = () => {
        // Hack to make sure button sticks to the bottom of the card
        return (
            <Card.Content key="back-last" style={style.infoCardLast} />
        )
    }

    _capitalize = (text) => {
        if (!text || text.length < 1) {
            return;
        } else {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
    }

    renderBack = () => {
        const views = [this.renderName()];

        if (this.props.phone) {
            views.push(this.renderPhoneNumber());
        }

        if (this.props.address) {
            views.push(this.renderAddress());
        }

        if (this.props.email || this.props.social) {
            views.push(this.renderSocialAndEmail());
        }

        if (this.props.hours) {
            views.push(this.renderHours());
        }

        if (this.props.notes) {
            views.push(this.renderNotes());
        }

        views.push(this.renderLastElement());

        return views;
    }

    render = () => (
        <Card style={style.infoCard}>
            {this.state.side === "front" ? this.renderFront() : this.renderBack()}
            {
                this.state.side === "front" ? 
                    <Button attached='bottom' onClick={this.onContactButtonClick}>View Details</Button> : 
                    <Button attached='bottom' icon onClick={this.onCloseButtonClick}><Icon name='close'/> Go Back</Button>
            }
        </Card>
    )
}

export default InfoCard;