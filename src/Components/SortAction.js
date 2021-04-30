const compareFun = (first, second) => {
  if (first > second) {
    return 1
  } else if (first < second) {
    return -1
  } else {
    return 0
  }
}

const sort = (userData,a) => (dispatch) => {
  if(a === "Name"){
  dispatch({
    type: "Getdata",
    userData: userData.sort((min, max) => compareFun(min.Name,max.Name))
  })
}
else if(a ==="Age"){
  dispatch({
    type:"Getdata",
    userData: userData.sort((min,max)=> min.Age-max.Age)
  })

}
}

export default sort