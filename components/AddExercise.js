import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { Button, TextInput, SegmentedButtons, Provider } from 'react-native-paper'
import { WorkoutContext} from './Context';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/style'

export default AddExercise = () => {
    const {setWorkouts} = useContext(WorkoutContext);
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const buttons = [
        { icon: "walk", value: 0 },
        { icon: "swim", value: 1 },
        { icon: "bike", value: 2 }
    ]
    const [selection, setSelection] = useState(buttons[0].icon);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    console.log(distance);

    function addWorkout(){
        setWorkouts( prev => [...prev, {selection, distance, duration, date}]);
        setDistance('0');
        setDuration('0');
        setDate('');
    }   

    function dateSelected(day) {
        setVisible(false)
        setDate(day)
    }

    return (
        <Provider theme={styles}>
            <View>
                <SegmentedButtons value={selection} onValueChange={setSelection} buttons={buttons} />
                <TextInput label="Distance (km)" keyboardType='number-pad' onChangeText={setDistance}></TextInput>
                <TextInput label="Duration (min)" keyboardType='number-pad' onChangeText={setDuration}></TextInput>
                <Modal visible={visible} transparent={true}>
                    <View style={styles.modal}>
                        <Calendar onDayPress={dateSelected} />
                        <Button title="Close modal" onPress={() => setVisible(false)}></Button>
                    </View>
                </Modal>
                <Button icon="calendar" onPress={() => setVisible(true)}>{date ? date.dateString : "Select date"}</Button>
                <Button onPress={addWorkout}>Add workout</Button>
            </View>
        </Provider>
    )
}