const btn = document.getElementById('btn');
const birthdayDate = document.getElementById('birth-date');
const result = document.getElementById('result');

function calculateAge() {
    const time = birthdayDate.value;
    if (time === "") {
        alert("Please enter your birth date first!!");
    } else if (new Date(time) > new Date()) {
        alert("Birthday cannot be in the future!");
    } else {
        const { years, months, days } = getDetailedAge(time);
        result.innerText = `Your age is ${years} ${years > 1 ? "Years" : "Year"}, ${months} ${months > 1 ? "Months" : "Month"}, and ${days} ${days > 1 ? "Days" : "Day"} old`;
    }
}

function getDetailedAge(time) {
    const today = new Date();
    const birthDate = new Date(time);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (new Date(time) > new Date()) {
    alert("Birthday cannot be in the future!");
    return;
}


    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

btn.addEventListener('click', calculateAge);

birthdayDate.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateAge();
});