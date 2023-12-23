import { Ref } from 'vue';
import { IProductCategory } from './Product';
import SpecDialog from '@/components/SpecDialog.vue';


export interface Settings {
    cfs: Object,
    [key: string]: any;
}

// store
export interface State {
    app: Settings | null,
    page: Settings | null,
    spec_dialog: InstanceType<typeof SpecDialog> | null,
}


export interface ISocials {
    image: string;
    link: string;
}

export interface ICategoryMainPage {
    image: string;
    product_cat: Array<IProductCategory>;
    price?: number | string;
}


export interface MenuButtonItem {
    value: string | number;
    label: string;
}   