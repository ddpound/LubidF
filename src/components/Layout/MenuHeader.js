import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TopHeaderStyle} from '@/commonStyle/layout/LayoutStyle';

const MenuHeader = ({title}) => {
  const navigate = useNavigation();
  title = title || '페이지';
  return (
    <View style={TopHeaderStyle().mainContainer}>
      <View style={TopHeaderStyle().backButtonView}>
        <TouchableOpacity
          onPress={() => {
            navigate.goBack();
          }}>
          <Image
            style={TopHeaderStyle().backButtonIconStyle}
            source={require('@assets/commonIcons/back-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={TopHeaderStyle().textView}>
        <Text style={TopHeaderStyle().topMainText}>{title}</Text>
      </View>
    </View>
  );
};

export default MenuHeader;
