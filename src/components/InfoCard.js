import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InfoCard = ({ 
  title, 
  subtitle, 
  description, 
  icon, 
  iconColor = '#0066CC',
  backgroundColor = 'white',
  onPress,
  children,
  style 
}) => {
  const CardComponent = onPress ? TouchableOpacity : View;
  
  return (
    <CardComponent 
      style={[styles.card, { backgroundColor }, style]}
      onPress={onPress}
    >
      {icon && (
        <View style={[styles.iconContainer, { backgroundColor: iconColor + '20' }]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
      )}
      
      <View style={styles.content}>
        {title && <Text style={styles.title}>{title}</Text>}
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
        {children}
      </View>
      
      {onPress && (
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      )}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#0066CC',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default InfoCard;
