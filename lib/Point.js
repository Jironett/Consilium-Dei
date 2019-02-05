
class Point
{
    /**
     *
     * @param {number|string} identifier
     * @param {Object} appData
     * @param {Array<Scheme>} schemes
     */
    constructor(identifier, appData = {}, schemes = [])
    {
        for (const prop in appData) {
            this[prop] = appData[prop];
        }
        this._id = identifier;
        this.schemes(schemes);
    }

    getId()
    {
        return this._id;
    }

    schemes(schemes)
    {
        if (typeof schemes === 'undefined')
            return this._schemes;

        if (!Array.isArray(schemes))
            throw TypeError("Schemes has to be an array.");

        this._schemes = schemes;

        return this._schemes;
    }
}

module.exports = Point;