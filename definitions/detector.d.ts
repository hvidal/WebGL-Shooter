interface DetectorStatic {
	canvas: boolean;
	webgl: boolean;
	workers: boolean;
	fileapi: boolean;

	getWebGLErrorMessage(): HTMLElement;
	addGetWebGLMessage(parameters?: {id?: string; parent?: HTMLElement}): void;
}

declare var Detector: DetectorStatic;

