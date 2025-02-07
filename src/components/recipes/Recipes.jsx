import Items from "../items/Items";
import Cart from "../cart/Cart";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Recipes = () => {
  const [carts, setCart] = useState([]);

  function addToCook(pd) {
    const isExists = carts.find((p) => p.recipe_id == pd.recipe_id);
    if (!isExists) {
      setCart([...carts, pd]);
    } else {
      toast.success("Item already added to preparing");
    }
  }
  return (
    <main>
      <Toaster />
      <div className="mt-24 md:p-0 px-4 mb-12 md:w-[623px] text-center mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Our Recipes</h2>
        <p className="text-stone-500 ">
          Our recipes fuse diverse culinary traditions, offering innovative
          twists on classics for every occasion, prioritizing fresh ingredients
          and simple yet elegant techniques.
        </p>
      </div>
      <div className="md:flex">
        <Items addToCook={addToCook}></Items>
        <Cart carts={carts} setCart={setCart}></Cart>
      </div>
    </main>
  );
};

export default Recipes;
