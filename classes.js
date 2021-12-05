class Task{
    constructor(n, d, p, c) {
        this.name = n;
        this.description = d;
        this.points = p;
        this.child = c;
        this.pending = false;
    }
}
class Child{
    constructor(n, p) {
        this.username = n;
        this.password = p;
        this.points = 0;
    }
}
class Reward{
    constructor(n, p) {
        this.name = n;
        this.points = p;
        this.claimed_by = null;
    }
}