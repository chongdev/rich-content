import React from "react";

// import _ from 'lodash';

import {
  EditorState,
  RichContentEditor,
//   RichContentEditorModal,
} from "wix-rich-content-editor";

// import ReactModal from "react-modal";

// import * as PropTypes from 'prop-types';
// import * as Plugins from './shared/editor/EditorPlugins';
// import ModalsMap from './shared/editor/ModalsMap';

// import { createDividerPlugin } from 'wix-rich-content-plugin-divider';
// import { createEmojiPlugin } from 'wix-rich-content-plugin-emoji';
// import { createHtmlPlugin } from 'wix-rich-content-plugin-html';
// // import { Hashtag } from 'wix-rich-content-plugin-hashtag';
// // import { createGalleryPlugin } from 'wix-rich-content-plugin-gallery';
import { createImagePlugin } from "wix-rich-content-plugin-image";
// import {
//   createLinkPreviewPlugin,
//   LINK_PREVIEW_TYPE,
//   LinkPreviewProviders,
// } from "wix-rich-content-plugin-link-preview";

// // import { Common } from 'wix-rich-content-editor-common/module';
// // import { mentionPlugin } from 'wix-rich-content-plugin-mentions';
// // import { isSSR } from 'wix-rich-content-common';

import { ModalsMap as ImageModalsMap } from "wix-rich-content-plugin-image";

import "wix-rich-content-editor-common/dist/styles.min.css";
import "wix-rich-content-editor/dist/styles.min.css";
import dividerTheme from "./my-style.css";

// import 'wix-rich-content-plugin-divider/dist/styles.min.css';
// import 'wix-rich-content-plugin-emoji/dist/styles.min.css';
// import 'wix-rich-content-plugin-hashtag/dist/styles.min.css';
// // import 'wix-rich-content-plugin-html/dist/styles.min.css';
// // import 'wix-rich-content-plugin-link/dist/styles.min.css';
// // import 'wix-rich-content-plugin-video/dist/styles.min.css';
// import 'wix-rich-content-plugin-mentions/dist/styles.min.css';
// // import 'wix-rich-content-plugin-code-block/dist/styles.min.css';
// import 'wix-rich-content-plugin-image/dist/styles.min.css';
// import 'wix-rich-content-plugin-gallery/dist/styles.min.css';

const PLUGINS = [
  createImagePlugin,
//   createLinkPreviewPlugin,
  // // createGalleryPlugin,
  // createDividerPlugin,
  // createEmojiPlugin,
  // createHtmlPlugin,
  // Common,
  // mentionPlugin,
  // Hashtag,
];

const THEME = {
  ...dividerTheme,
};

// const ModalsMap = {
//   ...ImageModalsMap,
// };

const modalStyles = {};

export class MyApp extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  //   constructor(props) {
  //     console.log(props);
  //   }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    // const { onRequestClose } = this.state.modalProps || {};

    return (
      <div>
        <RichContentEditor
          theme={THEME}
          plugins={PLUGINS}
          onChange={this.onChange}
          editorState={this.state.editorState}
        />

        {/* <ReactModal
          isOpen={this.state.showModal}
          contentLabel="External Modal Example"
          style={modalStyles}
          role="dialog"
          //   onRequestClose={onRequestClose || this.helpers.closeModal}
        >
          <RichContentEditorModal
            modalsMap={ModalsMap}
            locale={this.props.locale}
            {...this.state.modalProps}
          />
        </ReactModal> */}
      </div>
    );
  }
}
