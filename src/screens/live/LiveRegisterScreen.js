import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const LiveRegisterScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.mainText}>라이브 작성 스크린입니다.</Text>
    </SafeAreaView>
  );
};

export default LiveRegisterScreen;

const styles = StyleSheet.create({
  mainText: {
    color: 'black',
  },
});
