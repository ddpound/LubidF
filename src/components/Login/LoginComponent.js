import AsyncStorage from "@react-native-async-storage/async-storage";
const LoginComponent = async ({nickname,email})=> {
    const lginUri  = "http://192.168.219.107:7777/auth/user/login";
    const jwt = null;
    
    axios.post(lginUri,{
        "userName" : nickname,
        "email" : nickname+"@kakao.com"
    },{
        withCredentials: true,
      })
    .then(function (response) {
        jwt = response;
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
}

export default LoginComponent;