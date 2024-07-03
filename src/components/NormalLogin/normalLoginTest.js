import axios from 'axios';

/**
 * normal login test
 *
 */
const normalLoginTest = async (email, pwd) => {
  console.log('try test login : 테스트 로그인 감지');
  const testLoginUrl =
    'http://116.32.208.215:7777/lubid-user/auth/test/user/lubid';

  return await axios
    .post(
      testLoginUrl,
      {
        userName: email,
        password: pwd,
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
      console.log(response.data);
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

export default normalLoginTest;
