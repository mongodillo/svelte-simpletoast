export type ToastItem = {
	title: string;
	message: string;
	duration: number;
	id: number;
	autoClose: boolean;
	status: string;
	toastTime: string;
};

export type ToastArray = ToastItem[];

export type ToastConfig = {
	duration: number;
	autoClose: boolean;
	status: string;
	maxToasts: number;
};
