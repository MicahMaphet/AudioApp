import config from '../../config.json';

const Config = {
    uri: `http://${config.server.host}:${config.server.port}`
}

export default Config;