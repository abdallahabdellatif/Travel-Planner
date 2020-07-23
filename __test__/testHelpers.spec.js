import { getToday } from "../src/client/js/helpers"
//enter today's date inside toBe part to make more sense
describe("Testing today function functionality", () => {
    test("Testing the getToday() function", () => {
           expect(getToday()).toBe(new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate());
})});
