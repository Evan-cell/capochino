import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Text, View,Switch } from 'react-native';

export default function App() {
  const {colorScheme,toggleColorScheme} = useColorScheme();
  return (
    <View className='flex-1 justify-center items-center dark:bg-neutral-900  space-y-6'>
      <StatusBar style={colorScheme=='dark'?'light':'dark'} />
      <View className='flex-row justify-center items-center space-x-2'>
        <Text className='text-xl dark:text-white'>Toggle Theme</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
      <Text className='mx-4 text-justify dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita, ab perferendis facilis hic aperiam, dolor sint cupiditate veritatis nemo ipsam recusandae eligendi commodi nesciunt nisi, officiis deserunt sapiente deleniti.</Text>
      <View className='h-48 w-full bg-sky-400 dark:bg-emerald-700'></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
