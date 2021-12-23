
export interface ItemInputDTO {
    id?: string;
    name?: string;
    stock?: number;
    b_price?: number;
    s_price?: number;
    category?: string;
    description?: string;
};

export interface ItemOutputDTO {
    id: string;
    name?: string;
    stock?: number;
    b_price?: number;
    s_price?: number;
    category?: string;
    description?: string;
}


export default class ItemModel {
    private id: string;
    private name: string;
    private b_price: number;
    private s_price: number;
    private stock: number;
    private category: string;
    private description?: string;

    constructor(
        id: string,
        name: string,
        b_price: number,
        s_price: number,
        stock: number,
        category: string,
        description?: string,
    ){
        this.id = id;
        this.name = name;
        this.b_price = b_price;
        this.s_price = s_price;
        this.stock = stock;
        this.category = category;
        this.description = description;
    }

    setId( id: string ){
        this.id = id;
    };

    setName( name: string ){
        this.name = name;
    };

    setBPrice( b_price: number ){
        this.b_price = b_price;
    };
    
    setSPrice( s_price: number ){
        this.s_price = s_price;
    };
    

    setStock( stock: number ){
        this.stock = stock;
    };

    setDescription( description: string ){
        this.description = description;
    };

    setCategory( category: string ){
        this.category = category;
    };

    getId(): string{
        return this.id;
    }

    getName(): string{
        return this.name;
    }

    getSPrice(){
        return this.s_price;
    };

    getStock() {
        return this.stock; 
    };

    getBPrice(){
        this.b_price;
    };
    
    
    getDescription(): string | undefined{
        return this.description;
    }

    getCategory(): string {
        return this.category;
    }

    
};