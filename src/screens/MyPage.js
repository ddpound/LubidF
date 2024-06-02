import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuth} from '../authContext/AuthContext';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const logout = logOut => {
  console.log('logout');
  logOut();
};

const getLoginData = async () => {
  let jwtValue = await AsyncStorage.getItem('LubidJwt');
  // 로그인되어있는 유저의 개인정보를 가져와야함
  // 단 바로가져오지말아야하 하지만 일단 바로 띄어주기
  console.log('try get user info');
  return await axios
    .get('http://116.32.208.215:7777/lubid-user/user/find-user/1', {
      withCredentials: true,
      headers: {
        AUTHORIZATION: 'Bearer ' + jwtValue,
      },
    })
    .then(res => {
      console.log('success data');
      return res.data;
    })
    .catch(error => {
      console.log(error);
    });
};

const MyPage = () => {
  const [userData, setUserData] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    getLoginData().then(res => {
      setUserData(res);
    });
  }, []);

  const {logOut} = useAuth();

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>내 정보 보기</Text>
      </View>
      <View style={styles.mainBody}>
        <Text style={styles.titleText}> 이름 : {userData?.userName} </Text>
        <Text style={styles.titleText}> 이메일 : {userData?.email} </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('SampleChatScreen');
        }}>
        <Text>샘플페이지(채팅)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          logout(logOut);
        }}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'gray',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '80%',
  },
  headerView: {
    height: 40,
    backgroundColor: 'white',
  },
  headerViewText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
  },
  titleText: {
    color: 'black',
  },
  mainBody: {
    margin: 5,
  },
});
