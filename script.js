function modal() {
    var modal = document.createElement('div');
    modal.id = 'modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%,-50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '50px';
    modal.style.border = '1px solid black';
    modal.style.borderRadius = '5px';
    modal.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';
    document.body.appendChild(modal);
    var img = document.createElement('img');
    img.src = 'https://picsum.photos/600/400';
    img.style.width = '100%';
    modal.appendChild(img);

    document.getElementById("button2").addEventListener("click", function() {
      document.getElementById("modal").style.display = "none";
    });
}
