import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(element => element.id === navigation.getParam('id'));

  return (
    <View>
        <Text style={styles.titleStyle}>{blogPost.title}</Text>
        <Text style={styles.contentStyle}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <Feather name="edit" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  contentStyle: {
    fontSize: 16,
    fontStyle: 'italic'
  }
});

export default ShowScreen;