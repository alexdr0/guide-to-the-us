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

const TransportationScreen = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const transportationSections = [
    {
      id: 'drivers_license',
      title: "Driver's License",
      icon: 'card',
      color: '#FF6B6B',
      content: {
        overview: "A driver's license is essential for driving legally in the US and serves as primary identification.",
        requirements: [
          "Must be at least 16 years old (varies by state)",
          "Pass written knowledge test",
          "Pass road skills test",
          "Provide proof of identity and residency",
          "Pay required fees (typically $20-$80)",
          "Vision screening"
        ],
        process: [
          "Study your state's driver manual",
          "Gather required documents (birth certificate, Social Security card, proof of residence)",
          "Visit local DMV office",
          "Take written test",
          "Practice driving with learner's permit",
          "Schedule and take road test",
          "Receive temporary license, permanent one arrives by mail"
        ],
        documents: [
          "Birth certificate or passport",
          "Social Security card or W-2",
          "Two proofs of residence (utility bills, bank statements)",
          "If immigrant: Green card, I-94, or other legal status documents"
        ]
      }
    },
    {
      id: 'vehicle_ownership',
      title: 'Vehicle Ownership',
      icon: 'car-sport',
      color: '#4ECDC4',
      content: {
        overview: "Owning a vehicle involves purchasing, registering, insuring, and maintaining it according to state laws.",
        buying: [
          "Research vehicle history (Carfax/AutoCheck report)",
          "Get pre-purchase inspection",
          "Negotiate price",
          "Secure financing (if needed)",
          "Complete bill of sale",
          "Transfer title"
        ],
        registration: [
          "Must register within 30 days of purchase",
          "Bring title, bill of sale, and insurance proof",
          "Pay registration fees and taxes",
          "Receive license plates and registration card",
          "Renew annually or biannually"
        ],
        insurance: [
          "Required by law in most states",
          "Minimum coverage: Liability insurance",
          "Recommended: Comprehensive and collision",
          "Shop around for best rates",
          "Factors affecting cost: Age, driving record, location, vehicle type"
        ],
        maintenance: [
          "Regular oil changes (every 3,000-5,000 miles)",
          "Annual state inspection (where required)",
          "Emissions testing (in some areas)",
          "Regular maintenance per manufacturer schedule"
        ]
      }
    },
    {
      id: 'public_transport',
      title: 'Public Transportation',
      icon: 'bus',
      color: '#45B7D1',
      content: {
        overview: "Many US cities offer public transportation including buses, trains, and subways as alternatives to driving.",
        types: [
          "City buses - Most common, extensive route networks",
          "Subway/Metro systems - Major cities like NYC, DC, San Francisco",
          "Light rail - Connects suburbs to city centers",
          "Commuter trains - Long-distance regional service",
          "Ride-sharing - Uber, Lyft widely available"
        ],
        payment: [
          "Cash fare (exact change usually required)",
          "Transit cards/smart cards",
          "Mobile apps for tickets",
          "Monthly/weekly passes for regular users",
          "Senior and student discounts available"
        ],
        tips: [
          "Download transit apps for schedules and routes",
          "Keep transit card loaded with funds",
          "Stand to the right on escalators",
          "Give priority seating to elderly, disabled, pregnant",
          "Have backup transportation plan",
          "Check weekend/holiday schedules"
        ],
        major_systems: [
          "New York City: MTA (subway, bus)",
          "Washington DC: Metro",
          "San Francisco: BART, Muni",
          "Chicago: CTA",
          "Los Angeles: Metro",
          "Boston: MBTA"
        ]
      }
    }
  ];

  const renderExpandableSection = (section) => {
    const isExpanded = expandedSections[section.id];
    
    return (
      <View key={section.id} style={styles.sectionContainer}>
        <TouchableOpacity
          style={[styles.sectionHeader, { backgroundColor: section.color }]}
          onPress={() => toggleSection(section.id)}
        >
          <View style={styles.sectionHeaderLeft}>
            <Ionicons name={section.icon} size={24} color="white" />
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          <Ionicons 
            name={isExpanded ? "chevron-up" : "chevron-down"} 
            size={20} 
            color="white" 
          />
        </TouchableOpacity>
        
        {isExpanded && (
          <View style={styles.sectionContent}>
            <Text style={styles.overview}>{section.content.overview}</Text>
            
            {section.content.requirements && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Requirements:</Text>
                {section.content.requirements.map((req, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="checkmark-circle" size={16} color="#28A745" />
                    <Text style={styles.listText}>{req}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.process && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Process:</Text>
                {section.content.process.map((step, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.listText}>{step}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.documents && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Required Documents:</Text>
                {section.content.documents.map((doc, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="document" size={16} color="#0066CC" />
                    <Text style={styles.listText}>{doc}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.buying && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Buying a Vehicle:</Text>
                {section.content.buying.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="checkmark-circle" size={16} color="#28A745" />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.registration && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Vehicle Registration:</Text>
                {section.content.registration.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="checkmark-circle" size={16} color="#28A745" />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.insurance && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Vehicle Insurance:</Text>
                {section.content.insurance.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="shield-checkmark" size={16} color="#FFC107" />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.maintenance && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Vehicle Maintenance:</Text>
                {section.content.maintenance.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="construct" size={16} color="#17A2B8" />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.types && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Types of Public Transportation:</Text>
                {section.content.types.map((type, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="arrow-forward" size={16} color="#0066CC" />
                    <Text style={styles.listText}>{type}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.payment && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Payment Methods:</Text>
                {section.content.payment.map((method, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="card" size={16} color="#28A745" />
                    <Text style={styles.listText}>{method}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.tips && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Helpful Tips:</Text>
                {section.content.tips.map((tip, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="bulb" size={16} color="#FFC107" />
                    <Text style={styles.listText}>{tip}</Text>
                  </View>
                ))}
              </View>
            )}
            
            {section.content.major_systems && (
              <View style={styles.contentBlock}>
                <Text style={styles.blockTitle}>Major Transit Systems:</Text>
                {section.content.major_systems.map((system, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="location" size={16} color="#DC3545" />
                    <Text style={styles.listText}>{system}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="car" size={40} color="white" />
          <Text style={styles.headerTitle}>Transportation</Text>
          <Text style={styles.headerSubtitle}>
            Getting around in the United States
          </Text>
        </View>

        {/* Transportation Sections */}
        <View style={styles.content}>
          {transportationSections.map(renderExpandableSection)}
        </View>

        {/* Additional Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionHeaderText}>Additional Resources</Text>
          <View style={styles.resourceCard}>
            <Ionicons name="globe" size={24} color="#0066CC" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>DMV Offices</Text>
              <Text style={styles.resourceDescription}>
                Find your local Department of Motor Vehicles office for licenses and registration
              </Text>
            </View>
          </View>
          
          <View style={styles.resourceCard}>
            <Ionicons name="map" size={24} color="#0066CC" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Transit Apps</Text>
              <Text style={styles.resourceDescription}>
                Download local transit apps like Citymapper, Transit, or your city's official app
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
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  sectionContent: {
    padding: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
    fontStyle: 'italic',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
  },
  contentBlock: {
    marginBottom: 20,
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 5,
  },
  listText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  stepNumber: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resourceContent: {
    marginLeft: 15,
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default TransportationScreen;
