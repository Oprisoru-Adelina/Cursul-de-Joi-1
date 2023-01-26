let users = [
    {
        name: "Constance Green",
        age: 23,
        profession: "Lawyer"
    },
    {
        name: "Elisa French",
        age: 26,
        profession: "Developer, Engineer, Project Manager"
    },
    {
        name: "Raihan Malone",
        age: 33,
        profession: "Plane Pilot, Photographer"
    },
    {
        name: "George Geo Georgeson",
        age: 42,
        profession: "Professor, Doctor, Researcher"
    }
];


function checkProfession() {
    /*  usersTemp = [];
      for (let i = 0; i < users.length; i++) {
          const user = users[i];
          userProfessions = user.profession.split(", ");
          if (userProfessions.length > 2) {
              usersTemp.push(user);
          }
      }
      return usersTemp; */
    return users.filter(user => user.profession.split(", ").length > 2);
}
console.log(checkProfession());

