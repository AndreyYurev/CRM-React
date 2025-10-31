// import { productList } from '../../helpers/variables';

// const FilterByProduct = ({ selectedProduct, setSelectedProduct }) => {
// 	const productSelected = (e) => {
// 		setSelectedProduct(e)
// 	}
// 	return (
// 		<select onChange={(e) => { productSelected(e.target.value) }} className="custom-select" id="productSelect" defaultValue={"all"}>
// 			{productList.map((product) => {
// 				return <option value={product.value} key={product.id} >{product.title}</option>
// 			})}
// 		</select>
// 	);
// }

// export default FilterByProduct;


import { productList } from '../../helpers/variables';

const FilterByProduct = ({ selectedProduct, setSelectedProduct }) => {
	const productSelected = (e) => {
		setSelectedProduct(e.target.value);
	};

	return (
		<select
			value={selectedProduct}
			onChange={productSelected} // ← передаём всё событие
			className="custom-select"
			id="productSelect"
		// defaultValue={"all"} ← УДАЛЕНО
		>
			{productList.map((product) => (
				<option value={product.value} key={product.id}>
					{product.title}
				</option>
			))}
		</select>
	);
};

export default FilterByProduct;