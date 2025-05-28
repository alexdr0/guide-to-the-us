import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const EducationScreen = () => {
  const [activeTab, setActiveTab] = useState('DC');
  const educationData = {
    'DC': {
      requirements: [
        {
          title: 'Mandatory School Age',
          description: 'Children must attend school from age 5 until at least 18 years old',
          icon: 'calendar'
        },
        {
          title: 'School Assignment',
          description: 'Every home address has assigned elementary, middle, and high schools',
          icon: 'school'
        },
        {
          title: 'Guaranteed Enrollment',
          description: 'All K-12 students have guaranteed right to enroll in their boundary school',
          icon: 'checkmark-circle'
        },
        {
          title: 'Find Your School',
          description: 'Use DCPS or My School DC to find your assigned schools',
          icon: 'search'
        }
      ],
      specificInfo: {
        title: 'DC Public Schools (DCPS)',
        description: 'In DC every home address has an assigned elementary, middle, and high school. All students eligible for grades K-12 have a guaranteed right to enroll in their in-boundary school. You can find your school through the DCPS or My School DC.'
      },
      resources: [
        {
          name: 'WASHINGTON ENGLISH CENTER',
          location: 'Washington D.C.',
          description: 'Washington English Center es una organización que provee clases para aprender inglés por un precio bajo. Hay clases de grupo y tutoría individual. Estudiantes necesitan tomar una prueba de nivel para determinar sus niveles.',
          color: '#4ECDC4',
          icon: 'language'
        },
        {
          name: 'THE FAMILY PLACE',
          location: 'Washington D.C.',
          description: 'The Family Place es una organización que ofrece educación y servicios de apoya para familias inmigrantes y familias de bajos ingresos. Ellos provee un prescolar y una guardería para los niños pequeños.',
          color: '#96CEB4',
          icon: 'people'
        },
        {
          name: 'DC PUBLIC LIBRARY',
          location: 'Washington D.C.',
          description: 'Free ESL classes, computer training, and educational programs for all ages. Multiple locations throughout DC with resources for immigrants and families.',
          color: '#FFB74D',
          icon: 'library'
        }
      ]
    },
    'Maryland': {
      requirements: [
        {
          title: 'Mandatory School Age',
          description: 'Children must attend school from age 5 until 18 years old',
          icon: 'calendar'
        },
        {
          title: 'County School Systems',
          description: 'Each county has its own school district with different enrollment procedures',
          icon: 'school'
        },
        {
          title: 'Residency Requirements',
          description: 'Must provide proof of Maryland residency for enrollment',
          icon: 'home'
        },
        {
          title: 'Registration Documents',
          description: 'Birth certificate, immunization records, and proof of address required',
          icon: 'document-text'
        }
      ],
      specificInfo: {
        title: 'Maryland Public Schools',
        description: 'Maryland has 24 local school systems, one in each of the 23 counties and Baltimore City. Each county operates its own school district. Popular counties include Montgomery County, Prince George\'s County, and Anne Arundel County.'
      },
      resources: [
        {
          name: 'MONTGOMERY COLLEGE ESL',
          location: 'Montgomery County, MD',
          description: 'Comprehensive ESL programs for adults at multiple skill levels. Offers both credit and non-credit courses with flexible scheduling options.',
          color: '#8E24AA',
          icon: 'language'
        },
        {
          name: 'CATHOLIC CHARITIES OF MARYLAND',
          location: 'Statewide Maryland',
          description: 'Provides education services, ESL classes, and support for immigrant families throughout Maryland. Multiple locations across the state.',
          color: '#5C6BC0',
          icon: 'people'
        },
        {
          name: 'MARYLAND STATE LIBRARY',
          location: 'Statewide Maryland',
          description: 'Free educational resources, computer access, and adult literacy programs available at library branches throughout Maryland.',
          color: '#26A69A',
          icon: 'library'
        }
      ]
    },
    'Virginia': {
      requirements: [
        {
          title: 'Mandatory School Age',
          description: 'Children must attend school from age 5 until 18 years old',
          icon: 'calendar'
        },
        {
          title: 'Division School Systems',
          description: 'Virginia has 132 school divisions serving different regions',
          icon: 'school'
        },
        {
          title: 'Enrollment Process',
          description: 'Contact local school division for specific enrollment requirements',
          icon: 'clipboard'
        },
        {
          title: 'ESL Support',
          description: 'English as a Second Language programs available in most divisions',
          icon: 'globe'
        }
      ],
      specificInfo: {
        title: 'Virginia Public Schools',
        description: 'Virginia has 132 local school divisions. Major areas include Fairfax County, Loudoun County, Prince William County, and Arlington County. Each division has its own enrollment procedures and requirements.'
      },
      resources: [
        {
          name: 'NORTHERN VIRGINIA COMMUNITY COLLEGE',
          location: 'Northern Virginia',
          description: 'Extensive ESL and workforce development programs. Multiple campuses serving Fairfax, Loudoun, Prince William, and surrounding areas.',
          color: '#FF7043',
          icon: 'language'
        },
        {
          name: 'LITERACY VOLUNTEERS OF VIRGINIA',
          location: 'Statewide Virginia',
          description: 'Free tutoring and ESL classes for adults. Volunteer-based program with locations throughout Virginia.',
          color: '#66BB6A',
          icon: 'people'
        },
        {
          name: 'VIRGINIA COMMONWEALTH UNIVERSITY',
          location: 'Richmond & Norfolk, VA',
          description: 'Community education programs, ESL classes, and educational support services for immigrant and refugee communities.',
          color: '#42A5F5',
          icon: 'school'
        }
      ]
    }
  };

  const requirements = educationData[activeTab].requirements;
  const resources = educationData[activeTab].resources;
  const specificInfo = educationData[activeTab].specificInfo;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Education</Text>
          <Text style={styles.headerSubtitle}>
            School requirements and educational resources
          </Text>
        </View>

        {/* Location Tabs */}
        <View style={styles.tabContainer}>
          {['DC', 'Maryland', 'Virginia'].map((location) => (
            <TouchableOpacity
              key={location}
              style={[
                styles.tab,
                activeTab === location && styles.activeTab
              ]}
              onPress={() => setActiveTab(location)}
            >
              <Text style={[
                styles.tabText,
                activeTab === location && styles.activeTabText
              ]}>
                {location}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Requirements Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements for Children and School</Text>
          
          <View style={styles.mainRequirement}>
            <Text style={styles.mainRequirementText}>
              Across all of the US, children are mandated to go to school until they are at least 16 years old.
            </Text>
          </View>

          <View style={styles.dcRequirement}>
            <Text style={styles.dcRequirementText}>
              {specificInfo.description}
            </Text>
          </View>

          <View style={styles.requirementsGrid}>
            {requirements.map((req, index) => (
              <View key={index} style={styles.requirementCard}>
                <View style={styles.requirementIcon}>
                  <Ionicons name={req.icon} size={24} color="#0066CC" />
                </View>
                <Text style={styles.requirementTitle}>{req.title}</Text>
                <Text style={styles.requirementDescription}>{req.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Educational Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educational Resources</Text>
          <View style={styles.resourcesContainer}>
            {resources.map((resource, index) => (
              <TouchableOpacity key={index} style={styles.resourceCard}>
                <View style={[styles.resourceHeader, { backgroundColor: resource.color }]}>
                  <Ionicons name={resource.icon} size={24} color="white" />
                  <Text style={styles.resourceName}>{resource.name}</Text>
                </View>
                <View style={styles.resourceContent}>
                  <Text style={styles.resourceLocation}>{resource.location}</Text>
                  <Text style={styles.resourceDescription}>{resource.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Key Information */}
        <View style={styles.section}>
          <View style={styles.keyInfoCard}>
            <View style={styles.keyInfoHeader}>
              <Ionicons name="information-circle" size={24} color="#0066CC" />
              <Text style={styles.keyInfoTitle}>Key Information</Text>
            </View>
            <View style={styles.keyInfoContent}>
              <Text style={styles.keyInfoItem}>
                📚 Public education is free for all children
              </Text>
              <Text style={styles.keyInfoItem}>
                🏫 School districts vary by location
              </Text>
              <Text style={styles.keyInfoItem}>
                📝 Registration requires proof of residence
              </Text>
              <Text style={styles.keyInfoItem}>
                💉 Vaccinations may be required
              </Text>
              <Text style={styles.keyInfoItem}>
                🌐 ESL programs available for non-English speakers
              </Text>
            </View>
          </View>
        </View>

        {/* Emergency Contact */}
        <View style={styles.section}>
          <View style={styles.emergencyCard}>
            <Ionicons name="call" size={24} color="#FF6B6B" />
            <View style={styles.emergencyContent}>
              <Text style={styles.emergencyTitle}>Need Help?</Text>
              <Text style={styles.emergencyText}>
                Contact your local school district office for enrollment assistance and questions about educational requirements.
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#0066CC',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: 'white',
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
  mainRequirement: {
    backgroundColor: '#E3F2FD',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#0066CC',
  },
  mainRequirementText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    lineHeight: 22,
  },
  dcRequirement: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dcRequirementText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  requirementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  requirementCard: {
    width: '48%',
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
  requirementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  requirementTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  requirementDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  resourcesContainer: {
    marginBottom: 20,
  },
  resourceCard: {
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
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  resourceName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  resourceContent: {
    padding: 15,
  },
  resourceLocation: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: '600',
    marginBottom: 10,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  keyInfoCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  keyInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  keyInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  keyInfoContent: {
    marginLeft: 5,
  },
  keyInfoItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  emergencyCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF3E0',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  emergencyContent: {
    flex: 1,
    marginLeft: 15,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default EducationScreen;
