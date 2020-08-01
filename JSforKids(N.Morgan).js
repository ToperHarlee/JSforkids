//**************************  Глава 1 ****************************
/*var drawCats = function (howManyTimes) {
    for(var i = 0; i < howManyTimes; i++) {
        console.log(i + '=^.^=');
    }
};
drawCats(10);*/

//**************************  Глава 2 ****************************

//var numberOfSiblings = 1 + 3;
//var numberOfCandies = 8;
//console.log(numberOfCandies/numberOfSiblings);

/*
var srcondsInAminute = 60;
var minutesInAnhour = 60;
var secondsInAnHour = srcondsInAminute * minutesInAnhour;
console.log(secondsInAnHour)
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);
var age = 35;
console.log(secondsInAYear * age);
*/


/*highFives = 0;
highFives++;
highFives++;
console.log(highFives)*/

/*var score = 10;
score += 7;
console.log(score)
score -= 3;
console.log(score)*/

/*var baloons = 100;
baloons += 2;
console.log(baloons)

var baloons = 100;
baloons /= 4;
console.log(baloons)*/

/*var awessomeString = 'Чтото крутое';
console.log(awessomeString)*/

/*var greetings = 'Hi  ';
var name = 'Mike';
console.log(greetings + name)*/


/*
var javaScript = 'JavaScript';
console.log(javaScript.length)
console.log(javaScript[3])*/

/*var codeWord1 = 'обернись'
var codeWord2 = 'неужели'
var codeWord3 = 'кошка'
var codeWord4 = 'смотрит'
var codeWord5 = 'на'
var codeWord6 = 'тебя'
console.log(codeWord1[3] + codeWord2[2]  + codeWord6[1]);*/

/*
var longString = 'эта длинная строка такая длинная';
console.log(longString.slice(4, 18))
console.log(longString.slice(4))*/

//console.log('how are you'.toUpperCase())
//console.log('how are you'.toLowerCase())
//console.log('Эй, кАк дЕЛа?'.toLowerCase(1))

/*var firstString = 'Эй, кАк дЕЛа?';
var first = firstString.toLowerCase()
var firstWord = first[0]
var firstUp = firstWord.toUpperCase()
var firstDown = first.slice(1)
console.log(firstUp + firstDown)*/

/*var firstString = 'Эй, кАк дЕЛа?';
var lowerString = firstString.slice(1).toLowerCase();
var firstLetter = firstString[0].toUpperCase();
console.log(firstLetter + lowerString);*/

/*const numberNine = 9;
const stringNine = '9';
console.log(numberNine+numberNine)
console.log(numberNine+stringNine)*/

/*let javaScriptISCool = true;
console.log(javaScriptISCool)*/

/*let hadShower = true;
let hasBackpack = false;
console.log(hadShower && hasBackpack)*/

/*let hasApple = true;
let hasOrange = false;
console.log(hasApple || hasOrange)*/

/*
let isWeekend = true;
let needToShowerToday = !isWeekend;
console.log(needToShowerToday)

let isWeekend2 = true;
let needToShowerToday2 = !isWeekend2;
console.log(!needToShowerToday2)*/

/*let isWeekend = false;
let hadShower = true;
let hasAplle = false;
let hasOrange = true;

let goesToSchool = !isWeekend && hadShower && (hasAplle || hasOrange)
console.log(goesToSchool)*/

/*let height = 155;
let heightRestriction = 150;
total = height > heightRestriction;
console.log(total)*/

/*
let height = 150;
let heightRestriction = 150;
total = height >= heightRestriction;
console.log(total)*/


/*let height = 150;
let heightRestriction = 120;
total = height < heightRestriction;
console.log(total)*/

/*
let height = 150;
let heightRestriction = 150;
total = height <= heightRestriction;
console.log(total)*/

/*
let mySecretNumber = 5;
let knopkaGuess =3;
console.log(mySecretNumber === knopkaGuess)
let veraGuess = 7;
console.log(mySecretNumber === veraGuess)
let mikeGuess = 5;
console.log(mySecretNumber === mikeGuess);*/

/*0 == false;//true
'false' == false; //false*/

/*
var age = 11;
var accompanied = true;
var agree = age >= 12;
var letGoCinema = agree || accompanied
console.log(letGoCinema);*/

/*var myVariable;
console.log(myVariable)//undefined*/

/*
var myNullVariable = null;
console.log(myNullVariable);//null*/


//**************************  Глава 3 ****************************

/*var myTopThreeDinosaurus = ['trex', 'velociraptor', 'stegozavr', 'brahiozavr', 'knopkozavr']
myTopThreeDinosaurus[2] = 'newDinozaur'
myTopThreeDinosaurus[5] = 'newDinozaur5'
myTopThreeDinosaurus[6] = 'newDinozaur6'

console.log(myTopThreeDinosaurus[2])
console.log(myTopThreeDinosaurus[4])
console.log(myTopThreeDinosaurus)*/

/*const dinosaurusAndNumbers = [3, 'Динозавры', ['Трицератопс', 'стегозавр', 3627.5], 10]
console.log(dinosaurusAndNumbers[2] [0])
console.log(dinosaurusAndNumbers[2])*/

/*const arr = ['apple', 'mapple', 'pampam']
console.log(arr.length)
console.log(arr.length - 1) */// получить последний элемент массива

/*let animals = []
animals.push('Knopka')
animals.push('Verka')
animals.push('Mike')
animals.push('abrakadabra')
animals.unshift('dream')
let lastAnimal = animals.pop()//удаляет последний элемент массива
console.log(animals.length)
console.log(animals)
console.log(lastAnimal)
console.log(animals.unshift(lastAnimal))
console.log(animals)*/

/*let animals = ['Lama', 'Bear', 'Bird', 'Cat', 'Monkey']
let firstPosition = animals.shift()
console.log(firstPosition)*/

/*let firstArr = ['Alpaka', 'Circle', 'Krokodile', 'Dog']
let secondArr = ['Udav', 'Krolik', 'Godzilla', 'Cat']
let thirdArr = ['dodo', 'gugu']
//let totalArr = firstArr.concat(secondArr)
let totalArr = firstArr.concat(secondArr, thirdArr)
console.log(totalArr)*/

/*let secondArr = ['Udav', 'Krolik', 'Godzilla', 'Cat']
console.log(secondArr.indexOf('Cat'))
console.log(secondArr.indexOf('Krolik'))*/

/*let insects = ['P4ela', 'Muravei', 'P4ela', 'P4ela', 'Muravei'];
console.log(insects.indexOf('P4ela'));*/

/*let insects = ['P4ela', 'Muravei', 'P4ela', 'P4ela', 'Muravei'];
console.log(insects.join());
console.log(insects.join('-'));
console.log(insects.join('*'));
console.log(insects.join('&'));
console.log(insects.join(' '));*/

/*let landMarks = [];
landMarks.push('my home');
landMarks.push('road to home');
landMarks.push('blique lamp');
landMarks.push('gidrant');
landMarks.push('fireservice station');
landMarks.push('hostel for cats');
landMarks.push('my last school');
landMarks.push('my girlfriends house');
console.log(landMarks.pop())
console.log(landMarks.pop())
console.log(landMarks.pop())
console.log(landMarks.pop())
console.log(landMarks.pop())
console.log(landMarks.pop())
console.log(landMarks.pop())
console.log(landMarks.pop())*/
//пример стека

/*console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 10);*/

//console.log(Math.floor(3.56557678))

//console.log(Math.floor(Math.random() * 4));
//Math.random всегда возвращает значение -1

/*let randomWords = ['Blow', 'Cave', 'Princess', 'Gorilla', 'Pencil'];
let randomIndex = Math.floor(Math.random() * 5);
console.log(randomWords[randomIndex])*/

/*let phrases = [
    'looks good',
    'yes this need to do',
    'i think thats not good idea',
    'not now maybe',
    'PC says not'
];
console.log(phrases[Math.floor(Math.random() * 5)])
console.log(phrases[Math.floor(Math.random() * 5)])*/

