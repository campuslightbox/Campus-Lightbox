import _ from "underscore";

// to do: create a collapsible buttonj
const tags = {
  free: {
    category: "cost",
    displayName: "Free",
    color: "green",
  },
  paid: { category: "cost", displayName: "Paid", color: "tomato" },
  less50: { category: "cost", displayName: " < $50/hr (hide)", color: "" },
  less100: { category: "cost", displayName: " $50-$100/hr (hide)", color: "" },
  more100: { category: "cost", displayName: " > $100/hr (hide)", color: "" },

  // end of cost category

  academic: {
    category: "Type of issue",
    displayName: "Academic",
    color: "#1971BD",
  },
  // family: {
  //   category: "Type of issue",
  //   displayName: "Family Concerns",
  //   color: "#FFFFE0",
  // },
  financial: {
    category: "Type of issue",
    displayName: "Financial",
    color: "#254F73",
  },
  substanceAbuse: {
    category: "Type of issue",
    displayName: "Substance Abuse",
    color: "#920110",
  },
  disability: {
    category: "Type of issue",
    displayName: "Disability",
    color: "#1A79A8",
  },

  sexualHealthAssault: {
    category: "Type of issue",
    displayName: "Sexual Health / Assault (hide)",
    color: "#B6595B",
  },
  depressionAnxiety: {
    category: "Type of issue",
    displayName: "Depression /Anxiety /Stress (hide)",
    color: "#B6595B",
  },
  eatingDisorder: {
    category: "Type of issue",
    displayName: "Eating Disorder (hide)",
    color: "#B6595B",
  },

  lgbt: {
    category: "Type of issue",
    displayName: "LGBTQ+  (hide)",
    color: "#7640A9",
  },

  womensHealth: {
    category: "Type of issue",
    displayName: "Women's Health  (hide)",
    color: "#D73E79",
  },
  selfHarm: {
    category: "Type of issue",
    displayName: "Self Harm  (hide)",
    color: "#BB7E15",
  },
  spiritual: {
    category: "Type of issue",
    displayName: "Spiritual  (hide)",
    color: "#737373",
  },
  // end of type of issue category

  immediate: {
    category: "Urgency /Wait-time",
    displayName: "Immediate",
    color: "#2C8551",
  },
  sameDay: {
    category: "Urgency /Wait-time",
    displayName: "Same day",
    color: "#2C8551",
  },
  less1Week: {
    category: "Urgency /Wait-time",
    displayName: " < 1 week",
    color: "#2C8551",
  },
  more1Week: {
    category: "Urgency /Wait-time",
    displayName: "> 1 week",
    color: "#2C8551",
  },
  two3Days: {
    category: "Urgency /Wait-time",
    displayName: " 2-3 days (hide)",
    color: "#2C8551",
  },
  less1Month: {
    category: "Urgency /Wait-time",
    displayName: " < 1 month (hide)",
    color: "#2C8551",
  },
  more1Month: {
    category: "Urgency /Wait-time",
    displayName: " > 1 month (hide)",
    color: "#2C8551",
  },

  // end of wait-time category

  walkIn: {
    category: "Accessibility",
    displayName: "In-person",
    color: "#2C8551",
  },
  online: {
    category: "Accessibility",
    displayName: "Virtual",
    color: "#1E8843",
  },

  allday: { category: "Accessibility", displayName: "24/7", color: "#1C8832" },

  phone: {
    category: "Accessibility",
    displayName: "Telephone (hide)",
    color: "#2D6C42",
  },

  recurring: {
    category: "Accessibility",
    displayName: "Recurring Meetings (hide)",
    color: "#067834",
  },
  appointment: {
    category: "Accessibility",
    displayName: "Appointment-Based (hide)",
    color: "#005F36",
  },
  //end of accessibility tag

  professional: {
    category: "type of help",
    displayName: "Professional",
    color: "#32457D",
  },
  peer: { category: "type of help", displayName: "Peer", color: "#2B7A8A" },
  generalAwareness: {
    category: "type of help",
    displayName: "General Awareness",
    color: "#3A729E",
  },
  medical: {
    category: "type of help",
    displayName: "Medical (hide)",
    color: "#920A21",
  },
  events: {
    category: "type of help",
    displayName: "Events (hide)",
    color: "#D47100",
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
