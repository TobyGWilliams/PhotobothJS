function Countdown(emitter) {
    this.e = emitter

    this.countdown = (l)=>{
        return new Promise(
            (res,rej)=>{
                var ticks = l
                var timer = setInterval(
                    () => {
                        ticks -= 1
                        console.log('Countdown.js tick', ticks)
                        
                        if (ticks==0) {
                            console.log('Countdown.js tick-final', ticks)
                            clearInterval(timer)
                            res()
                        }
                    },
                    1000
                );
            }
        )
    }

    this.countdownResolve = () =>{
        this.photos -= 1
        console.log('Countdown.js multi-photo', this.photos)
        if (this.photos > 0){
            this.countdown(5).then(this.countdownResolve)
        }
        
    }

    this.multiplePictures = () => {
        this.photos = 4
        console.log('Countdown.js multi-photo-start', this.photos)
        this.countdown(10).then(this.countdownResolve)
    }
    
    this.start = () => {
        console.log('start')
        this.countdown(10).then(()=>{})
    }
}

module.exports = Countdown