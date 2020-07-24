import express from 'express'

export default class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
  }

  get = () => {
    this.app.get('/', (req, res) => {
      res.end('req')
    })
  }

  listen = () => {
    this.app.listen(this.port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`http://localhost:${this.port}`);
      }
    });
  }
}
