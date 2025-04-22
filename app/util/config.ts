import configFile from '../../config.json';

const config = {
    uri: `http://${configFile.server.host}:${configFile.server.port}`
}

export default config;