import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      title: 'Legal & Financial Rights',
      subtitle: 'Know your rights and obligations',
      icon: 'document-text',
      color: '#FF6B6B',
      screen: 'Legal'
    },
    {
      title: 'Education',
      subtitle: 'School requirements and resources',
      icon: 'school',
      color: '#4ECDC4',
      screen: 'Education'
    },
    {
      title: 'Transportation',
      subtitle: 'Getting around in the US',
      icon: 'car',
      color: '#45B7D1',
      screen: 'Transportation'
    },
    {
      title: 'Housing',
      subtitle: 'Finding and renting a place to live',
      icon: 'home',
      color: '#96CEB4',
      screen: 'Housing'
    },
    {
      title: 'Norms & Customs',
      subtitle: 'Understanding American culture',
      icon: 'people',
      color: '#FECA57',
      screen: 'More'
    },
    {
      title: 'Emergency',
      subtitle: 'Important emergency information',
      icon: 'medical',
      color: '#FF8A80',
      screen: 'Emergency'
    }
  ];

  const quickFacts = [
    'Population: ~331 million',
    'Capital: Washington, D.C.',
    'States: 50',
    'Independence: July 4, 1776',
    'Currency: US Dollar ($)'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          {/* Landscape Image Placeholder */}
          <View style={styles.landscapeImageContainer}>
            <Text style={styles.landscapeImageText}>🏞️ Beautiful US Landscape</Text>
            <Text style={styles.landscapeSubtext}>From sea to shining sea</Text>
          </View>
          
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>🇺🇸</Text>
          </View>
          <Text style={styles.welcomeText}>Welcome to the</Text>
          <Text style={styles.titleText}>United States of America</Text>
          <Text style={styles.subtitleText}>
            Your guide to living and thriving in America
          </Text>
        </View>

        {/* Search Bar */}
        <TouchableOpacity 
          style={styles.searchBar}
          onPress={() => navigation.navigate('Search')}
        >
          <Ionicons name="search" size={20} color="#666" />
          <Text style={styles.searchText}>Search topics...</Text>
        </TouchableOpacity>

        {/* Quick Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Facts</Text>
          <View style={styles.factsContainer}>
            {quickFacts.map((fact, index) => (
              <View key={index} style={styles.factItem}>
                <Ionicons name="chevron-forward" size={16} color="#0066CC" />
                <Text style={styles.factText}>{fact}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Categories Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Essential Information</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.categoryCard, { backgroundColor: category.color }]}
                onPress={() => {
                  if (category.screen === 'Emergency') {
                    navigation.navigate('Emergency');
                  } else {
                    navigation.navigate(category.screen);
                  }
                }}
              >
                <Ionicons name={category.icon} size={32} color="white" />
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Did You Know?</Text>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>The Statue of Liberty</Text>
            <Text style={styles.featureText}>
              Was a gift from France in 1886 and stands 305 feet tall on Liberty Island in New York Harbor. It has welcomed millions of immigrants to America.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  hero: {
    backgroundColor: '#0066CC',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  landscapeImageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  landscapeImageText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  landscapeSubtext: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  flagContainer: {
    marginBottom: 15,
  },
  flag: {
    fontSize: 60,
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  factsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  factText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 60) / 2,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  categorySubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
});

export default HomeScreen;
