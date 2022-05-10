import React, { useCallback } from 'react';
import { Editor } from 'tiptap/editor';
import { Button } from '@douyinfe/semi-ui';
import { IconUnderline } from '@douyinfe/semi-icons';
import { Tooltip } from 'components/tooltip';
import { useActive } from 'tiptap/editor/hooks/use-active';
import { Title } from 'tiptap/core/extensions/title';

export const Underline: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isTitleActive = useActive(editor, Title.name);

  const toggleUnderline = useCallback(() => editor.chain().focus().toggleUnderline().run(), [editor]);

  return (
    <Tooltip content="下划线">
      <Button
        theme={editor.isActive('underline') ? 'light' : 'borderless'}
        type="tertiary"
        icon={<IconUnderline />}
        onClick={toggleUnderline}
        disabled={isTitleActive}
      />
    </Tooltip>
  );
};
