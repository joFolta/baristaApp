var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
let thumbDown = document.getElementsByClassName("fa-thumbs-down")
let complete = document.getElementsByClassName("fa-pencil-alt")

Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        const  customerName= this.parentNode.parentNode.childNodes[3].innerText
        const order = this.parentNode.parentNode.childNodes[7].innerText
        const completedBy = document.querySelector("#completingBarista").innerText

        console.log("completedBy:",completedBy)
        fetch('cafe', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'customerName':customerName,
            'order':order,
            'completedBy': completedBy
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const customerName = this.parentNode.parentNode.childNodes[3].innerText
        console.log('customerName',customerName)
        const order = this.parentNode.parentNode.childNodes[7].innerText
        console.log('order',order)
        fetch('cafe', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'customerName': customerName,
            'order': order
            })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
