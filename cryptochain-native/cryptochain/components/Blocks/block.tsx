import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Transaction} from '../Transaction';
import { useNavigation } from '@react-navigation/native';
export interface IBlock {
  timestamp: string;
  lastHash: string;
  hash: string;
  data: any[];
  difficulty: number;
  nonce: number;
}
export const Block: React.FC<{block: IBlock}> = ({block}) => {
  const navigation = useNavigation();

  console.log({ navigation});
  const stringifiedData = JSON.stringify(block.data);

  const dataDisplay =
    stringifiedData.length > 35
      ? stringifiedData.substring(0, 35)
      : stringifiedData;
  return (
    <View style={styles.blockContainer}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Transaction', { data: block.data })
      }}>
      <Text>Hash: {`${block.hash.substring(0, 15)}...`}</Text>
      <Text>Timestamp: {block.timestamp}</Text>
      {block.data.map((transaction, i) => (
        <React.Fragment key={i}>
          <Transaction transaction={transaction} />
        </React.Fragment>
      ))}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    display: 'flex',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'dark',
    marginTop: 8,
    padding: 8,
  },
});
