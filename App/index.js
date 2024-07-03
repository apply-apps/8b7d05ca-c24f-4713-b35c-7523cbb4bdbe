// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const words = ["APPLE", "BANANA", "CHERRY", "DATE", "ELEPHANT"];

const Learning = () => {
    const [isLettersMode, setIsLettersMode] = useState(true);
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % (isLettersMode ? letters.length : words.length));
    };

    const handleSwitchMode = () => {
        setIsLettersMode(!isLettersMode);
        setIndex(0);
    };

    return (
        <View style={styles.learningContainer}>
            <Text style={styles.learningItem}>
                {isLettersMode ? letters[index] : words[index]}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSwitchMode}>
                    <Text style={styles.buttonText}>Switch to {isLettersMode ? "Words" : "Letters"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read</Text>
            <Learning />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
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
    learningContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    learningItem: {
        fontSize: 120,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        padding: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default App;