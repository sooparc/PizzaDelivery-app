import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [pizza, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(
        "https://pizzaordering-app-default-rtdb.firebaseio.com/pizza.json"
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedPizza = [];

      for (const key in responseData) {
        loadedPizza.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setPizza(loadedPizza);
      setIsLoading(false);
    };

    fetchPizza().catch((error) => {
      setIsLoading(false);
      setFetchError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (fetchError) {
    return (
      <section className={classes.pizzaError}>
        <p>{fetchError}</p>
      </section>
    );
  }

  const pizzaList = pizza.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{pizzaList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
