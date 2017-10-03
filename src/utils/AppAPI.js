import request from 'superagent';
import {serverConfig} from '../config/config.json';

const {host, port } = serverConfig;
const url = `http:\\\\${host}:${port}`;

//best practice to get Promise and send it to Dispatcher
export const exampleGet = () => {
  return request.get(url);
};

export const examplePost = (data) => {
  return request.post(url).send(data);
};