System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      var lowerRegex = /[a-z]/g;
      var upperRegex = /[A-Z]/g;
      var numberRegex = /\d/g;
      var symbolsRegex = /[^A-Za-z0-9]/g;
      var countPositive = function (p) {
          var cLower = getCountLower(p);
          var cUpper = getCountUpper(p);
          var cNumbers = getCountNumbers(p);
          var cSymbols = getCountSymbols(p);
          var cMidNumber = getCountMidNumber(p);
          var cMidSymbol = getCountMidSymbol(p);
          var positiveCounts = { cLower: cLower, cUpper: cUpper, cNumbers: cNumbers, cSymbols: cSymbols, cMidNumber: cMidNumber, cMidSymbol: cMidSymbol };
          var reqs = Object.keys(positiveCounts).reduce(function (previous, key) { return previous + Math.min(1, positiveCounts[key]); }, p.length >= 8 ? 1 : 0);
          return { cLower: cLower, cUpper: cUpper, cNumbers: cNumbers, cSymbols: cSymbols, cMidNumber: cMidNumber, cMidSymbol: cMidSymbol, reqs: reqs >= 3 ? reqs : 0 };
      };
      var getCountLower = function (p) {
          var lower = p.match(lowerRegex);
          return lower ? lower.length : 0;
      };
      var getCountUpper = function (p) {
          var upper = p.match(upperRegex);
          return upper ? upper.length : 0;
      };
      var getCountNumbers = function (p) {
          var number = p.match(numberRegex);
          return number ? number.length : 0;
      };
      var getCountSymbols = function (p) {
          var symbols = p.match(symbolsRegex);
          return symbols ? symbols.length : 0;
      };
      var getCountMidNumber = function (p) {
          var midNum = p.slice(1, -1);
          var middleNumber = midNum.match(numberRegex);
          return middleNumber ? middleNumber.length : 0;
      };
      var getCountMidSymbol = function (p) {
          var middleSymbol = p.slice(1, -1).match(symbolsRegex);
          return middleSymbol ? middleSymbol.length : 0;
      };
      var getPosStrength = function (p) {
          var _a = countPositive(p), cLower = _a.cLower, cUpper = _a.cUpper, cNumbers = _a.cNumbers, cSymbols = _a.cSymbols, cMidNumber = _a.cMidNumber, cMidSymbol = _a.cMidSymbol, reqs = _a.reqs;
          var length = p.length * 4;
          var upper = cUpper ? (p.length - cUpper) * 2 : 0;
          var lower = cLower ? (p.length - cLower) * 2 : 0;
          var either = cUpper || cLower ? cNumbers * 4 : 0;
          var symbols = cSymbols * 6;
          var middle = (cMidSymbol + cMidNumber) * 2;
          return length + upper + lower + either + symbols + middle + reqs * 2;
      };

      var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
      var NUMBERS = '01234567890';
      var SYMBOLS = '\\!@#$%&/()=?¿';
      var lowerRegex$1 = /(?=([a-z]{2}))/g;
      var upperRegex$1 = /(?=([A-Z]{2}))/g;
      var consecNumberRegex = /(?=(\d{2}))/g;
      var onlyNumbersRegex = /^[0-9]*$/g;
      var onlyLettersRegex = /^([a-z]|[A-Z])*$/g;
      // prettier-ignore
      var stringReverse = function (str) { return str.split('').reverse().join(''); };
      var countNegative = function (p) {
          var consecLower = getConsecLower(p);
          var consecUpper = getConsecUpper(p);
          var consecNumber = getConsecNumber(p);
          var onlyNumbers = getOnlyNumbers(p);
          var onlyLetters = getOnlyLetters(p);
          return { consecLower: consecLower, consecUpper: consecUpper, consecNumber: consecNumber, onlyNumbers: onlyNumbers, onlyLetters: onlyLetters };
      };
      var getConsecLower = function (p) {
          var lower = p.match(lowerRegex$1);
          var consecLower = lower ? lower.length + 1 : 0;
          return consecLower;
      };
      var getConsecUpper = function (p) {
          var upper = p.match(upperRegex$1);
          var consecUpper = upper ? upper.length + 1 : 0;
          return consecUpper;
      };
      var getConsecNumber = function (p) {
          var number = p.match(consecNumberRegex);
          var consecNumber = number ? number.length + 1 : 0;
          return consecNumber;
      };
      var getOnly = function (regex) { return function (p) { return !!p.match(regex); }; };
      var getOnlyLetters = getOnly(onlyLettersRegex);
      var getOnlyNumbers = getOnly(onlyNumbersRegex);
      var countSequence = function (p, s) {
          return s.split('').reduce(function (acc, k, i) {
              var p2 = p.toLowerCase();
              var forth = s.substring(i, i + 3);
              var back = stringReverse(forth);
              if (p2.indexOf(forth) !== -1 || p2.indexOf(back) !== -1)
                  acc++;
              return acc;
          }, 0);
      };
      var countRepeated = function (p) {
          return Array.from(new Set(p.toLowerCase().split(''))).reduce(function (acc, c) {
              var countRegex = new RegExp("[^" + c + "]", 'g');
              var count = p.replace(countRegex, '').length;
              return count > 1 ? acc + count : acc;
          }, 0);
      };
      var getNegStrength = function (p) {
          var seqLetter = countSequence(p, LETTERS);
          var seqNumber = countSequence(p, NUMBERS);
          var seqSymbol = countSequence(p, SYMBOLS);
          var _a = countNegative(p), consecLower = _a.consecLower, consecUpper = _a.consecUpper, consecNumber = _a.consecNumber, onlyNumbers = _a.onlyNumbers, onlyLetters = _a.onlyLetters;
          var negCountRepeated = countRepeated(p);
          var lower = consecLower * 2;
          var upper = consecUpper * 2;
          var number = consecNumber * 2;
          var sLetter = seqLetter * 3;
          var sNumber = seqNumber * 3;
          var sSymbol = seqSymbol * 3;
          var numbers = onlyNumbers ? p.length : 0;
          var letters = onlyLetters ? p.length : 0;
          var repeated = negCountRepeated ? (negCountRepeated / p.length) * 10 : 0;
          return lower + upper + number + sLetter + sNumber + sSymbol + numbers + letters + repeated;
      };

      var pwStrength = exports('pwStrength', function (p) {
          if (!p)
              return 0;
          var posStrength = getPosStrength(p);
          var negStrength = getNegStrength(p);
          return Math.max(0, Math.min(100, Math.round(posStrength - negStrength)));
      });

    }
  };
});
