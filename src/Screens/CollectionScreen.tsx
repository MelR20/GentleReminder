import {StyleSheet, View} from 'react-native';
import {CollectionScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';
import BackButton from '../main/component/BackButton';

export default function CollectionScreen({
  navigation,
  route,
}: CollectionScreenNavigationProp) {
  route.params.id;
  return (
      <BackButton/>

  );
}

const styles = StyleSheet.create({

});
