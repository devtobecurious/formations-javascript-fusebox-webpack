const button = document.getElementById('clickme');

button.addEventListener('click', (e) => {
    import('jquery').then(($) => {
        $('body').css('backgroundColor', '#00FF00');
    })
})