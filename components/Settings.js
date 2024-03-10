import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton, Provider } from 'react-native-paper';
import styles from '../styles/style';

const distances = ["kilometres", "miles"];

export default function App() {

  const [distance, setDistance] = useState(distances[0])

  return (
    <Provider theme={styles}>
      <View style={styles.cardView}>
        <RadioButton.Group onValueChange={setDistance} value={distance}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Kilometres</Text>
            <RadioButton value={"kilometres"} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Miles</Text>
            <RadioButton value={"miles"} />
          </View>
        </RadioButton.Group>
      </View>
    </Provider>
  );
}