import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';
import {Block, IBlock} from './block';

export const Blocks = () => {
  const [blocks, setBlocks] = useState<IBlock[]>([]);

  useEffect(() => {
    async function getBlocksFromApiAsync() {
      console.log('blocks', `${Config.API_URL}/blocks`)
      try {
        const response = await fetch(`${Config.API_URL}/blocks`);
        const json = await response.json();
        console.log({blocks: json});
        setBlocks(json);
      } catch (error) {
        console.error(error);
      }
    }

    getBlocksFromApiAsync();
  }, []);
  console.log({ blocks })
  return (
    <View>
      <Text>Blocks</Text>
      <View>
        {blocks.map((block, i) => (
          <React.Fragment key={i}>
            <Block block={block} />
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};
