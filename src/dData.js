const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1',
        price: 10.99,
        quantity: 100,
        category: 'dinnerWave',
        color: 'grey',
        details:'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1',
        dmns:{
            wth:12,
            hht:15

        }
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 2',
        price: 20.50,
        quantity: 150,
        category: 'ceramic',
        color: 'white',
        details:'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1',
                dmns:{
            wth:12,
            hht:15

        }
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 3',
        price: 5.75,
        quantity: 200,
        category: 'furniture',
        color: 'red',
        details:'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1',
                dmns:{
            wth:12,
            hht:15

        }
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 4',
        price: 30.00,
        quantity: 75,
        category: 'decorArt',
        color:'black',
        details:'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1 Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 1',
                dmns:{
            wth:12,
            hht:15

        }
        
    }
];
const cart = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        quantity: 2
    },
    {
        id: 3,
        name: 'Product 3',
        price: 5.75,
        quantity: 1
    }
];

const wishlist = [
    {
        id: 2,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 2',
        price: 20.50
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit. 4',
        price: 30.00
    }
];

export { cart, wishlist,products };
