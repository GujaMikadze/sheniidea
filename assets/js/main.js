

$( document ).ready(function() {
    function imageSelector(input, elem) {
        var image_input = document.querySelector(input);
        image_input.addEventListener("change", function() {
        var reader = new FileReader();
        reader.addEventListener("load", () => {
            var uploaded_image = reader.result;
            document.querySelector(elem).style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
        });
    }

    imageSelector("#image_input", "#display_image");
    imageSelector("#image_input2", "#display_image2");
    imageSelector("#image_input3", "#display_image3");
    imageSelector("#image_input4", "#display_image4");
    imageSelector("#image_input5", "#display_image5");


    // Select Design
    $("select").on("change", function() {
        if($(this).prop('value') === 'design-1') {
            var src1 = 'url("assets/images/Team.png")';
            var src2 = 'url("assets/images/Team2.png")';
            var src3 = 'url("assets/images/Team3.png")';
            var src4 = 'url("assets/images/Team4.png")';
            var src5 = 'url("assets/images/Team5.png")';
            $("#display_image").css("background-image", src1);
            $("#display_image2").css("background-image", src2);
            $("#display_image3").css("background-image", src3);
            $("#display_image4").css("background-image", src4);
            $("#display_image5").css("background-image", src5);
            
        } else if($(this).prop('value') === 'design-2') {
            var src1 = 'url("assets/images/111.jpg")';
            $("#display_image").css("background-image", src1);
            $("#display_image2").css("background-image", src1);
            $("#display_image3").css("background-image", src1);
            $("#display_image4").css("background-image", src1);
            $("#display_image5").css("background-image", src1);
            console.log("design 2");
        } else if($(this).prop('value') === 'design-3') {
            console.log("design 3");
        }  else if($(this).prop('value') === 'design-4') {
            console.log("design 4");
        }
        else if($(this).prop('value') === 'design-5') {
            console.log("design 5");
        }
        else if($(this).prop('value') === 'design-6') {
            console.log("design 6");
        }

    });
});