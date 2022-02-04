export const getTotalWeight = (assessments) => {
  let totalWeight = 0;
  assessments.forEach(({weight}) => {
    totalWeight += weight;
  });
  return totalWeight;
};

/**
 * Calculates the weighted grade given a list of assessments.
 * @param {Array} assessments 
 */
export const calculateWeightedGrade = (assessments) => {
  let weightedGrade = 0;
  assessments.forEach(({grade, weight}) => {
    weightedGrade += grade * weight / 100;
  });
  return weightedGrade;
};

/**
 * Calculates the current average given a list of assessments.
 * @param {Array} assessments 
 * @returns 
 */
export const calculateAverageGrade = (assessments) => {
  let totalWeight = 0;
  let sum = 0;
  assessments.forEach(({grade, weight}) => {
    sum += grade * weight;
    totalWeight += weight;
  });
  return sum / totalWeight;
};

/**
 * Calcualate the weight of the course achieved.
 * @param {Array} assessments 
 * @returns achieved weight
 */
export const calculateAchievedWeight = (assessments) => {
  return getTotalWeight(assessments) / 100;
};

/**
 * Calculates the additional grade required to achieve the target grade.
 * @param {Array} assessments 
 * @param {Array} targetGrade 
 * @returns additional grade required
 */
export const calculateAdditionalGradeNeeded = (assessments, targetGrade) => {
  const finalWeight = 100 - getTotalWeight(assessments);
  const weightedGrade = calculateWeightedGrade(assessments);
  return 100 * ((targetGrade - weightedGrade) / finalWeight)
};

const gradeCalculator = {
  calculateWeightedGrade,
  calculateAverageGrade,
  calculateAchievedWeight,
  calculateAdditionalGradeNeeded
};

export default gradeCalculator;
