export default {
    app: {
        name: 'Loris Gland',
        version: '0.0.1',
        info: 'Web Service'
    },
    ip: {
        server: '0.0.0.0'
    },
    port: {
        server: 5000,
        socket: 6660
    },
    security : {
        log: {
            enabled: false,
            fileName: 'gland_log'
        },
        cookie: {
            secret: '',
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week cookie age.
        },
    },
    websocket: {
        use: 'development',
        deployment: [
            'ws://loris.ca',
            'wss://loris.ca',
            'http://loris.ca',
            'https://loris.ca'
        ],
        development: [
            'ws://localhost:6660',
            'wss://localhost:6660',
            'http://localhost:6660',
            'https://localhost:6660'
        ]
    }
};