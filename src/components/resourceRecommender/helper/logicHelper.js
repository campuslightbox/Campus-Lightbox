import _ from 'underscore';
// depressionAnxietyDup will be removed!
const combo1 = [
  'eatingDisorder',
  'depressionAnxiety',
  'depressionAnxietyDup',
  'substanceAbuse',
  'high',
  'highDup'
];

const combo2 = ['sexualHealthAssault', 'selfHarm', 'suicidal'];

export const logicChecker = (arr) => {
  return (
    _.intersection(arr, combo1).length === 2 ||
    _.intersection(arr, combo2).length === 1
  );
};
