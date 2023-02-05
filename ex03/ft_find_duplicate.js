function doublonTrue(tableau) {

  let unique = {};

  for (let i of tableau) 
  
  {
    if (unique[i]) 
    
    {
      return "True";
    }
    unique[i] = true;
  }

  return "False";
}

console.log(doublonTrue([5, 4, 9, 47, 57, 4, 75, 94, 5]));



