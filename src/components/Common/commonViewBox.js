import { StyleSheet, View } from "react-native";

/**
 * 공통으로 사용하는 컴포넌트 뷰 박스
 * 인자를 받아 자유롭게 사용하자
 */
const CommonViewBox = () => {
    return (
        <View style={styles.viewContainer}>
            
        </View>
    );
};

export default CommonViewBox;

const styles = StyleSheet.create({
    viewContainer : {
        width : 150,
        height: 150,
        margin: 15,
        color: 'black',
        backgroundColor : 'gray',
    },
});