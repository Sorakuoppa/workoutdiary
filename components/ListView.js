import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Icon, Text, Provider } from 'react-native-paper';
import styles from '../styles/style'

export default List = () => {
    return (
        <Provider theme={styles}>
        <View>
            <Card title="card" mode="outlined">
                <Card.Content>
                    <Icon source="walk" size={20}></Icon>
                    <Text variant="headlineMedium">0 km</Text>
                </Card.Content>
                <Card.Content>
                    <Icon source="swim" size={20}></Icon>
                    <Text variant="headlineMedium">0 km</Text>
                </Card.Content>
                <Card.Content>
                    <Icon source="bike" size={20}></Icon>
                    <Text variant="headlineMedium">0 km</Text>
                </Card.Content>
            </Card>
        </View>
        </Provider>
    )
}