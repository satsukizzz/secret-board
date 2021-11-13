'use strict';

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.end('hi');
      break;
    case 'POST':
      // todo postの処理
      break;
    default:
      break;
  }
}

module.exports = {
  handle
};
