import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useState, useEffect } from 'react';

export default function App({ navigation }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = () => {
    const checkAccount = data.find(item => item.name === name && item.pass === pass);
    if (checkAccount) {
      navigation.navigate('Home', { userData: checkAccount });
    } else {
      Alert.alert('Kiểm tra lại tài khoản và mật khẩu!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {/* Có thể thêm logo tại đây nếu cần */}
      </View>
      <View style={styles.viewInput}>
        <View style={styles.input}>
          <Icon name='user' size={30} color='white' />
          <TextInput
            style={styles.textInput}
            placeholder='user name'
            placeholderTextColor='white'
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.input}>
          <Icon name='lock' size={30} color='white' />
          <TextInput
            style={styles.textInput}
            placeholder='password'
            placeholderTextColor='white'
            value={pass}
            onChangeText={setPass}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.hr} />

        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register</Text>
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
  textInput: {
    marginLeft: 10,
    flex: 1,
    paddingHorizontal: 10,
    color: 'white',
  },
  loginButton: {
    paddingVertical: 15,
    backgroundColor: '#005f73', // Màu sắc nổi bật hơn
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 25, // Bo góc tròn hơn
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Tạo hiệu ứng đổ bóng cho Android
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#94d2bd', // Màu nổi bật
    alignItems: 'center',
    borderRadius: 20, // Bo góc tròn hơn
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Đổ bóng cho Android
  },
  registerText: {
    fontSize: 16,
    color: '#005f73', // Màu chữ tương phản
  },
});

