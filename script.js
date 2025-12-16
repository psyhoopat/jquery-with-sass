$(document).ready(function() {
    console.log("Ready JQuery")
});

$('.title').css('color', 'green')
$('.box').css('position', 'relative')

$('.box').animate({ left: "180px" }, 900, () => { 
    console.log('animation complete') 
    $('.box').animate({ width: "300px" }, 1000, () => console.log('animation complete'))
});

$('#btn').on('click', (event) => {
    event.target.disabled = true
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos/1",
        method: "GET",
        dataType: "json",
        success: function(data) {
            $('#post1').html(`
                <img src="${data.url}" alt="img" />
                <p>${data.title}</p>
            `)
            console.log(data)
        }
    })
})