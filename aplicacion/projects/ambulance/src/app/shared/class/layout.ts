import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/services/config.service';

export abstract class LayoutAbstract {
  constructor(private readonly configService: ConfigService) {
    this.configService.configuration = {
      layout: {
        header: { hidden: false },
        menu: { hidden: false },
      },
    };
  }
}
