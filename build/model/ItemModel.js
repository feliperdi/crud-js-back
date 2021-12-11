"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category;
(function (category) {
    category["ROUPAS"] = "ROUPAS";
    category["ACESSORIOS"] = "ACESSORIOS";
})(category = exports.category || (exports.category = {}));
;
class ItemModel {
    constructor(id, name, b_price, s_price, stock, category, description) {
        this.id = id;
        this.name = name;
        this.b_price = b_price;
        this.s_price = s_price;
        this.stock = stock;
        this.category = category;
        this.description = description;
    }
    setId(id) {
        this.id = id;
    }
    ;
    setName(name) {
        this.name = name;
    }
    ;
    setBPrice(b_price) {
        this.b_price = b_price;
    }
    ;
    setSPrice(s_price) {
        this.s_price = s_price;
    }
    ;
    setStock(stock) {
        this.stock = stock;
    }
    ;
    setDescription(description) {
        this.description = description;
    }
    ;
    setCategory(category) {
        this.category = category;
    }
    ;
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSPrice() {
        return this.s_price;
    }
    ;
    getStock() {
        return this.stock;
    }
    ;
    getBPrice() {
        this.b_price;
    }
    ;
    getDescription() {
        return this.description;
    }
    getCategory() {
        return this.category;
    }
}
exports.default = ItemModel;
;
