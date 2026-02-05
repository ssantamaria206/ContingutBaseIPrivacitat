export { Multimedia, Pelicula, Serie, Usuari };
class Multimedia {
    #Views;
    constructor(Titol, Durada) {
        this.Titol = Titol;
        this.Durada = Durada;
        this.#Views = 0;
        }
    
    play(){
        console.log("Reproduint...")
        this.#Views += 1;
    };

    getViews(){
        let views = this.#Views
        return (views);
    };

    #calcularCostServer(Durada){
        return (Durada * 0.01);
    };
};
class Pelicula extends Multimedia {
    #Views;
    constructor(Titol, Durada, Any, CostFix){
        super(Titol, Durada)
        this.Any = Any
        this.CostFix = CostFix;
        this.#Views = 0;
    };
    calcularRoyalties(){
        return (this.getViews() * this.CostFix);
    };
};
class Serie extends Multimedia {
    #Views;
    constructor(Titol, Durada, Capitols){
        super(Titol, Durada)
        this.Capitols = Capitols
        this.#Views = 0;
    };
    play(){
        this.#Views += 1;
        return ("Martó de" , this.Titol , "iniciada");
    };
    calcularRoyalties(){
        return (this.#Views * this.Capitols * 0.05);
    };
    durada(){
        return (this.Durada * this.Capitols);
    };
};
class Usuari {
    constructor(MyList){
        this.MyList = MyList
    };
    AfegirALlista(item){
        this.MyList.push(item)        
    };
    tempsTotalConsumit(){
        let total = 0
        for (var i = 0; i < length.MyList; i++){
            total += MyList[i].Durada
        };
        return (total / 60);
    };
};

