import {useState} from "react";
import {Button, Dimensions, StyleSheet, TextInput, View, Text} from "react-native";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from '../components/config';
import {date} from "../constants/constants";


const AddBench = () => {

    //const [bench, setBench] = useState('');

    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    function create() {
        addDoc(collection(db, "bench"), {
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

    function read() {
        getDocs(collection(db, "bench")).then(docSnap => {
            let bench = [];
            docSnap.forEach((doc) => {
                bench.push({...doc.data(), id: doc.id})
            })
            console.log("document data:", bench);
        });
    }

    const benchData = read();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add an entry for benchpress!</Text>
            <Text style={styles.title1}>Please input how much weight you lifted</Text>
            <TextInput value={weight} onChangeText={(weight) => {
                setWeight(weight)
            }} placeholder={"weight"} style={styles.textBoxes}></TextInput>
            <Text style={styles.title1}>Please input the number of sets you did</Text>
            <TextInput value={sets} onChangeText={(sets) => {
                setSets(sets)
            }} placeholder={"sets"} style={styles.textBoxes}></TextInput>
            <Text style={styles.title1}>Please input the number of reps in each set</Text>
            <TextInput value={reps} onChangeText={(reps) => {
                setReps(reps)
            }} placeholder={"reps"} style={styles.textBoxes}></TextInput>
            <Button onPress={create} title={"submit data"}></Button>
        </View>
    )
}

export default AddBench;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40
    },
    textBoxes:{
        width: Dimensions.get("window").width - 100,
        height: "5%",
        marginVertical: 15,
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