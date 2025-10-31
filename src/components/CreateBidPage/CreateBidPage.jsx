import CreateBidForm from "../CreateBidForm/CreateBidForm"

const CreateBidPage = () => {
	document.querySelector('body').classList = 'with-nav radial-bg flex-center'

	return (
		<div className="white-plate white-plate--payment">
			<div className="container-fluid">
				<div className="white-plate__header text-center">
					<p className="white-plate__logo">
						<span>Форма</span> заявок
					</p>
				</div>
				<div className="white-plate__line-between white-plate__line-between--main"></div>
				<CreateBidForm />
			</div>
		</div>

	);
}

export default CreateBidPage;