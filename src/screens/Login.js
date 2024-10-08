import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import kakaoLogoPng from '../../assets/loginImage/kakaoLogo.png';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../authContext/AuthContext';
import {getKakaoProfile} from '../components/KakaoLoginComponents/KakaoLoginGetProfile';

import AsyncStorage from '@react-native-async-storage/async-storage';
import JoinComponent from '../components/Join/JoinComponent';
import LoginComponent from '../components/Login/LoginComponent';
import normalLoginTest from '../components/NormalLogin/normalLoginTest';
import NormalLogin from '../components/NormalLogin/NormalLogin';

const kakaoLoginClick = async (navigation, logIn) => {
  // JWT 토큰 값을 가지고있는지 체크
  let jwtValue = await AsyncStorage.getItem('LubidJwt');
  let profile;
  console.log('jwt value check : ', jwtValue);

  // jwt 토큰값이 있을 때 로그인 체크
  if (jwtValue != null) {
    console.log('login try : ', jwtValue);
    profile = await getKakaoProfile(); // 카카오 프로파일 가져오기
    console.log(profile);
    jwtValue = await LoginComponent(profile.nickname);
  }

  // jwt 토큰이 없으면 바로 회원가입진행 후 로그인 바로 진행
  if (jwtValue == null) {
    console.log('empty jwt value, try login or join');
    let userData = await getKakaoProfile();
    await JoinComponent(userData.nickname);
    jwtValue = await LoginComponent(userData.nickname);
    await AsyncStorage.setItem('LubidJwt', jwtValue);
  }

  if (jwtValue == null) {
    console.log('value null, login fail', jwtValue);
    return null;
  }

  console.log('success get JWT try login');
  console.log(await AsyncStorage.getItem('LubidJwt'));

  await logIn();
  await navigation.navigate('Bottom');
};

const normalLogin = async ({navigation, logIn, email, pwd}) => {
  console.log('normal login try....');
  console.log(email);
  console.log(pwd);

  // 임시 클라이언트 전용 테스트 유저
  if (email == 'clientTestUser') {
    // 로그인 성공시 로그인 처리와 함께 메인페이지 이동
    await logIn();
    await navigation.navigate('Bottom');
  }

  // 일반 로그인중 테스트 계정을 감지하면 test login 시도
  // test 를 정적파일로 관리할지 말지는 수정되면 반드시 변경바람
  if (email == 'testuser') {
    // try test login
    // set email check
    let jwtValue = await AsyncStorage.getItem('LubidJwt');

    if (!jwtValue) {
      jwtValue = await normalLoginTest(email, pwd);
    } else {
      // jwt token get fail
      console.log('jwt token get fail');
    }

    if (!jwtValue) {
      console.log('fail login');
      return null;
    }

    // 로그인 성공시 로그인 처리와 함께 메인페이지 이동
    await logIn();
    await navigation.navigate('Bottom');
  } else {
    await NormalLogin();
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigation = useNavigation();
  const {logIn} = useAuth();

  // react native config 용 코드, 에러잡히면 사용 예정
  // const checkData = Config.CHECK_DATA;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.lubidMainText}>LUBID</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="이메일"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="비밀번호"
          value={pwd}
          onChangeText={text => setPwd(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            normalLogin({
              email: email,
              pwd: pwd,
              logIn: logIn,
              navigation: navigation,
            });
          }}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, styles.kakaoButtonStyle]}
          onPress={() => {
            kakaoLoginClick(navigation, logIn);
          }}>
          <Image style={styles.kakaoLogoPng} source={kakaoLogoPng} />
          <Text style={[styles.buttonText, styles.kakaoButtonText]}>
            카카오 로그인
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lubidMainText: {
    color: 'black',
  },

  inputContainer: {
    width: '80%',
    marginTop: 15,
  },

  inputStyle: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    color: 'black',
  },

  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonStyle: {
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  kakaoButtonStyle: {
    backgroundColor: '#FEE500',
    flexDirection: 'row',
  },

  buttonOutLine: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },

  kakaoButtonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 20,
  },

  buttonOutLineText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },

  kakaoLogoPng: {
    width: '20%',
    height: '150%',
  },
});
