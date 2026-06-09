// Update one document

db.employee.updateOne(
{
    name: "Sri"
},
{
    $set: {
        salary: 50000
    }
}
)

// Update many documents

db.employee.updateMany(
{
    department: "AI & ML"
},
{
    $set: {
        location: "Hyderabad"
    }
}
)
