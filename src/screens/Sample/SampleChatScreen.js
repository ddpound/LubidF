import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * 채팅 샘플을 위한 Screen
 *
 * @returns safeAreaView
 *
 */
const SampleChatScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>샘플 페이지</Text>
      </View>
      <View style={styles.mainBody}>
        <Text> 샘플</Text>
        <Text> 샘플2 </Text>
      </View>
    </SafeAreaView>
  );
};

export default SampleChatScreen;
