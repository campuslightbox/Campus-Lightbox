import _ from 'underscore';

const tags = {
    onCampus:           {category: "location", displayName: "On Campus", iconName: "location arrow"},
    offCampus:          {category: "location", displayName: "Off Campus", iconName: "bicycle"},
    online:             {category: "location", displayName: "Online", iconName: "computer"},
    hotline:            {category: "location", displayName: "Hotline", iconName: "phone"},

    medical:            {category: "type", displayName: "Medical", iconName: "medkit"},
    professional:       {category: "type", displayName: "Professional", iconName: "doctor"},
    peer:               {category: "type", displayName: "Peer", iconName: "group"},
    generalAwareness:   {category: "type", displayName: "General Awareness", iconName: "bullhorn"},

    appointment:        {category: "availability", displayName: "Appointment Available", iconName: "calendar"},
    recurring:          {category: "availability", displayName: "Recurring", iconName: "sync alternate"},
    walkIn:             {category: "availability", displayName: "Walk-in", iconName: "blind"},

    sexualHealthAssult: {category: "additional", displayName: "Sexual Health / Assault", iconName: "venus mars"},
    financial:          {category: "additional", displayName: "Financial", iconName: "dollar"},
    academic:           {category: "additional", displayName: "Academic", iconName: "book"},
    spiritual:          {category: "additional", displayName: "Spiritual", iconName: "lightbulb"},
}

export default {
    getAllTags: () => tags,
    getAllTagKeys: () => _.keys(tags),
    getCategories: () => _.uniq(_.map(_.values(tags), obj => obj.category)),

}