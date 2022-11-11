import { SvelteComponentTyped } from "svelte";


	export declare interface MoveResizeProps {
		sensor: any;
		width: any;
		height: any;
		left: any;
		top: any;
		resizable: any;
		draggable: any;
		id: any;
		container: any;
		xPerPx: any;
		yPerPx: any;
		gapX: any;
		gapY: any;
		item: any;
		max: any;
		min: any;
		cols: any;
		nativeContainer: any;
	}

	export declare  class MoveResize extends SvelteComponentTyped<
		MoveResizeProps,
		{  },
		{ movePointerDown: any, resizePointerDown: any }
	> {}
