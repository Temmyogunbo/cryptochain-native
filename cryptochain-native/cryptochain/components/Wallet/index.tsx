import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";
import { Blocks } from '../Blocks';

export const Wallet = () => {
  const [walletInfo, setWalletInfo] = useState<{address: string; balance: number}>({address: '', balance: 0});

  useEffect(() => {
     async function getWalletInfoFromApiAsync() {
      try {
        const response = await fetch(`${Config.API_URL}/wallet-info`);
;
        const json = await response.json();
        // console.log({ json})
        setWalletInfo(json);
      } catch (error) {
        console.error(error);
      }
    };

    getWalletInfoFromApiAsync();
  }, []);
  return (
    <View>
            <Text>Wallet Info</Text>
      <Text>Address: {`${walletInfo.address.substring(0, 20)}...`}</Text>
      <Text>Balance: {walletInfo.balance}</Text>
    </View>
  );
};
