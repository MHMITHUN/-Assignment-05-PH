function updateLiveDate() {
    const date = new Date();

    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

    const fullDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).replace(',', '');

    const dateContainer = document.querySelector('.bg-gray-100.rounded-xl.p-4 .text-right');
    dateContainer.querySelector('.text-gray-500').textContent = `${weekday} ,`;
    dateContainer.querySelector('.text-lg.font-semibold').textContent = fullDate;
}


updateLiveDate();
setInterval(updateLiveDate, 1000);