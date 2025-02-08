export type ElementType = any;
export type Key = any;
export type Porps = any;
export type Ref = any;
export type Type = any;
export interface ReactElement {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	ref: Ref;
	props: Porps;
	__mark: string;
}
