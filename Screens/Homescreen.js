import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ScreenType} from "../constants/constants";


const Homescreen = ( {onExit} ) => {
    return (
        <View>
        <Text style={styles.title}>
            Welcome to the Strong but forgetful app!
        </Text>
        <View style={styles.container}>
            <Pressable onPress={() => onExit(ScreenType.addBench)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>Add new bench</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => onExit(ScreenType.addSquat)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>Add new squat</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => onExit(ScreenType.addDeadlift)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>Add new deadlift</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => onExit(ScreenType.seeSquat)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>See squats</Text>
                </View>
            </Pressable>
        </View>
    </View>
    )
}


export default Homescreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 100,
        marginBottom: 100
    },
    itemButton: {
        width: Dimensions.get("window").width - 50,
        height: "30%",
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
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
});