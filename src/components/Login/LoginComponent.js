import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginComponent = async (nickname, email) => {
  const lginUri = 'http://116.32.208.215:7777/lubid-user/auth/user/login';
  let jwt = null;

  console.log('try backend login, loginId: ', nickname);
  return await axios
    .post(
      lginUri,
      {
        userName: nickname,
        password: '1',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
        },
        withCredentials: true,
      },
    )
    .then(function (response) {
      jwt = response.data;
      return jwt != null ? jwt : null;
    })
    .catch(function (error) {
      console.log(error.message); // 에러 메시지 출력
      if (error.response) {
        console.log(error.response.data); // 응답 데이터 출력
        console.log(error.response.status); // 응답 상태 코드 출력
        console.log(error.response.headers); // 응답 헤더 출력
      }
    });
};

export default LoginComponent;
