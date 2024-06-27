import React from 'react';
import { Components } from '@/componentList';

// Define the type for the content
interface Content {
  contentTypeAlias: string;
  [key: string]: any;
}

// Define the type for the item
interface Item {
  content: Content;
}

// Define the type for the Components object
interface ComponentsMap {
  [key: string]: React.ElementType;
}

// Ensure Components is typed as ComponentsMap
const typedComponents: ComponentsMap = Components;

export const getBlocks2 = (data: Item[]): JSX.Element[] => {
  const blocks = data.map((item, i) => {
    const Component = typedComponents[item.content.contentTypeAlias];
    if (!Component) {
      console.error(`Component for alias ${item.content.contentTypeAlias} not found`);
      return null;
    }
    return React.createElement(Component, { ...item.content, key: i });
  });

  // Filter out any null values in case any components were not found
  return blocks.filter((block): block is JSX.Element => block !== null);
};
