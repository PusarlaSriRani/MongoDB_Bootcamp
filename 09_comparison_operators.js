// Greater than

db.employee.find({
    salary: {
        $gt: 40000
    }
})

// Greater than or equal

db.employee.find({
    salary: {
        $gte: 40000
    }
})

// Less than

db.employee.find({
    age: {
        $lt: 23
    }
})

// Not equal

db.employee.find({
    department: {
        $ne: "CSE"
    }
})
