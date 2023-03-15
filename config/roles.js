const allRoles = {
  user: [],
  kader: ["manageToddler"],
  nakes: ["manageUsers", "manageToddler", "validateToddler"],
  admin: ["getUsers", "manageUsers", "manageToddler", "validateToddler", 'manageWeek'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
