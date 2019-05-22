import React from 'react';
import { Segment, Icon, Button } from 'semantic-ui-react';

const style = {
    button: {
        marginLeft: 8,
    }
}

class HiringBanner extends React.Component {
    render = () => (
        <Segment inverted textAlign='center' size="small">
            <Icon name='wrench' />
            Want to be part of Project Aurora?  <b>We are hiring!</b>
            <Button
                compact
                size="small"
                style={style.button}
                onClick={() => window.open("https://forms.gle/MtQ4ev8P6A8ojamy9")}
            >Join us</Button>
        </Segment>
    )
}

export default HiringBanner;