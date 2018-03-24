// Native

import { Server as server }  from 'http'
import { Stream } from 'stream'

console.log(server)
console.log(Stream)

// Packages
import * as contentType from 'content-type'
import * as getRawBody from 'raw-body'
import { readable } from 'is-stream'

console.log(contentType)
console.log(getRawBody)
console.log(readable)

const { NODE_ENV } = process.env
const DEV = NODE_ENV === 'development'
console.log(DEV)

class Serve {
  public fn: object;
  public req: object;
  public res: object;
  constructor( req: object,res: object, fn: object){
    this.req = req;
    this.res = res;
    this.fn = fn;
  }
  run() {
    return console.log(this.fn)
  }
}


//const serve = (fn: object) => new server(
//  (req, res) => exports.run(req, res, fn)
//)

export default Serve

