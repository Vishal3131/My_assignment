import { useState } from "react";
import { View,Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from "react-native";


const {height,width}= Dimensions.get('window')

const Login=()=>{
    const [input, setInput]= useState({ email:'', password:''})

    const handleInput=(val:string,name:string)=>{ 
        setInput({
            ...input,
            [name]:val
        }) 
    }

    const handleSubmit=()=>{
         if(input.email === '' || input.password === '') return Alert.alert('All field are required !')
            Alert.alert('Login info', input.email +'\n'+ input.password)
    }

    return(
      <>
       <View style={style.container}>
          <View style={{marginTop:'20%', marginHorizontal:40}}>

            <View style={style.headingContainer}>
              <Text style={style.heading}>Login</Text>
            </View>

             <View style={style.inputContainer}>
               <View>
                 <Text style={style.inputHead}>Email</Text>
                 <TextInput style={style.input} value={input.email} onChangeText={(value)=>handleInput(value,'email')}/>
               </View>
               <View style={{marginTop:'5%'}}>
                 <Text style={style.inputHead}>Password</Text>
                 <TextInput style={style.input} value={input.password} onChangeText={(value)=>handleInput(value,'password')}/>
               </View>
             </View>

              <View style={{flexDirection:'row',justifyContent:'center'}}>
               <TouchableOpacity  onPress={handleSubmit}>
                 <View style={[style.btnContainer]}>
                   <Text style={style.btn}>Login</Text>
                 </View>
               </TouchableOpacity>
             </View>

          </View>
          
       </View>
       </>
    )
}
export default Login;

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffffff'
    },
    headingContainer:{
        alignSelf:'center',
        marginBottom:20
    },
    heading:{
        alignSelf:'center',
        fontSize:28,
        fontWeight:'600',
        color:'black'
    },
    inputContainer:{
        marginTop:'20%'
    },
    inputHead:{
        color:'black',
        fontWeight:'bold'
    },
    input:{
        borderWidth:0.8,
        borderColor:'grey',
        borderRadius:5,
        height: height* 0.04,
        paddingHorizontal:10,
        marginTop:5,
        backgroundColor:'white',
        color:'black'
    },
    btnContainer:{ 
        backgroundColor:'#3EC7A9',
        borderRadius:5,
        marginTop:30,
        width: width * 0.4,

    },
    btn:{
        color:'black',
        fontSize: 16,
        fontWeight:'500',
        padding:10,
        alignSelf:'center'
    },
})