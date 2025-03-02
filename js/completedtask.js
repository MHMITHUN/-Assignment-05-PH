document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.trim() === 'Completed') {
            button.addEventListener('click', function (e) {
                alert('Board Updated Successfully');

                const taskAssignedElement = document.querySelector('.bg-gray-100 .text-3xl');
                let currentTasks = parseInt(taskAssignedElement.textContent);
                if (!isNaN(currentTasks)) {
                    currentTasks = Math.max(currentTasks - 1, 0);
                    taskAssignedElement.textContent = currentTasks || 'No Task';
                }

                const completedCountElement = document.querySelector('.flex.items-center.mr-4 span.text-2xl');
                let completedCount = parseInt(completedCountElement.textContent) || 0;
                completedCountElement.textContent = ++completedCount;

                const taskCard = this.closest('.bg-gray-50');
                const taskName = taskCard.querySelector('h3').textContent;

                const now = new Date();
                const time = now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });

                const activityLog = document.querySelector('.space-y-6');
                const existingMessage = activityLog.querySelector('.text-center.py-4.text-gray-500');
                if (existingMessage) existingMessage.remove();

                const newEntry = document.createElement('div');
                newEntry.className = 'border-l-4 border-primary-blue pl-4 py-1';
                newEntry.innerHTML = `
                    <p class="text-gray-700">
                        You have Completed The Task <strong>${taskName}</strong> at ${time}
                    </p>
                `;
                activityLog.prepend(newEntry);

                this.disabled = true;
                this.classList.remove('bg-primary-blue', 'bg-completed-blue', 'text-white', 'text-primary-blue');
                this.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');

                const totalTasks = document.querySelectorAll('.bg-gray-50 button').length;
                const completedTasks = document.querySelectorAll('.bg-gray-50 button:disabled').length;
                if (completedTasks === totalTasks) {
                    alert('Congrats!!! You Have Completed All the current tasks.');
                }
            });
        }
    });
});