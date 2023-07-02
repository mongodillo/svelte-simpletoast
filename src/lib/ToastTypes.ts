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

export type ToastConfigObj = {
	duration?: number;
	autoClose?: boolean;
	position?: string;
	smPosition?: string;
	maxToasts?: number;
	colorScheme?: { [key: string]: { color: string; bg: string } };
};
