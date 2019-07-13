import _ from 'underscore';

const tags = {
    online:             {category: "location", displayName: "Online", color: "red"},
    hotline:            {category: "location", displayName: "Telephone", color: "blue"},

    medical:            {category: "type", displayName: "Medical", color: "green"},
    professional:       {category: "type", displayName: "Professional", color: "orange"},
    peer:               {category: "type", displayName: "Peer", color: "pink"},
    generalAwareness:   {category: "type", displayName: "General Awareness", color: ""},

    appointment:        {category: "availability", displayName: "Appointment-Based", color: ""},
    recurring:          {category: "availability", displayName: "Recurring Meetings", color: ""},
    walkIn:             {category: "availability", displayName: "Walk-in", color: ""},
    events:             {category: "availability", displayName: "Events", color: ""},
    allday:             {category: "availability", displayName: "24/7", color: ""},

    sexualHealthAssault:{category: "additional", displayName: "Sexual Health / Assault", color: ""},
    financial:          {category: "additional", displayName: "Financial", color: ""},
    academic:           {category: "additional", displayName: "Academic", color: ""},
    spiritual:          {category: "additional", displayName: "Spiritual", color: ""},
    disability:         {category: "additional", displayName: "Disability", color: ""},
    substanceAbuse:     {category: "additional", displayName: "Substance Abuse", color: ""},
    lgbt:               {category: "additional", displayName: "LGBTQ+", color: ""},
    womensHealth:       {category: "additional", displayName: "Women's Health", color: ""},
    selfHarm:           {category: "additional", displayName: "Self Harm", color: ""},
}

export default {
    getAllTags: () => tags,
    getAllTagKeys: () => _.keys(tags),
    getCategories: () => _.uniq(_.map(_.values(tags), obj => obj.category)),
    getDisplayNameForTag: (tag) => tags[tag].displayName,
    getColorForTag: (tag) => tags[tag].color || '#aaaaaa',
}