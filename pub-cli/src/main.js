var pubs = require('pub-services');

function getListPub(){
    liste = pubs.services.pubService.listPub();
    console.log(liste);
}

module.exports = {
    getListPub:getListPub
}