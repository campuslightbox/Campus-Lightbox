import React from 'react';
import { Header, Segment, Card } from 'semantic-ui-react';
import 'containers/cardContainer/CardContainer.css';
import InfoCard from 'components/infoCard/InfoCard';
import Tags from 'static/Tags';
import _ from 'underscore';
import Fuse from 'fuse.js';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-139413334-1');

class CardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trackNoResults: 'enabled'
        };
    }

    filterResource = (allResources) => {
        // Filtering: OR within the same category, AND between categories

        // Check if filter is empty
        const activeFilters = _.omit(this.props.filter, function (filters, category) {
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
        return _.filter(categoryMatches[0], resource => {
            return _.indexOf(commonNames, resource.name) >= 0;
        });
    }

    searchResource = (allResources) => {
        if (!this.props.searchText) {
            // Empty search string
            return allResources;
        }

        // When searching, search by tag's display name
        const resourcesForSearch = allResources.map(resource => {
            return _.extend(resource, { tagsDisplayNames: resource.tags.map(tag => Tags.getDisplayNameForTag(tag)) })
        });

        const options = {
            keys: ['name', 'tagsDisplayNames'],
            threshold: 0.15,
        };
        const fuse = new Fuse(resourcesForSearch, options);
        return fuse.search(this.props.searchText);
    }

    render = () => {
        let resources = this.filterResource(this.props.resources);
        resources = this.searchResource(resources);

        if (resources.length === 0) {
            if (this.state.trackNoResults === 'enabled') {
                ReactGA.event({
                    category: 'No Reults',
                    action: 'No Results Found Based On Filters/Search'
                });
                this.setState({trackNoResults: 'disabled'}); // TODO: this triggers a warning about how setState should not be called in render
            }

            return (
                <Segment placeholder>
                    <Header icon>
                        Sorry, no results found.<br /><br />
                        Try a different search or filters.
                    </Header>
                </Segment>
            )
        }

        return (
            <Segment basic>
                <Card.Group>
                    {_.map(resources, (resource, index) => <InfoCard key={index.toString()} {...resource} />)}
                </Card.Group>
            </Segment>
        );
    }
}

export default CardContainer;