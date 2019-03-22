var pubs = require('../mocks/pubs.json');
const _= require('lodash');

function listPub(){
   var listes =  _.map(pubs, 'name');
    return listes;
}

module.exports = {
    listPub:listPub
}