import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.viewStyle}>
        <Text>Enter title:</Text>
        <TextInput style={styles.titleTextInputStyle} value={title} onChangeText={text => setTitle(text)} />
        <Text>Enter content:</Text>
        <TextInput style={styles.contentTextInputStyle} value={content} onChangeText={text => setContent(text)} />
        <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 8
    },
    titleTextInputStyle: {
        marginVertical: 4,
        borderColor: 'black',
        borderWidth: 1
    },
    contentTextInputStyle: {
        marginTop: 4,
        marginBottom: 8,
        borderColor: 'black',
        borderWidth: 1,
        height: 200
    }
});

export default BlogPostForm;