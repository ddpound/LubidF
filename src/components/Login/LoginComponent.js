const JoinComponent = (resultData)=> {
    const lginUri  = "http://192.168.219.107:7777/auth/user/login";

    axios.post(lginUri,{
        "userName" : resultData.nickname,
        "email" : resultData.nickname+"@kakao.com"
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
    });
}

export default JoinComponent;