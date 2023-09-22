import Input from "../components/Input";

export default {
  title: "Components/Controls/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});

TextInput.args = {
  label: "Text Input",
  type: "text",
  name: "Text Input",
};

export const CheckboxInput = Template.bind({});

CheckboxInput.args = {
  label: "Checkbox",
  type: "checkbox",
  name: "Checkbox",
};
