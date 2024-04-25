import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import {fetchPosts} from '../utils/refreshToken';

const FeedsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const refreshToken = useSelector(
    (state: RootState) => state.auth.refreshToken,
  );
  console.log('refresh token', refreshToken);
  console.log('access token', accessToken);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts(); // You can add pagination parameters if needed
        setPosts(data.results); // Assuming your API response has a results array
        setError('');
      } catch (e) {
        setError('Failed to fetch posts.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);
  return (
    <View style={{flex: 1, marginTop: 40}}>
      <Text style={{color: 'red'}}>HomeScreen</Text>

      <Text style={{color: 'black', fontSize: 16}}>
        Access Token: {accessToken}
      </Text>
      <Text style={{color: 'purple', fontSize: 16}}>
        refresh Token: {refreshToken}
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{color: 'red'}}>{error}</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item._id.toString()} // Replace 'id' with the actual post id field from your API
          renderItem={({item}) => (
            <Text style={{color: 'black', fontSize: 16}}>{item.title}</Text> // Replace 'title' with the actual title field
          )}
        />
      )}
    </View>
  );
};

export default FeedsScreen;
