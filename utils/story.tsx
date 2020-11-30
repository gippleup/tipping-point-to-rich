type StoryDefinition = {
  title: string;
  component: React.FC | React.ComponentClass;
}

export const defineStory = (definition: StoryDefinition) => definition;

export const defineTemplate: <P>(Component: React.FC<P> | React.ComponentClass<P>) => React.FC<P> = (Component) => {
  const Pemplate = (args) => <Component {...args} />
  Pemplate.bind({});
  return Pemplate;
}

export const defineModule: <P>(Template: React.FC<P>, args: P) => React.FC<P> = (Template, args) => {
  const Module = Template.bind({});
  Module.args = args;
  return Module;
}