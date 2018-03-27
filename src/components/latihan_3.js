import React, { Component } from 'react'

// ES6 Class Syntax
export default class myProfile extends Component {

	render() {

		const namaLengkap = "Dony Putra"
		const Domisili = "Jakarta Pusat"
		const NoTelp = "0813-8118-7766"
		const email = "republicvirgo@gmail.com"

		return (
			<div>
				<ol>
					<li>Nama: {namaLengkap}</li>
					<li>Domisili: {Domisili}</li>
					<li>Telp: {NoTelp}</li>
					<li>Email: {email}</li>
				</ol>
			</div>
		);
	}
}

//export default myProfile