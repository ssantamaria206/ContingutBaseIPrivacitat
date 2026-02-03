class Multimedia {
    #calcularCostServer;
    #Views;
    constructor(Titol, Durada) {
        this.Titol = Titol
        this.Durada = Durada
        this.#Views = 0
        }
    }
    Play(self);{
        print("Reproduint...")
        self.#Views += 1;
    }

    getViews(self);{
        return self.#Views;
    }

    #calcularCostServer(self,Durada);{
        return (Durada * 0.01);
    }