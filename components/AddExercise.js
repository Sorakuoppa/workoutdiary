import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { Button, TextInput, SegmentedButtons, Provider } from 'react-native-paper'
import { Calendar } from 'react-native-calendars';
import styles from '../styles/style'

export default AddExercise = () => {
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const buttons = [
        { icon: "walk", value: 0 },
        { icon: "swim", value: 1 },
        { icon: "bike", value: 2 }
    ]
    const [selection, setSelection] = useState(buttons[0].value);

    function dateSelected(day) {
        setVisible(false)
        setDate(day)
    }

    return (
        <Provider theme={styles}>
            <View>
                <SegmentedButtons value={selection} onValueChange={setSelection} buttons={buttons} />
                <TextInput label="Distance (km)" keyboardType='number-pad'></TextInput>
                <TextInput label="Duration" keyboardType='number-pad'></TextInput>
                <Modal visible={visible} transparent={true}>
                    <View style={styles.modal}>
                        <Calendar onDayPress={dateSelected} />
                        <Button title="Close modal" onPress={() => setVisible(false)}></Button>
                    </View>
                </Modal>
                <Button icon="calendar" onPress={() => setVisible(true)}>{date ? date.dateString : "Select date"}</Button>
                <Button>Add workout</Button>
            </View>
        </Provider>
    )
}