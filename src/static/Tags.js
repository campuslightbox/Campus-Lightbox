import _ from "underscore";

const tags = {
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
    displayName: "Telephone",
    color: "#2D6C42",
  },

  medical: {
    category: "type of help",
    displayName: "Medical",
    color: "#920A21",
  },
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

  events: { category: "availability", displayName: "Events", color: "#D47100" },

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
