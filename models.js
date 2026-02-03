class Multimedia {
    constructor(Titol, Durada) {
        this.Titol = Titol
        this.Durada = Durada
        this.#Views = 0
        }
    }
    function Play(self) {
        print("Reproduint...")
        self.Views += 1
    }

    function getViews(self){
        return self.#Views
    }

    function #calcularCostServer(self,Durada){
        return (Durada * 0.01)
    }