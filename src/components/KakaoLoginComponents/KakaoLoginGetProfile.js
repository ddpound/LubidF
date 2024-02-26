import * as KakaoLogin from "@react-native-seoul/kakao-login";

const KakaoLoginGetProfile = ()=>{
    KakaoLogin.login().then((result) => {
        console.log("Kakao Login Success", JSON.stringify(result));
        const kakaoProfile = getProfile();
        return kakaoProfile;
    }).catch((error) => {
        if (error.code === 'E_CANCELLED_OPERATION') {
            console.log("Login Cancel", error.message);
        } else {
            console.log(`Login Fail(code:${error.code})`, error.message);
        }
    });
}

const getProfile = () => {
    KakaoLogin.getProfile().then((result) => {
        console.log("GetProfile Success", JSON.stringify(result));
        return result;
    }).catch((error) => {
        console.log(`GetProfile Fail(code:${error.code})`, error.message);
    });
};

export default KakaoLoginGetProfile;