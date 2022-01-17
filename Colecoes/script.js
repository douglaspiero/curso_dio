//Coleçẽs Chaveadas

//MAP

const getAdmins = (map) => {
    let admins = [];
    for([key,value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;

}

const users = new Map();

users.set('Felipe', 'User');
users.set('Bruno', 'Admin');
users.set('Priscila', 'User');
users.set('Victor', 'Admin');
users.set('Maria', 'Admin');

console.log(getAdmins(users) + "\n");

//SET

const myArray = [30,30,40,5,223,2049,3034,5];

const uniqueValues = (arr) => {
    const myset = new Set(arr);
    return [...myset];
} 

console.log("My Array: " + uniqueValues(myArray));