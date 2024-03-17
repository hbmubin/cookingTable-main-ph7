// import PropTypes from 'prop-types'
import SCart from "../sCart/SCart";

const Cart = ({ carts }) => {
  return (
    <div className="p-5 border-2 rounded-lg">
      <div className="w-full">
        <div className="mb-3">
          <h2 className="text-2xl font-bold text-center">
            Want to cook : {carts.length}
          </h2>
        </div>
        <hr />
        <div className="mt-3">
          <table className="">
            <tbody className="flex flex-col gap-3">
              <tr className="text-stone-500">
                <td className="min-w-10"></td>
                <td className="min-w-24">Name</td>
                <td className="min-w-24">Time</td>
                <td className="min-w-24">Calories</td>
              </tr>
              {carts.map((cart, idx) => (
                <SCart idx={idx} key={idx} cart={cart}></SCart>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
