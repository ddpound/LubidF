import { StyleSheet, Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonViewBox from "../../components/Common/CommonViewBox";

const AuctionScheduleSection = ()=>{
    return (
        <SafeAreaView>
            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitleText}>경매 일정</Text>
            </View>
            <View style={styles.viewBoxList}>
                <View style={styles.oneView}>
                    <Text style={styles.oneViewText}>DAY/MONTH로 보기</Text>
                </View>
            </View>
            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitleText}>곧 진행될 라이브</Text>
            </View>
            <View style={styles.viewBoxList}>
                <CommonViewBox/>
                <CommonViewBox/>
            </View>
            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitleText}>내가 찜해둔 일정</Text>
            </View>
            <View style={styles.viewBoxList}>
                <CommonViewBox/>
                <CommonViewBox/>
            </View>
            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitleText}>찜이 많은 UPCOMMINT 일정</Text>
            </View>
            <View style={styles.viewBoxList}>
                <CommonViewBox/>
                <CommonViewBox/>
            </View>
        </SafeAreaView>
    )
}

export default AuctionScheduleSection;

const styles = StyleSheet.create({
    sectionTitleView : {
        marginTop : 10,
        marginBottom : 5,
        marginLeft : 15,
        flexDirection: 'row',
    },
    sectionTitleCenter : {
        textAlign : 'center',
    },
    sectionTitleText : {
        color : "black",
        fontSize : 20,
    },
    // 오른쪽 드래그 박스리스트
    viewBoxList: {
        flexDirection : 'row'
    },
    topMenuButton: {
        width : '20%',
    },
    topMenuButtonPoint: {
        width : '20%',
        backgroundColor: 'gray',
    },
    oneView : {
        width : '90%',
        height: 150,
        margin: 15,
        color: 'black',
        backgroundColor : 'gray',
    },
    oneViewText : {
        textAlign : 'center',
        margin : 60,
        fontSize : 20,
        color : 'black',
    }
});