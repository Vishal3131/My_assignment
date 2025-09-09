import {useEffect, useState} from 'react'
import { StyleSheet,View,Text,FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigation'

type PostNavigationProp = StackNavigationProp<RootStackParamList, 'Posts'>;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts=()=>{
  const navigation = useNavigation<PostNavigationProp>();
    const [data, setData]=useState<Post[]>([])
    const [error, setError] = useState("");

    useEffect(()=>{
      getPosts()
    },[])

    const getPosts=async()=>{
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log( response.data)
        setData(response.data);
      } catch (err) {
        console.log("Error: ", err);
        setError("Failed to fetch data");
      }
    }

    const handleClick=(item:Post)=>{
       console.log(item)
       navigation.navigate('PostDetails',{data:item})
    }

       const renderFooter = () => (
          <View style={styles.footer}>
            <Text style={styles.footerText}>End of List</Text>
          </View>
      );

    return(
   <View style={styles.container}>
      {error ? (
        <Text style={{alignSelf:'center'}}>{error}</Text>
       ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <TouchableOpacity onPress={()=>handleClick(item)}>
             <View style={styles.card}>
               <Text style={styles.title}>{item.title}</Text>
               <Text style={styles.body}>{item.body}</Text>
             </View>
            </TouchableOpacity>

          )}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
    )
}

export default Posts;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#ffffffff'
  },
  card: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth:1
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color:'black'
  },
  body:{
    color:'black'
  },
   footer: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
})