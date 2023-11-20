import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Ranking = () => {
  const [userHabits, setUserHabits] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const fetchedUserHabits = await getHabitsFromDatabase(userToken || '');

    //     if (!fetchedUserHabits) {
    //       setLoading(false);
    //       return;
    //     }

    //     setUserHabits(fetchedUserHabits);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Erro ao renderizar ranking', error);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingMessage}>
        {/* <Text style={{ textAlign: 'center' }}>Carregando...</Text> */}
      </View>
    );
  }

  const categoryCounts = userHabits.reduce(
    (counts, habit) => {
      const { category } = habit;
      counts[category] = (counts[category] || 0) + 1;
      return counts;
    },
    {}
  );

  const sortedPopularCategories = Object.keys(categoryCounts).sort(
    (a, b) => categoryCounts[b] - categoryCounts[a]
  );

  const mostPopularCategories = sortedPopularCategories.slice(0, 2);

  const filteredHabits = userHabits.filter(
    (habit) => !mostPopularCategories.includes(habit.category)
  );

  const uniqueCategories = Array.from(new Set(filteredHabits.map(habit => habit.category)));

  const sortedLeastPopularCategories = uniqueCategories.sort((a, b) => {
    const countA = categoryCounts[a] || 0;
    const countB = categoryCounts[b] || 0;
    return countA - countB;
  });

  return (
    <View style={styles.ranking}>
      <View style={styles.ranking__container}>
        <View style={styles.ranking__textContainer}>
          <View style={styles.ranking__heading}>
            <Text align='left' children='Ranking +' color='black' level='4' />
          </View>

          <Text align='left' children='Estas são as categorias mais populares em seus hábitos adicionados' color='black' />
        </View>

        <View style={styles.ranking__cardsContainer}>
          {userHabits
            .filter((habit) => mostPopularCategories.includes(habit.category))
            .slice(0, 2)
            .map((habit) => (
              <HabitCard
                key={habit._id}
                habitId={habit._id}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                setUserHabits={setUserHabits}
                token={userToken || ''}
                isSuggestedHabit={false}
              />
            ))}
        </View>
      </View>

      <View style={styles.ranking__secondContainer}>
        <View style={styles.ranking__textContainer}>
          <View style={styles.ranking__heading}>
            <Text align='left' children='Ranking -' color='black' level='4' />
          </View>
          <Text align='left' children='Estas são as categorias menos adicionadas em sua lista de hábitos' color='black' />
        </View>

        <View style={styles.ranking__cardsContainer}>
          {userHabits
            .filter((habit) => sortedLeastPopularCategories.includes(habit.category))
            .slice(0, 2)
            .map((habit) => (
              <HabitCard
                key={habit._id}
                habitId={habit._id}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                setUserHabits={setUserHabits}
                token={userToken || ''}
                isSuggestedHabit={false}
              />
            ))}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  ranking: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  ranking__container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  ranking__secondContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  ranking__textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
  },
  ranking__heading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  ranking__cardsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
});

