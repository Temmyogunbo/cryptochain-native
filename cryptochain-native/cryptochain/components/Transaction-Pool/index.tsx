import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import { Transaction } from '../Transaction';
import Config from 'react-native-config';

const POLL_INTERVAL_MAP = 10000
export const TransactionPool = () => {
  const [transactionPoolMap, setTransactionPoolMap] = useState([]);

const mineTransactions = () => {
  const fetchMineTransaction = async () => {
    try {
      const response = await fetch(`${Config.API_URL}/mine-transaction`);

      const json = await response.json();

      setTransactionPoolMap(json)

      
    } catch (error) {
      console.error({ error})
    }
  }
}
  
  useEffect(() => {
    
    const fetchTransactionMap = async () => {
      try {
        const response = await fetch(`${Config.API_URL}/transaction-pool-map`);
  
        const json = await response.json();
  
        setTransactionPoolMap(json)
  
        
      } catch (error) {
        console.error({ error})
      }
    }
    const timer= setInterval(async () => fetchTransactionMap(), POLL_INTERVAL_MAP)
    return () => clearInterval(timer)
  },[])
  return (<View>
    {
      Object.values(transactionPoolMap).map((transaction) => (
        <View key={transaction.id}>
          <Transaction transaction={transaction} />

        </View>
      ))
    }
    <Button
        onPress={mineTransactions}
        title="Mine Transactions"
        color="#841584"
        accessibilityLabel="Mine transaction"
      />
  </View>)
}

