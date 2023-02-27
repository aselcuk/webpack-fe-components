import React from 'react';
import { version } from '../package.json';

export default {
  title: `Components v.${version}`,
  parameters: {
    layout: 'centered',
    docs: {
      page: null
    }
  }
};

/**
 * Default
 */
export const Default = () => {
  return (
    <div>
      <section aria-label="header">
        Welcome to Frontend Components Library
      </section>
    </div>
  );
};