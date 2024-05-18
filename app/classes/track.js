export class Track {
    constructor(name, cup, origin, type){
        this.checked = true;
        this.hidden = false;
        this.name = name;
        this.cup = cup;
        this.origin = origin;
        this.type = type;
        this.typeString = type.join(", ");
        this.image = this._get_image_name();
        this.cupimage = this._get_cupimage_name();
    }r

    _get_image_name() {
        let cleaned = this.name //.replace('\'','').replace('-','');
        let splitname = cleaned.split(' ');
        let tokens = splitname.concat([this.origin])
        let lowered = [];
        for (let x of tokens) {
            lowered.push(x.toLowerCase());
        }
        return lowered.join('_')
    }
    
    _get_cupimage_name() {    
        let splitcup = this.cup.split(' ');
        let lowered = [];
        for (let x of splitcup){
            lowered.push(x.toLowerCase());
        }
        return lowered.join('_');
    }
}