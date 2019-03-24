import { Schema } from 'prosemirror-model';
import { nodes, marks } from 'prosemirror-schema-basic';

const editorSchema = new Schema({
	nodes: nodes,
	marks: marks
});

export default editorSchema;