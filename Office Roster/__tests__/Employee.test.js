const employee = require('../lib/employee')

it("returns employee name", () => {
        const Kweku = new employee('Kweku');
        expect(Kweku.name).toEqual('Kweku');
      }
)
      
it("returns employee id", () => {
        const Kweku = new employee('Kweku', 1);
        expect(Kweku.id).toEqual(1);
      })
       
it("returns employee email", () => {
        const Kweku = new employee('Kweku', 1, "kwekuplusp@gmail.com");
        expect(Kweku.email).toEqual('kwekuplusp@gmail.com');
      }
)

