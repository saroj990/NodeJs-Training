function printStudentInfo(fname, lname) {
  return  " Your\"s " + fname + " " + lname;
}


function printStudent1(fname, lname) {
  return (`
  Your's ${fname} ${lname}

  

  test
  
  
  `);
}
let fullName = printStudent1("john", "doe");
console.log(fullName);