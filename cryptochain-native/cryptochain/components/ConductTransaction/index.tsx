import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';
import Config from 'react-native-config';
import { useNavigation } from '@react-navigation/native';

export const ConductTransaction = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState();
  const navigation = useNavigation();

  const conductTransaction = () => {
    try {
      fetch(`${Config.API_URL}/transact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          body: JSON.stringify({recipient, amount}),
        },
      })
        .then(response => response.json())
        .then(json => {
          console.log({ json })
          navigation.navigate('Pool-Map')
        });
    } catch (error) {
      console.error({ error })
    }
  };

  return (
    <View
      style={{
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Conduct Transaction</Text>
      <View style={styles.TransactionContainer}>
        <Text style={{marginRight: 8}}>Recipient:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1}}
          onChangeText={setRecipient}
          value={recipient}
          placeholder={'recipient'}
        />
      </View>
      <View style={styles.TransactionContainer}>
        <Text style={{marginRight: 16}}>Amount:</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1}}
          onChangeText={setAmount}
          value={amount}
          keyboardType="numeric"
        />
      </View>
      <Button
        onPress={conductTransaction}
        title="Submit"
        color="#841584"
        accessibilityLabel="Submit transaction"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TransactionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  recipient: {
    flex: 1,
  },
  amount: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