/*let  randomBodyParts = ['Глаз', 'Башка', 'Жопа', 'Нос', 'Нога']
let  randomAttributes = ['Унылая', 'Тупая', 'Вонючая', 'Тупорылая', 'Идиотская']
let  randomWords = ['собака', 'коза', 'корова', 'свинья', 'дубина']
let  randomBodyAttributes = ['настолько', 'совершено', 'просто', 'вообще', 'ну просто']
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
let randomAttribute = randomAttributes[Math.floor(Math.random() * randomAttributes.length)]
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomBodyAttribute = randomBodyAttributes[Math.floor(Math.random() * randomWords.length)]

/!*let randomResult = 'У тебя' + randomBodyPart + randomBodyAttribute + 'словно' + randomAttribute + ' ' + randomWord
console.log(randomResult)*!/

let randomReasult = ['У тебя', randomBodyPart, randomBodyAttribute, 'словно', randomAttribute, randomWord + '!!!'].join(' ')
console.log(randomReasult)*/


/*let arr = [3, 2, 1]
let newArr = ['"' + arr[0] + ' больше, чем ' + arr[1] + ' больше, чем '+ arr[2] + '"'].join(' ')
console.log(newArr)*/

// **************************  Глава 4 ****************************

/*let cat = {
    'legs': 3,
    'name': 'Knopka',
    'color': 'gray'
};*/
/*let cat = {
    legs: '3',
    name: 'Knopka',
    color: 'gray'
};

console.log(cat.color)
console.log(cat.name)
console.log(cat.legs)*/

/*let dog = {
    name: 'doggy',
    age: 6,
    color: 'black',
    bark: 'gav gav'
}
let cat = {
    legs: 3,
    name: 'Knopka',
    color: 'gray'
};
console.log(Object.keys(cat))
console.log(Object.keys(dog))*/


//let object = {};

/*object['legs'] = 3;
object['name'] = 'Knopka';
object['color'] = 'green';*/

//object.legs = 4;
//object.name = 'Knopka';
//object.color = 'green';

//console.log(object)
//console.log(object.atribute) // вернет undefined тк этого свойства нет в обьекте
/*
let dinosaurus = [
    {name: 'Trex', period: 'Mezozoy'},
    {name: 'Stegozavr', period: 'Melovoy'},
    {name: 'Pterodaktil', period: 'Urskiy'}
];

console.log(dinosaurus[0])
console.log(dinosaurus[0].name)
console.log(dinosaurus[0] ["period"])*/

/*var anna = {name: 'Anna', age: 11, luckyNumbers: [2, 4, 8, 16]};
var mike = {name: 'Mike', age: 12, luckyNumbers: [13, 5, 7, 17]};
var knopa = {name: 'Knopa', age: 10, luckyNumbers: [12, 44, 18, 10]};

let friends = [anna, mike, knopa];

console.log(friends[1])
console.log(friends[2].name)
console.log(friends[2].luckyNumbers[3])*/


/*let ownedMoney = {};
ownedMoney['jimmy'] = 5;
ownedMoney['Knopa'] = 7;

ownedMoney['jimmy'] += 3;
console.log(ownedMoney['jimmy'])
console.log(ownedMoney)*/


/*let movies = {
    'Galactica v govne': {
        releaseDate: 1984,
        duration: 100,
        actors: ['vupi goldberg', 'girinovsky'],
        format: 'dvd'
    },
    'koshka spit': {
        releaseDate: 2008,
        duration: 1000,
        actors: ['knopka', 'eda'],
        format: 'dvd'
    },
    'Garry potter i vibory': {
        releaseDate: 2020,
        duration: 100,
        actors: ['Garry Potter', 'jaja Binks'],
        format: 'dvd'
    },
};

let cars = {
    releaseDate: 2019,
    duration: 100,
    actors: ['molnia mqaueen', 'dart veider'],
    format: 'dvd'
}
movies.tachki = cars
let findMovie = movies['Galactica v govne']
console.log(findMovie.actors)
console.log(findMovie.duration)
console.log(Object.keys(movies))

let scores = {
    vera: 0,
    mike: 0,
    knopa: 0
}*/
/*scores.vera += Math.floor(Math.random() *10)
scores.mike += Math.floor(Math.random() *10)
scores.knopa += Math.floor(Math.random() *10)*/
/*scores.vera += 1
scores.mike += 1
scores.knopa += 1
console.log(scores)*/

/*let myCrazyObject = {
    name: 'Nelepiy object',
    someArr: [7, 9, {purpose: 'tuesday', number: 123}, 3.3],
    randomAnimal: 'banana Shark'
};
console.log(myCrazyObject.someArr[2] ['number'])
console.log(myCrazyObject.someArr[2].number)*/

// **************************  Глава 5 ****************************
//она про html уже в нем более менее)))

// глава 6
/*let message = 'hi you!!!'
console.log(message)*/

/*
let name = 'Mi'
//let name = 'Mike'
console.log('Privet' + name)
if (name.length > 3) {
    console.log('Учи JS потом будешь фронтендером')
} else {
    console.log('короткое какое имя')
}
*/


/*let lemonChicken = false;
let beefStroganov = false;
let sweetPorkFork = false;

if (lemonChicken){
    console.log('Буду курицу')
} else if (beefStroganov) {
    console.log('буду говядину')
} else if (sweetPorkFork) {
    console.log('буду свинину под соусом')
} else {
    console.log('Буду рис с водой')
}*/


/*let name = 'Mikhail'
if (name === 'Mikhail') {
    console.log('Привет учись уись потом в веб студию пойдешь работать')
} else if (name === '' || name == null || name.length < 4) {
    console.log('Я тебя не знаю')
} else if (name === 'Knopka' || name === 'Vera'){
    console.log('Это свои')
} else {
    console.log('вы кто такие?')
}*/


/*let sheepCounted = 0;
while (sheepCounted < 10) {
    console.log('S4itau ovec' + sheepCounted + 'bzz')
    sheepCounted++;
}*/


/*or (let sheepCounted = 0; sheepCounted < 10; sheepCounted++){
    console.log('Посчитано овец' + sheepCounted + '!')
}
*/

/*var timesToSayHello = 3;
for(var i = 0; i < timesToSayHello; i++){
    console.log('Kuku!!');
}*/

/*let animals = ['lion', 'flamingo', 'white bear', 'pyton']
for (let i = 0; i < animals.length; i++){
    console.log('В этом зоопарке есть' + animals[i]);
}*/

/*let name = 'Nik'
for(let i = 0; i < name.length; i++){
    console.log('В моем имени есть буква' + name[i] + '.');
}*/

/*for (let x = 2; x < 10000; x = x * 2) {
    console.log(x)
}*/

/*let x = 3;
while ( x < 10000) {
    console.log(x);
    x = x * 3;
}*/

//let animals = ['Кот', 'Рыба', 'Лемур', 'обезьяна'];
/*for (let i = 0; i < animals.length; i++){
    console.log(animals[i] + ' - Прекрасное животное');
}*/

/*for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + ' - прекрасное животное';
}
console.log(animals)*/

/*let alphabet = 'абвгдеежзиклмнопрстуфчцчшъыьэюя';
let randomString = '';
while (randomString.length <= 6) {
   randomString +=  alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);*/

/*let input = 'javascript is awesome';
let output = '';
for (let i = 0; i < input.length; i++){
    if (input[i] === 'a'){
        output += '4'
    }
    else if(input[i] === 'e') {output += '3'}
    else if(input[i] === 'i') {output += '1'}
    else if(input[i] === 'o') {output += '0'}
    else {output += input[i]}
}

console.log(output)*/


//современное решение
/*var input = "javascript is awesome leet";
var replaceList = {
    'a': 4,
    'e': 3,
    'i': 1,
    'o': 0,
    't': 7,
}

var output = input.split('').map(i => replaceList[i] || i).join('')
console.log(output)*/



// **************************  Глава 7 ****************************

/*let name = prompt('how your name?')
console.log('hi,' + name)*/

/*
let likeCats = confirm('Do you like cats?')
if(likeCats){console.log('Nice cat!!!')}
else{console.log('not a problem.howewer, you nice guy')}
*/


//псевдокод - нормальным языком описать поведение программы

//выбрать случайное слово
//пока слово не угадано{
//показать игроку текущее состояние игры
// запросить у игрока вариант ответа
// Если игрок хочет выйти из игры{
// выйти из игры
//}
//Иначе если вариант ответа - не одиночная буква{
//сообщить игроку , что он должен ввести букву
// }
// иначе
// если такая буква есть в слове {
// обновить состояние игры, подставив новую букву
//  }
// }
//}
// поздравить игрока с победой - слово угадано



