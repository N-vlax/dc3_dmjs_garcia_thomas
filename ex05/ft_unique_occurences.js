function uniqueTrue(tableau) {

  let unique = {};

  for (let i of tableau) 
  
  {
    if (unique[i]) 
    {
      return "False";
    }
    unique[i] = true;
  }

  return "True";
}

console.log(uniqueTrue([5, 4, 9, 47, 57, 75, 94]));
