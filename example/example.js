var cloudinary = require('../lib/sd-images');

var url = cloudinary.parse({
  cloud_name: 'hg3x7etb0',
  version: 'v1443888418',
  file_name: 'free',
  file_ext: cloudinary.png
});

console.log(url);
