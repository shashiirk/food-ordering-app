import Card from '../UI/Card';
import MealItem from './MealItem/MeaItem';
import styles from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://feast-582d8-default-rtdb.firebaseio.com/meals.json'
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();

        const loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setMeals(loadedMeals);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  let mainContent;

  if (isLoading) {
    mainContent = (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    mainContent = (
      <section className={styles.error}>
        <p>Failed to fetch data</p>
      </section>
    );
  }

  if (!isLoading && !isError) {
    const mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));

    mainContent = (
      <section className={styles.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  }

  return <div className={styles.container}>{mainContent}</div>;
};

export default AvailableMeals;
