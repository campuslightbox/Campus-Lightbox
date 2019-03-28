import _ from 'underscore';

const tags = {
    onCampus:           {category: "location", displayName: "On Campus", iconName: "location arrow"},
    offCampus:          {category: "location", displayName: "Off Campus", iconName: ""},
    online:             {category: "location", displayName: "Online", iconName: ""},
    hotline:            {category: "location", displayName: "Hotline", iconName: ""},

    medical:            {category: "type", displayName: "Medical", iconName: ""},
    professional:       {category: "type", displayName: "Professional", iconName: "doctor"},
    peer:               {category: "type", displayName: "Peer", iconName: ""},
    generalAwareness:   {category: "type", displayName: "General Awareness", iconName: ""},

    appointment:        {category: "availability", displayName: "Appointment Available", iconName: "calendar"},
    recurring:          {category: "availability", displayName: "Recurring", iconName: "sync alternate"},
    walkIn:             {category: "availability", displayName: "Walk-in", iconName: ""},

    sexualHealthAssult: {category: "additional", displayName: "Sexual Health / Assault", iconName: "venus mars"},
    financial:          {category: "additional", displayName: "Financial", iconName: ""},
    academic:           {category: "additional", displayName: "Academic", iconName: "book"},
    spiritual:          {category: "additional", displayName: "Spiritual", iconName: ""},
}

export default {
    getAllTags: () => tags,
    getAllTagKeys: () => _.keys(tags),

}