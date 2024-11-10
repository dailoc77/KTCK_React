// register.js
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useState} from 'react';

export default function App({navigation}) {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          name: user,
          pass: pass,
          avatar: 'https://imgur.com/2SDsjlL.png'
        });
        Alert.alert("Đăng ký thành công!", response.data.message);
        navigation.goBack();
      } catch (error) {
        if (error.response) {
          Alert.alert("Lỗi", error.response.data.error || "Đăng ký thất bại");
        } else {
          Alert.alert("Lỗi", "Có lỗi xảy ra. Vui lòng thử lại sau.");
        }
      }
    };    
    
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
        </View>
        <View style={styles.viewInput}>
            <View style={styles.input}>
                <Icon name='user' size={30} color={'white'}/>
                <TextInput style={{marginLeft: 10, flex: 1, paddingHorizontal: 10, color: 'white'}} 
                placeholder='user name' placeholderTextColor={'white'} value={user} onChangeText={setUser}/>
            </View>
            <View style={styles.input}>
                <Icon name='lock' size={30} color={'white'}/>
                <TextInput style={{marginLeft: 10, flex: 1, paddingHorizontal: 10, color: 'white'}} 
                placeholder='password' placeholderTextColor={'white'} value={pass} onChangeText={setPass}/>
            </View>

            <TouchableOpacity style={styles.Touch} onPress={handleRegister}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Register</Text>
            </TouchableOpacity>

            <View style={styles.hr}/>

            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> navigation.goBack()}>
                <Text style={{fontSize: 13, color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#669999',
  },
  logo: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  viewInput: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  input: {
    borderColor: 'white',
    borderWidth: 0.3,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  Touch: {
    paddingVertical: 15,
    backgroundColor: '#005f73', // Màu nền đậm hơn để nổi bật
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 25, // Bo góc tròn hơn
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Hiệu ứng đổ bóng cho Android
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  loginButton: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#94d2bd', // Màu sắc khác cho nút Login
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  loginText: {
    fontSize: 13,
    color: '#005f73',
  },
});

