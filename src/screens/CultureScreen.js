import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const CultureScreen = () => {
  const culturalAspects = [
    {
      title: 'Food & Cuisine',
      icon: 'restaurant',
      color: '#FF6B6B',
      items: ['Hamburgers & Hot Dogs', 'BBQ', 'Apple Pie', 'Tex-Mex', 'Soul Food']
    },
    {
      title: 'Sports',
      icon: 'football',
      color: '#4ECDC4',
      items: ['Football (NFL)', 'Basketball (NBA)', 'Baseball (MLB)', 'Ice Hockey (NHL)', 'Soccer (MLS)']
    },
    {
      title: 'Entertainment',
      icon: 'film',
      color: '#45B7D1',
      items: ['Hollywood Movies', 'Broadway', 'Country Music', 'Jazz', 'Rock & Roll']
    },
    {
      title: 'Holidays',
      icon: 'calendar',
      color: '#96CEB4',
      items: ['Independence Day', 'Thanksgiving', 'Christmas', 'Memorial Day', 'Labor Day']
    }
  ];

  const traditions = [
    {
      title: 'The American Dream',
      description: 'The belief that anyone can achieve success through hard work and determination',
      icon: 'star'
    },
    {
      title: 'Melting Pot',
      description: 'A diverse society where different cultures blend together',
      icon: 'people'
    },
    {
      title: 'Freedom of Speech',
      description: 'Constitutional right to express opinions and ideas freely',
      icon: 'megaphone'
    },
    {
      title: 'Individualism',
      description: 'Emphasis on personal independence and self-reliance',
      icon: 'person'
    }
  ];

  const regions = [
    {
      name: 'The South',
      characteristics: ['Hospitality', 'Southern Cuisine', 'Country Music', 'Historic Charm'],
      color: '#FF8C69'
    },
    {
      name: 'New England',
      characteristics: ['Colonial History', 'Fall Foliage', 'Seafood', 'Academic Excellence'],
      color: '#20B2AA'
    },
    {
      name: 'The West Coast',
      characteristics: ['Technology Hub', 'Environmental Consciousness', 'Diverse Cuisine', 'Outdoor Lifestyle'],
      color: '#9370DB'
    },
    {
      name: 'The Midwest',
      characteristics: ['Friendly People', 'Agricultural Heritage', 'Strong Work Ethic', 'Traditional Values'],
      color: '#32CD32'
    }
  ];

  const languages = [
    { language: 'English', percentage: '78.2%' },
    { language: 'Spanish', percentage: '13.4%' },
    { language: 'Chinese', percentage: '1.1%' },
    { language: 'Tagalog', percentage: '1.0%' },
    { language: 'Vietnamese', percentage: '0.8%' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>American Culture</Text>
          <Text style={styles.headerSubtitle}>
            Diversity, traditions, and the American way of life
          </Text>
        </View>

        {/* Cultural Aspects Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultural Highlights</Text>
          <View style={styles.aspectsGrid}>
            {culturalAspects.map((aspect, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.aspectCard, { backgroundColor: aspect.color }]}
              >
                <Ionicons name={aspect.icon} size={32} color="white" />
                <Text style={styles.aspectTitle}>{aspect.title}</Text>
                <View style={styles.aspectItems}>
                  {aspect.items.map((item, itemIndex) => (
                    <Text key={itemIndex} style={styles.aspectItem}>• {item}</Text>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Core Values & Traditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Values & Traditions</Text>
          <View style={styles.traditionsContainer}>
            {traditions.map((tradition, index) => (
              <View key={index} style={styles.traditionCard}>
                <View style={styles.traditionIcon}>
                  <Ionicons name={tradition.icon} size={24} color="#0066CC" />
                </View>
                <View style={styles.traditionContent}>
                  <Text style={styles.traditionTitle}>{tradition.title}</Text>
                  <Text style={styles.traditionDescription}>{tradition.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Regional Cultures */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Regional Cultures</Text>
          {regions.map((region, index) => (
            <View key={index} style={styles.regionCard}>
              <View style={[styles.regionHeader, { backgroundColor: region.color }]}>
                <Text style={styles.regionName}>{region.name}</Text>
              </View>
              <View style={styles.regionContent}>
                {region.characteristics.map((char, charIndex) => (
                  <View key={charIndex} style={styles.characteristicItem}>
                    <Ionicons name="checkmark-circle" size={16} color={region.color} />
                    <Text style={styles.characteristicText}>{char}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages Spoken</Text>
          <View style={styles.languagesContainer}>
            {languages.map((lang, index) => (
              <View key={index} style={styles.languageItem}>
                <Text style={styles.languageName}>{lang.language}</Text>
                <View style={styles.languageBar}>
                  <View 
                    style={[
                      styles.languageProgress, 
                      { width: `${parseFloat(lang.percentage)}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.languagePercentage}>{lang.percentage}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Fun Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultural Fun Facts</Text>
          <View style={styles.funFactsContainer}>
            <View style={styles.funFact}>
              <Ionicons name="happy" size={20} color="#FF6B6B" />
              <Text style={styles.funFactText}>
                Americans consume about 20 billion hot dogs per year!
              </Text>
            </View>
            <View style={styles.funFact}>
              <Ionicons name="musical-notes" size={20} color="#4ECDC4" />
              <Text style={styles.funFactText}>
                Jazz, blues, and hip-hop all originated in the United States
              </Text>
            </View>
            <View style={styles.funFact}>
              <Ionicons name="school" size={20} color="#45B7D1" />
              <Text style={styles.funFactText}>
                The US has more Nobel Prize winners than any other country
              </Text>
            </View>
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
  header: {
    backgroundColor: '#0066CC',
    padding: 30,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    textAlign: 'center',
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
  aspectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  aspectCard: {
    width: (width - 60) / 2,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    minHeight: 180,
  },
  aspectTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  aspectItems: {
    alignItems: 'flex-start',
  },
  aspectItem: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    marginBottom: 3,
  },
  traditionsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  traditionCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  traditionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  traditionContent: {
    flex: 1,
  },
  traditionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  traditionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  regionCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  regionHeader: {
    padding: 15,
    alignItems: 'center',
  },
  regionName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  regionContent: {
    padding: 15,
  },
  characteristicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  characteristicText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  languagesContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  languageName: {
    width: 80,
    fontSize: 14,
    color: '#333',
  },
  languageBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  languageProgress: {
    height: '100%',
    backgroundColor: '#0066CC',
  },
  languagePercentage: {
    width: 40,
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  funFactsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  funFact: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  funFactText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
});

export default CultureScreen;
