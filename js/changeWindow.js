
if (document.getElementById('blogCard')) {
    document.getElementById('blogCard').addEventListener('click', function () {
        window.location.href = 'blog.html';
    });
}

if (document.getElementById('backToDesk')) {
    document.getElementById('backToDesk').addEventListener('click', function () {
        window.location.assign('index.html');
    });
}