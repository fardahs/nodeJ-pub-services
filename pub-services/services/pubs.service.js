const pubs = require('../mocks/pubs.json');

class Pubs{
    constructor(name, owner, openHours, beers, openDays){
        this.name = name
        this.owner = owner
        this.openHours = openHours
        this.openDays = openDays
        this.beers = beers

    }
}

class Owner{
    constructor(firstName, lastName, mail){
        this.firstName = firstName
        this.lastName = lastName
        this.mail = mail
    }
}

class OpenHours{
    constructor(start, end){
        this.start = start
        this.end = end
    }
}

class Beers{
    constructor(type, name){
        this.type = type
        this.name = name
    }
}

function listPub(){
    console.log(pubs);
    return pubs.map(items => new Pubs(
    items.name,
    new Owner(items.owner.firstName, items.owner.lastName, items.owner.mail),
    new OpenHours(items.openHours.start, items.openHours.end),
    items.beers.map(item => new Beers(item.type, item.name)),
    items.openDays)
    );
}

module.exports = {
    listPub:listPub
}
