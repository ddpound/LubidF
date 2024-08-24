import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const LiveRegisterScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainText}>라이브 등록</Text>
      </View>
    </SafeAreaView>
  );
};

export default LiveRegisterScreen;

const styles = StyleSheet.create({
  mainText: {
    color: 'black',
  },
});
