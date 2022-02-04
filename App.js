import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <>
    <SafeAreaView style={styles.container}>

    <View style={styles.navbar}>
      <View>
        <Image source={require("./assets/Icons/menu_light.png")} style={styles.nav_bar_icons}/>
      </View>
      <View>
        <Text style={styles.title}>ensom</Text>
      </View>
      <View>
        <Image source={require("./assets/Icons/sun.png")} style={styles.nav_bar_icons}/>
      </View>
    </View>

    <View style={styles.profile}>
      <View>
        <Image style={[styles.pic, Themes.light.shadows]} source={require("./assets/Profiles/mtl.jpg")}/> 
          <View>
            <Text style={styles.username}>MTL</Text>
            <Text style={styles.caption}>2 mi away</Text>
          </View>
      </View>

      <View style={styles.audio}>
        <Text style={styles.music_caption}>My hottest take</Text>
        <View style={styles.audio_pic}>
          <Image style={styles.play_button} source={require("./assets/Icons/player_light.png")}/>
          <Image style={styles.audioWave} source={require("./assets/Icons/audio_waveform_light.png")}/>
        </View>
      </View>
    </View>

    <View style={styles.bottom_bar}>
      <View>
        <Image style={styles.bottom_pics} source={require("./assets/Icons/discover_light.png")}/>
        <Text style={styles.bottom_titles}>Discover</Text>
      </View>
      <View>
        <Image style={styles.bottom_pics} source={require("./assets/Icons/heart_light.png")}/>
        <Text style={styles.bottom_titles}>Matches</Text>
      </View>
      <View>
        <Image style={styles.bottom_pics} source={require("./assets/Icons/messages_light.png")}/>
        <Text style={styles.bottom_titles}>DMs</Text>
      </View>

    </View>


    </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
  },

  navbar: {
    flexDirection: 'row',
    backgroundColor: Themes.light.bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  nav_bar_icons: {
    height: 45,
    width: 45,
  },

  title: {
    height: 40,
    margin: 30,
    fontFamily: 'Sydney-Bold', 
    fontSize: 36,
    color: Themes.light.text,
  },

  profile: {
    backgroundColor: Themes.light.bg,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },

  username: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 30,
    position: 'absolute',
    bottom: 325,
    left: 10,
  },

  pic: {
    height: 365,
    width: 350,
    borderRadius: 15,
    
  },

  caption: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 15,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  audio: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 15,
    marginTop: 20,
    shadowOpacity: .5,
    shadowOffset: { width: -1, height: 5 },
    
  },

  play_button: {
    resizeMode: 'contain',
    width: '15%',
    marginRight: 10,
    height: 50,
   },

  music_caption: {
    fontFamily: 'Sydney',
    fontSize: 25,
    color: Themes.light.text,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  audioWave: {
    width: '75%',
    resizeMode: 'contain',
    height: 110,
    
  }, 

  audio_pic: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bottom_bar: {
    width: '100%',
    height: '15%',
    backgroundColor: Themes.light.navigation,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },

  bottom_titles: {
    fontFamily: 'Sydney',
    fontSize: 15,
    bottom: 17,
    right: 5,
    color: Themes.light.textSecondary,
  },

  bottom_pics: {
    height: 30,
    width: 30,
    bottom: 25,
  },
});
