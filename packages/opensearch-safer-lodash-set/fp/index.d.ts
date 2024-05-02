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

import lodash = require('lodash');

export = SaferLodashSet;
export as namespace SaferLodashSet;

declare const SaferLodashSet: SaferLodashSet.SaferLoDashStaticFp;
declare namespace SaferLodashSet {
  interface LodashSet {
    (path: lodash.PropertyPath): LodashSet1x1;
    (path: lodash.__, value: any): LodashSet1x2;
    (path: lodash.PropertyPath, value: any): LodashSet1x3;
    <T extends object>(path: lodash.__, value: lodash.__, object: T): LodashSet1x4<T>;
    <T extends object>(path: lodash.PropertyPath, value: lodash.__, object: T): LodashSet1x5<T>;
    <T extends object>(path: lodash.__, value: any, object: T): LodashSet1x6<T>;
    <T extends object>(path: lodash.PropertyPath, value: any, object: T): T;
    (path: lodash.__, value: lodash.__, object: object): LodashSet2x4;
    (path: lodash.PropertyPath, value: lodash.__, object: object): LodashSet2x5;
    (path: lodash.__, value: any, object: object): LodashSet2x6;
    <TResult>(path: lodash.PropertyPath, value: any, object: object): TResult;
  }
  interface LodashSet1x1 {
    (value: any): LodashSet1x3;
    <T extends object>(value: lodash.__, object: T): LodashSet1x5<T>;
    <T extends object>(value: any, object: T): T;
    (value: lodash.__, object: object): LodashSet2x5;
    <TResult>(value: any, object: object): TResult;
  }
  interface LodashSet1x2 {
    (path: lodash.PropertyPath): LodashSet1x3;
    <T extends object>(path: lodash.__, object: T): LodashSet1x6<T>;
    <T extends object>(path: lodash.PropertyPath, object: T): T;
    (path: lodash.__, object: object): LodashSet2x6;
    <TResult>(path: lodash.PropertyPath, object: object): TResult;
  }
  interface LodashSet1x3 {
    <T extends object>(object: T): T;
    <TResult>(object: object): TResult;
  }
  interface LodashSet1x4<T> {
    (path: lodash.PropertyPath): LodashSet1x5<T>;
    (path: lodash.__, value: any): LodashSet1x6<T>;
    (path: lodash.PropertyPath, value: any): T;
  }
  type LodashSet1x5<T> = (value: any) => T;
  type LodashSet1x6<T> = (path: lodash.PropertyPath) => T;
  interface LodashSet2x4 {
    (path: lodash.PropertyPath): LodashSet2x5;
    (path: lodash.__, value: any): LodashSet2x6;
    <TResult>(path: lodash.PropertyPath, value: any): TResult;
  }
  type LodashSet2x5 = <TResult>(value: any) => TResult;
  type LodashSet2x6 = <TResult>(path: lodash.PropertyPath) => TResult;

