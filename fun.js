document.getElementById("form").addEventListener("submit", function myname(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confoempaswd = document.getElementById("password2").value;

  if (password.length < 8 || confoempaswd.length < 8) {
    document.getElementById("pw").innerHTML =
      "**Password length must be at least 8 characters";
    return false;
  }

  if (password !== confoempaswd) {
    document.getElementById("pwd").innerHTML = "**Passwords do not match";
    return false;
  }

  let validnAME = /^[a-z0-9_\.]+$/;
  let vaildemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  let valifoempaswd = /^[A-Za-z]\w{7,14}$/;

  let isValid = false;

  if (!username.match(validnAME)) {
    isValid = true;
  } else if (!email.match(vaildemail)) {
    isValid = true;
  } else if (!password.match(validpassword)) {
    isValid = true;
  } else if (!confoempaswd.match(valifoempaswd)) {
    isValid = true;
  }

  var existingData = JSON.parse(localStorage.getItem("user")) || [];

  if (existingData.some((user) => user.email === email)) {
    alert("Email already stored");
    return false;
  }

  // if (existingData.some(user => user.password === password  || user.confoempaswd === confoempaswd)) {
  //   alert('pasward already taken');
  //   return false;
  // }

  if (existingData.some((user) => user.name === username)) {
    alert("usename already stored");
    return false;
  }

  if (isValid) {
    const user = {
      name: username,
      email: email,
      password: password,
    };

    existingData.push(user);
    localStorage.setItem("user", JSON.stringify(existingData));
    document.getElementById("form").reset();
  }
});

function Toggle() {
  let temp = document.getElementById("password");
  if (temp.type === "password") {
    temp.type = "text";
  } else {
    temp.type = "password";
  }
}
function toggle2() {
  let temp2 = document.getElementById("password2");
  if (temp2.type === "password") {
    temp2.type = "text";
  } else {
    temp2.type = "password";
  }
}
