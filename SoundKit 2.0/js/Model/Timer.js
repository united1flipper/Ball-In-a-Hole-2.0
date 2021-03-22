class Timer
{
    constructor()
    {
        this.value = 0;
    }
    //starts timer
    start()
    {
        //checks if recording, if so adds ms, else resets timer
        if(isRecording)
        {
            this.value += 100;
        }
        else 
        {
            this.value = 0;
        }
        setTimeout(() => this.start(), 100);
    }
}