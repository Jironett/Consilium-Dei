
const Point = require('./Point');
const Endpoint = require('./Endpoint');

class Configuration
{
    /**
     * @param {Array<Object>} points
     */
    constructor(points = [], selectedPointId)
    {
        this._points = this._loadPoints(points);
        this._selectedPointId = selectedPointId;

        /** {Point|null} */
        this._selectedPoint = this.getPointById(selectedPointId);
    }

    getSelectedPoint()
    {
        return this._selectedPoint;
    }

    getSelectedPointId()
    {
        return this._selectedPointId;
    }

    _loadPoints(points)
    {
        let loaded = [];
        for (let key = 0; key < points.length; key++) {
            let point = points[key];
            if (typeof point !== 'object' || point.constructor !== Object)
                continue;

            const id = point.id;
            const schemes = this._loadSchemes(point.scheme);

            delete point.id;
            delete point.scheme;

            loaded.push(new Point(id, point, schemes));
        }

        return loaded;
    }

    _loadSchemes(schemes)
    {
        let loaded = [];
        for (let key = 0; key < schemes.length; key++) {
            let scheme = schemes[key];
            if (typeof scheme !== 'object' || scheme.constructor !== Object)
                continue;

            const type = scheme.type;
            const pointId = scheme.target;

            delete scheme.type;
            delete scheme.target;

            if (type === 'endpoint')
                loaded.push(new Endpoint(pointId, scheme));
        }

        return loaded;
    }

    getPointById(pointId)
    {
        const searched = this._points.filter((point) => point.getId() === pointId);
        if (searched.length === 0)
            return null;

        return searched[0];
    }

    /**
     * Returns scheme of selected point
     */
    getSchemeByTargetId(id)
    {
        if (this._selectedPoint === null)
            return null;

        return this._selectedPoint.getSchemeByTargetId(id);
    }

    /**
     * @param {Function<Scheme, targetPoint>} callback
     * @param {Array|number} exclude - identifiers of excluded schemes
     */
    forSelectedPoint(callback, exclude = [])
    {
        if (!Array.isArray(exclude))
            exclude = [ exclude ];

        if (!this._selectedPoint)
            return;

        for (const scheme of this._selectedPoint.schemes()) {
            if (exclude.includes(scheme.getTargetId()))
                continue;

            callback(scheme, this.getPointById(scheme.getTargetId()));
        }
    }
}

module.exports = Configuration;







