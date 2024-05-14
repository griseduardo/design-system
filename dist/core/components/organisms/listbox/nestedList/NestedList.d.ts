import * as React from 'react';
export interface NestedListProp {
    expanded?: boolean;
    nestedBody?: React.ReactNode;
}
export declare const NestedList: (props: NestedListProp) => JSX.Element;
export default NestedList;