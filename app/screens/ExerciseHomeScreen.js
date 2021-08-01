import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';

let exercises = [
  {
    title: 'Diet Recommendation',
    image: require('../assets/images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Kegel Exercises',
    image: require('../assets/images/Exercise2.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of kegel exercises',
    duration: '10-20 MIN Course',
  },
  {
    title: 'Meditation',
    image: require('../assets/images/Exercise3.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
    duration: '3-10 MIN Course',
  },
  {
    title: 'Yoga',
    image: require('../assets/images/Exercise4.png'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
];

const ExerciseHomeScreen = ({navigation}) => {
  const ExerciseItem = ({exercise}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseDetailsScreen', {exercise: exercise})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={exercise.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.accent + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.45 * SIZES.height,
          padding: 30,
          backgroundColor: COLORS.accent + '20',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/images/BgOrange.png')}
          style={{
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.accent + '45',
              marginRight: 0,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginBottom: 8,
                marginLeft: -5,
              }}></View>
            <View
              style={{
                height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginLeft: 5,
              }}></View>
          </View>
        </View>

        <Text style={{fontSize: 30, lineHeight: 45}}>
          Good Morning Rushikesh
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
            marginVertical: 40,
          }}>
          <FontAwesome5Icons
            name="search"
            size={22}
            style={{marginHorizontal: 20}}
          />
          <TextInput placeholder="Search" style={{flex: 1}} />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.accent + '55',
            position: 'absolute',
            right: -30,
            bottom: 50,
          }}></View>
      </View>

      <FlatList
        data={exercises}
        style={{
          paddingHorizontal: 20,
          marginTop: -60,
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem exercise={item} />}
      />
    </SafeAreaView>
  );
};

export default ExerciseHomeScreen;
