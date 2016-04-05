module.exports = {
  signup: {
    get: function(req, res) {
      console.log('get a signup');
    },
    post: function(req, res) {
      console.log('post a signup');
      collectData(req, function(data){
        //object {user:****, password:***}
      });
    }
  }
};

var collectData = function (req, cb) {
  var buffer = '';
  req.on('data', function (chunk) {
    buffer += chunk;
  });
  req.on('end', function () {
    cb(JSON.parse(buffer));
  });
};