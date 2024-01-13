const { mongoose, mongo } = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema(
  {
    queryType: {
      type: String,
      enum: ['A', 'B', "C"],
      required: true,
    },

    queryStatus: {
        type: String,
        enum: ['pending', 'resolved', 'hold'],
        required: true,
        default :'pending'
      },
    queryDescription: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'queryModel', // Set your desired collection name
  }
);

const queryModel = mongoose.models.queryModel || mongoose.model("queryModel", schema);

export default queryModel
