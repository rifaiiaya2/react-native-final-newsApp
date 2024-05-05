import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';

import NewsComponent from '../components/moleculs/NewsComponent';

const FeedsScreen = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const refreshToken = useSelector(
    (state: RootState) => state.auth.refreshToken,
  );
  console.log('refresh token', refreshToken);
  console.log('access token', accessToken);

  return (
    <>
      <NewsComponent />
    </>
  );
};

export default FeedsScreen;
