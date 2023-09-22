import Button from "../components/Button";

export default {
  title: "Components/Controls/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "logging it in action section" },
    size: 'lg'
  },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});

Red.args = {
  backgroundColor: "red",
  label: "Middle Green button",
  color: "white",
};
