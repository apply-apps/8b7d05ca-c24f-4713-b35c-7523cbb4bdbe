// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Letters = () => {
    const [index, setIndex] = useState(0);
    
    const handleNextLetter = () => {
        setIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <View style={styles.lettersContainer}>
            <Text style={styles.letter}>{letters[index]}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Text style={styles.title}>Learn to Read</Text>
            <Letters />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        marginTop: 20,
        padding: 16, 
        backgroundColor: '#F1F6F9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    lettersContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letter: {
        fontSize: 120,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    button: {
        padding: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});