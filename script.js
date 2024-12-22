document.getElementById('enterbutton').addEventListener('click', function () {
    const inputs = [
        document.getElementById('artist1').value,
        document.getElementById('artist2').value,
        document.getElementById('artist3').value,
        document.getElementById('artist4').value,
        document.getElementById('artist5').value
    ];
    console.log(inputs);
    document.getElementById('artist1').value = '';
    document.getElementById('artist2').value = '';
    document.getElementById('artist3').value = '';
    document.getElementById('artist4').value = '';
    document.getElementById('artist5').value = '';
});