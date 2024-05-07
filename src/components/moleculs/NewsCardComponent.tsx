import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Image,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import {News} from '../../utils/newsType';
import GradientText from '../atoms/GradientText';
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
} from '../../services/tokenService';
import axios from 'axios';
import CustomActivityIndicator from '../atoms/CustomActivityIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';

const NewsCardComponent = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const [newsData, setNewsData] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleToDetailsFeeds = (item: News) => {
    navigation.navigate('DetailsFeedsScreen', {
      item: {...item, keywords: item.keywords},
    });
  };

  const fetchPosts = async () => {
    if (isFetching && isLoading && !hasMore) {
      return;
    }
    setIsFetching(true);
    setIsLoading(true);
    try {
      const accessToken = getAccessToken();
      const response = await axios.get(
        `${API_URL}/posts?page=${page}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (response.data.results.length > 0) {
        setNewsData(prevData => [...prevData, ...response.data.results]);
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (error) {
        try {
          const refreshToken = getRefreshToken();
          const refreshResponse = await axios.post(`${API_URL}/refresh-token`, {
            refreshToken: refreshToken,
          });
          const newAccessToken = refreshResponse.data.accessToken;
          saveAccessToken(newAccessToken);
          await AsyncStorage.setItem('accessToken', newAccessToken);
          setIsFetching(false);
          return fetchPosts();
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
        }
      } else {
        setHasMore(false);
      }
    } finally {
      setIsFetching(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }
    return <CustomActivityIndicator />;
  };

  const renderNews = ({item}: {item: News}) => (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.presableStyle}>
          <GradientText style={styles.titleText}>{item.title}</GradientText>
          <Pressable
            onPress={() => {
              handleToDetailsFeeds(item);
            }}>
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/icons/details.png')}
                style={styles.detailsIcon}
              />
              <Text style={styles.iconTitle}>Details / المزيد</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={newsData}
        renderItem={renderNews}
        keyExtractor={(item, index) => `news-${item._id}-${index}`}
        contentContainerStyle={styles.contentContainerStyle}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              setPage(1);
              setNewsData([]);
              setHasMore(true);
              setIsLoading(true);
            }}
          />
        }
        onEndReached={fetchPosts}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 3,
  },
  cardView: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  presableStyle: {
    position: 'relative',
    justifyContent: 'space-between',
    backgroundColor: '#fcf7f7',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'flex-start',
    padding: 55,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '800',
    padding: 8,
  },
  iconView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  detailsIcon: {
    width: 27,
    height: 25,
  },
  iconTitle: {
    fontSize: 15,
    color: '#141414',
    paddingLeft: 6,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});
export default NewsCardComponent;
