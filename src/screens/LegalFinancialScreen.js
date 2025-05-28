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

const LegalFinancialScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'credit',
      title: 'Credit Score',
      icon: 'card',
      color: '#FF6B6B',
      content: `A credit score is a three-digit number, typically between 300 and 850, designed to represent your credit risk, or the likelihood you will pay your bills on time.

Bad credit score is anything under 670. 671-739 is good credit, 740-799 is very good, and 800-850 is exceptional.

Companies use credit scores to make decisions on whether to offer you a mortgage, credit card, auto loan, and other credit products, as well as for tenant screening and insurance.`
    },
    {
      id: 'suing',
      title: 'Legal System & Suing',
      icon: 'hammer',
      color: '#4ECDC4',
      content: `It is important to know that in the US the slightest bending of the law can get you fined, sued, etc. You must follow every law and ensure you know the law because ignorance of the law is not a defense, meaning claiming to not understand or know the law you broke will not make you innocent.

Civil law is between two individuals
Criminal law is between law enforcement and an individual`
    },
    {
      id: 'documents',
      title: 'ID and Passport',
      icon: 'document',
      color: '#45B7D1',
      content: `The documents you were given at the border are very important. Please read them carefully and keep them in a safe place. Take photos of your ID, passport, and any documents you received at the border, and save them. Take note of your "A Number" (a 9- or 10-digit number starting with the letter A, found on your immigration documents) and keep it in a place where you can easily find it. 

You can use your smartphone to create a free Gmail account (www.gmail.com) and keep all your information on Google Drive (a free file storage system that you get by signing up for a Gmail account or a safe space). If you lose any of these documents, it makes it harder for an immigration attorney to find your case and help you.`
    },
    {
      id: 'parole',
      title: 'PAROLE',
      icon: 'time',
      color: '#96CEB4',
      content: `If you were granted parole, you have been permitted to come into the United States temporarily. That does not mean that you have been given work authorization (a work permit), or have permission to remain long-term. You need to see an immigration legal services provider who can help you with your case. The following website lists nonprofit immigration legal services providers throughout the United States: www.immigrationadvocates.org/legaldirectory/

ICE Check-In: If you received parole, you may be required to present yourself periodically at a designated ICE office. More information about your first appointment is found in the documents that you were given at the border. If you are living in a different city than the one listed on your paperwork, you must file a change of address. To do this and for more information, please visit https://www.ice.gov/check-in. https://respondentaccess.eoir.justice.gov/en/forms/eoir33ic/`
    }
  ];

  const resources = [
    {
      name: 'CENTRAL AMERICAN RESOURCE CENTER (CARCEN)',
      location: 'Washington D.C.',
      description: 'CARCEN es una organización que provee servicios legales y asesoramiento sobre la viviendo, ciudadanía, y inmigración. Hay asesoramiento individual y clases que usted puede tomar. Si su necesita una consulta legal, CARCEN ofrece una cita inicial para un precio bajo de 75 dólares. Haz clique en el enlace para buscar el servicio para usted.',
      color: '#FF8A80'
    },
    {
      name: 'TAHIRIH JUSTICE CENTER',
      location: 'Falls Church, Virginia',
      description: 'Tahirih Justice Center es una organización nacional que ayuda las mujeres que huyen de la violencia de género en sus países de origenes. Tahirih Justice Center provee servicios sociales y legales que son gratis. Ellos ayuda las mujeres a obtener las visas correctamentes para quedar en los Estados Unidos. Además, ellos provee servicios de comida, vivienda, medicina, empleo, y mucho más. Haz clique en el enlace para buscar por el servicio para usted.',
      color: '#81C784'
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Legal & Financial Rights</Text>
          <Text style={styles.headerSubtitle}>
            Understanding your rights and responsibilities in the US
          </Text>
        </View>

        {/* Main Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Essential Information</Text>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.id}
              style={styles.sectionCard}
              onPress={() => toggleSection(section.id)}
            >
              <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                <View style={styles.sectionHeaderContent}>
                  <Ionicons name={section.icon} size={24} color="white" />
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
                <Ionicons 
                  name={expandedSection === section.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="white" 
                />
              </View>
              
              {expandedSection === section.id && (
                <View style={styles.sectionContent}>
                  <Text style={styles.contentText}>{section.content}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal Resources</Text>
          <View style={styles.resourcesContainer}>
            {resources.map((resource, index) => (
              <View key={index} style={[styles.resourceCard, { borderLeftColor: resource.color }]}>
                <Text style={styles.resourceName}>{resource.name}</Text>
                <Text style={styles.resourceLocation}>{resource.location}</Text>
                <Text style={styles.resourceDescription}>{resource.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Important Notes */}
        <View style={styles.section}>
          <View style={styles.importantNote}>
            <Ionicons name="warning" size={24} color="#FF6B6B" />
            <View style={styles.noteContent}>
              <Text style={styles.noteTitle}>Important Reminders</Text>
              <Text style={styles.noteText}>
                • Keep all immigration documents safe{'\n'}
                • Avoid check cashing places{'\n'}
                • Beware of notario fraud{'\n'}
                • Always consult licensed attorneys for legal advice
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
    textAlign: 'center',
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
  sectionCard: {
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sectionContent: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  resourcesContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceCard: {
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  resourceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  resourceLocation: {
    fontSize: 14,
    color: '#0066CC',
    marginBottom: 10,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  importantNote: {
    flexDirection: 'row',
    backgroundColor: '#FFF3E0',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  noteContent: {
    flex: 1,
    marginLeft: 15,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  noteText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default LegalFinancialScreen;
