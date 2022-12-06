/**
 * {{name}}.jsx
 */
 import React from 'react';

 // Component(s)
 import {{name}} from './{{name}}';

 // eslint-disable-next-line import/no-anonymous-default-export
 export default {
   title: '{{name}}',
   component: {{name}},
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <{{name}} />;

 Default.storyName = 'default';
