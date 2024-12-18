document.getElementById('schedule-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('movie-title').value;
    const date = document.getElementById('schedule-date').value;
    const time = document.getElementById('schedule-time').value;

    const scheduledMovie = { title, date, time };
    let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    schedule.push(scheduledMovie);
    localStorage.setItem('schedule', JSON.stringify(schedule));

    renderSchedule();
    alert('Movie Scheduled Successfully!');
    e.target.reset();
});

const renderSchedule = () => {
    const scheduleList = document.querySelector('#schedule-list ul');
    const schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    scheduleList.innerHTML = '';
    schedule.forEach((movie, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${movie.title}</strong> - ${movie.date} at ${movie.time}
            <button data-index="${index}" class="btn btn-delete">Remove</button>
        `;
        scheduleList.appendChild(li);
    });
};

document.querySelector('#schedule-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const index = e.target.dataset.index;
        let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
        schedule.splice(index, 1);
        localStorage.setItem('schedule', JSON.stringify(schedule));
        renderSchedule();
    }
});

window.onload = renderSchedule;
