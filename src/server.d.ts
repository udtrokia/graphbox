/// <reference types="node" />
import { Server as server } from 'http';
declare const serve: (fn: object) => server;
export default serve;
