import { useState } from "react"
import { serverPath } from "../../helpers/variables"

const CreateBidForm = () => {

	class ExampleItem {
		constructor(name, phone, email, product) {
			this.userName = name
			this.userPhone = phone
			this.userEmail = email
			this.userProduct = product
		}
	}

	const testData = [
		new ExampleItem('Сазонов Захар', parseInt('+79996335756'), 'CrackedYokeCode@gmail.com', 'course-js'),
		new ExampleItem('Николаев Вилен', parseInt('+79994597709'), 'StoreErase@gmail.com', 'course-vue'),
		new ExampleItem('Дементьев Анатолий', parseInt('+79999759153'), 'GameSlashMind@gmail.com', 'course-html'),
		new ExampleItem('Туров Модест', parseInt('+79991950443'), 'MagnumFutureUniverse@gmail.com', 'course-js'),
		new ExampleItem('Яковлев Аввакум', parseInt('+79997765238'), 'CultRange@gmail.com', 'course-wordpress'),
		new ExampleItem('Сысоева Чеслава', parseInt('+79998756755'), 'SquareMoney@gmail.com', 'course-php'),
		new ExampleItem('Федотова Дария', parseInt('+79992163703'), 'DeathCodeCrowd@gmail.com', 'course-wordpress'),
		new ExampleItem('Медведева Амина', parseInt('+79999894235'), 'MulePower@gmail.com', 'course-js'),
		new ExampleItem('Иванкова Сабрина', parseInt('+79991253531'), 'RottenBanditExistence@gmail.com', 'course-php'),
		new ExampleItem('Ермакова Триана', parseInt('+79991609266'), 'SithFlyingHurdle@gmail.com', 'course-vue'),
	]

	function getRandomIndex(max) {
		return Math.floor(Math.random() * max)
	}

	function getRandomData() {
		const index = getRandomIndex(testData.length)
		return testData[index];
	}

	function randomizeUser() {
		getRandomData()
		setUserName(getRandomData().userName)
		setUserPhone(getRandomData().userPhone)
		setUserEmail(getRandomData().userEmail)
		setUserProduct(getRandomData().userProduct)
	}

	const [userName, setUserName] = useState(getRandomData().userName)
	const [userPhone, setUserPhone] = useState(getRandomData().userPhone)
	const [userEmail, setUserEmail] = useState(getRandomData().userEmail)
	const [userProduct, setUserProduct] = useState(getRandomData().userProduct)

	// Обработчик формы
	const submitForm = (e) => {
		e.preventDefault()
		randomizeUser()
		const status = "new"
		const date = new Date().toLocaleString()
		const id = 0
		const newRequest = { id, userName, userPhone, userEmail, userProduct, status, date }

		fetch(serverPath, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newRequest),
		}).then(() => {
			console.log('Заявка успешно добавлена');
		});
	};

	return (
		<form id="form" method="POST" action="" onSubmit={submitForm}>
			<label>Ваши данные:</label>
			<div className="form-group">
				<input
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value)
					}}
					id="name"
					type="text"
					name="name"
					autoComplete="on"
					className="form-control"
					placeholder="Имя и Фамилия"
					required
				/>
			</div>
			<div className="form-group">
				<input
					value={userPhone}
					onChange={(e) => {
						setUserPhone(e.target.value)
					}}
					id="phone"
					type="text"
					name="phone"
					autoComplete="on"
					className="form-control"
					placeholder="Телефон"
				/>
			</div>
			<div className="form-group">
				<input
					value={userEmail}
					onChange={(e) => {
						setUserEmail(e.target.value)
					}}
					id="email"
					type="email"
					name="email"
					autoComplete="on"
					className="form-control"
					placeholder="Email"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="product">Продукт:</label>
				<select
					value={userProduct}
					onChange={(e) => {
						setUserProduct(e.target.value)
					}}
					name="product"
					className="form-control"
					id="product"
				>
					<option value="course-html">Курс по верстке</option>
					<option value="course-js">Курс по JavaScript</option>
					<option value="course-vue">Курс по VUE JS</option>
					<option value="course-php">Курс по PHP</option>
					<option value="course-wordpress">Курс по WordPress</option>
				</select>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
			</div>
		</form>
	);
}

export default CreateBidForm;
