const intern = require('../lib/Intern')

it("returns intern's school", () => {
    const Kweku = new intern('Kweku', 2, 'kwekuplusp@gmail.com', 'Monmouth');
      
    expect(Kweku.school).toEqual('Monmouth');
    }
)

it("returns intern's role", () => {
    const Kweku = new intern('Kweku', 2, 'kwekuplusp@gmail.com', 'Monmouth');
      
    expect(Kweku.getRole()).toEqual('Intern');
    }
)