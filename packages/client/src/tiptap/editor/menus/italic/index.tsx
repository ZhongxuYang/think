import React, { useCallback } from 'react';
import { Editor } from 'tiptap/editor';
import { Button } from '@douyinfe/semi-ui';
import { IconItalic } from '@douyinfe/semi-icons';
import { Tooltip } from 'components/tooltip';
import { useActive } from 'tiptap/editor/hooks/use-active';
import { Title } from 'tiptap/core/extensions/title';
import { Italic as ItalicExtension } from 'tiptap/core/extensions/italic';

export const Italic: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isTitleActive = useActive(editor, Title.name);
  const isItalicActive = useActive(editor, ItalicExtension.name);

  const toggleItalic = useCallback(() => editor.chain().focus().toggleItalic().run(), [editor]);

  return (
    <Tooltip content="斜体">
      <Button
        theme={isItalicActive ? 'light' : 'borderless'}
        type="tertiary"
        icon={<IconItalic />}
        onClick={toggleItalic}
        disabled={isTitleActive}
      />
    </Tooltip>
  );
};
