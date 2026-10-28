const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

const sidebarToggle = document.getElementById('sidebar-active');

document.querySelectorAll('.links-container a').forEach(link => {
    link.addEventListener('click', () => {
        sidebarToggle.checked = false;
    });
});

document.querySelectorAll('.links-container a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        sidebarToggle.checked = false;
    });
});

const tabs = document.querySelectorAll('.tab');
const grids = document.querySelectorAll('.project-grid');
 
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.setAttribute('aria-pressed', t === tab));
            grids.forEach(grid => { grid.hidden = grid.id !== tab.dataset.target; });
        });
    });

// To fix a browser load issue
window.addEventListener('load', () => {
    if (toggle.checked) {
        webProjects.style.display = 'none';
        uxProjects.style.display = 'block';
        designLabel.style.backgroundColor = 'black';
        designLabel.style.color = 'white';
        webLabel.style.backgroundColor = 'white';
        webLabel.style.color = 'black';
    } else {
        webProjects.style.display = 'flex';
        uxProjects.style.display = 'none';
        webLabel.style.backgroundColor = 'black';
        webLabel.style.color = 'white';
        designLabel.style.backgroundColor = 'white';
        designLabel.style.color = 'black';
    }
});