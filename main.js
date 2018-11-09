$(document).ready(intializeApp);

function intializeApp() {
    $('.but1').click(inputDown);
    $('.but2').click(inputUp);
    $('.numPickBut').click(startGame);
}

function inputDown() {
    var curNum = parseInt($('.inputNum').text());
    if (curNum !== 2) {
        curNum -= 1;
    }
    $('.inputNum').text('' + curNum);
}

function inputUp() {
    var curNum = parseInt($('.inputNum').text());
    if (curNum !== 6) {
        curNum += 1;
    }
    $('.inputNum').text('' + curNum);
}

var status = 'looking';
function startGame() {
    counter = 0;
    playerTurn = 1;
    status = 'looking';
    chooseSide();
}

var counter = 0;
function chooseSide() {
    $('.gameState').text('Player ' + (counter + 1) + ' please choose a side');
    $('.unused').addClass('unusedSpot');
    $('.unused').click(function () {
        sidePicked(this);
    });
}

function sidePicked(div) {
    if (parseInt($(div).attr('row')) < 5) {//top
        pickSide1();
    } else if (parseInt($(div).attr('row')) > 4 && parseInt($(div).attr('row')) < 9 && parseInt($(div).attr('col')) < 13) {//top left
        pickSide2();
    } else if (parseInt($(div).attr('row')) > 4 && parseInt($(div).attr('row')) < 9 && parseInt($(div).attr('col')) > 13) {//top right
        pickSide3();
    } else if (parseInt($(div).attr('row')) > 9 && parseInt($(div).attr('row')) < 14 && parseInt($(div).attr('col')) < 13) {//bottom left
        pickSide4();
    } else if (parseInt($(div).attr('row')) > 4 && parseInt($(div).attr('row')) < 14 && parseInt($(div).attr('col')) > 13) {//bottom right
        pickSide5();
    } else {//bottom
        pickSide6();
    }
}

function pickSide1() {
    var arr = [
        $("[row='1']"),
        $("[row='2']"),
        $("[row='3']"),
        $("[row='4']")
    ];

    for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass('unusedStop');
        arr[i].removeClass('unused');
    }
    if (counter === 0) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('blue');
        }
    } else if (counter === 1) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('red');
        }
    } else if (counter === 2) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('green');
        }
    } else if (counter === 3) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('purple');
        }
    } else if (counter === 4) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('white');
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('black');
        }
    }
    $("*").off();

    counter++;
    if (counter < parseInt($('.inputNum').text())) {
        chooseSide();
    } else {
        $('.gameState').text("Player 1's turn");
        possiblePiece();
    }
}

function pickSide2() {
    var arr = [
        $("[row='5'][col='1']"),
        $("[row='5'][col='3']"),
        $("[row='5'][col='5']"),
        $("[row='5'][col='7']"),
        $("[row='6'][col='2']"),
        $("[row='6'][col='4']"),
        $("[row='6'][col='6']"),
        $("[row='7'][col='3']"),
        $("[row='7'][col='5']"),
        $("[row='8'][col='4']")
    ];

    for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass('unusedStop');
        arr[i].removeClass('unused');
    }
    if (counter === 0) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('blue');
        }
    } else if (counter === 1) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('red');
        }
    } else if (counter === 2) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('green');
        }
    } else if (counter === 3) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('purple');
        }
    } else if (counter === 4) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('white');
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('black');
        }
    }
    $("*").off();

    counter++;
    if (counter < parseInt($('.inputNum').text())) {
        chooseSide();
    } else {
        $('.gameState').text("Player 1's turn");
        possiblePiece();
    }
}

function pickSide3() {
    var arr = [
        $("[row='5'][col='19']"),
        $("[row='5'][col='21']"),
        $("[row='5'][col='23']"),
        $("[row='5'][col='25']"),
        $("[row='6'][col='20']"),
        $("[row='6'][col='22']"),
        $("[row='6'][col='24']"),
        $("[row='7'][col='21']"),
        $("[row='7'][col='23']"),
        $("[row='8'][col='22']")
    ];

    for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass('unusedStop');
        arr[i].removeClass('unused');
    }

    if (counter === 0) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('blue');
        }
    } else if (counter === 1) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('red');
        }
    } else if (counter === 2) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('green');
        }
    } else if (counter === 3) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('purple');
        }
    } else if (counter === 4) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('white');
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('black');
        }
    }
    $("*").off();

    counter++;
    if (counter < parseInt($('.inputNum').text())) {
        chooseSide();
    } else {
        $('.gameState').text("Player 1's turn");
        possiblePiece();
    }
}

