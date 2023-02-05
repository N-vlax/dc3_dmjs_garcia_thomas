function doublonSupr(tableau) {

    let unique = {};

    tableau.forEach(function(i) {

      if (!unique[i]) 
      
      {
        unique[i] = true;
      }

    });
    return Object.keys(unique).map(function(i) 
    {
      return parseInt(i, 10);
    });
  }
  
  console.log(doublonSupr([5,4,9,47,57,4,75,94,5]));