import SidebarNav from "../SidebarNav/SidebarNav"

const Sidebar = ({ selectedStatus, setSelectedStatus }) => {
	return (
		<div className="left-panel blue-skin">
			<div className="left-panel__logo">
				<div className="left-panel__logo-title">CRM заявки</div>
				<div className="left-panel__logo-subtitle">учебный проект webcademy</div>
			</div>
			<div className="left-panel__user clearfix">
				<div className="left-panel__user-photo">
					<img src="img/avatars/avatar-128.jpg" alt="Avatar" />
				</div>
				<div className="left-panel__user-name">Андрей <br />Николаевич</div>
			</div>
			<SidebarNav
				selectedStatus={selectedStatus}
				setSelectedStatus={setSelectedStatus}
			/>
		</div>
	)
}

export default Sidebar


