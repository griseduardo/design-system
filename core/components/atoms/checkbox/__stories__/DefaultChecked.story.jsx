import * as React from 'react';
import { Checkbox } from '@/index';

export const defaultChecked = () => <Checkbox label="Emergency contact" defaultChecked={true} />;

export default {
  title: 'Selection/Checkbox/Default Checked',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};