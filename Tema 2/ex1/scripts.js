let users = [
    {
        name: "Constance Green",
        age: 23,
        profession: "Lawyer"
    },
    {
        name: "Elisa French",
        age: 26,
        profession: "Developer, Engineer"
    },
    {
        name: "Raihan Malone",
        age: 33,
        profession: "Plane Pilot"
    },
    {
        name: "George Geo Georgeson",
        age: 66,
        profession: "Professor, Doctor"
    }
];

const checkAge = users.filter(user => user.age > 26);
console.log(checkAge);

/* let range = {
    lower: 33,
    upper: 66
    }

let checkAge = users.filter(function(age) {
    return age.age >= this.lower && age.age <= this.upper;}, range) */
