var quizQuestions = [
  {
    question:
      "How much does your current difficulty interfere with your daily life? (This response  helps us gauge the severity)",
    answers: [
      { type: "highDup", content: "Very severe interference", letter: "A" },
      { type: "high", content: "Severe", letter: "B" },
      { type: "mediumDup", content: "Moderate", letter: "C" },
      { type: "medium", content: "Mild", letter: "D" },
      { type: "low", content: "No interference", letter: "E" },
    ],
  },
  {
    question: "What type of issues are you experiencing?",
    answers: [
      { type: "depressionAnxiety", content: "Depression", letter: "A" },
      { type: "depressionAnxietyDup", content: "Anxiety", letter: "B" },
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
      { type: "free", content: "Free For All", letter: "A" },
      { type: "free4UBC", content: "Free For Students", letter: "B" },
      { type: "paid", content: "Paid", letter: "C" },
      { type: "less50", content: "Less than $50", letter: "D" },
      { type: "more100", content: "More than $100", letter: "E" },
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
      "Do you prefer a resource that is in-person or virtually available?",
    answers: [
      { type: "walkIn", content: "In-Person", letter: "A" },
      { type: "online", content: "Online Support", letter: "B" },
      { type: "nopreference", content: "No preference", letter: "C" },
    ],
  },
];

export default quizQuestions;
