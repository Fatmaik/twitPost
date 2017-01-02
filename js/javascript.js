$(document).ready(function() {

    // açao de atualização correspondente ao conteudo da textarea
    $("textarea").bind("input keyup paste", function() {
        // 
        var lengthAvailable = $("#textArea").val().length;
        var textLength = 20 - lengthAvailable;
        var text = $("#charNum").text(textLength);

        var removeLengthAbusive1 = $("textarea").val();
        var removeLengthAbusive2 = removeLengthAbusive1.slice(0, 20);
        if (textLength === 0) {
            $("textarea").blur();
        }
        if (textLength < 0) {
            $("textarea").val(removeLengthAbusive2);
        }
    })
})