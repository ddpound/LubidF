import AsyncStorage from "@react-native-async-storage/async-storage";

export const JwtSotrageCheck = (key) =>{
    console.log(JwtStorageData(key));
}


export const JwtStorageData = async (key) => {
    console.log(key);
    return await AsyncStorage.getItem(key);
}

export const JwtStorageSet = async (key,value) => {
    await key,JSON.stringify(value);
}