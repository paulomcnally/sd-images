# sd-images

Images from Cloudinary

## Required

    process.env.CLOUDINARY_CLOUD_NAME
    process.env.CLOUDINARY_VERSION
    process.env.CLOUDINARY_FILE_NAME
    process.env.CLOUDINARY_FILE_EXT

## Example

    var cloudinary = require('sd-images');

    var url = cloudinary.parse({
      cloud_name: 'hg3x7etb0',
      version: 'v1443888418',
      file_name: 'free',
      file_ext: cloudinary.png
    });

    console.log(url);


## More info

http://cloudinary.com/documentation/admin_api