/*let words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'парапет',
    'конфликт'
];

const word = words[Math.floor(Math.random() * words.length)];
//итоговый массив
let answerArray = [];

for (let i = 0; i < word.length; i++){answerArray[i] = '_';}

let remainingLetters = word.length;
//игровой цикл
let count =  5;
let totalRemainigLetters = remainingLetters;
while (remainingLetters > 0 && count !== 0) {
    //показываем состояние игры
    alert(answerArray.join(' '));
    //запрос варианта ответа
    let guess = prompt('Угадайте букву или нажмите отмена для выхода из игры'.toLowerCase());
    if (guess === null){break;}
    else if (guess.length !== 1) {
        alert('Вводить нужно только одну букву!и пишите ее не с заглавной');
    } else {
        //обновляем сост игры
        for (let  j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j].includes('_')) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    if (totalRemainigLetters === remainingLetters) {
        count--;
    }
}

alert(answerArray.join(' '));
if (count === 0) {alert('GAME OVER')}
else if (remainingLetters === 0) {alert('well done! you now know secret word' + word)}
else {alert('learn JS')}*/

// **************************  Глава 8 ****************************

/*let  ourFirstFunction = function () {
    console.log('Hi world');
};

ourFirstFunction()*/

/*let sayHello = function (name) {
    console.log('hi ' + name + ' !')
};
sayHello('mike');*/

/*let drawCats = function (howManyTimes) {
for(let i = 0; i < howManyTimes; i++) {
    console.log(i + ' =^.^=')
 }
}
drawCats(100);*/


/*let printMultipleTimes = function (howManyTimes, whatToDraw) {
for (let i = 0; i < howManyTimes;i++){
    console.log(i + ' ' + whatToDraw);
 }
};
printMultipleTimes(5, '(.)(.)')*/

/*
let double = function (number) {
    return number * 2
}
console.log(double(3))
*/

/*let double = function (number) {
    return number * 2
}
console.log(double(3) + double(6))
console.log(double(double(4)))*/


/*let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * randomWords.length)];
};

let randomWords = ['Planet', 'pigmalion', 'apple', 'computer'];
let randomName = ['$arly', 'Picket', '4Er4ill', 'Radg', 'Maxno']
console.log(pickRandomWord(randomWords));
console.log(pickRandomWord(randomName));*/


/*let  randomBodyParts = ['Глаз', 'Башка', 'Жопа', 'Нос', 'Нога']
let  randomAttributes = ['Унылая', 'Тупая', 'Вонючая', 'Тупорылая', 'Идиотская']
let  randomWords = ['собака', 'коза', 'корова', 'свинья', 'дубина']
let  randomBodyAttributes = ['настолько', 'совершено', 'просто', 'вообще', 'ну просто']


 pickRandomWord = (words) => {
    return words[Math.floor(Math.random() * randomWords.length)];
};

let randomReasult = ['У тебя', pickRandomWord(randomBodyParts), pickRandomWord(randomBodyAttributes), 'словно', pickRandomWord(randomAttributes), pickRandomWord(randomWords) + '!!!'].join(' ')
console.log(randomReasult)*/

/*randomBlinks = () => {
    let  randomBodyParts = ['Глаз', 'Башка', 'Жопа', 'Нос', 'Нога']
    let  randomAttributes = ['Унылая', 'Тупая', 'Вонючая', 'Тупорылая', 'Идиотская']
    let  randomWords = ['собака', 'коза', 'корова', 'свинья', 'дубина']
    let  randomBodyAttributes = ['настолько', 'совершено', 'просто', 'вообще', 'ну просто']
    pickRandomWord = (words) => {
        return words[Math.floor(Math.random() * randomWords.length)];
    };
    let randomResault = ['У тебя', pickRandomWord(randomBodyParts), pickRandomWord(randomBodyAttributes), 'словно', pickRandomWord(randomAttributes), pickRandomWord(randomWords) + '!!!'].join(' ')
    console.log(randomResault);
    return randomResault;
};
randomBlinks()
randomBlinks()
randomBlinks()*/


/*let fifthLetter = function (name) {
  if(name.length < 5){
      return;
  }
  return 'Пятая буква вашего имени: ' + name[4] + '.'; // не будет выполнена тк выше return
};
console.log(fifthLetter('Михаил'))
console.log(fifthLetter('Миха'))*/


/*let medalForScore = function (score) {
    if(score < 3) {return 'Бронза'}
    if(score < 7){return 'Silver'}
    return 'Gold'
};
console.log(medalForScore(5))
console.log(medalForScore(8))*/


/*double = (number) => {
 return number * 2;
}
console.log(double(40))

function doublele(number) {
    return number * 2
}

console.log(doublele(4))*/


// #1математические расчеты и функции
/*add = (number1, number2) => {
    return number1 + number2
}
multiply = (number1, number2) => {
    return number1 * number2
}
let total = multiply(36325, 9824)
    total = add(total, 777) // total передаем как number1
    console.log(total)*/

// #2 Совпадают ли массивы?

/*areArraysSame = (firstArr, secondArr) => {
   for (let i = 0; i < firstArr.length; i++){
       if (firstArr[i] != secondArr[i] || firstArr.length != secondArr.length){
           return false
       }
   }
   return true
}
console.log(areArraysSame([1, 2, 3], [4, 5, 6]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]))*/

// #3 "виселица и функции"
/*function pickWord() {
    // Возвращает случайно выбранное слово
    var words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек",
        "телевизор",
        "монитор",
        "ручка",
        "тапочек",
        "карандаш",
        "плита"
    ];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
};


function setupAnswerArray(word) {
      let answerArray = [];
      for (let i = 0; i < word.length; i++){answerArray[i] = '_';}
      return answerArray;
};

function showPlayerProgress(answerArray) {
    alert(answerArray.join(' '));
}

function getGuess() {
    let guess = prompt('Угадайте букву или нажмите отмена для выхода из игры'.toLowerCase());
    return guess;
}

function updateGame (guess, word, answerArray) {
    // Обновляем answerArray по ответу игрока (guess)
        let current = 0; // поставил счетчик
        for (let  j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j].includes('_')) {
                answerArray[j] = guess;
                current++;
            } else {
                answerArray[j] = answerArray[j]
            }
        }
         return current;
        // current возвращает число = сколько раз было встречена буква guess в слове
        //  с помощью этого обновляем remainingLetters  которое = word.length

}

let showAnswerCongrat = function(answerArray) {
    alert(answerArray.join(' '));
    if (count === 0) {alert('GAME OVER')}
    else if (remainingLetters === 0) {alert('well done! you now know secret word' + word)}
    else {alert('learn JS')}
}


let word = pickWord();
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length;
let count =  5;
let totalRemainigLetters = remainingLetters;
//игровой цикл
while (remainingLetters > 0 && count !== 0) {
    showPlayerProgress(answerArray);
    //запрос варианта ответа
    let guess = getGuess();
    if (guess === null){break;}
    else if (guess.length !== 1) {
        alert('Вводить нужно только одну букву!и пишите ее не с заглавной');
    } else {
        let correctGuesses = updateGame(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        totalRemainigLetters === remainingLetters
        count--; // условие для ограниченного количества попыток
    }
    /!*if (totalRemainigLetters === remainingLetters) {
        count--;
    }*!/
}
showAnswerCongrat(answerArray);*/
// хрен знает как сделал но работает все перечсмотреть ЕЩЕ НЕСКОЛЬКО РАЗ!!!

// **************************  Глава 9 ****************************
// DOM & Jquery

/*let headingElement = document.getElementById('main-heading');
console.log(headingElement.innerHTML)
let newHeadingText = prompt('Ведите текст')
//headingElement.innerHTML = newHeadingText;
$('#main-heading').text(newHeadingText)*/


// чтобы поместить новый элемент в body

