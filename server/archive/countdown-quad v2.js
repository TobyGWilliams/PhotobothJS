function Countdown(emitter) {
    this.e = emitter
    this.photos = 0
    this.photosLeft = 0
    this.photos = 0
    this.initialCountdown = 0
    this.intermediateCountdown = 0

    this.countdown = (l) => {
        return new Promise(
            (resolve,reject)=>{
                var ticks = l
                var timer = setInterval(
                    () => {
                        ticks -= 1
                        console.log('Countdown.js tick', ticks, this.photos, this.photosLeft)
                        this.e.emit('tick', ticks)
                        
                        if (ticks==0) {
                            console.log('Countdown.js tick-final',this.photos, this.photosLeft)
                            this.e.emit('tick-final', ticks)
                            clearInterval(timer)
                            resolve()
                        }
                    },
                    1000
                );
            }
        )
    }

    this.countdownResolve = () =>{
        if (this.photosLeft > 0 && this.photosLeft != this.photos) {
            this.photosLeft -= 1
            this.countdown(this.intermediateCountdown).then(this.countdownResolve)
        } else if (this.photosLeft == this.photos) {
            this.photosLeft -= 1
            this.countdown(this.initialCountdown).then(this.countdownResolve)
        } else if (this.photosLeft == 0) {
            console.log('finished')
        }
        
    }
    
    this.start = (numberPictures, initialCountdown, intermediateCountdown) => {
        this.photos = numberPictures
        this.initialCountdown = initialCountdown
        this.intermediateCountdown = intermediateCountdown
        this.photosLeft = this.photos
        
        this.countdownResolve()
    }
}

module.exports = Countdown