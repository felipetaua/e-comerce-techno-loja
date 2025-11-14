(function(){
    const checkbox = document.getElementById('theme-toggle');
    if(!checkbox) return;

    function applyTheme(theme){
        if(theme === 'dark'){
            document.body.classList.add('dark-theme');
            checkbox.checked = true;
        } else {
            document.body.classList.remove('dark-theme');
            checkbox.checked = false;
        }
    }

    const saved = localStorage.getItem('theme');
    if(saved){
        applyTheme(saved);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    checkbox.addEventListener('change', ()=>{
        const newTheme = checkbox.checked ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
})();
