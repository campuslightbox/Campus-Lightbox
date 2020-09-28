var quizQuestions = [
  {
    question:
      "How much does your current difficulty interfere with your daily life? (This response helps us gauge the severity) ",
    answers: [
      { type: "low", content: "Low severity", letter: "A" },
      { type: "medium", content: "Medium severity", letter: "B" },
      { type: "high", content: "High severity", letter: "C" },
    ],
  },
  {
    question: "What type of issues are you experiencing?",
    answers: [
      { type: "depression", content: "Depression", letter: "A" }, // or write Depression and/or Anxiety
      { type: "anxiety", content: "Anxiety", letter: "B" }, // A B are using the same tag, (TODO: update Tags.js & Resource.js to split the tags)
      { type: "substanceAbuse", content: "Substance Abuse", letter: "C" },
      { type: "lgbt", content: "Gender/Identity", letter: "D" },
      { type: "general", content: "General Wellbeing Concern", letter: "E" },
      { type: "financial", content: "Financial", letter: "F" },
      { type: "academic", content: "Academic", letter: "G" },
      { type: "spiritual", content: "Spiritual", letter: "H" },
      { type: "sexualHealthAssault", content: "Sexual Assault", letter: "I" },
      { type: "disability", content: "Disability", letter: "J" },
      { type: "eatingDisorder", content: "Eating Disorder", letter: "K" },
      { type: "selfHarm", content: "Self Harm", letter: "L" },
      { type: "suicidal", content: "Suicidal", letter: "M" },
      { type: "womensHealth", content: "Women's Health", letter: "N" },
    ],
  },
  {
    question: "What's your cost preference?",
    answers: [
      { type: "free", content: "Free", letter: "A" },
      { type: "paid", content: "Paid", letter: "B" },
      { type: "less50", content: "Less than $50", letter: "C" },
      { type: "more100", content: "More than $100", letter: "D" },
    ],
  },

  {
    question: "Do you prefer a professional resource or peer support?",
    answers: [
      { type: "professional", content: "Professional", letter: "A" },
      { type: "peer", content: "Peer Support", letter: "B" },
    ],
  },
  {
    question:
      "Do you prefer a resource that is in-person or virtullly available?",
    answers: [
      { type: "walkIn", content: "In-Person", letter: "A" },
      { type: "online", content: "Online Support", letter: "B" },
      { type: "nopreference", content: "No preference", letter: "C" },
    ],
  },
];

export default quizQuestions;
