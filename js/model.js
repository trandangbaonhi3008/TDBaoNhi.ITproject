  
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 3; i++) {
        let container = document.getElementById('container' + i)
        let oldImage = document.getElementById('image' + i).src
        let modalContainer = document.getElementById('modalContainer')
        container.addEventListener('click', () => {
            let netModal = document.createElement('div')
            netModal.setAttribute('class', 'modal')
            netModal.setAttribute('style', 'padding-top:60px')
            let img = document.createElement('img')
            img.setAttribute('class', 'modal-content')
            img.setAttribute('src', oldImage)
            netModal.appendChild(img)
            modalContainer.appendChild(netModal)
            netModal.style.display = 'flex'
            window.onclick = function(event) {
                if (event.target == netModal) {
                    netModal.style.display = 'none'
                }
            }
        })


    }



})