//$('body').append('<p>это новый параграф сделанный с помощью Jquery</p>')
//мой вариант
/*addNewparagraph = () => {
    for (let i = 0; i < 3; i++){
        let hobby = prompt('Назови свое хобби')
        if (hobby === null || hobby === ''  || hobby.length > 10 || hobby === false) {
            alert('Введите свое хобби правильно');
            i = i - 1;
        } else {$('body').append('<p>' + hobby + '</p>');}
    }
}
addNewparagraph();*/

/*for (let i = 0; i < 3; i++) {
    let hobby = prompt('Назовите свое хобби')
    $('body').append('<p>' + hobby + '</p>')
}
*/

//анимация обьектов с помощью Jquery

//$('h1').fadeOut(3000)

//$('h1').text('Этот текст скоро исчезнет').fadeOut(3000)

//$('h1').text('Этот текст скоро исчезнет').fadeOut(3000).fadeIn(3000);

//$('h1').slideUp(5000).slideDown(5000);


//$('h1').slideUp(5000).slideDown(5000);

/*for (let i = 0; i < 5; i++) {
    $('h1').slideUp(3000)
    $('h1').slideDown(3000)
}*/


/*$('h1').hide(3000);

$('p').click(function () {
    $('h1').show(3000);
});*/

// #1Перечислите своих друзей ( и сделайте их лучшими)

/*let friends = ['Vera', 'Knopa', ' Utebanetdruzei']

function friendsCount() {
   for (let i = 0; i < friends.length; i++) {
       let friendName = friends[i];
       $('h1').hide().text('Мои друзья').fadeIn(3000);
       $('body').append( '<p>' + 'Лучший :' + friendName + '</p>');
       $("p").hide().fadeIn(3100); // тут тупанул думал сразу во второй строке все прописать
   }
}
friendsCount();*/

// #2 Мигающий заголовок

//$('h1').fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);


/*blinkHeading = () => {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        $('h1').fadeOut(1000 *  count).fadeIn(1000 * count);
        count += 1;
    }
}
blinkHeading()*/

// #3 Отложенная анимация

//$('h1').delay(5000).fadeOut(1000).delay(5000).fadeIn(1000)


// #4 Метод fadeTo
 /*$('h1').fadeTo(3000, 0.3, fade = () => {
     $('h1').delay(2000).fadeOut(1000).delay(2000).fadeIn(1000)
});
fade()*/


// **************************  Глава 10 интерактивное программирование ****************************

/*let timeUp = () => {
    alert('Время вышло!')
}
setTimeout(timeUp, 3000)
setTimeout(timeUp, 5000)*/

/*let doHomeWorkAlarm = () => {
    alert('Пора делать чтонибудь!!!')
}
let timeoutID = setTimeout(doHomeWorkAlarm, 30000)
clearTimeout(timeoutID);*/

/*let counter = 1

let printMessage = () => {
    console.log('Куда ты смотришь А-А-А!!' + counter)
    counter++;
}
let intervalid = setInterval(printMessage, 5000)
clearInterval(intervalid)*/

/*let leftOffset = 0;
let moveHeading = () => {
    $('#heading').offset({left: leftOffset})
    leftOffset++;
    //ускорить вдвое +=2
    if(leftOffset > 200) {
        leftOffset = 0
    }
}
setInterval(moveHeading, 30)*/
//ускорить вдвое moveHeading, 15


/*let clickHandler = function (event) {
    console.log('click!' + event.pageY + ' ' + event.pageX);
};
$('.btn').click(clickHandler)
$('ho').click(clickHandler)
$('h1').click(clickHandler)*/

// будет передвигать обьект вместе с мышью внутри родительского блока
/*$('html').mousemove(function (event) {
   $('#heading').offset({left: event.pageX, top: event.pageY});
})*/

// #1 Следом за кликами
/*$('html').click(function (event) {
    $('#heading').offset({left: event.pageX, top: event.pageY});
})*/

// #2 Создайте собственную анимацию


/*let leftOffset = 0;
let topOffset = 0;
let animationSpeed = 50;
let popitky = 0;


let moveHeading = () => {
    if(leftOffset < 200 && topOffset === 0) {
        $('#heading').offset({left: leftOffset})
        leftOffset++;
    }
    else if (leftOffset === 200 && topOffset < 200) {$('#heading').offset({top: topOffset}); topOffset++; }
    else if (topOffset === 200 && leftOffset > 0) {$('#heading').offset({left: leftOffset}); leftOffset--; }
    else if (topOffset > 0 && leftOffset === 0) {$('#heading').offset({top: topOffset}); topOffset--; }

}

let stopAnimation = setInterval(moveHeading, animationSpeed)*/


// #3 Остановка анимации по клику

/*$('#heading').click(function (event) {
    clearInterval(stopAnimation);
})*/

// #4 Кликни по заголовку

/*$('#heading').click(function (event) {
    if (popitky < 9) {
        clearInterval(stopAnimation);
        popitky++;
        $('#heading').text('Вы кликнули' + popitky + 'раз!')
        animationSpeed -= 6
        stopAnimation = setInterval(moveHeading, animationSpeed) // задаем новый интервал
    }
    else if ( popitky === 9) {
        $('#heading').text('Вы победили!');
        clearInterval(stopAnimation);
    }

})*/



 // **************************  Глава 11 ****************************

// размер карты 400*400 координаты верхнего левого угла --> {x: 0, y: 0}; еоординаты нижнего правого угла {x: 399, y: 399}
/*let clicks =0

let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size)
}
//getRandomNumber(400)
// #1 увеличение игрового поля
let width = 800;
let height = 800;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

$('#map').click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance)
    $('#distance').text(distanceHint)
    if (distance < 8) {alert('Клад найден, сделано попыток:' + clicks)}
    //#3 ограничение по кликам (попыткам)
    else if(clicks === 50) {alert('GAME OVER')}
});

let getDistance = (event, target) => {
    let diffX = event.offsetX - target.x
    let diffY = event.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY)) // теорема пифагора про то как найти длинну гипотенузы взяв квадратный корень от a(во второй степени) + b(во второй степени)
}

let getDistanceHint = (distance) => {
    if(distance < 10){ return 'Обожжешся!' + '- попыток - ' + clicks}
    else if(distance < 20) {return ' очень горячо' + '- попыток - ' + clicks}
    else if(distance < 40) {return 'горячо' + '- попыток - ' + clicks}
    else if(distance < 80) {return 'тепло' + '- попыток - ' + clicks}
    else if(distance < 120) {return 'менее тепло' + '- попыток - ' + clicks} // #2 больше подсказок
    else if(distance < 160) {return 'холодно' + '- попыток - ' + clicks}
    else if(distance < 320) {return 'Очень холодно' + '- попыток - ' + clicks}
    else if(distance < 360) {return 'Супер холодно!' + '- попыток - ' + clicks}
    else  {return 'Замерзнешь' + '- попыток - ' + clicks} // отображение числа оставшихся кликов
}*/

// **************************  Глава 12 ООП ****************************
// обьектно - ориентированное программирование --> ООП

/*let dog = {
    name: 'oladu6ek',
    legs: 4,
    isAwessome: true
}
console.log(dog.name)
dog.age = 6
console.log(dog.age)

//eсли функция внутри обьекта то она метод

/!*dog.bark = () => {
    console.log('Gav gav! My name is' + dog.name + '!') // стрелочные функции не имеют контекста вызова
}*!/
dog.bark = function()  {
    console.log('Gav gav! My name is' + this.name + '!')
}
dog.bark()*/

/*function speak() {
    console.log(this.sound + '!' + 'My name is' + this.name + '!' )
    // тк в коде есть this то контекст вызова будет обьект cat
}

let cat = {
    sound: 'miau',
    name: 'Knopka',
    speak: speak
}
cat.speak()

let pig = {
    sound: 'hruhru',
    name: 'Piggy',
    speak: speak
}
pig.speak()
let horse = {
    sound: 'igogo',
    name: 'horse',
    speak: speak
}
horse.speak()*/
// В КОДЕ МЕТОДА THIS ССЫЛАЕТСЯ НА ОБЬЕКТ ДЛЯ КОТОРОГО МЕТОД БЫЛ ВЫЗВАН!!!
// при вызове pig this --> обьект pig при вызове horse this --> обьект horse
// конструктор это функция которая создает обьекты давая им набор зараннее определенных свойств и методов
//-->
/*function Car(x, y) {
   this.x = x;
   this.y = y;
}*/

