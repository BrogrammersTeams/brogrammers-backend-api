const descriptionOne = {
  maskDetection: true,
  hsl: true,
  machineLearning: true,
};

const descriptionTwo = {
  maskDetection: true,
  hsl: true,
  neuralNetworks: true,
};

const description = "Athya chittu are mira bro";

const turnStringToObject = (str: string) => {
  //  const arrayOfKeyWOrds = str.spstrlit(" ")
};

const keywordExists = (keyword, object) => keyword in object;

const plagarismChecker = (objectOne: Object, objectTwo: object): boolean => {
  const firstObjectHasMoreKeywords = Object.keys(objectOne).length > Object.keys(objectTwo).length;

  if (firstObjectHasMoreKeywords) return checkIfPlagarismExists(objectOne, objectTwo);

  return checkIfPlagarismExists(objectTwo, objectOne);
};

const checkIfPlagarismExists = (biggerObject: Object, smallerObject: Object): boolean => {
  const objectOneKeywordsArray = Object.keys(smallerObject);

  for (const keywords of objectOneKeywordsArray) {
    if (!keywordExists(keywords, biggerObject)) return false;
  }

  return true;
};

console.log(plagarismChecker(descriptionOne, descriptionTwo));
