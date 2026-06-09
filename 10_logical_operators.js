// AND

db.employee.find({
    department: "AI & ML",
    salary: {
        $gt: 35000
    }
})

// OR

db.employee.find({
    $or: [
        {
            department: "CSE"
        },
        {
            department: "IT"
        }
    ]
})

// IN

db.employee.find({
    department: {
        $in: ["AI & ML", "ECE"]
    }
})
