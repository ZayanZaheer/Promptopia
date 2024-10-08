import {Schema, model, models} from "mongoose";

const promptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required']
    }
})

const Prompts = models.Prompts || model('Prompts', promptSchema);

export default Prompts;