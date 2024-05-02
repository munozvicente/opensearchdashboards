/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { repeat } from 'lodash';
import { i18n } from '@osd/i18n';

const endOfInputText = i18n.translate('data.common.dql.errors.endOfInputText', {
  defaultMessage: 'end of input',
});

const grammarRuleTranslations: Record<string, string> = {
  fieldName: i18n.translate('data.common.dql.errors.fieldNameText', {
    defaultMessage: 'field name',
  }),
  value: i18n.translate('data.common.dql.errors.valueText', {
    defaultMessage: 'value',
  }),
  literal: i18n.translate('data.common.dql.errors.literalText', {
    defaultMessage: 'literal',
  }),
  whitespace: i18n.translate('data.common.dql.errors.whitespaceText', {
    defaultMessage: 'whitespace',
  }),
};

interface DQLSyntaxErrorData extends Error {
  found: string;
  expected: DQLSyntaxErrorExpected[] | null;
  location: any;
}

interface DQLSyntaxErrorExpected {
  description: string;
}

export class DQLSyntaxError extends Error {
  shortMessage: string;

  constructor(error: DQLSyntaxErrorData, expression: any) {
    let message = error.message;
    if (error.expected) {
      const translatedExpectations = error.expected.map((expected) => {
        return grammarRuleTranslations[expected.description] || expected.description;
      });

      const translatedExpectationText = translatedExpectations.join(', ');

      message = i18n.translate('data.common.dql.errors.syntaxError', {
        defaultMessage: 'Expected {expectedList} but {foundInput} found.',
        values: {
          expectedList: translatedExpectationText,
          foundInput: error.found ? `"${error.found}"` : endOfInputText,
        },
      });
    }

    const fullMessage = [message, expression, repeat('-', error.location.start.offset) + '^'].join(
      '\n'
    );

    super(fullMessage);
    this.name = 'DQLSyntaxError';
    this.shortMessage = message;
  }
}
