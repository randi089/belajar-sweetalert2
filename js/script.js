const tombol = document.querySelector('#tombol');
tombol.addEventListener('click', function() {
    new Swal({
        title: 'Hello World!',
        text: 'Latihan SweetAlert2',
        icon: 'warning'
    });
});