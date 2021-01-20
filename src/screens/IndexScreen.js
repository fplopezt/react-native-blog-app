import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome, Feather } from '@expo/vector-icons'; 

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.listElementStyle}>
                <Text style={styles.listElementTextStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <FontAwesome name="trash-o" size={24} color="red" />
                </TouchableOpacity>
            </View>
          </TouchableOpacity>;
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
    listElementStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        marginVertical: 8,
        paddingHorizontal: 8
    },
    listElementTextStyle: {
        flex: 1,
        alignSelf: 'center'
    }
});

export default IndexScreen;