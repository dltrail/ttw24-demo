import React from 'react';
 import {Components} from '@/componentList';


export const getBlocks2 = (data: any) => {
  const blocks =  data.map((item: { content: { contentTypeAlias: string }; }, i: any) => {
  return (
  // #TODO: fix ts error
    React.createElement(
      Components[item.content.contentTypeAlias], {...item.content, key: i}
    )
  )
})

return blocks
}