export default {
    title: 'Components/Text Input',

    argTypes: {
        type:{
            name: 'Type',
            type: { name: 'string', required: true },
            description: 'The type of input to create',
            control: 'text'
        },
        kind:{
            name: 'Kind',
            type: { name: 'string', required: true },
            description: 'The kind of input to create',
            control: 'select',
            options: ['default', 'primary', 'error', 'success']
        },
        label:{
            name: 'Label',
            type: { name: 'string', required: true },
            description: 'The label that appears above the input',
            control: 'text',
        },
        placeholder:{
            name: 'Placeholder',
            type: { name: 'string', required: false },
            description: 'The placeholder text for the input',
            control: 'text'
        },
        hint:{
            name: 'Hint',
            type: { name: 'string', required: false },
            description: 'The text that displays when as a hint above the input',
            control: 'text',
        },
        required: { control: 'boolean' },
    }
};

const Template = ({...args}) => `
${args.inputs.map(input => {
    return `
    <text-input-component kind="${input.kind}" label="${input.label}" placeholder="${input.placeholder}" type="${input.type}" hint="${input.hint}" required="${input.required}"></text-input-component>
    <hr />
    `;
}).join('')}
`;

const input1 = {
    type: "text",
    kind: "default",
    label: 'Text input label',
    required: false
};

const input2 = {
    type: "text",
    kind: "default",
    label: 'Text input label',
    placeholder: 'Value',
    required: false
};

const input3 = {
    type: "text",
    kind: "default",
    label: 'Text input label',
    required: true
};

const input4 = {
    type: "text",
    kind: "default",
    label: 'Text input label',
    placeholder: 'Value',
    required: true
};

const input5 = {
    type: "text",
    kind: "default",
    label: 'Text input label',
    hint: 'Helpful text',
    required: false
};

const input6 = {
    type: "text",
    kind: "default",
    label: 'Text input label',
    placeholder: 'Value',
    hint: 'Helpful text',
    required: false
};

const input7 = {
    type: "text",
    kind: "primary",
    label: 'Text input label',
    required: false
};

const input8 = {
    type: "text",
    kind: "primary",
    placeholder: 'Value',
    label: 'Text input label',
    required: false
};

const input9 = {
    type: "text",
    kind: "success",
    label: 'Text input label',
    required: false
};

const input10 = {
    type: "text",
    kind: "success",
    placeholder: 'Value',
    label: 'Text input label',
    required: false
};

const input11 = {
    type: "text",
    kind: "error",
    label: 'Text input label',
    required: false
};

const input12 = {
    type: "text",
    kind: "error",
    placeholder: 'Value',
    label: 'Text input label',
    required: false
};

const input13 = {
    type: "text",
    kind: "error",
    label: 'Text input label',
    required: true
};

const input14 = {
    type: "text",
    kind: "error",
    label: 'Text input label',
    placeholder: 'Value',
    required: true
};

export const Inputs = Template.bind({});
Inputs.args = {
    inputs: [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14]
};
