import { Cart } from './cart.model';
import { Injectable } from '@angular/core';


@Injectable()
export class Order{
    public id ?: number;
    public name ?: string;
    public adress ?: string;
    public city ?: string;
    public phone ?: string;
    public email ?: string;
    public isSent ?: boolean = false;

    constructor(public cart : Cart){}

    clearOrder(){
        this.id = null;
        this.name = null;
        this.adress = null;
        this.city = null;
        this.phone = null;
        this.email = null;
        this.isSent = false;
        this.cart.clear();
    }
}