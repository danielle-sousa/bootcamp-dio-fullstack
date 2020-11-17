const user = {
    name: 'Danielle',
    lastName: 'Sousa'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);