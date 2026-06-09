// Display all documents

db.employee.find()

// Display one document

db.employee.findOne()

// Find by name

db.employee.find({
    name: "Sri"
})
