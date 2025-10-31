import { statusList } from '../../helpers/variables'

const SidebarNav = ({ selectedStatus, setSelectedStatus }) => {

	const statusFilter = (e) => {
		setSelectedStatus(e.dataset.value)
		e.className = "btn btn-dark"
	}

	return (
		<div className="left-panel__navigation">
			<div className="left-panel__navigation-title">Заявки</div>
			<ul>
				{statusList.map((status) => {
					return (
						<li key={status.id}>
							<a
								onClick={(e) => { statusFilter(e.target) }}
								data-value={status.value}
								data-role="left-status"
								className={status.value == selectedStatus ? "active" : ""}
							>
								{status.title}
							</a>
						</li>)
				})}
			</ul>
		</div>
	)
}

export default SidebarNav