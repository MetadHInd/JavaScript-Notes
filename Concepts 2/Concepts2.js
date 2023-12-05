/** 
 * Associative Arrays----
 * 
 *  let shopping ={
 *      fruit: "Banana",
 *      soap: "Rey",
 *      chair: "Gaming",
 *  }
 * 
 * Regular Functions----
 * 
 *  function bob(a){
 *      return a++;
 *  }
 * 
 * Arrow Functions------
 * 
 * let bob = (a) => a++;
 * 
 * Continue--------------
 * 
 *  for(let ii = 0; ii < 10; ii++){
 *  if (ii == 5){
 *      continue;
 *   }
 *   document.write(ii + "<br>"); 
 *  }
 * 
 * It's used to skip an iteration; in this case, it skips 
 * the number 5 and generates this list:
 * 
 * 0
 * 1
 * 2
 * 3
 * 4
 * 6
 * 7
 * 8
 * 9
 * 
 * For in---------------
 * 
 *  let foods = ["pizza", "burger", "kiwi"]
 * 
 *  for(food in foods){
 *      document.write(food);
 *  }
 * 
 * 'For in' iterates over the array, returning the position of 
 * each element in the array.
 * 
 * For of---------------
 * 
 * let foods = ["pizza", "burger", "kiwi"]
 * 
 *  for(food of foods){
 *      document.write(food);
 *  }
 * 
 * 'For of' iterates over each element of the array, returning 
 * the value of each element at its position.
 * 
 * Naming For-----------
 * 
 * We can name 'for' loops to refer to the
 * parent 'for' loop like this:
 * 
 * let fastFood = ["burger", "pizza", "hotdog"];
 * let generalFood = ["apple", fastFood, "pear", "mandarin"];
 * 
 * foodLoop:
 *      for(let food in generalFood){
 *          if(food == 1){
 *              for(let item of fastFood){
 *                  continue foodLoop;
 *                  document.write(item);    
 *              }
 *              document.write(generalFood[food] + " , ");                
 *          }
 *      }
 * 
 * In this case, it skips the entire position 1 of the
 * parent 'for' loop, so the generalFood array is not iterated.  
 * 
 * 
 * 
 * EXAMPLE #1: In this code, it checks if someone is of legal age 
 * to enter a party, and if it's between 2 AM and 7 AM, they get in for free:
 */

/** 
let free = false;
let hour = Math.round(Math.random() * 24);

const partyEntry = () => {
    // Ask the user for their age
    let age = prompt("How old are you?");
    if (age >= 18) {
        // Check if the current hour is between 2 AM and 7 AM and entry is not already free
        if (hour >= 2 && hour <= 7 && !free) {
            document.write(`<p>It's ${hour} AM. You can enter for free!<p>`);
        } else {
            document.write(`<p>You need to pay the entrance fee because it's ${hour} AM, and it's not within the 2 AM to 7 AM range.<p>`);
        }
    } else {
        document.write("<p>Sorry, you can't enter because you're not of legal age.</p>");
    }
}

partyEntry();
*/

/**
 * EXAMPLE #2:
 * In this example, we have a classroom where attendance is taken using prompts,
 * and if a student has more than 18 absences, they fail the course.
 */

let numberOfStudents = prompt("How many students are there?");
let studentsAndAttendances = [];

for (let i = 0; i < numberOfStudents; i++) {
    studentsAndAttendances[i] = [prompt("What's your name?"), 0];
}

const takeAttendance = (name, index) => {
    let presence = prompt("Is " + name + " present? (Y/N)");
    if (presence.toLowerCase() === "y") {
        studentsAndAttendances[index][1]++;
    }
}

for (let day = 0; day < 20; day++) {
    for (let student in studentsAndAttendances) {
        takeAttendance(studentsAndAttendances[student][0], student);
    }
}

for (let student in studentsAndAttendances) {
    let result = `${studentsAndAttendances[student][0]}: <br>
    Attendances: ${studentsAndAttendances[student][1]}<br>`;
    document.write(result);
    if (studentsAndAttendances[student][1] < 18) {
        document.write("<b style='color: red'> FAILED </b><br><br>")
    } else {
        document.write("<b style='color: green'> PASSED </b><br><br>")
    }
}

