var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_img_width=50;
block_img_height=50;

player_object="";
block_object="";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function (Img)
    {
     player_object=Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(150);
     player_object.set({
         top:player_y,
         left:player_x
     });
     canvas.add(player_object);
    })
}

function blockUpdate(get_image)
{
    fabric.Image.fromURL(get_image, function(img)
    {
     block_object=img;
     block_object.scaleToWidth(block_img_width);
     block_object.scaleToHeight(block_img_height);
     block_object.set({
     top:player_y,
     left:player_x
     });
     canvas.add(block_object);
    })
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=='80')
    {
        block_img_height=block_img_height+10;
        block_img_width=block_img_width+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && keypressed=='77')
    {
        block_img_height=block_img_height-10;
        block_img_width=block_img_width-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keypressed=='37')
    {
        left();
        console.log('left key is pressed');
    }

    if(keypressed=='38')
    {
        up();
        console.log('up key is pressed');
    }

    if(keypressed=='39')
    {
        right();
        console.log('right key is pressed');
    }

    if(keypressed=='40')
    {
        down();
        console.log('down key is pressed');
    }

    if(keypressed=='87')
    {
        blockUpdate("wall.jpg");
    }

    if(keypressed=='84')
    {
        blockUpdate("trunk.jpg");

    }

    if(keypressed=='67')
    {
        blockUpdate("cloud.jpg");
    }

    if(keypressed=='68')
    {
        blockUpdate("dark_green.png");
    }

    if(keypressed=='71')
    {
        blockUpdate("ground.png");
    }

    if(keypressed=='76')
    {
        blockUpdate("light_green.jpg");
    }

    if(keypressed=='82')
    {
        blockUpdate("roof.jpg");
    }

    if(keypressed=='85')
    {
        blockUpdate("unique.png");
    }

    if(keypressed=='89')
    {
        blockUpdate("yellow_wall.png");
    }
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down()
{
    if(player_y<=450)
    {
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_img_width;
        canvas.remove(player_object);
        playerUpdate();
    }
}