import axios from 'axios';

const JoinComponent = async (nickname,email)=> {
    const joinUri = 'http://192.168.219.106:7777/lubid-user/auth/user/join';

    console.log('try backend join');
    return await axios.post(joinUri,{
        "userName" : nickname,
        "email" : nickname+"@kakao.com"
    },{
        withCredentials: true,
      })
    .then(function (response) {
        return true;
    })
    .catch(function (error) {
        console.log(error.message); // 에러 메시지 출력
        if (error.response) {
            console.log(error.response.data); // 응답 데이터 출력
            console.log(error.response.status); // 응답 상태 코드 출력
            console.log(error.response.headers); // 응답 헤더 출력
        }
        
        return false;
    });

    return '';
}

export default JoinComponent;