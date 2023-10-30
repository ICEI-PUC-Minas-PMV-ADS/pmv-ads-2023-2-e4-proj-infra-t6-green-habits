const dateString = "2023-10-06T23:46:52.475Z";
const dateObject = new Date(dateString);

export const userLoginPayload1 = {
    email: 'joao@123test.com',
    password: 'teste',
}

export const userLoginPayload2 = {
    name: 'joao',
    email: 'joao@1234test.com',
    password: 'teste',
}

export const userDbReturn = {
    id: "6519b22a9226c4ea2b7ae2c9",
    name: 'joao',
    email: 'joao@123test.com',
    password: 'teste',
    habits: [
        {
            title: 'titulo 123 teste',
            description: 'descricao3456',
            category: 'Sem categoria',
            createdAt: dateObject,
            daysChecked: [],
            id: "65209c6c744239b050f6a850"
        },
        {
            title: 'titulo 123 teste',
            description: 'descricao3456',
            category: 'Sem categoria',
            createdAt: dateObject,
            daysChecked: [],
            id: "65209d0e508281dc5340d025"
        },
    ],
    __v: 10
}