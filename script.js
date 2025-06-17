// //your JS code here. If required.
//  function secondHighest(arr) {
//       if (arr.length < 2) return -Infinity;

//       let max = -Infinity;
//       let second = -Infinity;

//       for (let num of arr) {
//         if (num > max) {
//           second = max;
//           max = num;
//         } else if (num > second && num < max) {
//           second = num;
//         }
//       }

//       return second === -Infinity ? -Infinity : second;
//     }

//     function handleClick() {
//       const input = document.getElementById("arrayInput").value;
//       const arr = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

//       const result = secondHighest(arr);
//       document.getElementById("result").textContent = `Second highest element: ${result}`;
//     }