import { Injectable } from "@angular/core"
import { ɵInjectableAnimationEngine } from "@angular/platform-browser/animations";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
    { state: 'category', name: 'Gerir Categorias', icon: 'category', role: 'admin' },
    { state: 'product', name: 'Gerir Produtos', icon: 'inventory_2', role: 'admin' },
    { state: 'order', name: 'Fazer Pedido', icon: 'list_alt', role: '' },
    { state: 'bill', name: 'Ver Pedido', icon: 'import_contacts', role: '' },
    { state: 'user', name: 'Gerenciador de funcionarios', icon: 'people', role: 'admin' }
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
