import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const HomeSectionCircle = () => {
    const [productList, setProductList] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
    
    return (
        <View>
            <View>
                <FlatList 
                    horizontal={true}
                    data={productList}
                    style = {styles.circleFlatList}
                    renderItem={(res)=>{
                        return (
                            <View style={res.index == 0 ? styles.circleFlatListFirstChild : styles.circleFlatListChild}>
                                <View key={res.index} style={styles.circleSample1}>
                                    <Text> </Text>
                                </View>
                            </View>
                        );
                    }}
                    >
                </FlatList>
            </View>
            <View>
                <FlatList 
                    horizontal={true}
                    data={productList}
                    style = {styles.circleFlatList}
                    renderItem={(res)=>{
                        return (
                            <View style={res.index == 0 ? styles.circleFlatListFirstChild : styles.circleFlatListChild}>
                                <View key={res.index} style={styles.circleSample2}>
                                    <Text> </Text>
                                </View>
                            </View>
                        );
                    }}
                    >
                </FlatList>
            </View>
        </View>
    )
}

export default HomeSectionCircle;

const styles = StyleSheet.create({
    circleContainer : {
        flexDirection : 'row',
    },
    circleFlatList:{
        width: '100%',
    },
    circleFlatListFirstChild:{
        marginLeft : 20,
        marginTop : 20,
        marginBottom : 10,
        marginRight : 30,
    },
    circleFlatListChild:{
        marginLeft : 30,
        marginTop : 20,
        marginBottom : 10,
        marginRight : 30,
    },
    circleSample1 : {
        backgroundColor : '#87CEEB',
        width : '1500%',
        height: 50,
        borderRadius : 50,
        color: 'black',
    },
    circleSample2 : {
        backgroundColor : 'gray',
        width : '1500%',
        height: 50,
        borderRadius : 50,
        color: 'black',
    }
})