
const Configuration = require('./lib/Configuration');

const objConfig = [
    {
        id: 1,
        hostname: '',
        port: 3443,
        scheme: [
            {
                type: 'endpoint',
                target: 2,
            },
            {
                type: 'endpoint',
                target: 3,
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
                target: 1
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
                target: 1
            },
        ]
    }
];


const cfg = new Configuration(objConfig, 1);


const fce = (scheme, targetPoint) => {

    console.log(scheme, targetPoint);

};

cfg.forSelectedPoint(fce, 2);