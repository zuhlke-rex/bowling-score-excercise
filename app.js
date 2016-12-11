// Reference from codewars
function bowlingScore(rolls) {
  // function to sum up section array
  function sum(numbers) {
    // Before game ends, when empty array is sliced out, return 0 to prevent reduce method error
    if ( numbers[0] ) {
      return numbers.reduce( function (a, b) { return a + b });
    } else {
      return 0;
    }
  }

  // Special condition test: strike;
  function isStrike(rolls) {
    return 10 === rolls[0];
  };

  // Special condition test: spare;
  function isSpare(rolls) {
    return 10 === sum(rolls.slice(0, 2));
  }

  // Main function to calc scores
  function calcScore(rolls, frame) {
    // when game ends
    if( frame === 10 ) {
      // sum up all frame scores
      return sum(rolls);
    // before game ends, strike occurs
    } else if ( isStrike(rolls) ) {
      // sum up with the 3 consecutive shots & carry on to next frame calculation
      return sum(rolls.slice(0,3)) + calcScore(rolls.slice(1), frame + 1);
    // before game ends, spare occurs
    } else if ( isSpare(rolls) ) {
      // sum up with the 3 consecutive shots ( 1st & 2nd = 10 + the 3rd shot ) & carry on to next frame calculation
      return sum(rolls.slice(0,3)) + calcScore(rolls.slice(2), frame + 1);
      // none of the above conditions occur
    } else {
      // sum up the frame scores and carry on
      return sum(rolls.slice(0,2)) + calcScore(rolls.slice(2), frame + 1);
    }
  }
  // invoke & return the score
  return calcScore(rolls, 1);
}

s1 = [10,10,10,10,10,10,10,10,10,10,10,10];
s2 = [1,2,3,4,5,5]
s3 = [9,1,10,8,0,2]
s4 = [10,0,0,9,1,0,0,8,2,0,0,7,3,0,0,6,4,0,0]
s5 = [9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1]


// // My work
// function bowlingScore(arr) {
//   // First got to set the array into frame pairs before calc the score
//   var newArr = [];
//   var points = 0;
//   function fixArr(arr) {
//     for ( i = 0; i < arr.length; i++ )
//     if ( arr[i] === 10 ) {
//       newArr.push(arr[i]);
//       newArr.push(0);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   // Second, calc the score in for loop in odd order => i += 2
//   function countScore(arr) {
//     // In normal game loop (10 frames),
//     for( i = 0; i <=18 && i <= arr.length; i+= 2) {
//       // if the frame is a strike
//       if ( arr[i] === 10 ) {
//         // check if the next frame is also a strike
//         if ( arr[i+2] === 10 ) {
//           // if yes, also add the 2nd strike score
//           points += arr[i] + arr[i+2] + arr[i+4];
//           console.log(points);
//         } else {
//           // if the next frame is not a strike, add total score of next frame
//           points += arr[i] + arr[i+2] + arr[i+3];
//           console.log(points);
//         }
//       // if the frame is a spare
//       } else if ( arr[i] + arr[i+1] === 10 ) {
//         // add next frame the 1st bowl score
//         points += arr[i] + arr[i+1] + arr[i+2];
//         console.log(points);
//       } else {
//         // if none of the above, just add the frame score
//         points += arr[i] + arr[i+1];
//       }
//     }
//   console.log(points);
//   }
//   fixArr(arr);
//   countScore(newArr);
//   return points;
// }
