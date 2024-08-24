import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {topHeaderStyle} from '@/commonStyle/layout/LayoutStyle';
import MenuHeader from '../../components/Layout/MenuHeader';
import {CommonNormalText} from '../../commonStyle/CommonTextStyle';
import {CommonInputStyle} from '../../commonStyle/CommonInputStyle';
import {CommonViewStyle} from '../../commonStyle/CommonViewStyle';

const LiveRegisterScreen = () => {
  return (
    <SafeAreaView>
      <MenuHeader title={'라이브 등록'} />
      <View style={CommonViewStyle().viewNormal}>
        <Text style={[CommonNormalText().color, CommonNormalText().labelTitle]}>
          제목
        </Text>
        <TextInput
          placeholder="제목"
          style={CommonInputStyle().inputStyleNormal}
        />
      </View>
      <View style={CommonViewStyle().viewNormal}>
        <Text style={[CommonNormalText().color, CommonNormalText().labelTitle]}>
          썸네일
        </Text>
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
