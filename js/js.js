
//    alert("Hello! I am an alert box!!");
   let mo = document.querySelector('#menubars');
    let vis = document.querySelector('#fix');
    let click = document.querySelector('#rclick'); 
   mo.onclick = () =>{
       vis.classList.toggle('active');
    }
click.onclick = () =>{
      vis.classList.remove('active');
  }


//   revel 


    window.addEventListener('scroll', reveal);

    function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
        }
        else{
        reveals[i].classList.remove('active');
        }
    }
    }

// End revel

// Back to top 
    window.addEventListener('scroll', function(){
      var scroll = document.querySelector('.scrollTop');
      scroll.classList.toggle("active" , window.scrollY > 200);
    })
    function scrolltotop(){
      window.scrollTo({
        top: 0,
        behavior:"smooth"
      })
    }
  
// End back to top

// search
let btnfind = document.querySelector('#serbtn');
let hidebar = document.querySelector('#btnclose');
let navsearch = document.querySelector('.search');

btnfind.onclick = () =>{
    navsearch.classList.toggle('active');

}

hidebar.onclick = () =>{
    navsearch.classList.remove('active');

}
// let menu = document.querySelector('#gets');
//     let menu1= document.querySelector('#gets1');
//     let menu2= document.querySelector('#gets2');
  
//     menu.onclick = () =>{
//         menu.classList.toggle('active');
//         menu1.classList.remove('active');
//         menu2.classList.remove('active');
      
//     }
// Change Imgae funtion by image src


//--------------------------------------------------
//item1
    let myimg = document.querySelector('#myImageb1');
    let popcard = document.querySelector('#popbox');
    let close= document.querySelector('#close');
    myimg.onclick = () =>{
        popcard.classList.toggle('active');
    }
    close.onclick= () =>{
        popcard.classList.remove('active');
    }


//
    $('.small1-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb1');
        $( bigimg).attr('src', image);  
    });
    
    
//pop screen script
    $('.pop-small1-img .popbox img').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let image = $(this).attr('src');
        $('#popimg1').attr('src', image);
    });


// Item2------------------------------------
    $('.small2-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb2');
        $( bigimg).attr('src', image);  
    });
    // pop screen
    let myimg2 = document.querySelector('#myImageb2');
    let popcard2 = document.querySelector('#popbox2');
    let close2= document.querySelector('#close2');
    myimg2.onclick = () =>{
        popcard2.classList.toggle('active');
    }
    close2.onclick= () =>{
        popcard2.classList.remove('active');
    }
    //pop screen script
        $('.pop-small2-img .popbox img').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            let image = $(this).attr('src');
            $('#popimg2').attr('src', image);
        });

// Item3------------------------------------
    $('.small3-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb3');
        $( bigimg).attr('src', image);  
    });

// Item4------------------------------------
    $('.small4-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb4');
        $( bigimg).attr('src', image);  
    });

// Item5------------------------------------
    $('.small5-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb5');
        $( bigimg).attr('src', image);  
    });

// Item6------------------------------------
    $('.small6-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb6');
        $( bigimg).attr('src', image);  
    });

// Item7------------------------------------
    $('.small7-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb7');
        $( bigimg).attr('src', image);  
    });


// Item8------------------------------------
    $('.small8-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb8');
        $( bigimg).attr('src', image);  
    });

// Item9------------------------------------
    $('.small9-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb9');
        $( bigimg).attr('src', image);  
    });

// Item10------------------------------------
    $('.small10-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb10');
        $( bigimg).attr('src', image);  
    });

// Item11------------------------------------
    $('.small11-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb11');
        $( bigimg).attr('src', image);  
    });

// Item12------------------------------------
    $('.small12-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb12');
        $( bigimg).attr('src', image);  
    });

// Item13------------------------------------
    $('.small13-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb13');
        $( bigimg).attr('src', image);  
    });

// Item14------------------------------------
    $('.small14-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb14');
        $( bigimg).attr('src', image);  
    });

// Item15------------------------------------
    $('.small15-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb15');
        $( bigimg).attr('src', image);  
    });

// Item16------------------------------------
    $('.small16-img .box img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        let bigimg =$('#myImageb16');
        $( bigimg).attr('src', image);  
    });