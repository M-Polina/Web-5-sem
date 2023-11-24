function openProfile(event, content_id) {
    var i, profile_blocks, buttons;

    profile_blocks = document.getElementsByClassName("profile_block");
    console.log(profile_blocks);
    for (i = 0; i < profile_blocks.length; i++) {
        profile_blocks[i].style.display = "none";
    }

    buttons = document.getElementsByClassName("profile_sections_menu__button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    document.getElementById(content_id).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById('my_books').style.display = "block";