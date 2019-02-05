
class Scheme {

    constructor(pointId, appData = {})
    {
        for (const prop in appData) {
            this[prop] = appData[prop];
        }
        this._pointId = pointId;
    }

    getPointId()
    {
        return this._pointId;
    }
}

module.exports = Scheme;