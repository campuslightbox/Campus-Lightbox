import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import 'containers/cardContainer/CardContainer.css';
import InfoCard from 'components/infoCard/InfoCard';

import _ from 'underscore';

class CardContainer extends React.Component {
    filterResource = (allResources) => {
        // Filtering: OR within the same category, AND between categories

        // Check if filter is empty
        const activeFilters = _.omit(this.props.filter, function(filters, category) {
            return filters.length <= 0;
        });
        
        // No filters applied, return everything
        if (_.isEmpty(activeFilters)) {
            return allResources;
        }

        let categoryMatches = _.map(activeFilters, (filters, category) => {
            return _.filter(allResources, resource => {
                return _.intersection(resource.tags, filters).length > 0
            });
        });

        const categoryWithNames = _.map(categoryMatches, category => {
            return _.map(category, resource => {
                return resource.name;
            })
        });

        const commonNames = _.intersection(...categoryWithNames);

        // We know categoryMatches is not empty, access it to get resources in object format
        return  _.filter(categoryMatches[0], resource => {
            return _.indexOf(commonNames, resource.name) >= 0;
        });
    }

    render = () => {
        const filteredResource = this.filterResource(this.props.resources);

        return (
            <Segment basic>
                <Card.Group>
                    {_.map(filteredResource, (resource, index) => <InfoCard key={index + ''} {...resource}/>)}
                </Card.Group>
            </Segment>
        );
    }
}

export default CardContainer;