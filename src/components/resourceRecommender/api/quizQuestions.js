const quizQuestions = [
  {
    question:
      'How much does your current difficulty interfere with your daily life? (Very severe interference: Not able to manage basic self care activities, No interference would be: Daily functioning unaffected)',
    answers: [
      { type: 'highDup', content: 'Very severe interference', letter: 'A' },
      { type: 'high', content: 'Severe', letter: 'B' },
      { type: 'mediumDup', content: 'Moderate', letter: 'C' },
      { type: 'medium', content: 'Mild', letter: 'D' },
      { type: 'low', content: 'No interference', letter: 'E' }
    ]
  },
  {
    question:
      'Mental health challenges often co-occur and are not mutually exclusive. For the purpose of this tool, please select the challenge you require most urgent assistance for.',
    answers: [
      {
        type: 'depressionAnxiety',
        content: 'Mental Health related concerns (Depression, Anxiety, etc.)',
        letter: 'A'
      },
      { type: 'substanceAbuse', content: 'Substance Abuse', letter: 'B' },
      { type: 'lgbt', content: 'Gender/Identity', letter: 'C' },
      { type: 'general', content: 'General Wellbeing Concern', letter: 'D' },
      { type: 'financial', content: 'Financial', letter: 'E' },
      { type: 'academic', content: 'Academic', letter: 'F' },
      { type: 'spiritual', content: 'Spiritual', letter: 'G' },
      { type: 'sexualHealthAssault', content: 'Sexual Assault', letter: 'H' },
      { type: 'disability', content: 'Disability', letter: 'I' },
      { type: 'eatingDisorder', content: 'Eating Disorder', letter: 'J' },
      { type: 'suicidal', content: 'Self Harm/Suicide', letter: 'K' },
      { type: 'womensHealth', content: "Women's Health", letter: 'L' }
    ]
  },
  {
    question: "What's your cost preference?",
    answers: [
      { type: 'free', content: 'Free For All', letter: 'A' },
      { type: 'free4UBC', content: 'Free For Students', letter: 'B' },
      { type: 'paid', content: 'Paid', letter: 'C' },
      { type: 'less50', content: 'Less than $50', letter: 'D' },
      { type: 'more100', content: 'More than $100', letter: 'E' }
    ]
  },

  {
    question: 'Do you prefer a professional resource or peer support?',
    answers: [
      { type: 'professional', content: 'Professional', letter: 'A' },
      { type: 'peer', content: 'Peer Support', letter: 'B' }
    ]
  },
  {
    question:
      'Do you prefer a resource that is in-person or virtually available?',
    answers: [
      { type: 'walkIn', content: 'In-Person', letter: 'A' },
      { type: 'online', content: 'Online Support', letter: 'B' },
      { type: 'nopreference', content: 'No preference', letter: 'C' }
    ]
  }
];

export default quizQuestions;
