import { useState } from "react";
import { Button, Text } from "react-native";
import { StyleSheet,View,TouchableOpacity } from "react-native";


const CounterApp=()=>{
   const [count, setCount]=useState(0)

    const Increment = () => {
         setCount(count+1)
     };

     const Decrement=()=>{
        setCount(count-1)
     }

      return(
        <View style={styles.container}>
          <View style={styles.card}>

            <Text style={{fontSize:30}}>{count}</Text>
            
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.button} onPress={Decrement}>
                  <Text style={styles.text}>-</Text>
               </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={Increment}>
                  <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      )
}

export default CounterApp;

const styles= StyleSheet.create({
 container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#ffffffff'
  },
  card:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
  },
  btnContainer:{
    flexDirection:'row',
    marginTop:'10%' ,
    gap:30
  },
    button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    },
   text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
})