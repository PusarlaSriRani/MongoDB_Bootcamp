// Delete one document

db.employee.deleteOne({
    name: "Rahul"
})

// Delete many documents

db.employee.deleteMany({
    department: "IT"
})
