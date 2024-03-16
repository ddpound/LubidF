import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

const SellScreen = ()=>{
   
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.headerView}>
                    <TouchableOpacity>
                        <Text style={styles.headerViewBackButton}>{"<"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerViewText}>판매하기</Text>
                </View>
                <View style={styles.sellerTopView}>
                    <View style={styles.topViewChildView}>
                        <Text style={styles.topViewChildViewText}>
                            제품선택
                        </Text>
                    </View>
                    <View style={styles.topViewChildView}>
                        <Text style={styles.topViewChildViewText}>
                            사용정보
                        </Text>
                    </View>
                    <View style={styles.topViewChildView}>
                        <Text style={styles.topViewChildViewText}>
                            가격측정
                        </Text>
                    </View>
                </View>
                <View>
                    <Collapse style={[styles.bottomBorderBlack]}>
                        <CollapseHeader>
                            <Text style={styles.sellerCommonHeaderText}>브랜드</Text>
                        </CollapseHeader>
                        <CollapseBody style={styles.collapseBody}>
                            <Text style={styles.textBlack}>브랜드1</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse style={[styles.bottomBorderBlack]}>
                        <CollapseHeader>
                            <Text style={styles.sellerCommonHeaderText}>모델</Text>
                        </CollapseHeader>
                        <CollapseBody style={styles.collapseBody}>
                            <Text style={styles.textBlack}>모델1</Text>
                            <Text style={styles.textBlack}>모델2</Text>
                            <Text style={styles.textBlack}>모델3</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse style={[styles.bottomBorderBlack]}>
                        <CollapseHeader>
                            <Text style={styles.sellerCommonHeaderText}>패턴</Text>
                        </CollapseHeader>
                        <CollapseBody style={styles.collapseBody}>
                            <Text style={styles.textBlack}>패턴1</Text>
                            <Text style={styles.textBlack}>패턴2</Text>
                            <Text style={styles.textBlack}>패턴3</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse style={[styles.bottomBorderBlack]}>
                        <CollapseHeader>
                            <Text style={styles.sellerCommonHeaderText}>서비스</Text>
                        </CollapseHeader>
                        <CollapseBody style={styles.collapseBody}>
                            <Text style={styles.textBlack}>서비스1</Text>
                            <Text style={styles.textBlack}>서비스2</Text>
                            <Text style={styles.textBlack}>서비스3</Text>
                        </CollapseBody>
                    </Collapse>
                    <Collapse style={[styles.bottomBorderBlack]}>
                        <CollapseHeader>
                            <Text style={styles.sellerCommonHeaderText}>색상</Text>
                        </CollapseHeader>
                        <CollapseBody style={styles.collapseBody}>
                            <Text style={styles.textBlack}>색상1</Text>
                            <Text style={styles.textBlack}>색상2</Text>
                            <Text style={styles.textBlack}>색상3</Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>다음</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellScreen;

const styles = StyleSheet.create({
    sellerCommonHeaderText:{
        color:'black',
        fontSize: 20,
        margin : 20,
    },
    headerView : {
        width : '100%',
        marginTop: 10,
        flexDirection : 'row',
    },
    headerViewText:{
        color:'black',
        fontSize: 25,
        textAlign: 'center',
        marginLeft: '33%',
    },
    headerViewBackButton:{
        color : 'black',
        fontSize: 25,
        marginLeft: 10,
    },
    textBlack : {
        color : "black",
    },
    // 제품선택, 사용정보, 가격 측정 view
    sellerTopView : {
        height: 100,
        flexDirection: 'row',
        backgroundColor : 'gray',
    },
    topViewChildView :{
        width : '22%',
        height: 80,
        backgroundColor : 'white',
        borderRadius : 100,
        marginTop : 10,
        marginRight : 22,
        marginLeft: 18,
    },
    topViewChildViewText :{
        color : 'black',
        textAlign : 'center',
        textAlignVertical: 'center',
        height : '100%',
    },
    bottomBorderBlack : {
        borderBottomColor : 'black',
        borderBottomWidth : 1,
    },
    collapseBody : {
        margin : 20,
    },
    // 마지막 다음 버튼
    nextButton : {
        bottom : 0,
        marginTop : '50%',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor : 'gray',
        height : 40,
        borderRadius : 10,
    },
    nextButtonText :{
        color : 'black',
        textAlign:'center',
        textAlignVertical : 'center',
        height : '100%',
    }
})