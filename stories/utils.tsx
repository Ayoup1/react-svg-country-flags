import { Args, Story } from '@storybook/react';

export const story = <P extends Args>(
  template: Story<P>,
  props: Story<P>['args']
) => {
  const Story = template.bind({});
  Story.args = props;

  return Story;
};
