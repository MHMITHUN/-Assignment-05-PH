document.getElementById('clearHistory').addEventListener('click', function () {
    const activityLog = document.getElementById('activityLog');
    activityLog.innerHTML = '';
    showEmptyMessage();
});

function showEmptyMessage() {
    const activityLog = document.getElementById('activityLog');
    if (activityLog.children.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'text-gray-500 text-center py-4';
        emptyMessage.textContent = 'No activities found. Start completing tasks!';
        emptyMessage.id = 'emptyMessage';
        activityLog.appendChild(emptyMessage);
    }
}

function addNewActivity(text) {
    const activityLog = document.getElementById('activityLog');
    const emptyMessage = document.getElementById('emptyMessage');

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const newActivity = document.createElement('div');
    newActivity.className = 'border-l-4 border-primary-blue pl-4 py-1';
    newActivity.innerHTML = `<p class="text-gray-700">${text}</p>`;

    activityLog.prepend(newActivity);
}

showEmptyMessage();