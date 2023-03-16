import {Dimensions, FlatList, StyleSheet, View, Text} from "react-native";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../components/config";
import {useState} from "react";


const SeeSquat = () => {

    const [squats, setsSquats] = useState([])

    function read() {
        getDocs(collection(db, "squat")).then(docSnap => {
            docSnap.forEach((doc) => {
                squats.push({...doc.data(), id: doc.id})
            })
            console.log("document data:", squats);
        });
    }


    return (
        <View style={styles.container}>
           <Text style={styles.title}>Hej</Text>
        </View>
    )
}


export default SeeSquat;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40
    },
    textBoxes: {
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
    },
    item: {
        padding: 10,
        fontSize: 11,
        height: 44,
        backgroundColor: "#68c",
        borderColor: "#944"
    }
})