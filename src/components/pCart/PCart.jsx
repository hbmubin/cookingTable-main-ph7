// import PropTypes from "prop-types";

const PCart = ({ pCart, idx }) => {
  const { recipe_name, preparing_time, calories } = pCart;
  return (
    <tr className="text-slate-600 bg-stone-100">
      <td className="min-w-10 py-6">{idx + 1}</td>
      <td className="min-w-24 py-6">{recipe_name.slice(0, 10)}</td>
      <td className="min-w-24 py-6"> {preparing_time} minutes</td>
      <td className="min-w-24 py-6">{calories} calories</td>
    </tr>
  );
};

// PCart.propTypes = {};

export default PCart;
