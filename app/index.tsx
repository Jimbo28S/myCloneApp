import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
 
export default function App() {
  return (
<View style={styles.container}>
 
      <View style={styles.topBanner}>
<Text style={styles.bannerText}>OOTD_EVERYDAY</Text>
<Text style={styles.bannerTitle}>Posts</Text>
</View>
 
      <View style={styles.postingAccount}>
<Image source={require('./src/images/pudgy.jpg')} style={styles.profilePic} />
<View style={styles.postingName}>
<Text style={styles.boldText}>ootd_everyday</Text>
<Text>via frenchie_fry39</Text>
</View>
</View>
 
      <Image source={require('./src/images/pudgy.jpg')} style={styles.postImage} />
 
      <View style={styles.likeButtons}>
<View style={styles.threeButtons}>
<Image source={require('./src/images/like.png')} style={styles.icon} />
<Image source={require('./src/images/comment.png')} style={styles.icon} />
<Image source={require('./src/images/send.png')} style={styles.icon} />
</View>
<Image source={require('./src/images/save.png')} style={styles.icon} />
</View>
 
      <View style={styles.likesRow}>
<Text>Liked by </Text>
<Text style={styles.boldText}>paisley.print.48</Text>
<Text> and </Text>
<Text style={styles.boldText}>7 others</Text>
</View>
 
      <View style={styles.caption}>
<Text style={styles.boldText}>frenchie_fry39 </Text>
<Text>Fresh shot on a sunny day!</Text>
</View>
 
      <Text style={styles.comments}>View all 12 comments</Text>
<View style={styles.comment}>
<Text style={styles.boldText}>lil_wyatt838 </Text>
<Text>Awesome tones</Text>
</View>
<View style={styles.comment}>
<Text style={styles.boldText}>pia.in.a.pod </Text>
<Text>Gorg. Love it!</Text>
</View>
      <Text style={styles.timestamp}>1 day ago</Text>

<View style={styles.alertButton}>
  <TouchableOpacity onPress={() => {alert("Alert button pressed");}}>
    <Text>Alert</Text>
  </TouchableOpacity>
</View>
 
      <View style={styles.navButtons}>
<Image source={require('./src/images/home.png')} style={styles.navIcon} />
<Image source={require('./src/images/search.png')} style={styles.navIcon} />
<Image source={require('./src/images/reels.jpg')} style={styles.navIcon} />
<Image source={require('./src/images/shop.png')} style={styles.navIcon} />
<Image source={require('./src/images/pudgy.jpg')} style={styles.profilePic} />
</View>
 
      <StatusBar style="auto" />
</View>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  topBanner: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
 
  bannerText: {
    color: "#B0B0B0",
    fontSize: 14,
    fontWeight: "500",
  },
 
  bannerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: -5,
  },
 
  postingAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
 
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
 
  postingName: {
    marginLeft: 10,
  },
 
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
 
  likeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
 
  threeButtons: {
    flexDirection: 'row',
    gap: 15,
  },
 
  icon: {
    width: 25,
    height: 25,
  },
 
  likesRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 3,
  },
 
  boldText: {
    fontWeight: 'bold',
  },
 
  caption: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
 
  comments: {
    paddingHorizontal: 15,
    color: '#888',
    fontSize: 13,
    marginBottom: 5,
  },
 
  comment: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 3,
  },
 
  timestamp: {
    color: "#888",
    fontSize: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
 
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },
 
  navIcon: {
    width: 32,
    height: 32,
  },

  alertButton: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center'
  }
});