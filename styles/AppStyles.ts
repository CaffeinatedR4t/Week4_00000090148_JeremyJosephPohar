import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  searchbar: {
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 2,
  },
  resultCount: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 12,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  role: {
    fontSize: 14,
    color: '#6200ee',
    fontWeight: '500',
  },
  roleChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8def8',
    marginTop: 8,
  },
  roleChipText: {
    color: '#6200ee',
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 20,
    backgroundColor: '#6200ee',
  },
});

export default styles;
