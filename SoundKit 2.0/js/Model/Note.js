class Note 
{
    constructor(_sound, _delay)
    {
        this.sound = _sound;
        this.delayToStart = _delay;
    }
    //starts playing note
    async playRecordedNote()
    {
        this.sound.volume = globalVolume;
        this.sound.currentTime = 0;
        this.sound.play();
    }
    //static method for playing note, checks if any tracks are recording if so adds to note to array,
    //starts showing animated note on main screen and note icon on selected track, resets timer value
    static async playNote(sound)
    {
        sound.volume = globalVolume;
        sound.currentTime = 0;
        if(isRecording)
        {
            let note = new Note(sound, timer.value);
            for(let i = 0; i < tracks.length; i++)
            {
                if($("#trackSelect"+i).html() == "check")
                {
                    await tracks[i].addNote(note);
                    NoteVisual.showTrackNote(i);
                }
            }
            timer.value = 0;
        }
        sound.play();
        NoteVisual.showNote();
    }
}