var numJewelsInStones = function(J, S) {
    if(J == null || S == null){
        return 0;
    }
    var i = 0;
    for(var j = 0; j < J.length; j++){
        for(var s = 0;s < S.length;s++){
            if(J[j] == S[s]){
                i++;
            }
        }
    }
    return i;
};