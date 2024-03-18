import PropTypes from "prop-types";
import fire from "../../assets/Daco_5794238.png";
import clock from "../../assets/—Pngtree—vector clock icon_3785539.png";

const Item = ({ item, addToCook }) => {
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
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={recipe_image} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p className="text-slate-600 mb-3">{short_description}</p>
        <div>
          <hr />
          <h2 className="text-xl mt-4">Ingredients : {ingredients_length}</h2>
          <ul className="ml-4 mb-4 mt-2">
            {ingredients.map((ingredient, idx) => (
              <li
                style={{ listStyle: "disc" }}
                className="text-slate-600"
                key={idx}
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex my-4">
          <p className="flex">
            <span>
              <img className="w-5 mr-2" src={clock} />
            </span>
            {preparing_time} minutes
          </p>
          <p className="flex">
            <span>
              <img className="w-3 mr-2" src={fire} />
            </span>
            {calories} calories
          </p>
        </div>
        <div className="card-actions">
          <button onClick={() => addToCook(item)} className="btn bg-green-500">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
