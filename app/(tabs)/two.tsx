import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Divider,
    List,
    Switch,
    Text,
} from 'react-native-paper';

export default function TabTwoScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Avatar.Image
          size={100}
          source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
        />
        <Text variant="headlineMedium" style={styles.profileName}>
          Jeremy Joseph Pohar
        </Text>
        <Text variant="bodyMedium" style={styles.profileEmail}>
          00000090148@student.umn.ac.id
        </Text>
        <Button mode="outlined" style={styles.editButton} icon="pencil">
          Edit Profile
        </Button>
      </View>

      <Divider style={styles.divider} />

      <Card style={styles.settingsCard}>
        <Card.Title title="Settings" titleVariant="titleLarge" />
        <Card.Content>
          <List.Item
            title="Dark Mode"
            description="Enable dark theme"
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            right={() => (
              <Switch value={darkMode} onValueChange={setDarkMode} />
            )}
          />
          <Divider />
          <List.Item
            title="Notifications"
            description="Push notifications"
            left={(props) => <List.Icon {...props} icon="bell" />}
            right={() => (
              <Switch value={notifications} onValueChange={setNotifications} />
            )}
          />
          <Divider />
          <List.Item
            title="Language"
            description="English"
            left={(props) => <List.Icon {...props} icon="translate" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Privacy"
            description="Manage your data"
            left={(props) => <List.Icon {...props} icon="shield-lock" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </Card.Content>
      </Card>

      <Card style={styles.settingsCard}>
        <Card.Title title="About" titleVariant="titleLarge" />
        <Card.Content>
          <List.Item
            title="Version"
            description="1.0.0"
            left={(props) => <List.Icon {...props} icon="information" />}
          />
          <Divider />
          <List.Item
            title="IF670 Mobile Cross Platform Programming"
            description="Week 4 - React Native Styling"
            left={(props) => <List.Icon {...props} icon="school" />}
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.logoutButton}
        icon="logout"
        buttonColor="#d32f2f"
      >
        Logout
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#6200ee',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileName: {
    marginTop: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileEmail: {
    color: '#e0e0e0',
    marginTop: 4,
  },
  editButton: {
    marginTop: 16,
    borderColor: '#ffffff',
  },
  divider: {
    marginVertical: 8,
  },
  settingsCard: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    elevation: 2,
  },
  logoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
    borderRadius: 8,
  },
});
