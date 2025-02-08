const SupportSymbol = typeof Symbol === 'function' && Symbol.for;
export const REACT_ELEMENT_TYPE = SupportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
