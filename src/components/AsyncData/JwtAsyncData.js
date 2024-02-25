import AsyncStorage from "@react-native-async-storage/async-storage";

export const JwtSotrageCheck = (key) =>{
    console.log(JwtStorageData(key));
}


export const JwtStorageData = async (key) => {
    return JSON.parse(await AsyncStorage.getItem(key));
}

export const JwtStorageSet = async (key,value) => {
    await AsyncStorage.setItem(key,JSON.stringify(value));
}