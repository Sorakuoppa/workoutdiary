import { useState, useContext } from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Card, Icon, Text, Provider } from 'react-native-paper';
import { WorkoutContext } from './Context';
import styles from '../styles/style'

export default List = () => {

    const { workouts } = useContext(WorkoutContext);

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
            <ScrollView>
                <View>
                    <FlatList
                        data={workouts}
                        renderItem={({ item }) => <Item workout={item} />}
                    />
                </View>
            </ScrollView>
        </Provider>
    )
}

function Item({ workout }) {

    return (
        <View>
            <Card>
                <Card.Content>
                    <Icon source={(toString(workout.selection))} size={20}></Icon>
                    <Text variant="headlineSmall">Distance: {workout.distance} km</Text>
                    <Text variant="headlineSmall">Duration: {workout.duration} min</Text>
                    <Text variant="headlineSmall">{workout.date.dateString}</Text>
                </Card.Content>
            </Card>
        </View>
    );
}
