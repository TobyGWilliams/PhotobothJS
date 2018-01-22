function Countdown(emitter) {
    this.e = emitter
    this.photos = 0
    this.photosLeft = 0
    this.photos = 0
    this.initialCountdown = 0
    this.intermediateCountdown = 0

    this.countdown = (l)=>{
        return new Promise(
            (resolve,reject)=>{
                var ticks = l
                var timer = setInterval(
                    () => {
                        ticks -= 1
                        console.log('Countdown.js tick', ticks, this.photos, this.photosLeft)
                        this.e.emit('tick', ticks)
                        
                        if (ticks==0) {
                            console.log('Countdown.js tick-final', ticks)
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
        this.photosLeft -= 1
        console.log('Countdown.js multi-photo', this.photos)
        this.e.emit('multi-photo', this.photos)
        if (this.photosLeft > 0){
            this.countdown(5).then(this.countdownResolve)
        }
        
    }

    // this.multiplePictures = () => {
    //     this.photos = 4
    //     this.photosLeft = this.photos
    //     console.log('Countdown.js multi-photo-start', this.photos)
    //     this.countdown(10).then(this.countdownResolve)
    // }
    
    this.start = (numberPictures, initialCountdown, intermediateCountdown) => {
        this.photos = numberPictures
        this.initialCountdown = initialCountdown
        this.intermediateCountdown = intermediateCountdown
        this.photosLeft = this.photos

        this.countdown().then(()=>{
            console.log('resolved')
        })
    }
}

module.exports = Countdown