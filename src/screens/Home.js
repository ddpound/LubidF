import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { JwtSotrageCheck, JwtStorageSet } from "../components/AsyncData/JwtAsyncData";
const Home = ()=>{
    JwtSotrageCheck('LubidJwt');
    return (
        <SafeAreaView>
            <Text>Home 화면입니다.</Text>
        </SafeAreaView>
    )
}

export default Home;