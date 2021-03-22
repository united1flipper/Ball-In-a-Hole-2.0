var timer;

window.addEventListener('load', () => 
{
    //towrzy 4 utwory
    for(let i = 0; i < 4; i++)
    {
        tracks.push(new Track());
    }
    timer = new Timer();
    timer.start();

    window.addEventListener('keyup', keyHandler)
    //otwiera i zamyka tablice ustawien
    $("#settingsIcon").click(() => 
    {
        if(settingsOpened)
        {
            $("#settingsBox").css("left", -100);
            settingsOpened = false;
        }
        else 
        {
            $("#settingsBox").css("left", 0);
            settingsOpened = true;
        }
    });
    //zmiana głośności 
    $("#settingsVolume").on("input change", () =>
    {
        globalVolume = $("#settingsVolume").val();
    });
    //pokazuje dostępne dźwięki
    $("#infoBox").click
    (
        () => alert("1 - boom\n2 - clap\n3 - hihat\n4 - kick\n5 - openhat\n6 - ride\n7 - snare\n8 - tink\n9 - tom")
    );
    
    $("#tracksOpen").click(() => 
    {
        if(tracksOpened)
        {
            $("#tracksBox").css("bottom", -300);
            $("#tracksOpenIcon").html("keyboard_arrow_up");
            tracksOpened = false;
        }
        else 
        {
            $("#tracksBox").css("bottom", 0);
            $("#tracksOpenIcon").html("keyboard_arrow_down");
            tracksOpened = true;
        }
    });
    //odtawrzacz dźwięku
    $("#playButton").click(() => 
    {
        for(let i = 0; i < tracks.length; i++)
        {
            if($("#trackSelect"+i).html() == "check")
            {
                setTimeout(() => tracks[i].startPlaying(0), tracks[0].notes[0].delayToStart);
            }
        }
        
    });
    //zmiana koloru
    $("#playButton").mouseover((event) =>
    {
        event.target.style.color = "#ff6666";
    });
    $("#playButton").mouseout((event) =>
    {
        event.target.style.color = "#efefef";
    });
    //nagrywanie
    $("#recordButton").click(() =>
    {
        if(isRecording)
        {
            $("#recordButton").css("color", "#efefef");
            isRecording = false;
        }
        else 
        {
            $("#recordButton").css("color", "#ff6666");
            isRecording = true;
            timer.value = 0;
        }
    });
    //usuwanie
    $("#clearButton").click(() => 
    {
        for(let i = 0; i < tracks.length; i++)
        {
            if($("#trackSelect"+i).html() == "check")
            {
                tracks[i].notes = [];
                $("#tracks"+i+"Content").html("");
            }
        }
        
    });
    
    $("#clearButton").mouseover((event) =>
    {
        event.target.style.color = "#ff6666";
    });
    $("#clearButton").mouseout((event) =>
    {
        event.target.style.color = "#efefef";
    });
    //aktywowanie ścieżki
    $(".trackSelect").click((event) => 
    {
        let clicked = $("#"+event.target.id);
        if(clicked.html() == "check")
        {
            clicked.html("");
        }
        else 
        {
            clicked.html("check");
        }
    });

})
//dopasowanie klawiszy do dżwięku
function keyHandler(event)
{
    event = event || window.event;
    let key = event.key || String.fromCharCode(event.which);
    switch(key)
    {
        case '1':
            Note.playNote(sounds[0]);
            break;
        case '2':
            Note.playNote(sounds[1]);
            break;
        case '3':
            Note.playNote(sounds[2]);
            break;
        case '4':
            Note.playNote(sounds[3]);
            break;
        case '5':
            Note.playNote(sounds[4]);
            break;
        case '6':
            Note.playNote(sounds[5]);
            break;
        case '7':
            Note.playNote(sounds[6]);
            break;
        case '8':
            Note.playNote(sounds[7]);
            break;
        case '9':
            Note.playNote(sounds[8]);
            break;

    }
}