//Bài 1: Viết chương trình nhập vào một chuỗi nếu độ dài của chuỗi ít nhất là 3 - thêm "ing" vào chuỗi đó, trường hợp chuỗi kết thúc bằng "ing" - thêm "ly".
function addTail(oldString) {
    var newString = '';
    if(oldString.length >= 3) {
        if(oldString.substr(-3) === 'ing') {
            return newString = oldString + 'ly';
        }
        else{
            return newString = oldString + 'ing';
        }
    }
    else{
        return oldString;
    }
}
console.log('Bài 1: ' + addTail('Go'));
console.log('Bài 1: ' + addTail('Run'));
console.log('Bài 1: ' + addTail('Flying'));

//Bài 2: Viết một hàm nhận một chuỗi làm đầu vào và trả về một chuỗi mới, với tất cả các chữ cái viết hoa được viết thường và tất cả các chữ cái viết thường được viết hoa.
function textConvert(oldString) {
    var str = oldString.split('');
    for(var i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = str[i].toLowerCase(); 
        }
        else if(str[i] >= 'a' && str[i] <= 'z'){
            str[i] = str[i].toUpperCase(); 
        } 
    }
    var newString = str.join(''); 
    return newString;
}
console.log('Bài 2: ' + textConvert('Nhat Linh'));
console.log('Bài 2: ' + textConvert('tRUNG nGHAI'));

//Bài 3: Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử "không phải số" được xóa bỏ.
function filterArray(oldArray) {
    var filteredArray = oldArray.filter(function(item) {
        return !isNaN(item); 
    });
    return filteredArray;
}
console.log('Bài 3: ' + filterArray([1, "a", 5, "b", 7]));
console.log('Bài 3: ' + filterArray([2, "b", 1, "c", 3]));

//Bài 4: Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với các phần tử được sắp xếp theo thứ tự giảm dần.
function sortArray(array) {
    var newArray = array.sort(function(a, b) {
        if (b > a) return 1;
        if (b < a) return -1;
        return 0;
    })
    return newArray;
}
console.log('Bài 4: ' + sortArray([1, 5, 3, 2]));
console.log('Bài 4: ' + sortArray([7, 9, 1, 5]));

//Bài 5: Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử được nhân với 2.
function doubleValues(array) {
    var newArray = array.map(function(char) {
        return char * 2;
    });
    return newArray.join(', ');
}
console.log('Bài 5: ' + doubleValues([1, 5, 3, 2]));
console.log('Bài 5: ' + doubleValues([7, 9, 1, 5]));

//Bài 6: Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới chỉ có số lẻ.
function oddNumbers(oldArray) {
    var newArray = []
    var filterOddNumber = oldArray.filter(function(item) {
        if(item % 2 !== 0) {
            newArray.push(item);
        }
    });
    return newArray;
}
console.log('Bài 6: ' + oddNumbers([1, 5, 3, 2]));
console.log('Bài 6: ' + oddNumbers([2, 9, 8, 5]));

// Bài 7: Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử lặp lại được loại bỏ.
function removeDub(char) {
    var newArray = [];
    for (var i = 0; i < char.length; i++) {
        if (newArray.indexOf(char[i]) === -1) {
            newArray.push(char[i]);
        }
    }
    return newArray;
}
console.log('Bài 7: ' + removeDub([1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2]));
console.log('Bài 7: ' + removeDub([6, 5, 4, 1, 2, 6, 4, 5, 7, 0, 9]));


