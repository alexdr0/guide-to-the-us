import React, { useState } from 'react';
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

const GeographyScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      name: 'Northeast',
      states: ['Maine', 'New Hampshire', 'Vermont', 'Massachusetts', 'Rhode Island', 'Connecticut', 'New York', 'New Jersey', 'Pennsylvania'],
      color: '#FF6B6B',
      features: ['Appalachian Mountains', 'Atlantic Coast', 'Fall Foliage', 'Historic Cities'],
      climate: 'Four distinct seasons with cold winters and warm summers'
    },
    {
      name: 'Southeast',
      states: ['Delaware', 'Maryland', 'Virginia', 'West Virginia', 'Kentucky', 'Tennessee', 'North Carolina', 'South Carolina', 'Georgia', 'Florida', 'Alabama', 'Mississippi', 'Louisiana', 'Arkansas'],
      color: '#4ECDC4',
      features: ['Atlantic and Gulf Coasts', 'Everglades', 'Great Smoky Mountains', 'Subtropical Climate'],
      climate: 'Hot, humid summers and mild winters'
    },
    {
      name: 'Midwest',
      states: ['Ohio', 'Michigan', 'Indiana', 'Illinois', 'Wisconsin', 'Minnesota', 'Iowa', 'Missouri', 'North Dakota', 'South Dakota', 'Nebraska', 'Kansas'],
      color: '#45B7D1',
      features: ['Great Lakes', 'Great Plains', 'Agricultural Heartland', 'Mississippi River'],
      climate: 'Continental climate with hot summers and cold winters'
    },
    {
      name: 'Southwest',
      states: ['Texas', 'Oklahoma', 'New Mexico', 'Arizona'],
      color: '#96CEB4',
      features: ['Deserts', 'Rio Grande', 'Grand Canyon', 'Oil Fields'],
      climate: 'Hot, dry summers and mild winters'
    },
    {
      name: 'West',
      states: ['Montana', 'Wyoming', 'Colorado', 'Idaho', 'Utah', 'Nevada', 'Washington', 'Oregon', 'California', 'Alaska', 'Hawaii'],
      color: '#FECA57',
      features: ['Rocky Mountains', 'Pacific Coast', 'Volcanoes', 'Diverse Ecosystems'],
      climate: 'Varies from Mediterranean to Arctic'
    }
  ];

  const landmarks = [
    {
      name: 'Grand Canyon',
      location: 'Arizona',
      description: 'Massive canyon carved by the Colorado River',
      icon: 'mountain'
    },
    {
      name: 'Yellowstone',
      location: 'Wyoming, Montana, Idaho',
      description: 'First national park with geysers and wildlife',
      icon: 'leaf'
    },
    {
      name: 'Statue of Liberty',
      location: 'New York',
      description: 'Symbol of freedom and democracy',
      icon: 'flame'
    },
    {
      name: 'Golden Gate Bridge',
      location: 'California',
      description: 'Iconic suspension bridge in San Francisco',
      icon: 'bridge'
    },
    {
      name: 'Mount Rushmore',
      location: 'South Dakota',
      description: 'Presidential faces carved into mountain',
      icon: 'people'
    },
    {
      name: 'Niagara Falls',
      location: 'New York',
      description: 'Powerful waterfalls on US-Canada border',
      icon: 'water'
    }
  ];

  const facts = [
    {
      title: 'Total Area',
      value: '3.8 million sq miles',
      description: '4th largest country by total area',
      icon: 'resize'
    },
    {
      title: 'Coastline',
      value: '12,383 miles',
      description: 'Atlantic, Pacific, Gulf, and Arctic coasts',
      icon: 'boat'
    },
    {
      title: 'Highest Point',
      value: 'Denali (20,310 ft)',
      description: 'Located in Alaska',
      icon: 'triangle'
    },
    {
      title: 'Lowest Point',
      value: 'Death Valley (-282 ft)',
      description: 'Located in California',
      icon: 'trending-down'
    },
    {
      title: 'Time Zones',
      value: '6 time zones',
      description: 'From Eastern to Hawaii-Aleutian',
      icon: 'time'
    },
    {
      title: 'Climate Zones',
      value: '11 different types',
      description: 'From Arctic to Tropical',
      icon: 'sunny'
    }
  ];

  const majorCities = [
    { name: 'New York City', population: '8.3M', state: 'New York' },
    { name: 'Los Angeles', population: '4.0M', state: 'California' },
    { name: 'Chicago', population: '2.7M', state: 'Illinois' },
    { name: 'Houston', population: '2.3M', state: 'Texas' },
    { name: 'Phoenix', population: '1.7M', state: 'Arizona' },
    { name: 'Philadelphia', population: '1.6M', state: 'Pennsylvania' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>US Geography</Text>
          <Text style={styles.headerSubtitle}>
            Diverse landscapes from sea to shining sea
          </Text>
        </View>

        {/* Quick Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Facts</Text>
          <View style={styles.factsGrid}>
            {facts.map((fact, index) => (
              <View key={index} style={styles.factCard}>
                <Ionicons name={fact.icon} size={24} color="#0066CC" />
                <Text style={styles.factTitle}>{fact.title}</Text>
                <Text style={styles.factValue}>{fact.value}</Text>
                <Text style={styles.factDescription}>{fact.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Regions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Geographic Regions</Text>
          {regions.map((region, index) => (
            <TouchableOpacity
              key={index}
              style={styles.regionCard}
              onPress={() => setSelectedRegion(selectedRegion === index ? null : index)}
            >
              <View style={[styles.regionHeader, { backgroundColor: region.color }]}>
                <Text style={styles.regionName}>{region.name}</Text>
                <Ionicons 
                  name={selectedRegion === index ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="white" 
                />
              </View>
              
              {selectedRegion === index && (
                <View style={styles.regionDetails}>
                  <Text style={styles.regionClimate}>{region.climate}</Text>
                  
                  <Text style={styles.subsectionTitle}>Key Features:</Text>
                  <View style={styles.featuresList}>
                    {region.features.map((feature, featureIndex) => (
                      <View key={featureIndex} style={styles.featureItem}>
                        <Ionicons name="checkmark" size={16} color={region.color} />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>

                  <Text style={styles.subsectionTitle}>States ({region.states.length}):</Text>
                  <Text style={styles.statesList}>{region.states.join(', ')}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Major Cities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Major Cities</Text>
          <View style={styles.citiesContainer}>
            {majorCities.map((city, index) => (
              <View key={index} style={styles.cityCard}>
                <View style={styles.cityRank}>
                  <Text style={styles.cityRankText}>{index + 1}</Text>
                </View>
                <View style={styles.cityInfo}>
                  <Text style={styles.cityName}>{city.name}</Text>
                  <Text style={styles.cityState}>{city.state}</Text>
                </View>
                <Text style={styles.cityPopulation}>{city.population}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Famous Landmarks */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Famous Landmarks</Text>
          <View style={styles.landmarksGrid}>
            {landmarks.map((landmark, index) => (
              <TouchableOpacity key={index} style={styles.landmarkCard}>
                <View style={styles.landmarkIcon}>
                  <Ionicons name={landmark.icon} size={32} color="#0066CC" />
                </View>
                <Text style={styles.landmarkName}>{landmark.name}</Text>
                <Text style={styles.landmarkLocation}>{landmark.location}</Text>
                <Text style={styles.landmarkDescription}>{landmark.description}</Text>
              </TouchableOpacity>
            ))}
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
  factsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  factCard: {
    width: (width - 60) / 2,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  factTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  factValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066CC',
    marginTop: 4,
    textAlign: 'center',
  },
  factDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  regionName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  regionDetails: {
    padding: 15,
  },
  regionClimate: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 8,
  },
  featuresList: {
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  statesList: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  citiesContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cityRank: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cityRankText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cityInfo: {
    flex: 1,
  },
  cityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cityState: {
    fontSize: 14,
    color: '#666',
  },
  cityPopulation: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: 'bold',
  },
  landmarksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  landmarkCard: {
    width: (width - 60) / 2,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  landmarkIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  landmarkName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  landmarkLocation: {
    fontSize: 12,
    color: '#0066CC',
    textAlign: 'center',
    marginBottom: 8,
  },
  landmarkDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default GeographyScreen;
