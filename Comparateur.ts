import { CompareInterface } from './CompareInterface';


/**
 * class Comparateur
 */
export class Comparateur implements CompareInterface {

    /**
     *  String pne
     */
    public n1: String;

    /**
     * String two
     */
    public n2: String;


    /**
     * Constructor
     * @param n1 
     * @param n2 
     */
    constructor(n1: String, n2: String) {
        this.n1 = n1;
        this.n2 = n2;
        if (this.n1.length !== this.n2.length) {
            throw 'Les chaines doit être de même longueur!';
        }
    }

    /**
     * Method of Comparaison
     * @return number
     */

    comparaison(): number {
        let result: number = 0;

        for (var i = 0; i < this.n1.length; i++) {
            if (this.n2.indexOf(this.n1[i]) === -1) {
                result += 1;
            }
        }

        return result;
    }

}
