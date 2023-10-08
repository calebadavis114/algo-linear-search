function linearSearch(searchTerm, arr) {
 for(let i = 0;i < arr.length;i++){
    if(arr[i] == searchTerm){
      return i;
    }
 }
 return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  let newArr = [];
  for(let i = 0;i < arr.length;i++){
    if(arr[i] == searchTerm){
      newArr.push(i);
    }
}
return newArr;
}

module.exports = { linearSearch, globalLinearSearch };
