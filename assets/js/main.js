var contactModal = document.querySelector('#contactModal')
contactModal.style.display = 'none';
contactModal.classList.add('animate__animated')

function showContactModal(){
  contactModal.style.display = 'flex';
  contactModal.classList.remove('animate__fadeOut')
  contactModal.classList.add('animate__fadeIn')
}

function hideContactModal(){
  contactModal.classList.remove('animate__fadeIn')
  contactModal.classList.add('animate__fadeOut')

  setTimeout(()=>{
    contactModal.style.display = 'none';
  },1000)
}
