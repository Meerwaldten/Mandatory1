import {useState} from "react";
import {Button, Dimensions, StyleSheet, Text, TextInput, View} from "react-native";
import {addDoc, collection } from "firebase/firestore";
import {db} from '../components/config';
import {date} from "../constants/constants";


const AddSquat = () => {

    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    function create() {
        addDoc(collection(db, "squat"), {
            weight: weight,
            sets: sets,
            reps: reps,
            date: date
        }).then(() => {
            console.log("Data submitted");
        }).catch((error) => {
            console.log(error)
        });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add an entry for squat!</Text>
            <Text style={styles.title1} >Please input how much weight you lifted</Text>
            <TextInput value={weight} onChangeText={(weight) => {setWeight(weight)}} placeholder={"weight"} style={styles.textBoxes}></TextInput>
            <Text style={styles.title1}>Please input the number of sets you did</Text>
            <TextInput value={sets} onChangeText={(sets) => {setSets(sets)}} placeholder={"sets"} style={styles.textBoxes}></TextInput>
            <Text style={styles.title1}>Please input the number of reps in each set</Text>
            <TextInput value={reps} onChangeText={(reps) => {setReps(reps)}} placeholder={"reps"} style={styles.textBoxes}></TextInput>
            <Button onPress={create} title={"Submit"}></Button>
            <Button title={"See lifts"}></Button>
        </View>
    )
}

export default AddSquat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40,
    },
    textBoxes:{
        width: Dimensions.get("window").width - 100,
        height: "10%",
        marginVertical: 25,
        backgroundColor: "#f5f5f6",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowOffset: {width: 2, height: 5},
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    title1: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
});