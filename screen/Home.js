import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App({ route }) {
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const user = route.params.userData;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header} />

      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
          <View style={styles.userInfo}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#669999',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 25,
  },
  nav: {
    backgroundColor: '#669999',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 15,
  },
  welcomeText: {
    color: 'white',
  },
  userName: {
    color: 'white',
  },
});
