import data from '@/data.json';
import styles from '@/styles/AppStyles';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import {
    Avatar,
    Card,
    Chip,
    FAB,
    IconButton,
    Searchbar,
    Snackbar,
    Text,
} from 'react-native-paper';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const filteredData = data.filter(
    (item: User) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardPress = (name: string) => {
    setSnackbarMessage(`Opening ${name}'s profile...`);
    setSnackbarVisible(true);
  };

  const handleFabPress = () => {
    setSnackbarMessage('Add new team member');
    setSnackbarVisible(true);
  };

  const renderItem = ({ item }: { item: User }) => (
    <Card style={styles.card} onPress={() => handleCardPress(item.name)}>
      <Card.Title
        title={item.name}
        subtitle={item.email}
        titleStyle={styles.name}
        subtitleStyle={styles.email}
        left={(props) => (
          <Avatar.Image {...props} source={{ uri: item.avatar }} size={50} />
        )}
        right={(props) => (
          <IconButton {...props} icon="chevron-right" onPress={() => handleCardPress(item.name)} />
        )}
      />
      <Card.Content>
        <Chip icon="briefcase" style={styles.roleChip} textStyle={styles.roleChipText}>
          {item.role}
        </Chip>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.header}>
        Team Members
      </Text>
      <Searchbar
        placeholder="Search by name or role..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      <Text variant="bodySmall" style={styles.resultCount}>
        {filteredData.length} member(s) found
      </Text>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={handleFabPress}
        label="Add Member"
      />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
}
