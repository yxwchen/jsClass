// 第一題題目========
// input 輸入
// func2(5)
// func2(3)
// func2(7)

// output 輸出
// 10
// 6
// 14

console.log('第一題答案========');

function func2(num) {
    console.log(num * 2);
}
func2(5);
func2(3);
func2(7);
// 第二題題目========
// input 輸入
// func3("1-2-3")
// func3("hello-world")

// output 輸出
// ["1","2","3"]
// ["hello","world"]
console.log('第二題答案========');

function func3(str) {
    console.log(str);
}
func3("1-2-3");
// 第四題題目========
// Email 格式，字串有沒有 @，以及 @ 前面有沒有英文字
// // input 輸入
// checkEmailAddress("johndoe@example.com")
// checkEmailAddress("example.com")
// checkEmailAddress("@example.com")
// checkEmailAddress("jane.doe@example.com")

// // output 輸出
// true
// false
// false
// true

// TODO bug fix
console.log('第四題答案========')

function checkEmailAddress(str) {
    const regex = /^[a-zA-Z]+@/;
    // let newResulet = str.indexOf('@');
    // console.log(newResulet);
    if (regex.test(str) && str.indexOf('@') > 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkEmailAddress("johndoe@example.com")
checkEmailAddress("example.com")
checkEmailAddress("@example.com")
checkEmailAddress("jane.doe@example.com")
// 第五題題目========
// input 輸入
// multiplication5(3)
// multiplication5(4)
// // output 輸出 為字串格式
// //  multiplication5(3)
// 5x1=5
// 5x2=10
// 5x3=15
// //  multiplication5(4)
// 5x1=5
// 5x2=10
// 5x3=15
// 5x4=20
console.log('第五題答案========')

function multiplication5(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`5*${i}=${5*i}`);
    }
}

multiplication5(3);
multiplication5(4);
// 第六題題目========
// // input 輸入
// checkNum4(7)
// checkNum4(10)
// checkNum4(22)
// checkNum4(30)

// // output 輸出 obj 的結果
// [10, 15, 20, 25]
// [15, 20, 25]
// [25]
// []
console.log('第六題答案========')
const numAry = [5, 10, 15, 20, 25];

function checkNum4(num) {
    // console.log(num);
    let newNumAry = [];
    numAry.forEach(function (item) {
        // console.log(item);
        if (item > num) {
            newNumAry.push(item);
            return
        } else {
            return
        }
    })
    console.log(newNumAry); // 輸出結果
}

checkNum4(7);
checkNum4(10);
checkNum4(22);
checkNum4(30);