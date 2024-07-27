const loginForm = document.querySelector('#form');

function submitLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const name = formData.get('name');
    const password = formData.get('password');
    const email = formData.get('email');
    console.log("Name: ", name);
    console.log("Password: ", password);
    console.log("Email: ", email);
}
loginForm.addEventListener('submit', submitLogin);
