function deuxGrand(tab) {
  var maxUn = 0;
  var maxDeux = 0;
  
  for (i = 0; i < tab.length; i++) {
    if (tab[i] > maxUn) 
    
    {
      maxDeux = maxUn;
      maxUn = a=tab[i];
    } 
    
    else if (tab[i] > maxDeux) {
      maxDeux = tab[i];
    }
    
  }
  return [maxUn, maxDeux];
}

console.log(deuxGrand([1, 2, 5, 4, 10, 6, 48]));