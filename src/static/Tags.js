import _ from 'underscore';
const tags = {
  free: {
    category: 'cost',
    displayName: 'Free',
    color: 'green',
    show: true,
    TopTen: true
  },
  free4UBC: {
    category: 'cost',
    displayName: 'Free For Students',
    show: true,
    TopTen: false
  },
  paid: {
    category: 'cost',
    displayName: 'Paid',
    color: 'tomato',
    show: true,
    TopTen: true
  },
  less50: {
    category: 'cost',
    displayName: ' < $50/hr ',
    color: '',
    show: false
  },
  more100: {
    category: 'cost',
    displayName: ' > $100/hr ',
    color: '',
    show: false
  },
  // end of cost category
  academic: {
    category: 'Type of issue',
    displayName: 'Academic',
    color: '#1971BD',
    show: true,
    TopTen: true
  },

  financial: {
    category: 'Type of issue',
    displayName: 'Financial',
    color: '#254F73',
    show: true
  },
  substanceAbuse: {
    category: 'Type of issue',
    displayName: 'Substance Abuse',
    color: '#920110',
    show: true
  },
  sexualHealthAssault: {
    category: 'Type of issue',
    displayName: 'Sexual Health / Assault',
    color: '#B6595B',
    show: true,
    TopTen: true
  },
  disability: {
    category: 'Type of issue',
    displayName: 'Disability',
    color: '#1A79A8',
    show: true
  },

  suicidal: {
    category: 'Type of issue',
    displayName: 'Suicidal',
    color: '#BB7E15',
    show: false
  },
  depressionAnxiety: {
    category: 'Type of issue',
    displayName: 'Depression/Anxiety',
    color: '#B6595B',
    show: false
  },
  eatingDisorder: {
    category: 'Type of issue',
    displayName: 'Eating Disorder ',
    color: '#B6595B',
    show: false
  },

  lgbt: {
    category: 'Type of issue',
    displayName: 'LGBTQ+ ',
    color: '#7640A9',
    show: false
  },

  womensHealth: {
    category: 'Type of issue',
    displayName: "Women's Health ",
    color: '#D73E79',
    show: false
  },
  selfHarm: {
    category: 'Type of issue',
    displayName: 'Self Harm ',
    color: '#BB7E15',
    show: false
  },

  spiritual: {
    category: 'Type of issue',
    displayName: 'Spiritual ',
    color: '#737373',
    show: false
  },
  general: {
    category: 'Type of issue',
    displayName: 'General Wellbeing Concern',
    color: '#737373',
    show: false
  },
  // end of type of issue category
  immediate: {
    category: 'Urgency /Wait-time',
    displayName: 'Immediate',
    color: 'rgba(218, 68, 68, 0.88)',
    show: true
  },
  sameDay: {
    category: 'Urgency /Wait-time',
    displayName: 'Same day',
    color: '#2C8551',
    show: true
  },
  two3Days: {
    category: 'Urgency /Wait-time',
    displayName: ' 2-3 days',
    color: '#2C8551',
    show: true
  },
  less1Week: {
    category: 'Urgency /Wait-time',
    displayName: ' < 1 week',
    color: '#2C8551',
    show: false
  },
  less1Month: {
    category: 'Urgency /Wait-time',
    displayName: ' < 1 month',
    color: '#2C8551',
    show: false
  },
  // end of wait-time category

  low: {
    category: 'Severity',
    displayName: 'Low',
    color: '#2C8551',
    show: true
  },
  medium: {
    category: 'Severity',
    displayName: 'Medium',
    color: '#1E8843',
    show: false
  },
  high: {
    category: 'Severity',
    displayName: 'High',
    color: '#1E8843',
    show: false
  },

  // end of Severity

  walkIn: {
    category: 'Accessibility',
    displayName: 'In-person',
    color: '#8660C3',
    show: true,
    TopTen: true
  },
  online: {
    category: 'Accessibility',
    displayName: 'Virtual',
    color: '#000000',
    show: true,
    TopTen: true
  },

  allday: {
    category: 'Accessibility',
    displayName: '24/7',
    color: 'rgb(251, 196, 32)',
    show: true,
    TopTen: true
  },

  phone: {
    category: 'Accessibility',
    displayName: 'Telephone',
    color: '#2D6C42',
    show: false
  },

  recurring: {
    category: 'Accessibility',
    displayName: 'Recurring Meetings',
    color: '#067834',
    show: false
  },
  appointment: {
    category: 'Accessibility',
    displayName: 'Appointment-Based',
    color: '#005F36',
    show: false
  },
  // end of accessibility tag

  professional: {
    category: 'type of help',
    displayName: 'Professional',
    color: '#32457D',
    show: true,
    TopTen: true
  },
  peer: {
    category: 'type of help',
    displayName: 'Peer',
    color: '#2B7A8A',
    show: true,
    TopTen: true
  },
  medical: {
    category: 'type of help',
    displayName: 'Medical ',
    color: '#920A21',
    show: false,
    TopTen: true
  },
  events: {
    category: 'type of help',
    displayName: 'Events ',
    color: '#D47100',
    show: false
  },
  generalAwareness: {
    category: 'type of help',
    displayName: 'General Awareness',
    color: '#3A729E',
    show: false
  }
  // end of type of help
};

const returnTags = {
  getAllTags: () => tags,
  getAllTagKeys: () => _.keys(tags),
  getCategories: () => _.uniq(_.map(_.values(tags), (obj) => obj.category)),
  getDisplayNameForTag: (tag) => tags[tag].displayName,
  getTopValue: (tag) => tags[tag].TopTen,
  getColorForTag: (tag) => tags[tag].color || '#aaaaaa'
};

export default returnTags;