/*let tesla = new Car(10, 20)
console.log(tesla)*/

/*let drawCar = function (car) {
  let carHtml = '<img src="car.png">'
    let carElement = $(carHtml);

  carElement.css({
      position: 'absolute',
      left: car.x,
      top: car.y,
      width: '100px',
      height: '100px'
  });
  $('body').append(carElement);
}*/
/*let tesla = new Car(20, 20)
let nissan = new Car(100, 200)
drawCar(tesla)
drawCar(nissan)*/
//у всех конструкторов есть свойство prototype к которому можно добавлять методы;
// любой метод добавленный к свойству prototype будет доступен всем обьектам, которые созданы при помощи этого конструктора


/*function Car(x, y, speed) {
    this.x = x;
    this.y = y;
    this.draw(); // #1. Рисование в конструкторе Car
    // Доработайте конструктор Car, чтобы он добавлял создаваемым
    // объектам свойство speed (скорость) со значением 5. Используйте
    // это свойство в методах перемещения ВМЕСТО числа 5.
    // Затем попробуйте задавать различные значения скорости,
    // чтобы машины двигались быстрее или медленнее.
    this.speed = speed; // #2. Добавьте свойство speed
}

Car.prototype.draw = function (car) {
    let carHtml = '<img src="car.png">'
    this.carElement = $(carHtml);
// в конструкторе this соответствует обьекту который в данный момент создается
    this.carElement.css({
        position: 'absolute',
        left: this.x,
        top: this.y,
        width: '100px',
        height: '100px'
    });
    $('body').append(this.carElement);
}

Car.prototype.moveRight = function (speed) {
    this.x += speed;
 // #3 Доработайте moveRight - moveLeft - moveUp - moveDown чтобы они вместо перемещения на 5 пикселей,
 // они принимали величину сдвига (speed) в качестве аргумента.
 // к примеру доя перемещения на 10 пикселей нужно будет --> nissan moveRight(10)
    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveLeft = function (speed) {
    this.x -= speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveUp = function (speed) {
    this.y -= speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.moveDown = function (speed) {
    this.y += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    })
}


let tesla = new Car(20, 20, 0 ); // 0 --> третий аргумент который speed
let nissan = new Car(100, 200, 0 );



const startRace = setInterval(function () {
    tesla.moveRight(Math.floor(Math.random() * 5))
    nissan.moveRight(Math.floor(Math.random() * 5))
    if(tesla.x >= 500/!*$('html').innerWidth()*!/) {
        clearInterval(startRace)
        alert('тесла быстрее!')
    } else  if (nissan.x >= 500/!*$('html').innerWidth()*!/) {
        clearInterval(startRace)
        alert('ниссан быстрее!')
    }
}, 30)*/


//tesla.draw()
//nissan.draw()




// **************************  Глава 13  CANVAS ****************************

/*let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')*/
//ctx.fillRect(0, 0, 10, 10)

/*for (let i = 0; i < 8; i++) {
    ctx.fillRect(i * 10, i * 10, 10, 10)
}*/
// ширину поля можно увеличить
/*legoMan = () => {
    ctx.fillStyle = 'Red'
    ctx.fillRect(100, 0, 50, 50);
    ctx.fillRect(120, 50, 10, 40);
    ctx.fillRect(90, 80, 80, 80);
    ctx.fillRect(30, 80, 100, 10);
    ctx.fillRect(140, 80, 100, 10);
    ctx.fillRect(90, 160, 10, 40);
    ctx.fillRect(160, 160, 10, 40);
}
legoMan()*/

/*threeCube = () => {
    ctx.fillStyle = 'Red'
    ctx.fillRect(10, 5, 50, 100);
    ctx.fillStyle = 'Green'
    ctx.fillRect(60, 5, 50, 100);
    ctx.fillStyle = 'Blue'
    ctx.fillRect(100, 5, 50, 100);
}
threeCube()*/

/*let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
ctx.strokeRect(10, 10, 100, 20)*/

/*let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
ctx.strokeStyle = 'DeepPink'
ctx.lineWidth = 4
ctx.strokeRect(10, 10, 100, 20)*/


/*let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')*/
/*ctx.strokeStyle = 'Turquoise'
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(60, 60)
ctx.moveTo(60, 10)
ctx.lineTo(10, 60)
ctx.stroke()*/


/*happyMan = () => {
    ctx.lineWidth = 4
    ctx.strokeRect(10, 10, 20, 20)
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(20, 30)
    ctx.lineTo(20, 60)
    ctx.moveTo(20, 40)
    ctx.lineTo(50, 30)
    ctx.moveTo(20, 40)
    ctx.lineTo(0, 30)
    ctx.moveTo(20, 60)
    ctx.lineTo(40, 70)
    ctx.moveTo(20, 60)
    ctx.lineTo(10, 70)
    ctx.stroke()
}
happyMan()*/

/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.fillStyle = 'Blue'
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(100, 60)
ctx.lineTo(130, 30)
ctx.lineTo(160, 60)
ctx.lineTo(160, 100)
ctx.lineTo(100, 100)
ctx.fill()*/

/*
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
*/

/*ctx.lineWidth = 2;
ctx.strokeStyle = 'Green'

ctx.beginPath()
ctx.arc(50, 50, 20, 0 , Math.PI / 2, false)
ctx.stroke()

ctx.beginPath()
ctx.arc(100, 50, 20, 0 , Math.PI, false)
ctx.stroke()

ctx.beginPath()
ctx.arc(150, 50, 20, 0 , Math.PI * 2, false)
ctx.stroke()*/


/*let circle = (x, y, radius, fillCircle) => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
    ctx.stroke()
    if (fillCircle === true) {fillCircle = ctx.fill()}
    else if (fillCircle === false) {fillCircle = ctx.stroke()}

}*/


/*ctx.lineWidth = 4
ctx.strokeStyle = 'Red'
circle(100, 100, 10)
ctx.strokeStyle = 'Orange'
circle(100, 100, 20)
ctx.strokeStyle = 'Yellow'
circle(100, 100, 30)
ctx.strokeStyle = 'Green'
circle(100, 100, 40)
ctx.strokeStyle = 'Blue'
circle(100, 100, 50)
ctx.strokeStyle = 'Purple'
circle(100, 100, 60)*/

//#1 нарисовать снеговика в заданных координатах

/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')*/

/*let circle = function (x, y, radius, fillCircle )  {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
    ctx.stroke()
    if (fillCircle === true) {fillCircle = ctx.fill()}
    else if (fillCircle === false) {fillCircle = ctx.stroke()}

}

 let  drawSnowMan = function (x , y)  {
    ctx.lineWidth = 4
    circle(x+100, y+100, 60, false)
    circle(x+70, y+80, 10, true)
    circle(x+125, y+80, 10, true)
    ctx.fillStyle = 'Orange'
    ctx.strokeStyle = 'Orange'
    circle(x+100, y+100, 10, true)
    ctx.strokeStyle = 'Black'
    ctx.fillStyle = 'Black'
    circle(x+100, y+240, 80, false)
    circle(x+100, y+200, 10, true)
    circle(x+100, y+235, 10, true)
    circle(x+100, y+270, 10, true)

}
drawSnowMan( 150, 100)*/

// #2  Рисование по массиву точек

/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]]
let mysteryPoints = [[50,70], [50,100], [25,120], [100,50], [70,90], [100,90], [70,120]]

function drawPoints(points) {
    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    for (let i = 0; i < points.length; i++){
        ctx.lineTo(points[i + 0][0], points[i + 0][1])
    }
    ctx.stroke()
}

drawPoints(points)
drawPoints(mysteryPoints)*/

// #3  Рисование мышкой

/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

$('html').mousemove(function (event) {
    ctx.beginPath()
    ctx.fillStyle = 'Red'
    ctx.arc(event.pageX, event.pageY, 3, 0 , Math.PI * 2, false)
    ctx.fill()
})*/

// #4  Человечек в Виселице

/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')


function pickWord() {
    // Возвращает случайно выбранное слово
    var words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек",
        "телевизор",
        "монитор",
        "ручка",
        "тапочек",
        "карандаш",
        "плита"
    ];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
};


function setupAnswerArray(word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++){answerArray[i] = '_';}
    return answerArray;
};

