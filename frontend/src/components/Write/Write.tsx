import EditorJS from '@editorjs/editorjs';
import React from 'react';
import './Write.scss';

const defaultStyle = {
  display: "block",
  overflow: "hidden",
  resize: "none",
  width: "100%",
  backgroundColor: "mediumSpringGreen"
};

const Write = () => {

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [currentValue, setCurrentValue] = React.useState("");

  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи'
    })
  }, [])

  React.useEffect(() => {
    if (textareaRef.current?.style) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [currentValue]);

  return (
    <div className="editor">
      <div className="editor__authors">
      </div>
      <div className="editor__container">
        <div className="editor__title">
          <textarea
            ref={textareaRef}
            rows={1}
            maxLength={120}
            placeholder={'Заголовок'}
            onChange={e => setCurrentValue(e.target.value)}
          ></textarea>
        </div>
        <div id='editor' className="editor__content">
        </div>
      </div>
      <div className="editor__actions">
        <div className="editor__actions-container">
          <button className="editor__btn btn-black">
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  )
}

export default Write