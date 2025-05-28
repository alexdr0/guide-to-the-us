import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput,
  TouchableOpacity,
  FlatList 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample data for search
  const searchData = [
    {
      id: '1',
      title: 'Declaration of Independence',
      category: 'History',
      description: 'Document declaring independence from British rule in 1776',
      screen: 'History'
    },
    {
      id: '2',
      title: 'American Revolution',
      category: 'History',
      description: 'War for independence from Britain (1775-1783)',
      screen: 'History'
    },
    {
      id: '3',
      title: 'Civil War',
      category: 'History',
      description: 'Conflict over slavery and preservation of the Union',
      screen: 'History'
    },
    {
      id: '4',
      title: 'Baseball',
      category: 'Culture',
      description: 'America\'s pastime - Major League Baseball',
      screen: 'Culture'
    },
    {
      id: '5',
      title: 'American Dream',
      category: 'Culture',
      description: 'Belief in success through hard work and determination',
      screen: 'Culture'
    },
    {
      id: '6',
      title: 'Hollywood',
      category: 'Culture',
      description: 'Entertainment capital of the world',
      screen: 'Culture'
    },
    {
      id: '7',
      title: 'Grand Canyon',
      category: 'Geography',
      description: 'Massive canyon in Arizona carved by Colorado River',
      screen: 'Geography'
    },
    {
      id: '8',
      title: 'Rocky Mountains',
      category: 'Geography',
      description: 'Major mountain range in western United States',
      screen: 'Geography'
    },
    {
      id: '9',
      title: 'Great Lakes',
      category: 'Geography',
      description: 'Five large freshwater lakes in the Midwest',
      screen: 'Geography'
    },
    {
      id: '10',
      title: 'Visa Information',
      category: 'Practical',
      description: 'Tourist, business, student, and work visas',
      screen: 'Practical'
    },
    {
      id: '11',
      title: 'Emergency Numbers',
      category: 'Practical',
      description: '911 for emergencies, other important numbers',
      screen: 'Practical'
    },
    {
      id: '12',
      title: 'Tipping Guide',
      category: 'Practical',
      description: 'How much to tip in restaurants, hotels, etc.',
      screen: 'Practical'
    }
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    
    if (text.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase()) ||
        item.category.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultPress = (item) => {
    navigation.navigate('Main', { screen: item.screen });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'History': return '#FF6B6B';
      case 'Culture': return '#4ECDC4';
      case 'Geography': return '#45B7D1';
      case 'Practical': return '#96CEB4';
      default: return '#666';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'History': return 'library';
      case 'Culture': return 'people';
      case 'Geography': return 'map';
      case 'Practical': return 'information-circle';
      default: return 'document';
    }
  };

  const popularSearches = [
    'Independence Day', 'New York', 'Thanksgiving', 'California', 
    'Constitution', 'Baseball', 'Grand Canyon', 'Visa'
  ];

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity 
      style={styles.resultItem}
      onPress={() => handleResultPress(item)}
    >
      <View style={[styles.categoryIcon, { backgroundColor: getCategoryColor(item.category) }]}>
        <Ionicons name={getCategoryIcon(item.category)} size={20} color="white" />
      </View>
      <View style={styles.resultContent}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <Text style={styles.resultCategory}>{item.category}</Text>
        <Text style={styles.resultDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for topics, places, history..."
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus={true}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Ionicons name="close" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Search Results */}
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.resultsList}
        />
      ) : searchQuery.length > 0 ? (
        <View style={styles.noResults}>
          <Ionicons name="search" size={48} color="#ccc" />
          <Text style={styles.noResultsText}>No results found</Text>
          <Text style={styles.noResultsSubtext}>
            Try searching for history, culture, geography, or practical information
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.suggestionsContainer} showsVerticalScrollIndicator={false}>
          {/* Popular Searches */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Searches</Text>
            <View style={styles.tagsContainer}>
              {popularSearches.map((term, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.tag}
                  onPress={() => handleSearch(term)}
                >
                  <Text style={styles.tagText}>{term}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Quick Categories */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Browse by Category</Text>
            <View style={styles.categoriesContainer}>
              {[
                { name: 'History', icon: 'library', color: '#FF6B6B', screen: 'History' },
                { name: 'Culture', icon: 'people', color: '#4ECDC4', screen: 'Culture' },
                { name: 'Geography', icon: 'map', color: '#45B7D1', screen: 'Geography' },
                { name: 'Practical', icon: 'information-circle', color: '#96CEB4', screen: 'Practical' }
              ].map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.categoryCard, { backgroundColor: category.color }]}
                  onPress={() => navigation.navigate('Main', { screen: category.screen })}
                >
                  <Ionicons name={category.icon} size={24} color="white" />
                  <Text style={styles.categoryName}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Search Tips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Search Tips</Text>
            <View style={styles.tipsContainer}>
              <View style={styles.tip}>
                <Ionicons name="bulb" size={16} color="#FECA57" />
                <Text style={styles.tipText}>Try searching for specific topics like "Civil War" or "Grand Canyon"</Text>
              </View>
              <View style={styles.tip}>
                <Ionicons name="bulb" size={16} color="#FECA57" />
                <Text style={styles.tipText}>Search by category: history, culture, geography, practical</Text>
              </View>
              <View style={styles.tip}>
                <Ionicons name="bulb" size={16} color="#FECA57" />
                <Text style={styles.tipText}>Look for states, cities, landmarks, and historical events</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  resultsList: {
    flex: 1,
    padding: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  resultContent: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  resultCategory: {
    fontSize: 12,
    color: '#0066CC',
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 15,
    marginBottom: 10,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 20,
  },
  suggestionsContainer: {
    flex: 1,
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tagText: {
    fontSize: 14,
    color: '#0066CC',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  categoryName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  tipsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  tipText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
});

export default SearchScreen;
