
const Scheme = require('./Scheme');

class EndpointScheme extends Scheme {

    constructor(pointId, appData = {})
    {
        super(pointId, appData);
    }
}

module.exports = EndpointScheme;