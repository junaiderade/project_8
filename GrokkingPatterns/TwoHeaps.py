import heapq

def findRightInterval(intervals): # O(nlogn) and O(n)
    """
    tough question cuz u didn't udnerstand heaps right
    """
    startHeap = []
    endHeap = []
    result = [0] * len(intervals)
    
    # fill both heaps as maxHeaps
    for i in range(len(intervals)):
        heapq.heappush(startHeap, (-intervals[i][0], i))
        heapq.heappush(endHeap, (-intervals[i][1], i))
    
    for _ in range(len(intervals)):
        print('startHeap',startHeap);
        print('endHeap',endHeap)
        topEnd, i = heapq.heappop(endHeap)
        result[i] = -1 # by default set -1
        
        if -startHeap[0][0] >= -topEnd:
            
            while startHeap and -startHeap[0][0] >= -topEnd:
                topStart, startIndex = heapq.heappop(startHeap)
        
            result[i] = startIndex
            heapq.heappush(startHeap, (topStart, startIndex))
    
    return result

