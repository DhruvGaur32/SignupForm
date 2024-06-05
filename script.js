let userCount = 0;

document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
};

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};

function validateForm(data) {
    const namePattern = /^[A-Za-z\s]{5,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordPattern = /.{8,}/;
    const phonePattern = /^\d{10}$/;

    if (!namePattern.test(data.name)) {
        alert('Name must be at least 5 characters long and contain only letters.');
        return false;
    }
    if (!emailPattern.test(data.email)) {
        alert('Email must be a valid Gmail address.');
        return false;
    }
    if (!passwordPattern.test(data.password)) {
        alert('Password must be at least 8 characters long.');
        return false;
    }
    if (data.password !== data.confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }
    if (!phonePattern.test(data.phone)) {
        alert('Phone number must be exactly 10 digits.');
        return false;
    }
    return true;
}

function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        sports: Array.from(document.getElementById('sports').selectedOptions).map(option => option.value)
    };

    if (validateForm(formData)) {
        console.log('Form Data:', formData);
        alert('Signup successful!');
        document.getElementById('modal').style.display = 'none';
        userCount++;
        document.getElementById('userCount').textContent = `Registered Users: ${userCount}`;
    }
}

document.getElementById('themeToggle').onclick = function() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
};

document.body.classList.add('light');
