import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useState} from "react";
import AddBench from "./Screens/AddBench";
import AddSquat from "./Screens/AddSquat";
import AddDeadlift from "./Screens/AddDeadlift";
import Homescreen from "./Screens/Homescreen";
import {ScreenType} from "./constants/constants";
import BackButton from "./components/BackButton";
import SeeSquat from "./Screens/SeeSquat";


export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  let content;
  if(screen=== ScreenType.addBench){
    content = <AddBench/>
  }else if(screen === ScreenType.addSquat){
    content = <AddSquat/>
  }else if(screen === ScreenType.addDeadlift) {
    content = <AddDeadlift/>
  }else if(screen === ScreenType.seeSquat) {
    content = <SeeSquat/>
  } else if(screen === ScreenType.home){
    content = <Homescreen onExit={ (data) => {
      setScreen(data);
    }}/>
  }

  return (
    <View style={styles.container}>
      <BackButton onButtonClick={(data)=> setScreen(data)}/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes:{
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10
  }
});
