
window.addEventListener('click', function(event) {
    if (document.getElementById('box').contains(event.target)) {
      return
    } else {
        location.reload();
    }
  })