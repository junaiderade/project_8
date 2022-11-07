//if you can't rederive something on the spot you don't know it

var merge = function(intervals) { // 2/10 | O(logN) and O(N)
    //somehow this problem was SUPER easy this time. I'm so happy abt that! Also loved that I knew how to do the sort thing off
    //the top of my head, I guess a and b are items in the larger array
    intervals = intervals.sort((a,b)=>a[0]-b[0])
    let ret = [intervals[0]]
    
    for(let i = 0;i<intervals.length;i++){
        let current = ret[ret.length-1];
        if(intervals[i][0] <= current[1]){
            if(intervals[i][1]>current[1]){
                current[1] = intervals[i][1]
            }
        }else{
            ret.push(intervals[i]);
        }
    }
    
    return ret;
};

