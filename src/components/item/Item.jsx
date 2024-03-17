import PropTypes from "prop-types";
import fire from "../../assets/Daco_5794238.png";
import clock from "../../assets/—Pngtree—vector clock icon_3785539.png";

const Item = ({ item }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    ingredients_length,
    preparing_time,
    calories,
  } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={recipe_image} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{short_description}</p>
        <div>
          <h2>Ingredients{ingredients_length}</h2>
          <ul>
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <p className="flex">
            <span>
              <img className="w-5" src={clock} />
            </span>
            {preparing_time} minutes
          </p>
          <p className="flex">
            <span>
              <img className="w-3" src={fire} />
            </span>
            {calories} calories
          </p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
