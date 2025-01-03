// Repeat code
const juanAverage = (90 + 50 + 70) / 3;
const leslyAverage = (80 + 90 + 70 + 80) / 4;
const kyb3rAverage = (100 + 100) / 2;
console.log(juanAverage, leslyAverage, kyb3rAverage);

// DRY: Don't Repeat Yourself
function getAverage(...grades) {
    return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const juanAverageDRY =  getAverage(90, 50, 70);
const leslyAverageDRY = getAverage(80, 90, 70, 80);
const kyb3rAverageDRY = getAverage(100, 100);
console.log(juanAverageDRY, leslyAverageDRY, kyb3rAverageDRY);
