const SCart = ({ cart, idx, addToPrepare }) => {
  const { recipe_name, preparing_time, calories } = cart;

  return (
    <tr className="text-slate-600 bg-stone-100">
      <td className="min-w-10 py-6">{idx + 1}</td>
      <td className="min-w-24 py-6">{recipe_name.slice(0, 10)}</td>
      <td className="min-w-24 py-6">{preparing_time} minutes</td>
      <td className="min-w-24 py-6">{calories} calories</td>
      <td>
        <button onClick={() => addToPrepare(cart)} className="btn bg-green-500">
          preparing
        </button>
      </td>
    </tr>
  );
};

export default SCart;
