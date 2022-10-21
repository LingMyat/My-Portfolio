$(document).ready(function(){
    if (localStorage.getItem('theme') === null){
        localStorage.setItem('theme','light')
    };
    if (localStorage.getItem('theme') === 'light'){
        $('#body').removeClass('dark')
    }else{
        $('#body').addClass('dark');
    }

    if ($('#body').hasClass('dark')) {
        $('#dark').addClass('hidden')
    }else{
        $('#light').addClass('hidden')
    }
    $('#dark').click(function(){
        $('#body').addClass('dark');
        $('#dark').addClass('hidden');
        $('#light').removeClass('hidden');
        localStorage.setItem('theme','dark')
    })
    $('#light').click(function(){
        $('#body').removeClass('dark');
        $('#light').addClass('hidden');
        $('#dark').removeClass('hidden');
        localStorage.setItem('theme','light')
    })

    $typing = '';
    $speed = 300;
    $typeWord = ['b','a','c','k','-','e','n','d',' ','d','e','v','e','l','o','p','e','r'];
    $typingFunction = function(){
        for (let i = 0; i < $typeWord.length; i++) {
            $speed += 200;
            setTimeout(function(){
                $typing += $typeWord[i];
                $('#typing').html($typing)
            },$speed);
        }
    }
    $typingFunction();
    setInterval(function(){
        $typing = '';
        $speed = 300;
        $('#typing').html($typing);
        $typingFunction();
    },4200);
    
    let liGroup = document.getElementsByClassName('li-item');
    for (let i = 0; i < liGroup.length; i++) {
        liGroup[i].addEventListener('click',function(e){
            for (let j = 0; j < liGroup.length; j++) {
                liGroup[j].children[0].classList.remove('active');
            }
            e.target.classList.add('active');
            console.log();
        })
        
    }

    $('.nav-toggler').click(function(){
        $('#nav').toggleClass('navPlus ');
    })
})