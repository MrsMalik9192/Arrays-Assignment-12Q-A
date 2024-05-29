//                      Assignment of Array
//  Question 01
 const fruits : string [] = ["apple" , "banana" , "mango" , "orange "] ;
 console.log(fruits);                  

// /   Question 02
 const numbers: number[] = [10, 20, 20, 40];
 console.log(numbers);
      
    //   Question 03
    const thirdFruit = fruits[2];
    console.log(thirdFruit);

    // Question 04
  numbers[1] = 25;
  console.log(numbers);  

    //   Question 05
  fruits.push("Grape");
  console.log(fruits);  
   
        // Question 06
   const lastfurit =fruits.pop();
   console.log(fruits);     

        //   Question 07
   const firstFruit = fruits.shift();
   console.log(fruits);     

            // Question 08
    fruits.unshift("kiwi");
    console.log(fruits);      
    
            //  Question 09
    fruits.splice(1,2);
    console.log(fruits);   
    
            //  Question 10
     fruits.splice(2,0 , "pineapple" , "pear");
     console.log(fruits);     
     
                // Question 11
     const citrusFruits = fruits.slice(0,2);
     console.log(citrusFruits);           

                // Question 12
     const lastTwoFruits =fruits.slice(-2);
     console.log(lastTwoFruits);        