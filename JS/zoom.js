document.addEventListener('DOMContentLoaded', () => {
    const handleKeyDown = (event) => {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
            event.preventDefault();
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    window.addEventListener('beforeunload', () => {
        window.removeEventListener('keydown', handleKeyDown);
    });
});