'''

'''
class Node:
    def __init__(self,val,priority) -> None:
        self.val = val
        self.priority = priority

class MinHeap:
    def __init__(self) -> None:
        self.vals = []
    def enqueue(self,val,priority):
        newNode = Node(val,priority)
        self.vals.append(newNode)
    def printQueue(self):
        for x in self.vals:
            print(x.val)

minHeap1 = MinHeap()
minHeap1.enqueue(1,1);
minHeap1.enqueue(2,2);

minHeap1.printQueue()