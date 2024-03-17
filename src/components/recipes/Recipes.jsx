// import PropTypes from "prop-types";
import Items from "../items/Items";
const Recipes = () => {
  return (
    <main>
      <div className="pt-24 pb-12 w-[623px] text-center mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Our Recipes</h2>
        <p className="text-stone-500 ">
          Our recipes fuse diverse culinary traditions, offering innovative
          twists on classics for every occasion, prioritizing fresh ingredients
          and simple yet elegant techniques.
        </p>
      </div>
      <Items></Items>
    </main>
  );
};

// Recipes.propTypes = {
//   props: PropTypes.func,
// };

export default Recipes;
