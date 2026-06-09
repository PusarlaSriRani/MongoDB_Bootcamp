// Sort ascending

db.employee.find().sort({
    salary: 1
})

// Sort descending

db.employee.find().sort({
    salary: -1
})

// Limit

db.employee.find().limit(3)

// Skip

db.employee.find().skip(2)
