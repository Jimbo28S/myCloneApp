import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBanner}>
        <Text style={{color: "#D8D8D8", textAlign: 'center'}}>OOTD_EVERDAY</Text>
        <Text style={{fontWeight: "bold", textAlign: 'center'}}>Posts</Text>
      </View>
      

      <View style={styles.postingAccount}>
        <Image
          source={require('./src/images/pudgy.jpg')}
          style={{ 'width': 30, 'height': 30 }}/>

        <View style={styles.postingName}>
          <Text style={{fontWeight: "bold"}}>ootd_everyday</Text>
          <Text>via frenchie_fry39</Text>
        </View>
        
      </View>
      
      
      <Image
        source={require('./src/images/pudgy.jpg')}
        style={{ 'width': 400, 'height': 400, alignSelf: 'center' }}/>
      

      <View style={styles.likeButtons}>
        <View style={styles.threeButtons}>
          <Image 
            source={require('./src/images/like.png')}
            style={{'width': 20, 'height': 20}}/>

          <Image 
            source={require('./src/images/comment.png')}
            style={{'width': 20, 'height': 20}}/>

          <Image 
            source={require('./src/images/send.png')}
            style={{'width': 20, 'height': 20}}/>
        </View>
        

        <Image 
          source={require('./src/images/save.png')}
          style={{'width': 20, 'height': 20, 'display': 'flex', 'alignSelf': 'flex-end'}}/>
      </View>
      

      <View style={styles.otherLikes}>
        <Text>Liked by......</Text>
        <Text style={{fontWeight: 'bold'}}>paisley.print.48 </Text>
        <Text>and </Text>
        <Text style={{fontWeight: 'bold'}}>7 others</Text>
      </View>
      

      <View style={styles.caption}>
        <Text style={{fontWeight: "bold"}}>frenchie_fry39 </Text>
        <Text>Fresh shot on a sunny day!</Text>
      </View>
      
      
      <Text style={{color: "#D8D8D8"}}>View all 12 comments</Text>
      

      <View style={styles.comment1}>
        <Text style={{fontWeight: "bold"}}>lil_wyatt838 </Text> 
        <Text>Awesome tones</Text>
      </View>
      
      
      <View style={styles.comment2}>
        <Text style={{fontWeight: "bold"}}>pia.in.a.pod </Text> 
        <Text>Gorg. Love it!</Text>
      </View>
      
      
      <Text style={{color: "#D8D8D8", padding: 3}}>1 day ago</Text>
      

      <View style={styles.navButtons}>
      <Image 
            source={require('./src/images/home.png')}
            style={{'width': 20, 'height': 20}}/>
        <Image 
            source={require('./src/images/search.png')}
            style={{'width': 20, 'height': 20}}/>
        <Image 
            source={require('./src/images/reels.jpg')}
            style={{'width': 20, 'height': 20}}/>
        <Image 
            source={require('./src/images/shop.png')}
            style={{'width': 20, 'height': 20}}/>
        <Image 
            source={require('./src/images/pudgy.jpg')}
            style={{'width': 30, 'height': 30}}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10
  },

  topBanner: {
    display: 'flex',
    flex: 1,
    paddingTop: 20
  },

  postingAccount: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#D8D8D8'
  },

  postingName: {
    paddingLeft: 10
  },

  navButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: '#D8D8D8',
    borderTopWidth: 2
  },

  likeButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: 500,
    padding: 2
  },

  saveButton: {
    display: 'flex',
  },

  threeButtons: {
    display: 'flex',
    width: 360,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  otherLikes: {
    display: 'flex',
    flexDirection: 'row',
    padding: 2
  },

  caption: {
    display: 'flex',
    flexDirection: 'row',
    padding: 2
  },

  comment1: {
    display: 'flex',
    flexDirection: 'row',
    padding: 2
  },

  comment2: {
    display: 'flex',
    flexDirection: 'row',
    padding: 2
  }
});
