import _ from "underscore";
const tags = {
  less50: {
    category: "cost",
    displayName: " < $50/hr ",
    color: "",
    show: false,
  },
  less100: {
    category: "cost",
    displayName: " $50-$100/hr ",
    color: "",
    show: false,
  },
  more100: {
    category: "cost",
    displayName: " > $100/hr ",
    color: "",
    show: false,
  },

  // end of cost category

  sexualHealthAssault: {
    category: "Type of issue",
    displayName: "Sexual Health / Assault",
    color: "#B6595B",
    show: false,
  },
  suicidal: {
    category: "Type of issue",
    displayName: "Suicidal",
    color: "#BB7E15",
    show: false,
  },
  depressionAnxiety: {
    category: "Type of issue",
    displayName: "Depression /Anxiety /Stress ",
    color: "#B6595B",
    show: false,
  },
  eatingDisorder: {
    category: "Type of issue",
    displayName: "Eating Disorder ",
    color: "#B6595B",
    show: false,
  },

  lgbt: {
    category: "Type of issue",
    displayName: "LGBTQ+ ",
    color: "#7640A9",
    show: false,
  },

  womensHealth: {
    category: "Type of issue",
    displayName: "Women's Health ",
    color: "#D73E79",
    show: false,
  },
  selfHarm: {
    category: "Type of issue",
    displayName: "Self Harm ",
    color: "#BB7E15",
    show: false,
  },

  spiritual: {
    category: "Type of issue",
    displayName: "Spiritual ",
    color: "#737373",
    show: false,
  },

  // end of type of issue category
  two3Days: {
    category: "Urgency /Wait-time",
    displayName: " 2-3 days",
    color: "#2C8551",
    show: false,
  },
  more1Week: {
    category: "Urgency /Wait-time",
    displayName: "> 1 week",
    color: "#2C8551",
    show: false,
  },

  less1Month: {
    category: "Urgency /Wait-time",
    displayName: " < 1 month",
    color: "#2C8551",
    show: false,
  },
  more1Month: {
    category: "Urgency /Wait-time",
    displayName: " > 1 month",
    color: "#2C8551",
    show: false,
  },

  // end of wait-time category
  //No Severity
  phone: {
    category: "Accessibility",
    displayName: "Telephone",
    color: "#2D6C42",
    show: false,
  },

  recurring: {
    category: "Accessibility",
    displayName: "Recurring Meetings",
    color: "#067834",
    show: false,
  },
  appointment: {
    category: "Accessibility",
    displayName: "Appointment-Based",
    color: "#005F36",
    show: false,
  },
  //end of accessibility tag
  medical: {
    category: "type of help",
    displayName: "Medical ",
    color: "#920A21",
    show: false,
  },
  events: {
    category: "type of help",
    displayName: "Events ",
    color: "#D47100",
    show: false,
  },
  // end of type of help
};

export default {
  getAllTags: () => tags,
  getAllTagKeys: () => _.keys(tags),
  getCategories: () => _.uniq(_.map(_.values(tags), (obj) => obj.category)),
  getDisplayNameForTag: (tag) => tags[tag].displayName,
  getColorForTag: (tag) => tags[tag].color || "#aaaaaa",
};
