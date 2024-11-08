var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a-b);
  console.log(people);

  let minimumBoats = 0, i=0, j=people.length-1;
  while(i<=j) {
    if(i == j) {
      minimumBoats+=1;
      break;
    }
    if(people[i]+people[j] <= limit) i++;
    j--;
    minimumBoats++;
  }

  return minimumBoats;
};

people = [44,10,29,12,49,41,23,5,17,26]
console.log(numRescueBoats(people, 50));