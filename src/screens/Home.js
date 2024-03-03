import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { JwtSotrageCheck, JwtStorageSet, JwtStorageData } from "../components/AsyncData/JwtAsyncData";
import { useState } from "react";
import HomeSection from "./Home/HomeSection";
import ProductSection from "./Home/ProductSection";
import AuctionScheduleSection from "./Home/AuctionScheduleSection";

const checkJwt = async () =>{
    let jwtValue = await JwtStorageData("LubidJwt");
    console.log('homePage' , jwtValue);
    return jwtValue;
}

const Home = ()=>{
    const pageState = useState();

    return (
        <>
            <SafeAreaView>
                <View style={styles.mainPageHeader}>
                    <Text style={styles.headerText}>L U B I D</Text>
                </View>
                <View style={styles.bodyView}>
                    <Text style={styles.menuText}>홈 상품 경매일정</Text>
                </View>
                <HomeSection/>
                <ProductSection/>
                <AuctionScheduleSection/>
            </SafeAreaView>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainPageHeader : {
        borderBottomColor : "black",
    },
    headerText :{
        color : 'black',
        fontSize : 20,
        margin: 15,
    },
    bodyView : {
        color : 'black',
    },
    menuText : {
        color : 'black',
        margin: 10,
        fontSize: 18,
    }
});