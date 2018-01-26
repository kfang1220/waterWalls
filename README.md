/*
Setup!

input: Given heights(assume array or object)
Input Example: [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]

output: Determine the two walls with the most water trapped between them, return an array containing the two walls and the amount of water
output example: [3,8,11];

constraints: minimum 2 walls? walls >= 2

edgecases: What if there is only 1 or no walls?

mainFunction: const getWaterBetweenWalls = (wallArray) =>
  //Loop through each wall
  //for each wall loop through the rest of the walls
  //if the wall is shorter than the initial take the difference and add it to the current total
  //if it reaches a taller wall, then that is the amount of water between those 2.
  //loop through array of arrays and look at the 3 item of each array element to determine the most water trapped between two walls

time-complexity: probably n^2 or Linear because we'll have to loop through each element

setup:
First wall is 5 and since the next is smaller than the current we can check the wall after that
5->3->7 becase 7 is >= initial wall we take the minimum of the left and right wall and subtract from the walls inbetween
5-3 = 2. so we
1 3 2
then we set the new bar at where the previously finished. so 3 is now the next bar
we go till we reach a wall of height 9 which is >= to the left
then we loop through and subtract the lower of two walls from the rest
we then push
3 8  11(water difference)


*/
