function validatePerson(person) {
    if (typeof person !== 'object' || person === null) {
        return false;
    }

    if (typeof person.name !== 'string' || person.name.trim() === '') {
        return false;
    }

    if (typeof person.age !== 'number' || isNaN(person.age)) {
        return false;
    }

    if (typeof person.address !== 'object' || person.address === null) {
        return false;
    }

    return true;
}

const person1 = {
    name: "Tuan Gay",
    age: 30,
    address: { city: "Lao Cai", street: "46 Dien Bien Phu" }
};
console.log(validatePerson(person1));

const person2 = {
    name: "Tung Ngu",
    age: "50",
    address: { city: "Phu Xuyen", street: "Thon Me" }
};
console.log(validatePerson(person2));

const person3 = {
    name: "Duc Nghien",
    age: 18,
    address: "23 Ha Giang"
};
console.log(validatePerson(person3));