function pickSide4() {
    var arr = [
        $("[row='10'][col='4']"),
        $("[row='11'][col='3']"),
        $("[row='11'][col='5']"),
        $("[row='12'][col='2']"),
        $("[row='12'][col='4']"),
        $("[row='12'][col='6']"),
        $("[row='13'][col='1']"),
        $("[row='13'][col='3']"),
        $("[row='13'][col='5']"),
        $("[row='13'][col='7']")
    ];

    for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass('unusedStop');
        arr[i].removeClass('unused');
    }

    if (counter === 0) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('blue');
        }
    } else if (counter === 1) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('red');
        }
    } else if (counter === 2) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('green');
        }
    } else if (counter === 3) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('purple');
        }
    } else if (counter === 4) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('white');
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('black');
        }
    }
    $("*").off();

    counter++;
    if (counter < parseInt($('.inputNum').text())) {
        chooseSide();
    } else {
        $('.gameState').text("Player 1's turn");
        possiblePiece();
    }
}

function pickSide5() {
    var arr = [
        $("[row='10'][col='22']"),
        $("[row='11'][col='21']"),
        $("[row='11'][col='23']"),
        $("[row='12'][col='20']"),
        $("[row='12'][col='22']"),
        $("[row='12'][col='24']"),
        $("[row='13'][col='19']"),
        $("[row='13'][col='21']"),
        $("[row='13'][col='23']"),
        $("[row='13'][col='25']")
    ];

    for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass('unusedStop');
        arr[i].removeClass('unused');
    }

    if (counter === 0) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('blue');
        }
    } else if (counter === 1) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('red');
        }
    } else if (counter === 2) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('green');
        }
    } else if (counter === 3) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('purple');
        }
    } else if (counter === 4) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('white');
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('black');
        }
    }
    $("*").off();

    counter++;
    if (counter < parseInt($('.inputNum').text())) {
        chooseSide();
    } else {
        $('.gameState').text("Player 1's turn");
        possiblePiece();
    }
}

function pickSide6() {
    var arr = [
        $("[row='14']"),
        $("[row='15']"),
        $("[row='16']"),
        $("[row='17']"),
        $("[row='14']"),
        $("[row='15']"),
        $("[row='16']"),
        $("[row='17']")
    ];

    for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass('unusedStop');
        arr[i].removeClass('unused');
    }
    if (counter === 0) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('blue');
        }
    } else if (counter === 1) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('red');
        }
    } else if (counter === 2) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('green');
        }
    } else if (counter === 3) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('purple');
        }
    } else if (counter === 4) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('white');
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            arr[i].addClass('black');
        }
    }
    $("*").off();

    counter++;
    if (counter < parseInt($('.inputNum').text())) {
        chooseSide();
    } else {
        $('.gameState').text("Player 1's turn");
        possiblePiece();
    }
}

var playerTurn = 1;

function turnSwitch() {
    $('.clicked').removeClass('clicked');
    $('.spot').off();
    refresh();
    $('.spot').removeClass('unusedSpot');
    $('.spot').addClass('unused');
    $('.blue').removeClass('unused');
    $('.red').removeClass('unused');
    $('.green').removeClass('unused');
    $('.purple').removeClass('unused');
    $('.white').removeClass('unused');
    $('.black').removeClass('unused');
    $('.moved').removeClass('moved');

    if (playerTurn === 1) {
        playerTurn++;
    } else if (playerTurn === 2) {
        if (parseInt($('.inputNum').text()) > 2) {
            playerTurn++;
        } else {
            playerTurn = 1;
        }
    } else if (playerTurn === 3) {
        if (parseInt($('.inputNum').text()) > 3) {
            playerTurn++;
        } else {
            playerTurn = 1;
        }
    } else if (playerTurn === 4) {
        if (parseInt($('.inputNum').text()) > 4) {
            playerTurn++;
        } else {
            playerTurn = 1;
        }
    } else if (playerTurn === 5) {
        if (parseInt($('.inputNum').text()) === 6) {
            playerTurn++;
        } else {
            playerTurn = 1;
        }
    } else {
        playerTurn = 1;
    }
    $('.gameState').text("Player "+playerTurn+"'s turn");
    possiblePiece();
}

function possiblePiece() {
    $('.spot').off();
    refresh();
    $('.spot').removeClass('unusedSpot');
    $('.spot').addClass('unused');
    $('.blue').removeClass('unused');
    $('.red').removeClass('unused');
    $('.green').removeClass('unused');
    $('.purple').removeClass('unused');
    $('.white').removeClass('unused');
    $('.black').removeClass('unused');

    var arr = [
        'blue',
        'red',
        'green',
        'purple',
        'white',
        'black'
    ];
    curCol = $('.' + arr[playerTurn - 1]);
    curCol.each(function () {
        current = $(this);
        currentRow = parseInt(current.attr('row'));
        currentCol = parseInt(current.attr('col'));
        var arr2 = [
            -1,
            -1,
            -1,
            1,
            0,
            -2,
            0,
            2,
            1,
            -1,
            1,
            1
        ];
        for (var i = 0; i < 12; i = i + 2) {
            var side = $("[row='" + (currentRow + arr2[i]) + "'][col='" + (currentCol + arr2[i + 1]) + "']");
            var sideOver = $("[row='" + (currentRow + arr2[i] * 2) + "'][col='" + (currentCol + arr2[i + 1] * 2) + "']");
            if (side.hasClass('unused')) {
                current.off();
                current.click(function () { clicked(this) });
            } else if (sideOver.hasClass('unused')) {
                current.off();
                current.click(function () { clicked(this) });
            } else {
                current.click(function () { });
            }
        }
    });
}

