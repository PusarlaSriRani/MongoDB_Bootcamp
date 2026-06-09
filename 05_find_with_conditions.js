// Greater than

db.employee.find({
    salary: {
        $gt: 35000
    }
})

// Less than

db.employee.find({
    age: {
        $lt: 23
    }
})

// Equal

db.employee.find({
    department: "AI & ML"
})
