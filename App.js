import React from 'react';
import { 
  SafeAreaView,
  View,
  ImageBackground, 
  Image,
  TouchableOpacity,
  StyleSheet, 
  Text, 
  Alert
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/mymdt-login.png')} style={styles.backgrounImage}/>
      <View style={styles.buttonContainer}>
        <Text style={styles.baseText}>
          <TouchableOpacity style={styles.loginButton} onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.loginButtonText}>Continue with Phone Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.loginButtonText}>Continue with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.localeButton} onPress={() => Alert.alert('Simple Button pressed')}>
            <Image 
              style={{ width: 16, height: 16, marginRight: 8 }} 
              source={require('./assets/translation.png')}
            />
            <Text style={styles.languageButtonText}>LANGUAGE</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgrounImage: {
    height: '70%'
  },
  buttonContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 24,
    marginVertical: 40,
  },
  loginButton: {
    backgroundColor: '#4187f7',
    borderRadius: 4,
    width: '100%',
    paddingVertical: 8,
    marginBottom: 8
  },
  localeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e2e5ec',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 32
  },
  baseText: {
    fontFamily: 'Lato',
    fontWeight: 'Bold',
    textAlign: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  languageButtonText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.42)',
  }
});
