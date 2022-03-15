// he ek plagarism checker ahe +
// User cha project description madhna keywords bhettil ki kai kai use kelay tyane
// eg jasa chittu bolla tr mg ha compare krnr jr unique asel tr plagarism naiye :)
const descriptionOne = {
    maskDetection: true,
    hsl: true,
    machineLearning: true,
};
const descriptionTwo = {
    maskDetection: true,
    hsl: true,
    //   neuralNetworks: true,
};
// false mhanje plagarism naiye , atta smjha copy marlay same ideas
const keywordExists = (keyword, object) => keyword in object;
const plagarismChecker = (objectOne, objectTwo) => {
    const firstObjectHasMoreKeywords = Object.keys(objectOne).length > Object.keys(objectTwo).length;
    if (firstObjectHasMoreKeywords)
        return checkIfPlagarismExists(objectOne, objectTwo);
    return checkIfPlagarismExists(objectTwo, objectOne);
};
const checkIfPlagarismExists = (biggerObject, smallerObject) => {
    const objectOneKeywordsArray = Object.keys(smallerObject);
    for (const keywords of objectOneKeywordsArray) {
        if (!keywordExists(keywords, biggerObject))
            return false;
    }
    return true;
};
console.log(plagarismChecker(descriptionOne, descriptionTwo));
