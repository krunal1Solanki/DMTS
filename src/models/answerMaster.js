const { mongoose } = require('mongoose')
const Schema = mongoose.Schema
//const ED = rootRequire('utils/encry_decry')
const schema = new Schema({
    formType: {
        type: String,
         required: true,
    },
    submissionData: {
        type: Date,
        default: new Date().toISOString(),
    },
    questionnaireName : {
        type : String,
    },
    // Fields for questionModel
    answers: [
        {
            answerHeading: {
                type: String,
                required: true,
            },
            answerType: {
                type: String,
                enum: ['rating', 'yesno', 'text'],
                required: true,
            },
        }
    ],
    // Fields for imageModel
    images: [
        {
            imageName: {
                type: String,
                required: true,
            },
            imagePath: {
                type: String,
                required: true,
            },
        }
    ],
}, {
    collection: 'answerModel',
});

const answerModel = mongoose.models.answerModel || mongoose.model("answerModel", schema);

export default answerModel;
