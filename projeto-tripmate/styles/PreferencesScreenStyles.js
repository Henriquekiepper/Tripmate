import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    width: "50%",
    height: "100%",
    backgroundColor: "#007bff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  preferenceRow: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  preferenceButton: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    alignItems: "center",
  },
  preferenceText: {
    color: "#333",
  },
  selectedPreference: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  selectedPreferenceText: {
    color: "#fff",
  },
  continueButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc", // Cor de fundo para o botão desativado
    opacity: 0.5, // Transparência para indicar estado desativado
  },
  disabledButtonText: {
    color: "#888", // Cor do texto do botão desativado
  },
  footerLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default styles;