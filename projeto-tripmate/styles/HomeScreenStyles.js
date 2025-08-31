import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  navItem: {
    fontSize: 16,
    color: '#aaa',
  },
  navItemActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  categoryButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryIconContainer: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    padding: 12,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#007BFF',
  },
  card: {
    marginRight: 15,
    width: 180,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
  },
  cardRating: {
    fontSize: 12,
    color: '#555',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default styles;
