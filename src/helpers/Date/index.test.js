import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("should return 'janvier' for a date set to 2022-01-01", () => {
            // Préparez l'état initial en créant une date correspondant à la date à tester
            const inputDate = new Date("2022-01-01");
            // Appelez la fonction getMonth avec la date préparée
            const result = getMonth(inputDate);
            // Vérifiez si le résultat correspond à l'attente
            expect(result).toBe("janvier");
        });

        
        it("should return 'juillet' for a date set to 2022-07-08", () => {
            const inputDate = new Date("2022-07-08");
            const result = getMonth(inputDate);
            expect(result).toBe("juillet");
        });
    });
});

