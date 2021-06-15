document.querySelectorAll('.distant-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
        document.getElementById(this.dataset.target).classList.toggle('on');
    });

    trigger.addEventListener('blur', function () {
        document.getElementById(this.dataset.target).classList.remove('on');
    });
});
