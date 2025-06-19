import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      className="group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03 }}
    >
      <div className="bg-secondary-light dark:bg-secondary-dark rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-text-light dark:text-text-dark">{product.name}</h3>
        <p className="text-text-muted-light dark:text-text-muted-dark">{product.price}</p>
      </div>
    </motion.div>
  );
}