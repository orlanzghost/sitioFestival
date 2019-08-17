window.onscroll = (e) => {
    const scroll = window.scrollY;

    const header = document.querySelector('#navegacion-principal');
    if (scroll > 300) {
        console.log('Te pasaste de los 300');
        header.classList.add('bg-success');
    } else {
        console.log('Aun no pasas de los 300');
        header.classList.remove('bg-success');
    }
}