  interface LodashSetWith {
    <T extends object>(customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x1<T>;
    (customizer: lodash.__, path: lodash.PropertyPath): LodashSetWith1x2;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.PropertyPath
    ): LodashSetWith1x3<T>;
    (customizer: lodash.__, path: lodash.__, value: any): LodashSetWith1x4;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.__,
      value: any
    ): LodashSetWith1x5<T>;
    (customizer: lodash.__, path: lodash.PropertyPath, value: any): LodashSetWith1x6;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.PropertyPath,
      value: any
    ): LodashSetWith1x7<T>;
    <T extends object>(
      customizer: lodash.__,
      path: lodash.__,
      value: lodash.__,
      object: T
    ): LodashSetWith1x8<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.__,
      value: lodash.__,
      object: T
    ): LodashSetWith1x9<T>;
    <T extends object>(
      customizer: lodash.__,
      path: lodash.PropertyPath,
      value: lodash.__,
      object: T
    ): LodashSetWith1x10<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.PropertyPath,
      value: lodash.__,
      object: T
    ): LodashSetWith1x11<T>;
    <T extends object>(
      customizer: lodash.__,
      path: lodash.__,
      value: any,
      object: T
    ): LodashSetWith1x12<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.__,
      value: any,
      object: T
    ): LodashSetWith1x13<T>;
    <T extends object>(
      customizer: lodash.__,
      path: lodash.PropertyPath,
      value: any,
      object: T
    ): LodashSetWith1x14<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.PropertyPath,
      value: any,
      object: T
    ): T;
  }
  interface LodashSetWith1x1<T> {
    (path: lodash.PropertyPath): LodashSetWith1x3<T>;
    (path: lodash.__, value: any): LodashSetWith1x5<T>;
    (path: lodash.PropertyPath, value: any): LodashSetWith1x7<T>;
    (path: lodash.__, value: lodash.__, object: T): LodashSetWith1x9<T>;
    (path: lodash.PropertyPath, value: lodash.__, object: T): LodashSetWith1x11<T>;
    (path: lodash.__, value: any, object: T): LodashSetWith1x13<T>;
    (path: lodash.PropertyPath, value: any, object: T): T;
  }
  interface LodashSetWith1x2 {
    <T extends object>(customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x3<T>;
    (customizer: lodash.__, value: any): LodashSetWith1x6;
    <T extends object>(customizer: lodash.SetWithCustomizer<T>, value: any): LodashSetWith1x7<T>;
    <T extends object>(customizer: lodash.__, value: lodash.__, object: T): LodashSetWith1x10<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      value: lodash.__,
      object: T
    ): LodashSetWith1x11<T>;
    <T extends object>(customizer: lodash.__, value: any, object: T): LodashSetWith1x14<T>;
    <T extends object>(customizer: lodash.SetWithCustomizer<T>, value: any, object: T): T;
  }
  interface LodashSetWith1x3<T> {
    (value: any): LodashSetWith1x7<T>;
    (value: lodash.__, object: T): LodashSetWith1x11<T>;
    (value: any, object: T): T;
  }
  interface LodashSetWith1x4 {
    <T extends object>(customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x5<T>;
    (customizer: lodash.__, path: lodash.PropertyPath): LodashSetWith1x6;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.PropertyPath
    ): LodashSetWith1x7<T>;
    <T extends object>(customizer: lodash.__, path: lodash.__, object: T): LodashSetWith1x12<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.__,
      object: T
    ): LodashSetWith1x13<T>;
    <T extends object>(
      customizer: lodash.__,
      path: lodash.PropertyPath,
      object: T
    ): LodashSetWith1x14<T>;
    <T extends object>(
      customizer: lodash.SetWithCustomizer<T>,
      path: lodash.PropertyPath,
      object: T
    ): T;
  }
  interface LodashSetWith1x5<T> {
    (path: lodash.PropertyPath): LodashSetWith1x7<T>;
    (path: lodash.__, object: T): LodashSetWith1x13<T>;
    (path: lodash.PropertyPath, object: T): T;
  }
  interface LodashSetWith1x6 {
    <T extends object>(customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x7<T>;
    <T extends object>(customizer: lodash.__, object: T): LodashSetWith1x14<T>;
    <T extends object>(customizer: lodash.SetWithCustomizer<T>, object: T): T;
  }
  type LodashSetWith1x7<T> = (object: T) => T;
  interface LodashSetWith1x8<T> {
    (customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x9<T>;
    (customizer: lodash.__, path: lodash.PropertyPath): LodashSetWith1x10<T>;
    (customizer: lodash.SetWithCustomizer<T>, path: lodash.PropertyPath): LodashSetWith1x11<T>;
    (customizer: lodash.__, path: lodash.__, value: any): LodashSetWith1x12<T>;
    (customizer: lodash.SetWithCustomizer<T>, path: lodash.__, value: any): LodashSetWith1x13<T>;
    (customizer: lodash.__, path: lodash.PropertyPath, value: any): LodashSetWith1x14<T>;
    (customizer: lodash.SetWithCustomizer<T>, path: lodash.PropertyPath, value: any): T;
  }
  interface LodashSetWith1x9<T> {
    (path: lodash.PropertyPath): LodashSetWith1x11<T>;
    (path: lodash.__, value: any): LodashSetWith1x13<T>;
    (path: lodash.PropertyPath, value: any): T;
  }
  interface LodashSetWith1x10<T> {
    (customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x11<T>;
    (customizer: lodash.__, value: any): LodashSetWith1x14<T>;
    (customizer: lodash.SetWithCustomizer<T>, value: any): T;
  }
  type LodashSetWith1x11<T> = (value: any) => T;
  interface LodashSetWith1x12<T> {
    (customizer: lodash.SetWithCustomizer<T>): LodashSetWith1x13<T>;
    (customizer: lodash.__, path: lodash.PropertyPath): LodashSetWith1x14<T>;
    (customizer: lodash.SetWithCustomizer<T>, path: lodash.PropertyPath): T;
  }
  type LodashSetWith1x13<T> = (path: lodash.PropertyPath) => T;
  type LodashSetWith1x14<T> = (customizer: lodash.SetWithCustomizer<T>) => T;

  interface SaferLoDashStaticFp {
    assoc: LodashSet;
    assocPath: LodashSet;
    set: LodashSet;
    setWith: LodashSetWith;
  }
}
