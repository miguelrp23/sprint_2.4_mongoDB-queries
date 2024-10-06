// 1. 
db.restaurantes.find()

// 2.
db.restaurantes.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 3.
db.restaurantes.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 4.
db.restaurantes.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 })

// 5.
db.restaurantes.find({ borough: "Bronx" })

// 6.
db.restaurantes.find({ borough: "Bronx" }).limit(5)

// 7.
db.restaurantes.find({ borough: "Bronx" }).skip(5).limit(5)

// 8. 
db.restaurantes.find({ "grades.score": { $gt: 90 } })

// 9.
db.restaurantes.find({ "grades.score": { $gt: 80, $lt: 100 } })

// 10. 
db.restaurantes.find({ "address.coord.0": { $lt: -95.754168 } })

// 11. 
db.restaurantes.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } })

// 12. 
db.restaurantes.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } })

// 13. 
db.restaurantes.find({ cuisine: { $ne: "American" }, "grades.grade": "A", borough: { $ne: "Brooklyn" } }).sort({ cuisine: -1 })

// 14.
db.restaurantes.find({ name: { $regex: /^Wil/ } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 15. 
db.restaurantes.find({ name: { $regex: /ces$/ } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 16. 
db.restaurantes.find({ name: { $regex: /Reg/ } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 17. 
db.restaurantes.find({ borough: "Bronx", cuisine: { $in: ["American", "Chinese"] } })

// 18.
db.restaurantes.find({ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 19. 
db.restaurantes.find({ borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 20. 
db.restaurantes.find({ "grades.score": { $lt: 10 } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 21. 
db.restaurantes.find({ cuisine: "Seafood", cuisine: { $nin: ["American", "Chinese"] }, name: { $not: /^Wil/ } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 22.
db.restaurantes.find({ "grades.grade": "A", "grades.score": 11, "grades.date": ISODate("2014-08-11T00:00:00Z") }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 })

// 23. 
db.restaurantes.find({ "grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z") }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 })

// 24. 
db.restaurantes.find({ "address.coord.1": { $gt: 42, $lt: 52 } }, { _id: 0, restaurant_id: 1, name: 1, address: 1, "address.coord": 1 })

// 25.
db.restaurantes.find().sort({ name: 1 })

// 26. 
db.restaurantes.find().sort({ name: -1 })

// 27. 
db.restaurantes.find().sort({ cuisine: 1, borough: -1 })

// 28. 
db.restaurantes.find({ "address.street": { $exists: true } })

// 29. 
db.restaurantes.find({ "address.coord": { $type: "double" } })

// 30. 
db.restaurantes.find({ "grades.score": { $mod: [7, 0] } }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 })

// 31. 
db.restaurantes.find({ name: { $regex: /mon/ } }, { _id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1 })

// 32. 
db.restaurantes.find({ name: { $regex: /^Mad/ } }, { _id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1 })