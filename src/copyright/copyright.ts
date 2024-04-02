/*
 * Copyright (c) 2024 Utor.
 * All rights reserved.
 *
 * copyright.ts
 *
 * asdasdad
 * hier steht noch mehr
 */



'use script';

import * as configuration from '../configuration';
import { getFileName } from './copyrightService';

export class Copyright {
  protected author: string;
  protected year: string;
  protected note: string;
  protected fileName: string | undefined;

  constructor() {
    this.author = configuration.getAuthor();
    this.year = new Date().getFullYear().toString();
    this.note = configuration.getNote();
    this.fileName = getFileName();
  }

  public header(): string {
    let template = `/*
 * Copyright (c) ${this.year} ${this.author}.\n * All rights reserved.\n *\n`;
    
    if (this.fileName) {
      template += ` * ${this.fileName}\n *\n`;
    }

    if (this.note) {
      const lines = this.note.split(`\\n`);
      template += lines.map(line => ` * ${line}`).join('\n');
      template += '\n';
    }


    template += ` */\n\n`;

    return template;
  }
}
