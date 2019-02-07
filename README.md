# Consilium-Dei
This package can be used as describer or configuration of connecting of nodes with which can be performed operations. 


### Install
```
npm install consilium-dei
```


### Example of usage

```
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

const fce = (scheme, destPoint) => {

    console.log(scheme, destPoint);

};

cfg.forSelectedPoint(fce, 2);
```
