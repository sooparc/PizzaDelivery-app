import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.title}>Best toppings, Best pizza</div>
      <div className={classes.content}>
        Choose your favorite pizza from our selection of affordable pizza and
        enjoy a delicious lunch or dinner at home.
      </div>
    </section>
  );
};

export default MealsSummary;
