/* 
What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?

Assignment: 
Write a recursive function that counts how many sheep jump over the fence.
Your program should take a number as input. 
That number should be the number of sheep you have.
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.

*/

function countSheep(curNumSheep) {
  if (curNumSheep === 0) {
    return "No more sheep";
  } else {
    console.log(curNumSheep + " " + "Another sheep jumps over the fence");
    totalNumSheep = curNumSheep -= 1;
    countSheep(totalNumSheep);
  }
}
countSheep(3);