function clicked(current) {
    status = 'picked';
    current = $(current);
    current.addClass('clicked');
    currentRow = parseInt(current.attr('row'));
    currentCol = parseInt(current.attr('col'));
    current.off();
    $('.spot').off();
    refresh();
    var arr2 = [
        -1,
        -1,
        -1,
        1,
        0,
        -2,
        0,
        2,
        1,
        -1,
        1,
        1
    ];
    for (var i = 0; i < 12; i = i + 2) {
        var side = $("[row='" + (currentRow + arr2[i]) + "'][col='" + (currentCol + arr2[i + 1]) + "']");
        var sideOver = $("[row='" + (currentRow + (arr2[i] * 2)) + "'][col='" + (currentCol + (arr2[i + 1] * 2)) + "']");
        if (side.hasClass('unused')) {
            side.addClass('possibleSpot');
            side.click(function () { sideClicked(current, this); })
        } else if (sideOver.hasClass('unused')) {
            sideOver.addClass('possibleSpot');
            sideOver.click(function () { sideClicked(current, this); })
        }
    }
    current.click(function () {
        status = 'looking';
        $('.clicked').removeClass('clicked');
        $('.possibleSpot').off();
        $('.spot').off();
        refresh();
        $('.possibleSpot').removeClass('possibleSpot');
        current.click(function () { clicked(this) });
    });
}

function sideClicked(current, newSpot) {
    $('.clicked').removeClass('clicked');
    newSpot = $(newSpot);
    var arr = [
        'blue',
        'red',
        'green',
        'purple',
        'white',
        'black'
    ];
    $('.spot').off();
    refresh();
    $('.possibleSpot').removeClass('possibleSpot');
    current.removeClass(arr[playerTurn - 1]);
    newSpot.addClass(arr[playerTurn - 1]);
    $('.moved').removeClass('moved');
    newSpot.removeClass('unused');
    newSpot.addClass('moved');
    refreshUnused();
    checkContinue();
}

function checkContinue() {
    var arr = [
        'blue',
        'red',
        'green',
        'purple',
        'white',
        'black'
    ];
    current = $('.moved');
    current.off();
    currentRow = parseInt(current.attr('row'));
    currentCol = parseInt(current.attr('col'));
    var arr2 = [
        -1,
        -1,
        -1,
        1,
        0,
        -2,
        0,
        2,
        1,
        -1,
        1,
        1
    ];
    for (var i = 0; i < 12; i = i + 2) {
        var side = $("[row='" + (currentRow + arr2[i]) + "'][col='" + (currentCol + arr2[i + 1]) + "']");
        var sideOver = $("[row='" + (currentRow + arr2[i] * 2) + "'][col='" + (currentCol + arr2[i + 1] * 2) + "']");
        if (side.hasClass('unused')) {
        } else if (sideOver.hasClass('unused')) {
            current.off();
            current.click(function () { clickedMult('.moved') });
        } else {
            current.click(function () { });
        }
    }
}

function clickedMult(current) {
    status = 'picked';
    current = $(current);
    current.addClass('clicked');
    currentRow = parseInt(current.attr('row'));
    currentCol = parseInt(current.attr('col'));
    current.off();
    $('.spot').off();
    refresh();
    var arr2 = [
        -1,
        -1,
        -1,
        1,
        0,
        -2,
        0,
        2,
        1,
        -1,
        1,
        1
    ];
    for (var i = 0; i < 12; i = i + 2) {
        var side = $("[row='" + (currentRow + arr2[i]) + "'][col='" + (currentCol + arr2[i + 1]) + "']");
        var sideOver = $("[row='" + (currentRow + (arr2[i] * 2)) + "'][col='" + (currentCol + (arr2[i + 1] * 2)) + "']");
        if (side.hasClass('unused')) {
        } else if (sideOver.hasClass('unused')) {
            sideOver.addClass('possibleSpot');
            sideOver.click(function () { sideClicked(current, this); })
        }
    }
    current.click(function () {
        status = 'looking';
        $('.clicked').removeClass('clicked');
        $('.possibleSpot').off();
        $('.spot').off();
        refresh();
        $('.possibleSpot').removeClass('possibleSpot');
        current.click(function () { clickedMult(this) });
    });
}

function refresh() {
    $('.blue').removeClass('unused');
    $('.red').removeClass('unused');
    $('.green').removeClass('unused');
    $('.purple').removeClass('unused');
    $('.white').removeClass('unused');
    $('.black').removeClass('unused');
    $('.spot').click(function () { });
}

function refreshUnused() {
    $('.spot').addClass('unused');
    $('.blue').removeClass('unused');
    $('.red').removeClass('unused');
    $('.green').removeClass('unused');
    $('.purple').removeClass('unused');
    $('.white').removeClass('unused');
    $('.black').removeClass('unused');
}