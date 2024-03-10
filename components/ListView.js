import { useState, useContext } from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Card, Icon, Text, Provider } from 'react-native-paper';
import { WorkoutContext } from './Context';
import styles from '../styles/style'

export default List = () => {

    const { workouts } = useContext(WorkoutContext);

    return (
        <Provider theme={styles}>
            <View style={styles.cardView}>
                <Card style={styles.card} title="card">
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
            <Card >
                <Card.Content style={styles.listItem}>
                    <Icon source={workout.selection} size={20}></Icon>
                    <Text variant="headlineSmall">{workout.date.dateString}</Text>
                    <Text variant="headlineSmall">Distance: {workout.distance} km</Text>
                    <Text variant="headlineSmall">Duration: {workout.duration} min</Text>
                </Card.Content>
            </Card>
        </View>
    );
}
