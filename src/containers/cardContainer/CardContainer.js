import React from 'react';
import { Segment, Card, Label } from 'semantic-ui-react';
import 'containers/cardContainer/CardContainer.css';
import InfoCard from 'components/infoCard/InfoCard';

import _ from 'underscore';

class CardContainer extends React.Component {
    filterResource = (allResources) => {
        // Filtering: OR within the same category, AND between categories

        // Check if filter is empty
        const numFilters = _.reduce(this.props.filter, (sum, filterArr) => {
            return sum + filterArr.length;
        }, 0);

        if (numFilters <= 0) {
            return allResources;
        }

        let categoryMatches = _.map(this.props.filter, (filters, category) => {
            return _.filter(allResources, resource => {
                return _.intersection(resource.tags, filters).length > 0
            });
        });

        // Drop empty categories
        categoryMatches = categoryMatches.filter(arr => arr.length > 0);
        console.log(categoryMatches);

        const categoryWithNames = _.map(categoryMatches, category => {
            return _.map(category, resource => {
                return resource.name;
            })
        });

        const commonNames = _.intersection(...categoryWithNames);

        console.log(commonNames);

        // We know categoryMatches is not empty, access it to get resources in object format
        return  _.filter(categoryMatches[0], resource => {
            return _.indexOf(commonNames, resource.name) >= 0;
        });
    }

    render = () => {
        const filteredResource = this.filterResource(this.props.resources);

        return (
            <Segment basic>
                <Label style={{marginBottom: 16}}>{'DEBUG: ' + JSON.stringify(this.props.filter)}</Label>
                <Card.Group>
                    {_.map(filteredResource, (resource, index) => <InfoCard key={index + ''} {...resource}/>)}
                </Card.Group>
            </Segment>
        );
    }
}

export default CardContainer;