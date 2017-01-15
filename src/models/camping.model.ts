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
    constructor (public name = null,
                 public phone = null,
                 public email = null,
                 public adress = null,
                 public location = { lat: null, lon: null }
    ) {}
}
