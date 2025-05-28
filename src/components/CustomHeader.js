import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ 
  title, 
  subtitle, 
  backgroundColor = '#0066CC', 
  onBackPress, 
  showBack = false,
  rightComponent 
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        {showBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        
        {rightComponent && (
          <View style={styles.rightComponent}>
            {rightComponent}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  rightComponent: {
    marginLeft: 15,
  },
});

export default CustomHeader;
