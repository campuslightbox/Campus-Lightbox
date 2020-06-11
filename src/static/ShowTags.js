import _ from "underscore";
const tags = {
  free: {
    category: "cost",
    displayName: "Free",
    color: "green",
    show: true,
  },
  paid: { category: "cost", displayName: "Paid", color: "tomato", show: true },

  // end of cost category

  academic: {
    category: "Type of issue",
    displayName: "Academic",
    color: "#1971BD",
    show: true,
  },

  financial: {
    category: "Type of issue",
    displayName: "Financial",
    color: "#254F73",
    show: true,
  },
  substanceAbuse: {
    category: "Type of issue",
    displayName: "Substance Abuse",
    color: "#920110",
    show: true,
  },
  general: {
    category: "Type of issue",
    displayName: "General Wellbeing Concern",
    color: "#737373",
    show: true,
  },
  disability: {
    category: "Type of issue",
    displayName: "Disability",
    color: "#1A79A8",
    show: true,
  },

  // end of type of issue category

  immediate: {
    category: "Urgency /Wait-time",
    displayName: "Immediate",
    color: "#2C8551",
    show: true,
  },
  sameDay: {
    category: "Urgency /Wait-time",
    displayName: "Same day",
    color: "#2C8551",
    show: true,
  },
  less1Week: {
    category: "Urgency /Wait-time",
    displayName: " < 1 week",
    color: "#2C8551",
    show: true,
  },

  // end of wait-time category

  low: {
    category: "Severity",
    displayName: "Low",
    color: "#2C8551",
    show: true,
  },
  medium: {
    category: "Severity",
    displayName: "Medium",
    color: "#1E8843",
    show: true,
  },
  high: {
    category: "Severity",
    displayName: "High",
    color: "#1E8843",
    show: true,
  },

  //end of Severity

  walkIn: {
    category: "Accessibility",
    displayName: "In-person",
    color: "#2C8551",
    show: true,
  },
  online: {
    category: "Accessibility",
    displayName: "Virtual",
    color: "#1E8843",
    show: true,
  },

  allday: {
    category: "Accessibility",
    displayName: "24/7",
    color: "#1C8832",
    show: true,
  },

  //end of accessibility tag

  professional: {
    category: "type of help",
    displayName: "Professional",
    color: "#32457D",
    show: true,
  },
  peer: {
    category: "type of help",
    displayName: "Peer",
    color: "#2B7A8A",
    show: true,
  },
  generalAwareness: {
    category: "type of help",
    displayName: "General Awareness",
    color: "#3A729E",
    show: true,
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
