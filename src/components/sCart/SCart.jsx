// SCart.jsx

// import PropTypes from 'prop-types'

const SCart = ({ cart, idx }) => {
  // Destructure properties from cart
  const { recipe_name, preparing_time, calories } = cart;

  return (
    <tr className="text-slate-600 bg-stone-200">
      <td className="min-w-10">{idx + 1}</td>
      <td className="min-w-24">{recipe_name.slice(0, 10)}</td>
      <td className="min-w-24">{preparing_time} minutes</td>
      <td className="min-w-24">{calories} calories</td>
      <td>
        <button className="btn bg-green-500">preparing</button>
      </td>
    </tr>
  );
};

// SCart.propTypes = {}

export default SCart;
