# you cannot store a list as a key in a dict
# you can use the length function on a dictionary

# how to declare an empty array of 0s and length 3
result = [0] * 3

# how to indicate the loop counter is not used in the loop
for _ in range(3):
    print(0)
    
# how to round to  decimal points
answer = str(round(5, 2))

# tuples are more memory efficient than lists

# if you use heap push with a tuple, it will sort by first element of the tuple

# using a heap

import heapq

li = [5, 7, 9, 1, 3]

heapq.heapify(li)

print("The created heap is: ",(list(li)))

heapq.heappush(li,4)

print("The modified heap after push is : ", list(li))
 
print("The popped and smallest element is : ", heapq.heappop(li))

#the built in heap is a minHeap, to do a maxHeap, invert the values of the keys

# A heap is not the same thing as a sorted list. A heap only guarantees that an element is not greater than the values of its children.