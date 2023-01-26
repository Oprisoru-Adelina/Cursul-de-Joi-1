let users = [
    {
        employee_id: 1,
        employee_name: "Armstrong Ryan",
        employee_age: 22,
    },
    {
        employee_id: 2,
        employee_name: "Carey Rose Isabel Jayde",
        employee_age: 26,
    },
    {
        employee_id: 3,
        employee_name: "Carter Bailey",
        employee_age: 33,
    },
    {
        employee_id: 4,
        employee_name: "Dawson Raymond Wade",
        employee_age: 41,
    },
    {
        employee_id: 5,
        employee_name: "Kiley Renee Kayla",
        employee_age: 29,
    },
];

function checkProfession() {
    return users.filter(employee => employee.employee_name.split(" ").length > 2);
}
console.log(checkProfession());

