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

// 第六題答案
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