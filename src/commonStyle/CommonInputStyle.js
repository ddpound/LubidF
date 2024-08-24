import {StyleSheet} from 'react-native';
/**
 * 공통 레이아웃 스타일을 다루는 js 파일
 *
 */

/**
 * 페이지의 Input 스타일
 * @returns style
 */
export const CommonInputStyle = () => {
  return StyleSheet.create({
    inputStyleNormal: {
      width: '100%',
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      color: 'black',
      borderWidth: 1,
      borderColor: 'black',
    },
  });
};
