import React from 'react'

// JSX = Javascript XHTML
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h2>Halo, {formatName(user)}. <br/> Selamat Datang</h2>;
  }
  return <h2>Halo, Selamat Datang... Anda adalah Pengunjung Baru kami</h2>;
}

const user = {
  firstName: 'Dony',
  lastName: 'Putra'
};

//Arrow Function ES6
const myCode = () => {
  return (
  	<div>
	  <h2>
	    Halo, {formatName(user)}. 
	    <br/>
	    Selamat Datang...
	  </h2>
	  <hr/>
	  <div>{getGreeting(!user)}</div>
  	</div>
  );

}

export default myCode