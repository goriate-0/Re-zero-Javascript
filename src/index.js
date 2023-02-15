/**
 * const, let
 */
// const val1 = "あいうえお";
// console.log(val1);

// const val2 = {
//   name: "subaru",
//   age: 20,
// };
// val2.name = "goriate";
// val2.adress = "saitama";
// console.log(val2);

// const val3 = ['dog', 'cat'];
// val3[0] = "bird";
// val3.push("monkey");
// console.log(val3);


/**
 * テンプレート文字列
 */
// const message1 = `私の名前は${val2.name}です。年齢は${val2.age}です。`;
// console.log(message1);

/**
 * アロー関数
 */

// function func1(str){
//   return str;
// }
// console.log(func1("aaa"));

// const func2 = function(str){
//   return str;
// };
// console.log(func2("bbb"));

// const func3 = (str) => {
//   return str;
// };
// console.log(func3("ccc"));

// const func4 = (str) => str;
// console.log(func4("ddd"));

// const func5 = (num1, num2) => num1 * num2 / 2;
// console.log(func5(4, 5));

// const myProfile = {
//   name: "kikuri",
//   age: 23,
// };
// const { name , age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ["kikuri", 23];
// const message4 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// const [ name, age ] = myProfile;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん！`);
// sayHello("kikuri");

/**
 * スプレッド構文 ...　配列の中身を順番に処理して展開してくれる
 * ...がついてたら順番に処理する と覚える
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "スバル"];
// for (let index  = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "スバル") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 0 > 1 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

