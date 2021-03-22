class NoteVisual 
{
    //shows animated note on screen
    static showNote()
    {
        let browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        //random notetype from array
        let noteIndex = Math.floor((Math.random() * noteTypes.length)); 
        //random RGB color
        let color = 
        [
            Math.floor((Math.random() * 255)),
            Math.floor((Math.random() * 255)),
            Math.floor((Math.random() * 255))
        ];
        //random X starting position with margins
        let notePosX = Math.floor((Math.random() * (browserWidth - 250)) + 50); 
        let note = document.createElement("div");
        note.className = "note";
        note.className += " notextSelect";
        note.innerHTML = noteTypes[noteIndex];
        note.style.left = notePosX +"px";
        note.style.bottom = -150 +"px";
        note.style.color = "rgb("+color[0]+","+color[1]+","+color[2]+")";
        $("#notesContainer").append(note);
        this.animate(note);
    }
    //shows note on track 
    static showTrackNote(trackID)
    {
        let noteIndex = Math.floor((Math.random() * noteTypes.length)); 
        let color = 
        [
            Math.floor((Math.random() * 255)),
            Math.floor((Math.random() * 255)),
            Math.floor((Math.random() * 255))
        ];
        let note = document.createElement("div");
        note.className = "trackNote";
        note.innerHTML = noteTypes[noteIndex];
        note.style.backgroundColor = "rgb("+color[0]+","+color[1]+","+color[2]+")";
        let trackDiv = $("#tracks"+trackID+"Content");
        trackDiv.append(note);
        //after append expands width so it can scroll
        let trackDivW = parseInt(trackDiv.css("width"));
        trackDiv.css("width", trackDivW += 40);
    }
    //moves notes from bottom to top
    static animate(noteDiv)
    {
        let browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let aH = parseInt(noteDiv.style.bottom);
        if(aH < (browserHeight + 150))
        {
            noteDiv.style.bottom = aH + 15 +"px";
            requestAnimationFrame(() => this.animate(noteDiv));
        }
        else
        {
            //removes div if not on screen
            noteDiv.remove();
            return;
        }
    }
}