"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var num = [];
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
                num.push(myArray[i]);
            }
        }
        return num;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var str_arr = [];
        for (var i = 0; i < myArray.length; i++) {
            if (typeof (myArray[i]) === "string") {
                str_arr.push(myArray[i]);
            }
        }
        return str_arr;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var num = str.map(function (e) { return parseInt(e); });
        var prime = [];
        for (var i = 0; i < num.length; i++) {
            var flag = 0;
            for (var j = 2; j < num[i]; j++) {
                if (num[i] % j == 0) {
                    flag = 1;
                }
            }
            if (flag == 0) {
                prime.push(num[i]);
            }
        }
        return prime;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort();
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray=[55,33,89,20,17,85,60];
var myArray_mixed=['h',55,'hello',33,89,20,'RAT',17,85,60]
var myArray_strings=['a','y','k','t','d']
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray_mixed));
console.log(array.arraySplit(myArray.map(function (e) { return e.toString(); })));
console.log(array.arraySort(myArray_strings));
console.log(array.arrayReplace(myArray));
