function shipFactory(title, hits, size, sunk) {
    return {
        title: title,
        hitLocation: hits,
        size: size,
        sunk: sunk,
        hit(coordinates) {
            if (this.hitLocation.indexOf(coordinates) != -1) {
                this.hitLocation[this.hitLocation.indexOf(coordinates)] = "Blast";
                return this.hitLocation;
            } 
        },
        isSunk() {
            const isBlasted = this.hitLocation.every(c => c === "Blast")
            
            if (isBlasted) {
                sunk = true;
            }

            return sunk;
        }
    }
}
export default shipFactory;