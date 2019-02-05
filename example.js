
const Configuration = require('./lib/Configuration');

const objConfig = [
    {
        id: 1,
        hostname: '',
        port: 3443,
        scheme: [
            {
                type: 'endpoint',
                point: 2,
            },
            {
                type: 'endpoint',
                point: 3,
            },
        ]
    },
    {
        id: 2,
        hostname: '',
        port: 3443,
        scheme: [
            {
                type: 'endpoint',
                point: 1
            },
        ]
    },
    {
        id: 3,
        hostname: '',
        port: 3443,
        scheme: [
            {
                type: 'endpoint',
                point: 1
            },
        ]
    }
];


const cfg = new Configuration(objConfig, 1);


cfg.forSelectedPoint((scheme, destPoint) => {

    console.log(scheme, destPoint);

}, 2);