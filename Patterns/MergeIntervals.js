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

var insert = function(intervals, newInterval) {// 3/10 | O(N) and O(N)
    /*
    the only difference with this problem is that the input was sorted and there were a few edge cases for insertion
    */
    
    let n = intervals.length
    
    if(n == 0){
        return [newInterval];
    }
    
    for(let i = 0;i<intervals.length;i++){
        if(intervals[i][0] > newInterval[0]){
            intervals.splice(i,0,newInterval);
            break;
        }
    }
    
    if(intervals.length == n){//edge case where new interval needs to be added to end
        intervals.push(newInterval);
    }
        
    let ret = [intervals[0]]
    
    for(let i = 0;i<intervals.length;i++){
        let current = intervals[i];
        let last = ret[ret.length-1];
        if(current[0]<=last[1]){
            if(current[1]>=last[1]){
                last[1] = current[1];
            }
        }else{
            ret.push(current)
        }
    }
    
    return ret;
    
};

var employeeFreeTime = function(schedule) {// 6/10 | O(NLogN) and O(N) when N is the number of total items
    //remember you have an an array which inside it has an array of objects
    let master = []
    
    for(let i = 0;i<schedule.length;i++){
        master = master.concat(schedule[i])
    }
    
    master.sort((a,b) => a.start != b.start ? a.start - b.start : a.end - b.end);
    
    let mergedIntervals = [master[0]];//normal merge intervals method
    
    for(let i = 1;i<master.length;i++){
        let current = master[i];
        let last = mergedIntervals[mergedIntervals.length-1];
        
        if(current.start <= last.end){
            if(current.end >= last.end){
                last.end = current.end;
            }
        }else{
            mergedIntervals.push(current);
        }
    }
        
    let freeTime = [];

    for(let j = 1;j<mergedIntervals.length;j++){
        let prev = mergedIntervals[j-1];
        let current = mergedIntervals[j]
        if(prev.end < current.start){
            freeTime.push(new Interval(prev.end,current.start))
        }
    }        
    
    return freeTime;
};

var employeeFreeTime = function(schedule) {// 6/10 | O(NlogN) and O(1)  
    /*
    look at ur latest submission on 11/9 to see a more elegant yet less simple solution. u can technically combine ur last 2 for loops.
    the reason u need to merge the intervals is because consider this: 
    [0,25], [5,16], [6,24], [7,24], [9,16], [18,26], [26,27], you shoudl only pick up 26-27 but ur also gonna pick up 16-18 by accident
    */
    let master = []
    
    for(let i = 0;i<schedule.length;i++){
        master = master.concat(schedule[i])
    }
    
    master.sort((a,b) => a.start-b.start);//sort all the intervals at once
    
    let mergedIntervals = [master[0]];
    let freeTime = [];
    
    for(let i = 1;i<master.length;i++){//ur normal merge intervals algo is here
        let current = master[i];
        let last = mergedIntervals[mergedIntervals.length-1];
        
        if(last.end < current.start){
            freeTime.push(new Interval(last.end,current.start))
        }
        
        if(current.start <= last.end){
            if(current.end >= last.end){
                last.end = current.end;
            }
        }else{
            mergedIntervals.push(current);
        }
    }
        
    return freeTime;
};