function showPlayerProgress(answerArray) {
    alert(answerArray.join(' '));

}

function getGuess() {
    let guess = prompt('Угадайте букву или нажмите отмена для выхода из игры'.toLowerCase());
    return guess;
}

function updateGame (guess, word, answerArray) {
    // Обновляем answerArray по ответу игрока (guess)
    let current = 0; // поставил счетчик
    for (let  j = 0; j < word.length; j++){
        if (word[j] === guess && answerArray[j].includes('_')) {
            answerArray[j] = guess;
            current++;
        }
    }
    return current;
    // current возвращает число = сколько раз было встречена буква guess в слове
    //  с помощью этого обновляем remainingLetters  которое = word.length

}

let showAnswerCongrat = function(answerArray) {
    alert(answerArray.join(' '));
    if (count === 0) {alert('GAME OVER')}
    else if (remainingLetters === 0) {alert('well done! you now know secret word' + word)}
    else {alert('learn JS')}
}

var happyMan = function (count, word) {

    if (count >= 5) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.stroke();
    } else
    if (count >= 4) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.stroke();
    } else
    if (count >= 3) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.stroke();
    } else
    if (count >= 2) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 50);
        ctx.stroke();
    } else
    if (count >= 1) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 50);
        ctx.moveTo(60, 30);
        ctx.lineTo(60, 100);
        ctx.stroke();
    }
    return '';
}

let word = pickWord();
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length;
let count =  6;
let totalRemainigLetters = remainingLetters;

//игровой цикл
while (remainingLetters > 0 && count !== 0) {

    showPlayerProgress(answerArray);
    //запрос варианта ответа
    let guess = getGuess();

    if (guess === null){break;}
    else if (guess.length !== 1) {
        alert('Вводить нужно только одну букву!и пишите ее не с заглавной');
    }
    else {
        let correctGuesses = updateGame(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        totalRemainigLetters === remainingLetters
        count--; // условие для ограниченного количества попыток
        happyMan(count)
    }
    if (count >= 0) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 50);
        ctx.moveTo(60, 30);
        ctx.lineTo(60, 100);
        ctx.stroke();
    } // будет рисовать человечка после результата игры

}
showAnswerCongrat(answerArray)*/
// не могу решить эту задачу:((

//****************************** пример с хабра *************************

/*function randomWord(words) { //рандомный выбор слова из массива
    return words[Math.floor(Math.random() * words.length)];
}

function returnAnswerArray(word) { //вставка прочерков относительно длинный слова
    var aArray = [];

    for (i = 0; i < word.length; i++) {
        aArray[i] = "_";
    }
    return aArray;
}

function promptUser(callback) { //запрос буквы от пользователя
    // guess = prompt("Введите предполагаемую букву");
    var b = document.createElement("div");
    b.id ="block";
    document.body.appendChild(b);
    var t = document.createElement("span");
    t.innerHTML = "Введите предполагаемую букву";
    b.appendChild(t);
    t = document.createElement("input");
    t.id = "word";
    b.appendChild(t);
    document.querySelector("#word").focus();
    document.querySelector("#word").addEventListener("input", function() {
        if (this.value.trim() != ""){
            document.body.removeChild(document.querySelector("#block"));
            callback(this.value.trim().toLowerCase());
        }
    });
}

function returnCheck(guessed, guess, check) { //проверка на ввод данной буквы ранее
    for (k = 0; k < guessed.length; k++) {
        if (guessed[k] == guess) {
            alert("Данную букву вы уже вводили");
            check = false;
        }
    }
    return (check);
}

function pushGuessed(guessed, check, guess) { //если букву не вводили добавление ее в массив guessed
    if (check === true) {
        guessed.push(guess);
    }
    return (guessed);
}

function remainingLettersSubtract(word, check, answerArray, remainingLetters, guess) { //уменьшение количества необходимых для угадывания букв в случае если буква угадана верно
    for (j = 0; j < word.length && check === true; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
    return (remainingLetters);
}

function checkAttempt(attempt, word, check, guess) { //проверка необходимости вычитания количества попыток (следующая функция отнимает попытки однако она будет выполнена только в случае если букву ранее не вводили(за это отвечает check) и данной буквы в слове нет(за это отвечает attempt))
    for (j = 0; j < word.length && check === true; j++) {
        if (word[j] === guess) {
            attempt++;
        }
    }
    return (attempt);
}

function subtractAttempt(attempt, attempts, check) { //вычитание попытки
    if (attempt === 0 && check === true) {
        attempts--;
    }
    return (attempts);
}

function checkAndSubtractAttempt(check, guess) { //уменьшение количества попыток если буква не угадана и не вводилась ранее
    var attempt = 0;
    attempt = checkAttempt(attempt, word, check, guess);
    attempts = subtractAttempt(attempt, attempts, check);
    return (attempts);
}

function totalGame( remainingLetters, word, attempts) { //итог игры
    if (remainingLetters === 0) {
        alert("Поздравляем, угаданное слово " + word);
    } else if (attempts === 0) {
        alert("Вы проиграли");
    } else {
        alert("Ну нехотите, как хотите");
    }
}

var human = function(attempts) { //рисование человечка

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 4;
    ctx.strokeStyle = "Grey";
    ctx.beginPath();
    if (attempts < 6) {
        ctx.moveTo(50, 200); //основание
        ctx.lineTo(150, 200);
        ctx.lineTo(100, 180);
        ctx.lineTo(50, 200);
        ctx.lineTo(100, 200);
    }

    if (attempts < 5) {
        ctx.lineTo(100, 50); //столб
        ctx.lineTo(200, 50);
        ctx.lineTo(200, 80);
    }

    if (attempts < 4) {
        ctx.moveTo(210, 90); //голова
        ctx.arc(200, 90, 10, 0, Math.PI * 2, false);
    }

    if (attempts < 3) {
        ctx.moveTo(200, 100); //туловище
        ctx.lineTo(200, 140);
    }

    if (attempts < 2) {
        ctx.lineTo(190, 170); //руки
        ctx.moveTo(200, 140);
        ctx.lineTo(210, 170);
    }

    if (attempts < 1) { //ноги
        ctx.moveTo(200, 115);
        ctx.lineTo(190, 135);
        ctx.moveTo(200, 115);
        ctx.lineTo(210, 135);
    }


    ctx.stroke();
}


var words = [ //массив слов
    "помидор",
    "киви"
];

var word = randomWord(words); //рандомный выбор слова из массива
var answerArray = returnAnswerArray(word); //вставка прочерков относительно длинный слова
var remainingLetters = word.length;
var guessed = [];
var attempts = 6;

function gameLoop() {

    promptUser(function(guess) {
        //запрос буквы от пользователя
        if (guess.length !== 1) { //действие в случае ввода нескольких букв
            alert("Введите одну букву");
        } else { //если ввели одну букву
            var check = true;
            check = returnCheck(guessed, guess, check); //проверка на ввод данной буквы ранее
            guessed = pushGuessed(guessed, check, guess); //если букву не вводили добавление ее в массив guessed
            remainingLetters = remainingLettersSubtract(word, check, answerArray, remainingLetters, guess); //уменьшение количества необходимых для угадывания букв в случае если буква угадана верно
            attempts = checkAndSubtractAttempt(check, guess); //уменьшение количества попыток если буква не угадана и не вводилась ранее
            human(attempts); //отображение частей человечка, относительно количества оставшихся попыток    }


            document.querySelector("#status").innerHTML = (answerArray.join(" ")); //отображение текущего состояния игры
            if (remainingLetters > 0 && attempts > 0)
                gameLoop();
            else
                setTimeout(()=>{totalGame(remainingLetters, word, attempts);},0);
        }
    });
    document.querySelector("#status").innerHTML = (answerArray.join(" ")); //отображение текущего состояния игры

}
gameLoop();*/

// *************************************************** Глава 14 Анимация CANVAS *************************************************************************


/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let position = 0

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200)
    ctx.fillRect(position, 0, 20, 20)

    position++
    if (position > 200){position = 0}
}, 30)*/

/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let size = 0

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200)
    ctx.fillRect(0, 0, size, size)

    size++
    if (size > 200){size = 0}
}, 30)*/

