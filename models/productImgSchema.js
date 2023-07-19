const mongoose=require('mongoose');

  const fileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Buffer,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    encoding: {
      type: String,
      required: true,
    },
    tempFilePath: {
      type: String,
    },
    truncated: {
      type: Boolean,
    },
    mimetype: {
      type: String,
      required: true,
    },
    md5: {
      type: String,
      required: true,
    },
    // mv: {
    //   type: Function,
    // }
  });

  // module.exports = mongoose.model('ProductImage', productSchema);