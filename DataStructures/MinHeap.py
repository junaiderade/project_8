class Node:
    def __init__(self,val,priority) -> None:
        self.val = val
        self.priority = priority

class MinHeap:
    def __init__(self) -> None:
        self.vals = []#this array is indexed like a serialized binary tree
    def enqueue(self,val,priority):# O(logn)
        newNode = Node(val,priority)
        self.vals.append(newNode)
        self.bubbleUp()
    def bubbleUp(self):
        idx = len(self.vals) - 1
        element = self.vals[idx]
        while idx > 0:
            parentIdx = (idx-1)//2 #refer to DSA notes on serializing
            parent = self.vals[parentIdx]
            if element.priority >= parent.priority: # you don't need to bubble up anymore
                break
            self.vals[parentIdx] = element
            self.vals[idx] = parent
            idx = parentIdx
    def dequeue(self):
        min = self.vals[0]
        end = self.vals.pop()
        if self.vals.length > 0:
            self.vals[0] = end #put the last value at the front
            self.sinkDown()
        return min
    def sinkDown(self):
        idx = 0
        length = len(self.vals)
        element = self.vals[0]
        leftChild, rightChild = None,None
        while True:
            leftChildIdx = 2 * idx + 1
            rightChildIdx = 2 * idx + 2
            swap = None
            if leftChildIdx < length:
                leftChild = self.vals[leftChildIdx]
                if leftChild.priority < element.priority:
                    swap = leftChildIdx
            if rightChildIdx < length:
                rightChild = self.values[rightChildIdx]
                if (swap is None and rightChild.priority < element.priority) or (not swap is None and rightChild.priority < leftChild.priority):
                    pass

    def printQueue(self):
        for x in self.vals:
            print(x.val)

minHeap1 = MinHeap()
minHeap1.enqueue(1,1)
minHeap1.enqueue(2,2)

minHeap1.printQueue()