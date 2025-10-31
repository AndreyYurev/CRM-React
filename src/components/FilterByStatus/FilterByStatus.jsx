import { statusList } from '../../helpers/variables'

const FilterByStatus = ({ selectedStatus, setSelectedStatus }) => {
	const statusFilter = (e) => {
		setSelectedStatus(e.dataset.value)
		// e.className = "btn btn-dark"
	}
	return (
		<div id="FilterByStatus" className="btn-group" role="group" aria-label="...">
			{statusList.map((status) => {
				return (
					<a
						key={status.value}
						onClick={(e) => { statusFilter(e.target) }}
						className={status.value === selectedStatus ? "btn btn-dark" : "btn btn-light"}
						data-value={status.value}
					>
						{status.title}
					</a>
				)
			})}
		</div>
	)
}

export default FilterByStatus