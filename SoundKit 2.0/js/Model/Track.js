class Track
{
    constructor()
    {
        this.notes = [];
    }
    //add notes to track
    async addNote(note)
    {
        return new Promise((resolve) => 
        {
            this.notes.push(note);
            resolve();
        });
    }
    //starts playing track till the end
    async startPlaying(i)
    {
        this.notes[i].playRecordedNote();
        NoteVisual.showNote();
        i++;
        if(i < this.notes.length)
        {
            let delay = this.notes[i].delayToStart
            setTimeout(()=> this.startPlaying(i), delay);
        }
        else
            return;
    }
}