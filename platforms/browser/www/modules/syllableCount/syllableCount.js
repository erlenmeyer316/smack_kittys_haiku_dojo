define(['radio', 'text!modules/syllableCount/cmudict.json'], function (Radio, Dictionary) {
    var CONST_SYLLABLECOUNT_EVENT = "SyllableCount.event";
           
    var mDict = JSON.parse(Dictionary);


    //dipthong list
    var mDipthongs = ['ae', 'ai', 'ao', 'au', 'aa'
                     , 'ea', 'ei', 'eo', 'eu', 'ee'
                     , 'ia', 'ie', 'io', 'iu', 'ii'
                     , 'oa', 'oe', 'oi', 'ou', 'oo'
                     , 'ua', 'ue', 'ui', 'uo', 'uu'];

    //vowel symbols
    var mVowelSymbols = ['AA', 'AA0', 'AA1', 'AA2', 'AE', 'AE0', 'AE1', 'AE2'
                       , 'AH', 'AH0', 'AH1', 'AH2', 'AO', 'AO0', 'AO1', 'AO2'
                       , 'AW', 'AW0', 'AW1', 'AW2', 'AY', 'AY0', 'AY1', 'AY2'
                       , 'EH', 'EH0', 'EH1', 'EH2', 'ER', 'ER0', 'ER1', 'ER2'
                       , 'EY', 'EY0', 'EY1', 'EY2', 'IH', 'IH0', 'IH1', 'IH2'
                       , 'IY', 'IY0', 'IY1', 'IY2', 'OW', 'OW0', 'OW1', 'OW2'
                       , 'OY', 'OY0', 'OY1', 'OY2', 'UH', 'UH0', 'UH1', 'UH2'
                       , 'UW', 'UW0', 'UW1', 'UW2'];

    //load dictionary
    /*var xhr = new XMLHttpRequest();
    xhr.open('GET', 'modules/syllableCount/cmudict.json', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            mDict = eval(xhr.responseText);
        }
    };
    xhr.send();*/


    var count = function (line, lineNumber) {
        var mResult = [];
        var mStrSplit = line.split(' ');
        var mNotFound = false;

        for (var a = 0; a < mStrSplit.length; a++) {
            mNotFound = true;
            for (var b = 0; b < mDict.length; b++) {
                if (mDict[b].FIELD1 == mStrSplit[a]) {
                    mNotFound = false;
                    mResult.push(createRow(mDict[b].FIELD1, mDict[b].FIELD2, countSyllables(mDict[b].FIELD3)));
                }
            }

            if (mNotFound) {
                mResult.push(createRow(mStrSplit[a], -1, calcSyllables(mStrSplit[a])));
            }
        }

        Radio(CONST_SYLLABLECOUNT_EVENT).broadcast({words: mResult, lineNumber: lineNumber});        
    };

    var countSyllables = function (phnStr) {
        var mSylCnt = 0;
        var phnStrSplit = phnStr.split(' ');

        for (var a = 0; a < phnStrSplit.length; a++) {
            for (var b = 0; b < mVowelSymbols.length; b++) {
                if (phnStrSplit[a] == mVowelSymbols[b]) {
                    mSylCnt++;
                }
            }
        }

        return mSylCnt;
    };

    var calcSyllables = function (word) {
        var mSylCnt = 0;
        mSylCnt = addVowels(word, mSylCnt);
        mSylCnt = subtractSilentVowels(word, mSylCnt);
        mSylCnt = subtractDipthongs(word, mSylCnt);

        return mSylCnt;
    };

    var addVowels = function (word, sylCnt) {

        for (var i = 0; i < word.length; i++) {
            switch (word[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                sylCnt++;
                break;
            }
        }
        return sylCnt;
    };

    var subtractSilentVowels = function (word, sylCnt) {
        if (word[word.length - 1] == 'e') {
            sylCnt--;
        }
        return sylCnt;
    };

    var subtractDipthongs = function (word, sylCnt) {
        for (var i = 0; i < mDipthongs.lenth; i++) {
            if (word.indexOf(mDipthongs[i] > -1)) {
                sylCnt--;
            }
        }
        return sylCnt;
    };

    var createRow = function (word, alt, count) {
        return {
            word: word,
            alt: alt,
            count,
            count
        };
    };

    return {
        count: count,
        event: CONST_SYLLABLECOUNT_EVENT
    };

});
