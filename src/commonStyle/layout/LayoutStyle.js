import {StyleSheet} from 'react-native';
/**
 * 공통 레이아웃 스타일을 다루는 js 파일
 *
 */

/**
 * 페이지의 탑 레이아웃이 될 스타일
 * @returns style
 */
export const TopHeaderStyle = () => {
  return StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      height: '20%',
    },
    textView: {
      width: '85%',
      height: '100%',
      marginTop: 5,
    },
    topMainText: {
      color: 'black',
      fontSize: 25,
      textAlign: 'center',
    },
    backButtonView: {
      width: '10%',
    },
    backButtonIconStyle: {
      width: '100%',
      height: '60%',
      resizeMode: 'contain',
      marginTop: 16,
    },
  });
};
