// Rule to pritn pattern
// 1 outer loop is for rows
// 2 inner loop is colums

// first pattern

// Pattern 1: Right-angled triangle

// Example (n = 5):

// *
// **
// ***
// ****
// *****

function pattern1(n) {
  for (let i = 0; i <= n; i++) {
    let str = "";

    for (let j = 0; j < i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}
// pattern1(5);
//
// 2 Pattern: (n = 5)
//     *
//    **
//   ***
//  ****
// *****

function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    for (let k = 1; k <= i; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}
// pattern2(5);

// pattern

// *****
//  ****
//   ***
//    **
//     *

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // print spaces
    for (let j = 1; j <= i - 1; j++) {
      row += " ";
    }

    // print stars
    for (let k = 1; k <= n - i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}
// pattern3(5);

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str = str + " ";
    }
    for (let k = 1; k <= i; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}
// pattern(5);

/**🔹 Step 1: Solid Rectangle
* * * * *
* * * * *
* * * * *


👉 Input: rows = 3, cols = 5 */

function pattern4(n) {
  for (let i = 0; i < n - 2; i++) {
    let str = "";

    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    console.log(str);
  }
}
pattern4(5);

/**attern 2: Right-Angled Triangle.

👉 Expected output for n = 4:

*
* *
* * *
* * * * */
function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}
// pattern5(4);

/**Pattern 3: Inverted Right-Angled Triangle)

👉 Expected output for n = 4:

* * * * 
* * * 
* * 
*  */

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}
// pattern6(4);/

/**tern 4: Pyramid (Centered)

👉 Expected output for n = 4:

   *   
  * *  
 * * * 
* * * *  */

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let s = 0; s < n - i - 1; s++) {
      str += " ";
    }
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}
pattern7(4);
