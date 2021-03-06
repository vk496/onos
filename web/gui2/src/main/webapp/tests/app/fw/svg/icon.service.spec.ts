/*
 *  Copyright 2016-present Open Networking Foundation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { TestBed, inject } from '@angular/core/testing';

import { LogService } from '../../../../app/log.service';
import { ConsoleLoggerService } from '../../../../app/consolelogger.service';
import { IconService } from '../../../../app/fw/svg/icon.service';
import { GlyphService } from '../../../../app/fw/svg/glyph.service';
import { SvgUtilService } from '../../../../app/fw/svg/svgutil.service';

class MockGlyphService {}

class MockSvgUtilService {}

/**
 * ONOS GUI -- SVG -- Icon Service - Unit Tests
 */
describe('IconService', () => {

    let log: LogService;

    beforeEach(() => {
        log = new ConsoleLoggerService();

        TestBed.configureTestingModule({
            providers: [IconService,
                { provide: LogService, useValue: log },
                { provide: GlyphService, useClass: MockGlyphService },
                { provide: SvgUtilService, useClass: MockSvgUtilService },
            ]
        });
    });

    it('should be created', inject([IconService], (service: IconService) => {
        expect(service).toBeTruthy();
    }));
});
