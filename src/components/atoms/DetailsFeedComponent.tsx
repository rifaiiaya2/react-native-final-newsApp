import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  Linking,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorParamList} from '../../navigation/Main.Navigator.types';
import {ScrollView} from 'react-native-gesture-handler';

type DetailsScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'DetailsFeedsScreen'
>;

const DetailsFeedComponent = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {item} = route.params;

  const getImageSouce = (image_url: string) => {
    if (image_url) {
      return {uri: image_url};
    } else {
      return require('../../assets/images/noImage.jpg');
    }
  };
  const sourceIcon = (source_icon: string) => {
    if (source_icon) {
      return {uri: source_icon};
    } else {
      return require('../../assets/icons/url.png');
    }
  };
  const getURLSouce = () => {
    if (item.source_url) {
      Linking.openURL(item.source_url).catch(err => {
        console.error("Couldn't load page", err);
        Alert.alert('Error', "Couldn't open the source URL");
      });
    } else {
      Alert.alert('Error', 'No source URL provided');
      return <Text style={styles.pressableURL}>No source URL</Text>;
    }
  };
  const renderKeywords = () => {
    if (item.keywords && Array.isArray(item.keywords)) {
      return item.keywords.map((keyword, index) => (
        <View key={`keyword-${index}`} style={styles.keywordContainer}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.keyword}>{keyword}</Text>
        </View>
      ));
    } else {
      return <Text style={styles.no_keyword}>No Keywords</Text>;
    }
  };
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ScrollView>
        <LinearGradient
          colors={['#e9be27', '#de9b52', '#d7856d', '#e3ab3f']}
          style={{
            height: StatusBar.currentHeight,
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            source={getImageSouce(item.image_url)}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/icons/keywords.png')}
            style={{width: 50, height: 50}}
          />
          <View style={styles.keywordsContainer}>
            <Text style={styles.keywordTitle}>Keywords</Text>
            {renderKeywords()}
          </View>
        </View>
        <ScrollView style={styles.descContainer}>
          <Text style={styles.descText}>{item.description}</Text>
          <View style={styles.sourceContainer}>
            <Image
              source={sourceIcon(item.source_icon)}
              style={{
                width: 38,
                height: 38,
              }}
            />
            <Pressable
              onPress={() => {
                getURLSouce();
              }}
              style={styles.pressableURL}>
              <Text style={styles.sourceUrlText}>{item.source_url}</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <Image
              source={require('../../assets/icons/pubDate.png')}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.pubDateText}>{item.pubDate}</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  bulletPoint: {
    color: '#f1852f',
    marginRight: 6,
    fontSize: 24,
    lineHeight: 25,
  },

  keywordContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  keyword: {
    fontSize: 17,
    color: '#080808',
  },
  no_keyword: {
    paddingVertical: 25,
    paddingHorizontal: -5,
    color: '#b52002',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 10,
    lineHeight: 35,
  },
  imageContainer: {
    width: 450,
    height: 270,
  },
  iconContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  keywordsContainer: {
    flexDirection: 'column',
  },
  keywordTitle: {
    fontSize: 30,
    fontStyle: 'italic',
    letterSpacing: 16,
    color: '#4d4b4b',
    paddingLeft: 20,
  },
  descContainer: {
    paddingTop: 16,
  },
  descText: {
    fontSize: 17,
    color: '#0a0a0a',
    paddingRight: 15,
    paddingLeft: 17,
    lineHeight: 32,
    writingDirection: 'rtl',
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  pressableURL: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceUrlText: {
    textDecorationLine: 'underline',
    color: 'blue',
    marginLeft: 10,
    fontSize: 17,
  },
  sourceIcon: {
    width: 40,
    height: 35,
    marginRight: 8,
  },
  pubDateText: {
    paddingTop: 14,
    paddingLeft: 10,
    fontSize: 16,
    color: '#96736c',
  },
});
export default DetailsFeedComponent;
