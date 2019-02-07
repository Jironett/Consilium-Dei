
class Scheme {

    constructor(pointId, appData = {})
    {
        for (const prop in appData) {
            this[prop] = appData[prop];
        }
        this._pointId = pointId;
    }

    /**
     * Id of foreign point
     * @returns {(number|string)}
     */
    getPointId()
    {
        return this._pointId;
    }
}

module.exports = Scheme;