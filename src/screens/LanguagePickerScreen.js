import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Image,
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const LanguagePickerScreen = ({ navigation }) => {
  const selectLanguage = (language) => {
    // Here you would typically store the selected language in AsyncStorage or Context
    navigation.replace('Main', { language });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subtitle}>Guide to the US</Text>
          <Text style={styles.description}>
            Choose your preferred language to continue
          </Text>
        </View>

        <View style={styles.flagContainer}>
          <Text style={styles.flag}>🇺🇸</Text>
        </View>

        <View style={styles.languageOptions}>
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => selectLanguage('en')}
          >
            <View style={styles.languageContent}>
              <Text style={styles.languageFlag}>🇺🇸</Text>
              <View style={styles.languageTextContainer}>
                <Text style={styles.languageTitle}>English</Text>
                <Text style={styles.languageSubtitle}>Continue in English</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#0066CC" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => selectLanguage('es')}
          >
            <View style={styles.languageContent}>
              <Text style={styles.languageFlag}>🇪🇸</Text>
              <View style={styles.languageTextContainer}>
                <Text style={styles.languageTitle}>Español</Text>
                <Text style={styles.languageSubtitle}>Continuar en Español</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#0066CC" />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          You can change the language later in settings
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  flagContainer: {
    marginBottom: 50,
  },
  flag: {
    fontSize: 80,
  },
  languageOptions: {
    width: '100%',
    marginBottom: 30,
  },
  languageButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  languageFlag: {
    fontSize: 32,
    marginRight: 15,
  },
  languageTextContainer: {
    flex: 1,
  },
  languageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  languageSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default LanguagePickerScreen;
