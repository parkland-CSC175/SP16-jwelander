// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {

    console.log("hello world!");
    $("tr").not(':first').hover(
        function () {
            $(this).css("background-color", "yellow");
        },
        function () {
            $(this).css("background-color", "");
        }
        );
    $("#my-table button").click(function () {
        var rowIndex, qtyCell, qtyOut, qtyChange;
        var selection = $(this).data("action");
        if (selection == 'remove')
            $(this).parent().parent().remove();
        else if (selection == 'increaseQty') {
            rowIndex = ($(this).parent().parent().index() + 1).toString();
            qtyCell = "tr:eq(" + rowIndex + ") td:eq('4')";
            qtyChange = parseInt($(qtyCell).text()) + 1;
            qtyOut = qtyChange.toString();
            $(qtyCell).text(qtyOut);
            reCalc(rowIndex, qtyChange);
        }
        else if (selection === 'decreaseQty') {
            rowIndex = ($(this).parent().parent().index() + 1).toString();
            qtyCell = "tr:eq(" + rowIndex + ") td:eq('4')";
            qtyChange = parseInt($(qtyCell).text()) - 1;
            qtyOut = qtyChange.toString();
            $(qtyCell).text(qtyOut);
            reCalc(rowIndex, qtyChange);
        }
    });
    function reCalc(aRowIndex, qtyChange) {
        var costCell = "tr:eq(" + aRowIndex + ") td:eq('5')";
        var totalCell = "tr:eq(" + aRowIndex + ") td:eq('6')";
        var newTotal = (parseFloat($(costCell).text()) * qtyChange);
        var newTotalOut = (newTotal.toFixed(2)).toString();
        $(totalCell).text(newTotalOut);
    }
});