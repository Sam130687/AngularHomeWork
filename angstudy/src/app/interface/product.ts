export interface IProduct {
	id: string;
	subCategory: string;
	feedbacksCount: number;
	count?: number;
	name: string;
	description?: string;
	feedbacks?: IFeedback[];
	characteristics?: ICharacteristics[];
	price: number;
	status: number;
	images: IProductImage[];
	rating: number;
	brand?: string;
}
export interface IProductsState {
	items: IProduct[];
	loading: boolean;
	prices: IMinMaxPrice;
}

export interface IProductApi {
	items: IProduct[];
	prices: IMinMaxPrice;
}
export interface IMinMaxPrice {
	min: number;
	max: number;
}
export interface IFeedback {
	id: string;
	rate?: number;
	product?: string;
	advantages?: string;
	limitations?: string;
	description?: string;
}

export interface IProductImage {
	url: string;
	source: string;
}

interface ICharacteristics {
	title: string;
	items: ICharacteristic[];
	isExtended?: boolean;
}

interface ICharacteristic {
	name: string;
	value: string;
	isExtended?: boolean;
}
