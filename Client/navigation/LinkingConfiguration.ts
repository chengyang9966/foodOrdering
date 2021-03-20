import * as Linking from 'expo-linking';

// export default {
//   prefixes: [Linking.makeUrl('/')],
//   config: {
//     screens: {
//       NotFound: 'qqeqweqweqwe',
//       Home: '/',
//       ItemListing: '/Orders/Item',
//       SearchBar: 'search',
//       Account: '/Orders/Account'
//     },
//   },
// };

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        screens: {
          HomePage: 'Home',
          Item: 'ItemLinking',
        },
        About: {
          screen: {

            Account: 'Account',
          }

        },
        NotFound: '*',
      },
    },
  }
};