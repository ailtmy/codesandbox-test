// var val1 = "var変数";

// console.log(val1);

// val1 = "val1を上書き";
// console.log(val1);

// var val1 = "varへの数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数上書き";

// const val3 = "const変数再宣言";

// const val4 = {
//   name: "ジャケえ",
//   age: 28
// };

// console.log(val4);

// val4.name = "jyake";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "ジャケえ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は ${name}です。年齢は${age}歳です。`;
// console.log(message2);

// // function func1(str) {
// //   return str;
// // }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// const myProfiel = {
//   myname: "ジャケえ",
//   myage: 28
// };

// const message3 = `名前は、${myProfiel.myname}です。年齢は${myProfiel.myage}才です。`;
// console.log(message3);

// const { myname, myage } = myProfiel;
// const message4 = `名前は、${myname}です。年齢は${myage}才です。`;
// console.log(message4);

// const myProf = ["ジャケえ", 28];
// const message5 = `名前は${myProf[0]}、年齢は${myProf[1]}才でし`;
// console.log(message5);

// const [yourName, yourAge] = myProf;
// const message6 = `名前は、${yourName},年は${yourAge}`;
// console.log(message6);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("ジャケえ");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4, arr8);

// const nameArr = ["john", "paul", "george", "ringo"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }
//
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => num % 2 === 1);

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "john") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 > 0 ? "true" : "false";

// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えてます！" : "許容範囲内です";
// };

// console.log(checkSum(20, 130));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
