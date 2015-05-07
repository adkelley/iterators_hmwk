// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

  this.myUtils = {};

  myUtils = {};

  myUtils.myEach = function myEach(arr, cb){
    var len = arr.length;
    for(var i=0; i<len; i++){
      cb(arr[i], i, arr);
    }
  }

  myUtils.myMap = function myMap(arr, cb) {
    var outArr = [];
    var len = arr.length;

    for (var i=0; i<len; i++) {
      outArr[i] = cb(arr[i], i, arr);
    }
    
    return outArr;
  }

  myUtils.myReduce = function myReduce(arr, cb, val) {
    var len = arr.length;
    val = val || 0;
    for(var i=0; i<len; i++){
      val = cb(val, arr[i], i, arr)
    }
    return val;
  }

  myUtils.buildElement = function buildElement(tag, words) {
    return "<"+tag+">"+words+"</"+tag+">";
  }
    
/*
  myUtils.toDollarAmount(amount) {
    }

  myUtils.toCurrencyString(amount, currency) {
    return currency + amount.toString();
  }
*/
    
}.call(this))
