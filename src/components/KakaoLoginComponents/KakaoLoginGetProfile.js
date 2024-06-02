import * as KakaoLogin from '@react-native-seoul/kakao-login';

const KakaoLoginGetProfile = async () => {
  await KakaoLogin.login()
    .then(result => {
      console.log('Kakao Login Success', JSON.stringify(result));
      return getProfile();
    })
    .catch(error => {
      if (error.code === 'E_CANCELLED_OPERATION') {
        console.log('Login Cancel', error.message);
      } else {
        console.log(`Login Fail(code:${error.code})`, error.message);
      }
    });
};

export const getKakaoProfile = async () => {
  return await KakaoLogin.getProfile()
    .then(result => {
      console.log('GetProfile Success', result);
      return result;
    })
    .catch(error => {
      console.log(`GetProfile Fail(code:${error.code})`, error.message);
    });
};

export default KakaoLoginGetProfile;
