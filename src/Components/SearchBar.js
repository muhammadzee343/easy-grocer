import React, {useState} from 'react';
import {SearchBar, Icon} from 'react-native-elements';
import {button_backgroun, white} from '../Assets/themes/colors';

const SearchBarScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <SearchBar
      inputStyle={{backgroundColor: white}}
      containerStyle={{
        backgroundColor: white,
        borderWidth: 0.5,
        borderRadius: 10,
        height: 45,
        justifyContent: 'center',
        borderColor: '#dfe6e1',
      }}
      placeholderTextColor={button_backgroun}
      inputContainerStyle={{backgroundColor: white, height: 40}}
      placeholder={'Search...'}
      onChangeText={updateSearch}
      value={search}
      lightTheme
    />
  );
};

export default SearchBarScreen;
