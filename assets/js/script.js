var gifBtn1 = document.getElementById('gif1')
var gifBtn2 = document.getElementById('gif2')
var gifBtn3 = document.getElementById('gif3')
var displayGifs = $('.showGif')

//add event listeners
gifBtn1.addEventListener('click', function (event) {
    console.log(event);
    displayGifs.empty();
    
    createImg = $('<img>');
    createImg.attr('src', "./assets/images/Sample repo images/gifs/PokeBattler.gif");
    createImg.attr('alt', "Three word history demo");
    createImg.attr('style', "max-width: 100%;");
    createImg.addClass('exampleGif');

    displayGifs.append(createImg);
})

gifBtn2.addEventListener('click', function (event) {
    console.log(event);
    displayGifs.empty();
    
    createImg = $('<img>');
    createImg.attr('src', "./assets/images/Sample repo images/gifs/weather_dashboard_example.gif");
    createImg.attr('alt', "weather dashboard gif");
    createImg.attr('style', "max-width: 100%;");
    createImg.addClass('exampleGif');

    displayGifs.append(createImg);
})

gifBtn3.addEventListener('click', function (event) {
    console.log(event);
    displayGifs.empty();
    
    createImg = $('<img>');
    createImg.attr('src', "./assets/images/Sample repo images/gifs/tech_blog.gif");
    createImg.attr('alt', "codequizchallenge gif");
    createImg.attr('style', "max-width: 100%;");
    createImg.addClass('exampleGif');

    displayGifs.append(createImg);
})