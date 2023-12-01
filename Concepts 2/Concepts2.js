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
 */

//EXAMPLE:



