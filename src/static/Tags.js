import _ from 'underscore';

const tags = {
    onCampus:           {category: "location", displayName: "On Campus", iconName: "location arrow"},
    offCampus:          {category: "location", displayName: "Off Campus", iconName: "bicycle"},
    online:             {category: "location", displayName: "Online", iconName: "computer"},
    hotline:            {category: "location", displayName: "Telephone", iconName: "phone"},

    medical:            {category: "type", displayName: "Medical", iconName: "heartbeat"},
    professional:       {category: "type", displayName: "Professional", iconName: "doctor"},
    peer:               {category: "type", displayName: "Peer", iconName: "group"},
    generalAwareness:   {category: "type", displayName: "General Awareness", iconName: "bullhorn"},

    appointment:        {category: "availability", displayName: "Appointment-Based", iconName: "calendar"},
    recurring:          {category: "availability", displayName: "Recurring Meetings", iconName: "sync alternate"},
    walkIn:             {category: "availability", displayName: "Walk-in", iconName: "street view"},
    events:             {category: "availability", displayName: "Events", iconName: "clipboard outline"},
    allday:             {category: "availability", displayName: "24/7", iconName: "battery full"},

    sexualHealthAssault:{category: "additional", displayName: "Sexual Health / Assault", iconName: "venus mars"},
    financial:          {category: "additional", displayName: "Financial", iconName: "dollar"},
    academic:           {category: "additional", displayName: "Academic", iconName: "book"},
    spiritual:          {category: "additional", displayName: "Spiritual", iconName: "lightbulb"},
    disability:         {category: "additional", displayName: "Disability", iconName: "wheelchair"},
    substanceAbuse:     {category: "additional", displayName: "Substance Abuse", iconName: "medkit"},
    lgbt:               {category: "additional", displayName: "LGBTQ+", iconName: "transgender"},
    womensHealth:       {category: "additional", displayName: "Women's Health", iconName: "woman"},
    selfHarm:           {category: "additional", displayName: "Self Harm", iconName: "heart"},
}

export default {
    getAllTags: () => tags,
    getAllTagKeys: () => _.keys(tags),
    getCategories: () => _.uniq(_.map(_.values(tags), obj => obj.category)),

}