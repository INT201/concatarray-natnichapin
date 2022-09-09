const { template } = require('@babel/core')

function concatArray(array1, array2) {
  array1=((array1!==[])?array1:undefined)??undefined
  array2=((array2!==[])?array2:undefined)??undefined 
  if(array1!==undefined||array2!==undefined){
    return array1.concat(array2)
  }
  return undefined
  

}
module.exports = concatArray
