import { StyleSheet,View,Text } from "react-native";


const PostDetails=({route}:any)=>{
    const postInfo=route.params.data;

    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.nums}>
            <Text style={styles.title}>Id: {postInfo.id}</Text>
            <Text style={styles.title}>UserId: {postInfo.userId}</Text>
          </View>
          <Text style={styles.title}>{postInfo.title}</Text>
          <Text style={styles.body}>{postInfo.body}</Text>
        </View>
      </View>
    )
}
export default PostDetails;

const styles= StyleSheet.create({
   container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#ffffffff'
  },
    card: {
    marginTop:'15%',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
     borderWidth:1
  },
  nums:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color:'black'
  },
  body:{
    color:'black'
  }
})