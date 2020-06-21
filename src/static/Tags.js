import _ from "underscore";

const tags = {
  online: { category: "location", displayName: "Online", color: "#1E8843" },
  hotline: { category: "location", displayName: "Telephone", color: "#2D6C42" },

  medical: { category: "type", displayName: "Medical", color: "#920A21" },
  professional: {
    category: "type",
    displayName: "Professional",
    color: "#32457D",
  },
  peer: { category: "type", displayName: "Peer", color: "#2B7A8A" },
  generalAwareness: {
    category: "type",
    displayName: "General Awareness",
    color: "#3A729E",
  },

  appointment: {
    category: "availability",
    displayName: "Appointment-Based",
    color: "#005F36",
  },
  recurring: {
    category: "availability",
    displayName: "Recurring Meetings",
    color: "#067834",
  },
  walkIn: {
    category: "availability",
    displayName: "Walk-in",
    color: "#2C8551",
  },
  events: { category: "availability", displayName: "Events", color: "#D47100" },
  allday: { category: "availability", displayName: "24/7", color: "#1C8832" },

  sexualHealthAssault: {
    category: "additional",
    displayName: "Sexual Health / Assault",
    color: "#B6595B",
  },
  financial: {
    category: "additional",
    displayName: "Financial",
    color: "#254F73",
  },
  academic: {
    category: "additional",
    displayName: "Academic",
    color: "#1971BD",
  },
  spiritual: {
    category: "additional",
    displayName: "Spiritual",
    color: "#737373",
  },
  disability: {
    category: "additional",
    displayName: "Disability",
    color: "#1A79A8",
  },
  substanceAbuse: {
    category: "additional",
    displayName: "Substance Abuse",
    color: "#920110",
  },
  lgbt: { category: "additional", displayName: "LGBTQ+", color: "#7640A9" },
  womensHealth: {
    category: "additional",
    displayName: "Women's Health",
    color: "#D73E79",
  },
  selfHarm: {
    category: "additional",
    displayName: "Self Harm",
    color: "#BB7E15",
  },
};

export default {
  getAllTags: () => tags,
  getAllTagKeys: () => _.keys(tags),
  getCategories: () => _.uniq(_.map(_.values(tags), (obj) => obj.category)),
  getDisplayNameForTag: (tag) => tags[tag].displayName,
  getColorForTag: (tag) => tags[tag].color || "#aaaaaa",
};
