// ReactElement
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import type {
	Type,
	Key,
	Ref,
	ReactElement,
	Porps,
	ElementType
} from 'shared/ReactType';
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Porps
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		key,
		type,
		ref,
		props,
		__mark: 'jyt'
	};
	return element;
};

export const jsx = function (type: ElementType, config: any, ...maybeChildren) {
	let key: Key = null;
	const props: Porps = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};
export const jsxDEV = jsx;