// летающая пчела
/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let x = 100
let y = 100

setInterval(function () {
   ctx.clearRect(0, 0, 200, 200)

    drawBee(x, y)
    x = update(x)
    y = update(y)

    ctx.strokeRect(0, 0, 200, 200)
}, 30)

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle){ctx.fill();}
    else {ctx.stroke();}
}

let drawBee = function (x, y) {
    ctx.lineWidth = 2
    ctx.strokeStyle = 'Black'
    ctx.fillStyle = 'Gold'

    circle(x, y, 8, true)
    circle(x, y, 8, false)
    circle(x - 5, y -11, 5, false)
    circle(x + 5, y -11, 5, false)
    circle(x - 2, y - 1,2, false)
    circle(x + 2, y - 1, 2, false)
}

let update = function (coordinate) {
    let offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > 200) {coordinate = 200;}
    if (coordinate < 0) {coordinate = 0;}
    return coordinate
};*/

// Отскакивающий мяч


/*let Ball = function () {
    this.x = 100
    this.y = 100
    // #2 Случайные значения - this.xSpeed и this.ySpeed
    this.xSpeed = Math.random() * 10 - 5;
    this.ySpeed = Math.random() * 10 - 5;
};

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle){ctx.fill();}
    else {ctx.stroke();}
}
Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true)
};

Ball.prototype.move = function () {
    this.x += this.xSpeed
    this.y += this.ySpeed
};


Ball.prototype.checkCollision =function () {
    if(this.x < 0 || this.x > width) {this.xSpeed = -this.xSpeed}
    if(this.x < 0 || this.x > height) {this.ySpeed = -this.ySpeed}
}

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let ball = new Ball();


// #1 Увеличение размеров холста
let width = canvas.width
let height = canvas.height

setInterval(function () {
   ctx.clearRect(0, 0, width, height)

    ball.draw()
    ball.move()
    ball.checkCollision(0, 0, width, height)

    ctx.strokeRect(0, 0, width, height)
}, 15)*/



//----------------------------------------------------------------------------------------------------------------------
//это конструктор мяча
/*let Ball = function () {
    this.x = 100
    this.y = 100
    // #2 Случайные значения - this.xSpeed и this.ySpeed
    this.xSpeed = Math.random() * 10 - 5;
    this.ySpeed = Math.random() * 10 - 5;
    // # 4 цветные мячи
    let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Purple', 'Blue', 'Gray', 'Black']
    this.color = randomColor(colors);
};

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle){ctx.fill();}
    else {ctx.stroke();}
}
Ball.prototype.draw = function () {
    ctx.fillStyle = this.color // добавляем цвет шарам
    circle(this.x, this.y, 3, true)
};

Ball.prototype.move = function () {
    this.x += this.xSpeed
    this.y += this.ySpeed
};


Ball.prototype.checkCollision =function () {
    if(this.x < 0 || this.x > width) {this.xSpeed = -this.xSpeed}
    if(this.x < 0 || this.x > height) {this.ySpeed = -this.ySpeed}
}

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let ball = new Ball();
//#3 БОльше мячей
let moreBalls = []
for (let i = 0; i < 10; i++){moreBalls[i] = new Ball;}

// #1 Увеличение размеров холста
let width = canvas.width
let height = canvas.height

setInterval(function () {
    ctx.clearRect(0, 0, width, height)
    for (let i = 0; i < moreBalls.length; i++){
        moreBalls[i].draw()
        moreBalls[i].move()
        moreBalls[i].checkCollision(0, 0, width, height)
    }

    ctx.strokeRect(0, 0, width, height)
}, 15)*/



// ****************************************************  Глава 15 **************************************************************************
// управление анимациями с клавиатуры

/*$('body').keydown(function (event) {
    console.log(event.keyCode);
});*/

/*let keyNames = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    16: 'shift',
    13: 'enter',
    8: 'return',
    18: 'alt',
    17: 'ctrl'
    // не нашел клавишу option другую забиндил
}

$('body').keydown(function (event) {
    console.log(keyNames[event.keyCode]);
});
console.log(keyNames[32])*/


/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if(fillCircle){ctx.fill()}
    else {ctx.stroke()}
}

let Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
    this.speed = 5;
    this.size = 10 // размер мяча (радиус)
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // #1 отскоки от границ холста
    if(this.x < 0 || this.x > width){
        this.x = width;
        this.xSpeed = -this.xSpeed
    }
    else  if (this.x === 0) {
        this.xSpeed = 5;
    }
    if (this.y < 0 || this.y > height) {
        this.y = height;
        this.ySpeed = -this.ySpeed
    }
    else if(this.y === 0) {
        this.ySpeed = 5}
}


Ball.prototype.draw = function () {
    circle(this.x, this.y, this.size, true)
}

Ball.prototype.setDirection = function (direction, setSpeed) {
    if (direction === 'up'){
        this.xSpeed = 0;
        this.ySpeed = - this.speed;
    } else if (direction === 'down'){
        this.xSpeed = 0;
        this.ySpeed = this.speed;
    }
    else if(direction === 'left') {
        this.xSpeed = - this.speed;
        this.ySpeed = 0;
    }
    else if(direction === 'right') {
        this.xSpeed = this.speed;
        this.ySpeed = 0;
    }
    else if(direction === 'stop') {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
    else if (setSpeed === '1') {
        this.xSpeed = this.speed + 5;
    }
    else if (setSpeed === '2') {
        this.xSpeed = this.speed + 10;
    }
    else if (setSpeed === '3') {
        this.xSpeed = this.speed + 15;
    }
    else if (setSpeed === '4') {
        this.xSpeed = this.speed + 20;
    }
    else if (setSpeed === '5') {
        this.xSpeed = this.speed + 25;
    }
    else if (setSpeed === '6') {
        this.xSpeed = this.speed + 30;
    }
    else if (setSpeed === '7') {
        this.xSpeed = this.speed + 35;
    }
    else if (setSpeed === '8') {
        this.xSpeed = this.speed + 40;
    }
    else if (setSpeed === '9') {
        this.xSpeed = this.speed + 45;
    }
    // #3 гибкое управление
    else if (direction === 'faster') {
        this.xSpeed = this.speed++;
    } else if (direction === 'slower' || this.speed > 0) {
        this.xSpeed = this.speed--;
    } else if (direction === 'bigger') {
        this.size++;
    } else if (direction === 'smaller'){
        this.size--;
    }
};

let ball = new Ball();



let keyActions = {
    32: 'stop',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    // #3 гибкое управление
    88: "faster",
    90: "slower",
    67: "bigger",
    86: "smaller"
}

// #2 управление скоростью
speeds = {
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9'
}

$('body').keydown(function (event) {
    let direction = keyActions[event.keyCode];
    let setSpeed = speeds[event.keyCode];
    ball.setDirection(direction, setSpeed);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height)
    ball.draw()
    ball.move()
    ctx.strokeRect(0, 0, width, height,)
}, 30);*/


// *********************************************************************  Глава 16 ********************************************************************
// пишем игру Змейка

// настроитьхолст
// установить счет игры в 0
// создать змейку
// создать яблоко
// каждые 100 мск {
// очистить холст
// напечатать текущий счет игры
// сдвинуть змейку в текущем направлении
// если змейка столкнулась со стеной или со своим хвостом {
// закончить игру
// } Иначе ЕСЛИ змейка сьела яблоко {
// увеличить счет на 1
// переместить яблоко  на 1
// увеличить длинну змейки
// }
// для каждого сегмента тела змейки {
// нарисовать сегмент
// }
// нарисовать яблоко
// нарисовать рамку
//}
//   когда игрок нажмет клавишу {
//    если это клавиша - стрелка {
//       обновить направление движения змейки {
//   }
// }


// игра змейка
// #1 Соберите код воедино
/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height

let blockSize = 10
let widthInBlocks = width / blockSize
let heightInBlocks = height / blockSize

let score = 0;
// рамки
let drawBorder = function () {
    ctx.fillStyle = 'Gray'
    ctx.fillRect(0, 0, width, blockSize)
    ctx.fillRect(0, height - blockSize, width, blockSize)
    ctx.fillRect(0, 0, blockSize, height)
    ctx.fillRect(width - blockSize, 0, blockSize, height)
};
// вывод счета
let drawScore = function () {
    ctx.font = '20px Courier'
    ctx.fillStyle = 'Black'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Счет' + score, blockSize, blockSize)
};

