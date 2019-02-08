
const Scheme = require('./Scheme');

class Endpoint extends Scheme {

    constructor(targetId, appData = {})
    {
        super(targetId, appData);
    }
}

module.exports = Endpoint;