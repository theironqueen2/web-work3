function anagrams(str){
    var result = [];
    if (!str){
        return [];
    }
    
    if (str.length=== 1){
        return [str];
    }

    if (str.length===2){
        return [str[0]+str[1], str[1]+str[0]];
    }
    //拿到单词长度
    for (var i=0;i<str.length;i++){
        var singleChar = str[i];
        var otherChar = drop(str,i);
        //构建后半部分字符
        var charList = anagrams(otherChar);
        for (var j=0;j<charList.length;j++){
            // console.log(singleChar + charList[j]);
            result.push(singleChar + charList[j]);
        }
    }
    return result;
}

function drop(str, n){
    var result = "";
    for (var i=0;i<str.length;i++){
        if(i==n) continue;
        result += str[i];
    }
    return result;
}
module.exports = anagrams;