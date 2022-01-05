import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';


export const Transaction: React.FC<{
  transaction: {
    input: {address: string; balance: number};
    outputMap: {[x: string]: number};
  };
}> = ({transaction}) => {
  const route = useRoute();
  console.log({ dat: route})

  const {input, outputMap} = transaction;

  const recipients = Object.keys(outputMap);

  return (
    <View>
      <Text>From: {`${input.address.substring(0, 15)}...`}</Text>
      <Text>Balance: {input.balance}</Text>
      {recipients.map((recipient, index) => (
        <View key={index}>
          <Text>To: {`${recipient.substring(0, 15)}...`}</Text>
          <Text>amount: {outputMap[recipient]}</Text>
        </View>
      ))}
    </View>
  );
};
