
class Scheme {

    constructor(targetId, appData = {})
    {
        for (const prop in appData) {
            this[prop] = appData[prop];
        }
        this._targetId = targetId;
    }

    /**
     * Id of foreign point
     * @returns {(number|string)}
     */
    getTargetId()
    {
        return this._targetId;
    }
}

module.exports = Scheme;