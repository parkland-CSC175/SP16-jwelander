// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    console.log("hello world");
    var toDoList = new Array;
    var intervalKey = null;


    // get stored data to create initial table array
    var buildTable = function() {
        console.log(typeof (localStorage.getItem("toDoList2")));
        if (typeof (localStorage.getItem("toDoList2")) == "string") {
            var fetchedJSON = localStorage.getItem("toDoList2");
            var listObjects = JSON.parse(fetchedJSON);
            console.log("in builder");
            for (var i = 0; i < listObjects.length; i++) {
                toDoList[i] = {
                    taskName: listObjects[i].taskName,
                    done: listObjects[i].done,
                    time: listObjects[i].time
                };
            };
        }
    };

    //function to store task array in local storage.
    var storeData = function() {
        localStorage.setItem("toDoList2", JSON.stringify(toDoList));
    }

    var congratsOff = function() {
        $congratsToggler = $(".alert");
        $congratsToggler.css("display", "none");
    }

    var updateTimes = function() {
        for (i = 0; i < toDoList.length; i++) {
            if (toDoList[i].done) {
                var $myRow = $(".table tr").eq(i);
                var $minCount = $myRow.children(":last").find("span");
                var nowTime = Math.round((new Date()).getTime() / 1000);
                var diffSec = Math.abs((nowTime - toDoList[i].time));
                var diffMin = (Math.floor(diffSec / 60)).toString();
                $minCount.text(diffMin);
            };
        };
    }

    // function to add new rows to the table
    var addTableRow = function(aToDoItem) {
        var $myTable = $(".col-sm-12").find('table');
        var $newRow = $("<tr></tr>");
        $taskCol = $("<td></td>");
        $taskCol.text(aToDoItem.taskName);
        if (aToDoItem.done) {
            $newRow.addClass("completed");
        }
        $btnCol = $("<td></td>");
        $btnComplete = $("<button></button>");
        $btnComplete.attr("title", "complete");
        $btnComplete.attr("type", "button");
        $btnComplete.attr("class", "btn btn-icon");
        $btnComplete.attr("data-action", "complete");
        $btnComplete.click(function() {
            var taskToComplete = $(this).parent().siblings(":first").text();
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].taskName == taskToComplete) {
                    toDoList[i].done = true;
                    toDoList[i].time = Math.round((new Date()).getTime() / 1000);
                }
            };
            storeData();
            $(this).parent().siblings(":last").html("Completed <span class=\"completed-ticker\">00</span> minutes ago.");
            $(this).parent().parent().addClass("completed");
            $congratsToggler = $(".alert");
            $congratsToggler.css("display", "block");
            setTimeout(congratsOff, (3 * 1000));

        })
        $spanComplete = $("<span></span>");
        $spanComplete.attr("class", "glyphicon glyphicon-ok");
        $btnTrash = $("<button></button>");
        $btnTrash.attr("title", "remove");
        $btnTrash.attr("type", "button");
        $btnTrash.attr("class", "btn btn-icon");
        $btnTrash.attr("data-action", "remove");
        $btnTrash.click(function() {
            var tempArray = new Array;
            var taskToRemove = $(this).parent().siblings(":first").text();
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].taskName == taskToRemove) {
                    toDoList[i].taskName = " ";
                }
            };
            //condense array
            var newSize = 0;
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].taskName !== " ") {
                    tempArray[newSize] = toDoList[i];
                    newSize++;
                }
            }
            toDoList = tempArray;
            storeData();
            $(this).closest('tr').remove();
        });
        $spanTrash = $("<span></span>");
        $spanTrash.attr("class", "glyphicon glyphicon-trash");
        $btnCol.append($btnComplete);
        $btnCol.append($btnTrash);
        $btnComplete.append($spanComplete);
        $btnTrash.append($spanTrash);
        $newRow.append($taskCol);
        $newRow.append($btnCol);
        var $timerCol = $("<td></td>");
        $timerCol.attr("id", "timer-" + aToDoItem.taskName);
        $newRow.append($timerCol);
        if (aToDoItem.done) {
            var nowTime = Math.round((new Date()).getTime() / 1000);
            var diffSec = Math.abs((nowTime - aToDoItem.time));
            var diffMin = (Math.floor(diffSec / 60)).toString();
            $timerCol.html("Completed <span class=\"completed-ticker\">" + diffMin + "</span> minutes ago.");

            $(".completed-ticker span").text((Math.floor(diffSec / 60)).toString());
        }
        $myTable.append($newRow);

    }

    var refreshScreen = function() {
        console.log("in refresh");
        $(".table").empty();
        for (i = 0; i < toDoList.length; i++) {
            addTableRow(toDoList[i]);
        }
    }



    //Initial execution begins here...
    //storeData();
    // clear out any pre-existing garbage, define any variables
    //   $(".table").empty();
    //create working array from local storage
    buildTable();
    // Build initial table rows on screen
    //   for (i = 0; i < toDoList.length; i++) {
    //       addTableRow(toDoList[i]);
    //   }
    refreshScreen();
    intervalKey = setInterval(updateTimes, (10 * 1000));


    // user event actions begin here
    $("#btn-todo-add").click(function() {
        toDoList[toDoList.length] = {
            taskName: $("#todo-text").val(),
            done: false,
            time: Math.round((new Date()).getTime() / 1000)
        };
        localStorage.setItem("toDoList2", JSON.stringify(toDoList));
        addTableRow(toDoList[toDoList.length - 1]);
        buildTable();
        $("#todo-text").val("");
    });

});