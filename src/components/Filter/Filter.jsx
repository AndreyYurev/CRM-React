import FilterByStatus from "../FilterByStatus/FilterByStatus"
import FilterByProduct from "../FilterByProduct/FilterByProduct"

const Filter = ({ selectedStatus, setSelectedStatus, selectedProduct, setSelectedProduct }) => {
	return (
		<form action="">
			<div className="row mb-3 justify-content-start">
				<div className="col">
					<FilterByStatus
						selectedStatus={selectedStatus}
						setSelectedStatus={setSelectedStatus}
					/>
				</div>
				<div className="col">
					<FilterByProduct
						selectedProduct={selectedProduct}
						setSelectedProduct={setSelectedProduct}
					/>
				</div>
			</div>
		</form>
	)
}

export default Filter