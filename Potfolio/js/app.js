$(document).ready(function() {

    // Skill
    for( var i = 0; i < ComputerSkill.length; i++ ) {
        var skill = ComputerSkill[i];
        var skillName = skill[0];
        var skillLevel = skill[1];
        $('#Grade').html($('#Grade').html() +  '<div class="Grade_bar"><p>' + skillName + '</p><div class="bar"><div class="bar_fill"></div></div></div>');
        $('#Grade .Grade_bar').eq(i).find('.bar_fill').css('width', skillLevel);
    }


    $('#Bouton').click(function() {
        $('#Me_Suite').toggleClass('active');
    });


}); 

