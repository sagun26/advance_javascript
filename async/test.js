const student={
    name:"sagun",
    age: 22,
    city: "Kathmandu" ,  
    marks: {
        math:89,
        science:80
    },
    address:['pokhara','kushma']
    
}

//marks =science and address= pokhara

console.table([student.address[1],student.marks.science])