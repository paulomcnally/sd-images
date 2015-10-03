var util = require('util');

var base = 'https://res.cloudinary.com/%s/image/upload/%s/%s.%s'

var Cloudinary = function() {

};

Cloudinary.prototype.png = 'png';

Cloudinary.prototype.jpg = 'jpg';

Cloudinary.prototype.jpeg = 'jpeg';

Cloudinary.prototype.parse = function(params) {

  var defaultParams = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || params.cloud_name,
    version: process.env.CLOUDINARY_VERSION || params.version,
    file_name: process.env.CLOUDINARY_FILE_NAME || params.file_name,
    file_ext: process.env.CLOUDINARY_FILE_EXT || params.file_ext
  };

  var url = util.format(base, defaultParams.cloud_name, defaultParams.version, defaultParams.file_name, defaultParams.file_ext)

  return url;
}

module.exports = new Cloudinary();
