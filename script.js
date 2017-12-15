var crowbar = false 

document.onload = new function () {
    setScene(1)
}

function setScene(scene) {
    document.getElementById('0').setAttribute('style', "display: none")
    document.getElementById('1').setAttribute('style', "display: none")
    document.getElementById('2').setAttribute('style', "display: none")
    document.getElementById('3').setAttribute('style', "display: none")
    document.getElementById('4').setAttribute('style', "display: none")
    document.getElementById('5').setAttribute('style', "display: none")
    document.getElementById('6').setAttribute('style', "display: none")
    document.getElementById('7').setAttribute('style', "display: none")
    document.getElementById('8').setAttribute('style', "display: none")
    document.getElementById('9').setAttribute('style', "display: none")
    document.getElementById('10').setAttribute('style', "display: none")
    
    switch(scene) {
        case 0: 
            document.getElementById("0").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image5.jpg'); background-size: 1920px 1080px;")
        break;

        case 1: 
            document.getElementById("1").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('https://cdn3.vox-cdn.com/uploads/chorus_asset/file/6384023/Outlast2-Canyon.0.jpg')")
        break;

        case 2:
            document.getElementById("2").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image3.jpg')")
        break;

        case 3:
            document.getElementById("3").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('http://www.mobygames.com/images/promo/original/947205da1f044e7f830fad7455d7173a.jpg')")
        break;

        case 4:
            document.getElementById("4").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image1.jpg')")
        break;

        case 5:
            document.getElementById("5").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image2.jpg')")
            if (crowbar == true) {
                document.getElementById("button7").setAttribute("style", "display: block")  
            } else {
                document.getElementById("button7").setAttribute("style", "display: none")
            }
        break;

        case 6:
            document.getElementById("6").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image7.jpg')")
        break;

        case 7:
            document.getElementById("7").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image10.jpg')")
        break;

        case 8:
            document.getElementById("8").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image9.png')")
        break;

        case 9: 
            document.getElementById("9").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('image6.jpg'); background-size: 1920px 1080px;")
        break;

        case 10: 
            document.getElementById("10").setAttribute("style", "display: block")
            document.getElementById("body").setAttribute("style", "background-image: url('https://cdn3.vox-cdn.com/uploads/chorus_asset/file/6384023/Outlast2-Canyon.0.jpg'); background-size: 1920px 1080px;")
        break;

        case -1: 
        if(crowbar == false) {
            crowbar = true;
            alert("You picked up the crowbar");
        }else{
            alert("you already picked up the crowbar");
        }
        setScene(8) 

    }
}

var letter = 0;
var split;

function addLine(line) {

    document.getElementById("text").innerHTML+="\n"
    split = line.split("");
    letter = 0;
    animation(0);

}

function animation(timeStamp) {

    if(split.length>letter) {
    
        document.getElementById("text").innerHTML += split[letter];
        letter++;
    
        requestAnimationFrame(animation);
    }
}