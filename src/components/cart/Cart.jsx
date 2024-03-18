import { useState } from "react";
import SCart from "../sCart/SCart";
import PCart from "../pCart/PCart";
import toast, { Toaster } from "react-hot-toast";

const Cart = ({ carts, setCart }) => {
  const [pCarts, setPCarts] = useState([]);

  const addToPrepare = (pCart) => {
    const isExist = pCarts.find((p) => p.recipe_id === pCart.recipe_id);
    if (!isExist) {
      const removeCart = carts.filter(
        (Cart) => Cart.recipe_id != pCart.recipe_id
      );
      setCart(removeCart);
      setPCarts([...pCarts, pCart]);
    } else {
      toast("Item already added to cooking");
    }
  };

  return (
    <div className="p-5 border-2 rounded-lg">
      <Toaster />
      <div className="w-full">
        <div className="mb-3">
          <h2 className="text-2xl font-bold text-center">
            Want to cook : {carts.length}
          </h2>
        </div>
        <hr />
        <div className="mt-3">
          <table className="mx-auto">
            <tbody>
              <tr className="text-stone-500">
                <td className="min-w-10 py-4"></td>
                <td className="min-w-24 py-4">Name</td>
                <td className="min-w-24 py-4">Time</td>
                <td className="min-w-24 py-4">Calories</td>
              </tr>
              {carts.map((cart, idx) => (
                <SCart
                  key={idx}
                  idx={idx}
                  cart={cart}
                  addToPrepare={addToPrepare}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="mb-3">
          <h2 className="text-2xl font-bold text-center">
            Currently cooking: {pCarts.length}
          </h2>
        </div>
        <hr />
        <div className="mt-3">
          <table className="mx-auto">
            <tbody>
              <tr className="text-stone-500">
                <td className="min-w-10 py-4"></td>
                <td className="min-w-24 py-4">Name</td>
                <td className="min-w-24 py-4">Time</td>
                <td className="min-w-24 py-4">Calories</td>
              </tr>
              {pCarts.map((pCart, idx) => {
                return <PCart key={idx} idx={idx} pCart={pCart} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
