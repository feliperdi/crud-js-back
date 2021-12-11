import ItemBusiness from "../src/business/ItemBusiness";
import ItemDb from "../src/database/ItemDb";
import { category } from "../src/model/ItemModel";

const itemBusiness = new ItemBusiness(new ItemDb());

const mockItemInput: any = {
    name: "generic Item",
    b_price: 12,
    s_price: 12,
    stock: 12,
    category: category.ROUPAS,
    description: "Generic description"
};


jest.mock("../src/database/ItemDb", () => {
    return jest.fn().mockImplementation( () => {
        return {
            getItens: () => [mockItemInput, mockItemInput],
            createItem: () => undefined
        }
    })
});

describe("Item business full test", () => {

    test("CREATE-ITEM: Should return items", async () => {
        try {
            const itemsList = await itemBusiness.createItem(mockItemInput);
            expect(itemsList).toStrictEqual([mockItemInput, mockItemInput]);
        } catch (error) {
            throw error;
        }
    });

    test("GET-ITEM: Should return undefined", async () => {
        const itemsList = await itemBusiness.getItem();
        expect(itemsList).toStrictEqual([mockItemInput, mockItemInput]);
    });
    
});

describe("Errors tests", () => { 
    let alterItem: any = {...mockItemInput};

    test("Should throw a error 'name invalid'", async () => {
        try {
            alterItem.name = '';
            const itemsList = await itemBusiness.createItem(alterItem);
        } catch (error: any) {
            expect(error.message).toBe('name required');
        }
    });

    test("Should throw a error 'name invalid'", async () => {
        try {
            alterItem = {...mockItemInput};
            alterItem.b_price = undefined;

            const itemsList = await itemBusiness.createItem(alterItem);
        } catch (error: any) {
            expect(error.message).toBe('value required');
        }
    });

    test("Should throw a error 'name invalid'", async () => {
        try {
            alterItem = {...mockItemInput};
            alterItem.s_price = undefined;
            const itemsList = await itemBusiness.createItem(alterItem);
        } catch (error: any) {
            expect(error.message).toBe('value required');
        }
    });

    test("Should throw a error 'name invalid'", async () => {
        try {
            alterItem = {...mockItemInput};
            alterItem.stock = undefined;
            const itemsList = await itemBusiness.createItem(alterItem);
        } catch (error: any) {
            expect(error.message).toBe('value required');
        }
    });

    test("Should throw a error 'name invalid'", async () => {
        try {
            alterItem = {...mockItemInput};
            alterItem.category = undefined;
            const itemsList = await itemBusiness.createItem(alterItem);
        } catch (error: any) {
            expect(error.message).toBe("category required");
        }
    });



});