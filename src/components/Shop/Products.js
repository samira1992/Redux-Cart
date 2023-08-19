import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMYPRODUCTS = [
  { id: "p1", price: 6, title: "MyBook", description: "First Book" },
  { id: "p2", price: 6, title: "Paper", description: "paper" },
  { id: "p3", price: 10, title: "Novel", description: "Novel Book" },
  { id: "p4", price: 8, title: "Pencil", description: "pencil" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
