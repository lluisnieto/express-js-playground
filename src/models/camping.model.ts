interface data {
    name: string;
    phone: number;
    email: string;
    adress: string;
    location: {
        lat: number;
        lon: number;
    }
}

export class Camping implements data {
    constructor (public name = '',
                 public phone= '',
                 public email = '',
                 public adress = '',
                 public location = { lat: 0, lon: 0 }
    ) {}
}
