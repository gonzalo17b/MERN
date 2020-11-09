import * as mongoose from 'mongoose';
import { ModificationNote } from '../shared/models/modificationNote';

const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: {type: String, required: true, minlength: 5},
    is_deleted: {
        type: Boolean,
        default: false
    },
    modification_notes: [ModificationNote]
});

schema.plugin(uniqueValidator);

export default mongoose.model('users', schema);