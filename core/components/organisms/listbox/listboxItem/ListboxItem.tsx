import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { Divider } from '@/index';
import { ListboxContext } from '../Listbox';
import { ListBody } from './ListBody';
import { NestedList } from '../nestedList';
import classNames from 'classnames';

export type ItemTagType = 'li' | 'div';

export interface ListboxItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement> {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * Element to be shown inside a nested list
   */
  nestedBody?: React.ReactNode;
  /**
   * Set `true` to show nested row
   */
  expanded?: boolean;
  /**
   * Disables the list item
   */
  disabled?: boolean;
  /**
   * Shows list item in selected state <br />
   * (works in case of **option** list only)
   */
  selected?: boolean;
  /**
   * Shows list item in activated state <br />
   * (works in case of **resource** list only)
   */
  activated?: boolean;
  /**
   * Unique ID to list item
   */
  id?: string;
  /**
   * Value for particular list item
   */
  value?: any;
  /**
   * Set a custom element for Listbox
   */
  tagName: ItemTagType;
  /**
   * Handler to be called when `ListboxItem` is clicked
   */
  onClick?: (e: React.MouseEvent, id?: string, value?: string) => void;
  /**
   * Specify tabIndex to list item
   */
  tabIndex?: number;
}

// export const ListboxItem = (props: ListboxItemProps) => {
export const ListboxItem = React.forwardRef<any, any>((props, ref) => {
  const { nestedBody, expanded, id, onClick, value, tagName: Tag, ...rest } = props;

  console.log('reffffff', ref);

  const contextProp = React.useContext(ListboxContext);
  const { showDivider, draggable } = contextProp;

  const onClickHandler = (e: React.MouseEvent) => {
    onClick && onClick(e, id, value);
  };

  const tagClass = classNames({
    ['Listbox-item-wrapper']: !draggable,
    ['w-100']: true,
  });

  return (
    <Tag
      id={id}
      key={id}
      data-test="DesignSystem-Listbox-Item"
      {...rest}
      onClick={onClickHandler}
      data-value={value}
      className={tagClass}
      // ref={ref}
    >
      <ListBody {...props} ref={ref} />
      {nestedBody && <NestedList expanded={expanded} nestedBody={nestedBody} />}
      {showDivider && <Divider className="Listbox-divider" />}
    </Tag>
  );
});

ListboxItem.displayName = 'ListboxItem';
ListboxItem.defaultProps = {
  tagName: 'li',
};

export default ListboxItem;
