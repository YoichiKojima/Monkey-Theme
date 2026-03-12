import { resolve } from 'node:path';
import { createIconTheme } from 'vsc-icon-maker';
import { files } from './files';
import { folders } from './folders';

createIconTheme({
  filePath: resolve('src', 'monkey-icon.json'),
  defaultIcons: {
    file: 'icon',
    folder: 'icon',
    rootFolder: 'root',
  },
  iconsPath: 'icons',
  separator: '-',
  files,
  folders,
  prefix: {
    file: 'file',
    folder: 'folder',
    expanded: 'folder',
  },
});
