function Ship(draft, crew) {
    this.draft = draft
    this.crew = crew
    this.result = function() {
        if(this.draft > 20) {
            console.log("Banyak nih muatan kapalnya")
        }
        else if(this.draft <= 20) {
            let hasil = this.crew*1.5
            if(this.draft+hasil > 20) {
                console.log("Banyak nih muatan kapalnya")
            }
            else if(this.draft+hasil < 20) {
                console.log("Lebih banyak muatan orangnya...")
            }
        }
        else {
            console.log("Error")
        }
    }
}

var emptyShip = new Ship(2, 9)
emptyShip.result()