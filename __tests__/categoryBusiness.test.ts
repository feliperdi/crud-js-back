import CategoryBusiness from '../src/business/CategoryBusiness';
import CategoryDb from '../src/database/CategoryDb';
import ItemDb from '../src/database/ItemDb';
import CategoryModel from '../src/model/CategoryModel';

jest.mock('../src/database/CategoryDb');
jest.mock('../src/database/ItemDb');

const categoryBusiness = new CategoryBusiness(new CategoryDb(), new ItemDb());

const category: CategoryModel = {
    id: "123415678",
    name: "GENERIC NAME"
}

describe("Testing CATEGORY_BUSINESS", () => {
    test("Testing get category", async () =>{
        const categoryList = await categoryBusiness.getCategory();
        expect(categoryList).toBe(undefined);
    });

    test("Testing create category", async () =>{
        const categoryList = await categoryBusiness.createCategory(category);
        expect(categoryList).toBe(undefined);
    });

    test("Testing update category", async () =>{
        const categoryList = await categoryBusiness.updateCategory(category);
        expect(categoryList).toBe(undefined);
    });

    test("Testing delete category", async () =>{
        const categoryList = await categoryBusiness.deleteCategory(category);
        expect(categoryList).toBe(undefined);
    });
})