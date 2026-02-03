class Multimedia {
    #calcularCostServer;
    #Views;
    constructor(Titol, Durada) {
        this.Titol = Titol;
        this.Durada = Durada;
        this.#Views = 0;
        }
    
    Play(self){
        console.log("Reproduint...")
        self.#Views += 1;
    };

    getViews(self){
        return self.#Views;
    };

    #calcularCostServer(self,Durada){
        return (Durada * 0.01)
    };
};
class Pelicula extends Multimedia {
    #Views;
    constructor(Titol, Durada, Any, CostFix){
    super(Titol, Durada)
    this.Any = Any;
    this.CostFix = CostFix;
    this.#Views = 0;
    };
    calcularRoyalties(self){
        return (self.#Views * costFix);
    };
};
class Serie extends Multimedia {
    #Views;
    constructor(Titol, Durada, Capitols){
    super(Titol, Durada)
    this.Capitols = Capitols
    this.#Views = 0;
    };
    Play(self){
        self.#Views += 1;
        return ("Martó de" , self.Titol , "iniciada")
    };
};