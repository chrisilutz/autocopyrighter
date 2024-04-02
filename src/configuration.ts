/*
 * Copyright (c) 2024 Utor.
 * All rights reserved.
 *
 * configuration.ts
 *
 * asdasdad
 * hier steht noch mehr
 */


import * as vscode from 'vscode';
import { Copyright } from './copyright/copyright';
import { Apache2 } from './copyright/licenses/apache2';
import { Mit } from './copyright/licenses/mit';
import { Gpl } from './copyright/licenses/gpl3';

function getConfiguration(): vscode.WorkspaceConfiguration {
  return vscode.workspace.getConfiguration('autoCopyrighter');
}

export const configuredLanguages = new Set([
  'c',
  'cpp',
  'csharp',
  'css',
  'go',
  'java',
  'javascript',
  'objective-c',
  'rust',
  'scss',
  'swift',
  'sql',
  'typescript',
  'typescriptreact',
  'vue'
]);

export function getAuthor(): string {
  return getConfiguration().get('author') || '';
}

export function getCopyright(): Copyright {
  const selectedLicense = getConfiguration().get('license');

  if (selectedLicense === 'Apache2') {
    return new Apache2();
  } else if (selectedLicense === 'MIT') {
    return new Mit();
  } else if (selectedLicense === 'GPL3') {
    return new Gpl();
  } else {
    return new Copyright();
  }
}

export function getNote(): string {
  return getConfiguration().get('note') || '';
}

export function getNewFilesOnly(): Boolean {
  return getConfiguration().get('newFilesOnly') || false;
}