let gameOver = function () {
    //clearInterval(intervalid)
    ctx.font = '60px Courier'
    ctx.fillStyle = 'Black'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Конец игры', width / 2, height / 2)
};
drawBorder()
drawScore()
gameOver()
// #2 Анимация счета
setInterval(function () {
    score += 1
    ctx.clearRect(0, 0, width, height) // размер очищаемой области --> весь холст
    drawScore()
    drawBorder() // нарисуем границы
    gameOver() // ну и до кучи пусть висит
}, 100)*/

// #3 Добавьте вывод текста к виселице


/*let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')


function pickWord() {
    // Возвращает случайно выбранное слово
    var words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек",
        "телевизор",
        "монитор",
        "ручка",
        "тапочек",
        "карандаш",
        "плита"
    ];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
};


function setupAnswerArray(word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++){answerArray[i] = '_';}
    return answerArray;
};

function showPlayerProgress(answerArray) {
    alert(answerArray.join(' '));

}

function getGuess() {
    let guess = prompt('Угадайте букву или нажмите отмена для выхода из игры'.toLowerCase());
    return guess;
}

function updateGame (guess, word, answerArray) {
    // Обновляем answerArray по ответу игрока (guess)
    let current = 0; // поставил счетчик
    for (let  j = 0; j < word.length; j++){
        if (word[j] === guess && answerArray[j].includes('_')) {
            answerArray[j] = guess;
            drawRightWords(guess, j);
            current++;
        }
    }
    return current;
    // current возвращает число = сколько раз было встречена буква guess в слове
    //  с помощью этого обновляем remainingLetters  которое = word.length

}

let showAnswerCongrat = function(answerArray) {
    alert(answerArray.join(' '));
    if (count === 0) {alert('GAME OVER')}
    else if (remainingLetters === 0) {alert('well done! you now know secret word' + word)}
    else {alert('learn JS')}
}

var happyMan = function (badCounts) {

    if (badCounts === 0) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.stroke();
    } else
    if (badCounts === 1) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.stroke();
    } else
    if (badCounts === 2) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.stroke();
    } else
    if (badCounts === 3) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 50);
        ctx.stroke();
    } else
    if (badCounts === 4) {
        ctx.beginPath();
        ctx.moveTo(60, 100);
        ctx.lineTo(70, 130);
        ctx.moveTo(60, 100);
        ctx.lineTo(50, 130);
        ctx.moveTo(60, 60);
        ctx.lineTo(40, 50);
        ctx.moveTo(60, 60);
        ctx.lineTo(80, 50);
        ctx.moveTo(60, 30);
        ctx.lineTo(60, 100);
        ctx.stroke();
    }
    return '';
}

// # 4 вывод текста
// Рисуем подчеркивания для догадок
let drawScores = function(howMany) {
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let i = 0; i < howMany; i++) {
        ctx.moveTo((i * 30) + 10, 160);
        ctx.lineTo((i * 30) + 30, 160);
    }
    ctx.stroke();
}


// Рисуем угаданную букву в соответствующей позиции
let drawRightWords = function(guess, index) {
    ctx.font = "20px Comic Sans MS";
    ctx.fillText(guess, (index * 30) + 10, 150)
}


let word = pickWord();
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length;
let count =  10;
let badCounts = 0;
let totalRemainigLetters = remainingLetters;
drawScores(word.length);
//игровой цикл
while (remainingLetters > 0 && count !== 0) {

    showPlayerProgress(answerArray);
    //запрос варианта ответа
    let guess = getGuess();

    if (guess === null){break;}
    else if (guess.length !== 1) {
        alert('Вводить нужно только одну букву!и пишите ее не с заглавной');
    }
    else {
        let correctGuesses = updateGame(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        totalRemainigLetters === remainingLetters;
        count--; // условие для ограниченного количества попыток
        if (correctGuesses === 0) {
            happyMan(badCounts);
            badCounts++;
        }
    }

}
showAnswerCongrat(answerArray)*/


//***************************************************************** Глава 17 *********************************************************************
// пишем змейку часть вторая

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width // #1 увеличьте игровое поле т.к ширина равна канвас холсту то менять можно в html размер
let height = canvas.height

let blockSize = 10
let widthInBlocks = width / blockSize
let heightInBlocks = height / blockSize

let score = 0;
// рамки
let drawBorder = function () {
    ctx.fillStyle = 'Gray'
    ctx.fillRect(0, 0, width, blockSize)
    ctx.fillRect(0, height - blockSize, width, blockSize)
    ctx.fillRect(0, 0, blockSize, height)
    ctx.fillRect(width - blockSize, 0, blockSize, height)
};
// вывод счета
let drawScore = function () {
    ctx.font = '20px Courier'
    ctx.fillStyle = 'Black'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Счет' + score, blockSize, blockSize)
};

let gameOver = function () {
    //game = false;
    //clearTimeout(gameLoop);
    ctx.font = '60px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Конец игры', width / 2, height / 2);
};

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if(fillCircle){ctx.fill();}
    else {ctx.stroke();}
};

let Block = function (col, row) {
    this.col = col;
    this.row = row;
};

Block.prototype.drawSquare = function (color) {
    let x = this.col * blockSize;
    let y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};

Block.prototype.drawCircle = function (color) {
    let centerX = this.col * blockSize + blockSize / 2;
    let centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
};


Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

let Snake = function () {
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];
    this.direction = 'right';
    this.nextDirection = 'right';
};
// #2 Разноцветная змейка
Snake.prototype.draw = function () {
    let evenSegmentSnake = false;
    for (let i = 0; i < this.segments.length;i++){
        if (evenSegmentSnake){
            this.segments[0].drawSquare('Green');
            this.segments[i].drawSquare('Red');
        } else {
            this.segments[i].drawSquare('Blue');
        }
       evenSegmentSnake = !evenSegmentSnake;
    }
}

Snake.prototype.move = function () {
    let head = this.segments[0]; // голова змейки
    let newHead;

    this.direction = this.nextDirection;

    if (this.direction === 'right'){
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === 'down') {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === 'left') {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === 'up') {
        newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead)){
        gameOver();
        return;
    }

    this.segments.unshift(newHead);
    if (newHead.equal(apple.position)){
        score++;
        animationTime -= 5; // каждый раз когда змея сьест яблоко значение animation будет уменьшатся и анимация ускорятся
        apple.move(this.segments);
    } else {
        this.segments.pop();
    }
};

Snake.prototype.checkCollision = function (head) {
    let leftCollision = (head.col === 0);
    let topCollision = (head.row === 0);
    let rightCollision = (head.col === widthInBlocks - 1);
    let bottomCollision = (head.row === heightInBlocks - 1);

    let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    let selfCollision = false;

    for(let i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])){
            selfCollision = true;
        }
    }
    return wallCollision || selfCollision;
};


Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === 'up' && newDirection === 'down'){
        return;
    } else if (this.direction === 'right' && newDirection === 'left') {
        return;
    } else if(this.direction === 'down' && newDirection === 'up') {
        return;
    } else if(this.direction === 'left' && newDirection === 'right') {
        return;
    }
    this.nextDirection = newDirection;
};

let Apple = function () {
    this.position = new Block(10, 10);
};

Apple.prototype.draw = function () {
    this.position.drawCircle('LimeGreen');
};

Apple.prototype.move = function (snakeBlocks) {
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
// #4 исправление метода apple.move
    for (let i = 0; i < snakeBlocks.length; i++) {
             if (this.position.equal(snakeBlocks[i])) {
               this.move(snakeBlocks);
               return;
             }
         }
};

let snake = new Snake();
let apple = new Apple();
//let game = true;
let animationTime = 100;
// #3 Постепенно увеличивайте скорость игры
let gameLoop = function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();

    setTimeout(gameLoop, animationTime)
    if (gameOver){
        clearTimeout(gameLoop);
    }
    /*if (game){
        setTimeout(gameLoop, animationTime)
    }*/
};
gameLoop();

let intervalId = setInterval(function () {

},100);

let directions = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

$('body').keydown(function (event) {
    let newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});







//стр  255...