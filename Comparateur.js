"use strict";
/**
## Distance de Hamming - Version Typescript
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * class Comparateur
 */
class Comparateur {
    /**
     * Constructor
     * @param n1
     * @param n2
     */
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
        if (this.n1.length !== this.n2.length) {
            throw 'Les chaines doit être de même longueur!';
        }
    }
    /**
     * Method of Comparaison
     */
    comparaison() {
        let result = 0;
        for (var i = 0; i < this.n1.length; i++) {
            if (this.n1[i] !== this.n2[i]) {
                result += 1;
            }
        }
        return result;
    }
}
exports.Comparateur = Comparateur;
//# sourceMappingURL=Comparateur.js.map