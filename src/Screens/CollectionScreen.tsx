import {Pressable, StyleSheet, Text, View} from 'react-native';
import {CollectionScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';
import BackButton from '../main/component/BackButton';
import {useContext} from 'react';
import {CollectionContext} from '../main/Contexts/CollectionContext';

export default function CollectionScreen({
  navigation,
  route,
}: CollectionScreenNavigationProp) {
  route.params.id;
  const {collections, setCollections} = useContext(CollectionContext);
  const collection = collections.find(
    collection => collection.id === route.params.id,
  );

  return (
    <View>
      <BackButton />
      <Text>{JSON.stringify(collection)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
