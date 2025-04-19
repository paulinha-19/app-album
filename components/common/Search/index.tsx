import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface SearchBarProps extends TextInputProps {}

export default function Search(props: SearchBarProps) {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="#707070" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Insira o username do usuário"
        placeholderTextColor="#AFAFAF"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    width: '93.5%',
    margin: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#AFAFAF',
    fontWeight: '600',
  },
});
