import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';


import image1 from '../assets/user1.jpg';  
import image2 from '../assets/user2.jpg'; 

const MatchScreen4 = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const heartScaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 3,
        tension: 200,
        useNativeDriver: true,
      }),
      Animated.spring(heartScaleAnim, {
        toValue: 1,
        friction: 2,
        tension: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2, bounceAnim, heartScaleAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <View style={[styles.imageWrapper, styles.imageWrapper1]}>
          <Animated.Image
            source={image1}
            style={[styles.image, { opacity: fadeAnim1, transform: [{ rotate: '-10deg' }] }]}
          />
          {/* <Animated.View style={[styles.heartIcon, { transform: [{ scale: heartScaleAnim }] }]}>
            <FontAwesome name="heart" size={24} color="red" />
          </Animated.View> */}
        </View>
        <View style={[styles.imageWrapper, styles.imageWrapper2]}>
          <Animated.Image
            source={image2}
            style={[styles.image, { opacity: fadeAnim2, transform: [{ rotate: '10deg' }] }]}
          />
          
          {/* <Animated.View style={[styles.heartIcon, { transform: [{ scale: heartScaleAnim }] }]}>
            <FontAwesome name="heart" size={24} color="red" />
          </Animated.View> */}
        </View>
      </View>
      <Animated.Text style={[styles.matchText, { transform: [{ scale: bounceAnim }] }]}>
        It's a match, Jake!
      </Animated.Text>
      <Text style={styles.subText}>Start a conversation now with each other</Text>
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Say hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonTextSecondary}>Keep swiping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
    width: 150,
    height: 250,
  },
  imageWrapper1: {
    zIndex: 2,
    marginTop: 100, // Adjust the vertical position of the first image
    marginRight: -20, // Adjust the horizontal overlap
  },
  imageWrapper2: {
    zIndex: 1,
    marginBottom: 40, // Adjust the vertical position of the second image
    marginLeft: -10, // Adjust the horizontal overlap
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  matchText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subText: {
    fontSize: 15,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonPrimary: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonTextSecondary: {
    fontSize: 16,
    color: '#000',
  },
});

export default MatchScreen4;
