import ArtImage from './ArtImage';

export default function ProductCard({ name, meta, mood, price, image, gradientClass }) {
  return (
    <div>
      <div className="card-frame">
        <ArtImage src={image} alt={name} gradientClass={gradientClass} />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-meta">{meta}</div>
      <div className="product-mood">{mood}</div>
      <div className="product-row">
        <span className="price">{price}</span>
        {/* Wire this up to real cart logic — it's just a label for now */}
        <button className="add" type="button">Add to cart</button>
      </div>
    </div>
  );
}
