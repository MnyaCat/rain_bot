
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>
/**
 * Model Mode
 * 
 */
export type Mode = $Result.DefaultSelection<Prisma.$ModePayload>
/**
 * Model ModeOnRule
 * 
 */
export type ModeOnRule = $Result.DefaultSelection<Prisma.$ModeOnRulePayload>
/**
 * Model Stage
 * 
 */
export type Stage = $Result.DefaultSelection<Prisma.$StagePayload>
/**
 * Model SpecialWeapon
 * 
 */
export type SpecialWeapon = $Result.DefaultSelection<Prisma.$SpecialWeaponPayload>
/**
 * Model WeaponType
 * 
 */
export type WeaponType = $Result.DefaultSelection<Prisma.$WeaponTypePayload>
/**
 * Model SubWeapon
 * 
 */
export type SubWeapon = $Result.DefaultSelection<Prisma.$SubWeaponPayload>
/**
 * Model MainWeapon
 * 
 */
export type MainWeapon = $Result.DefaultSelection<Prisma.$MainWeaponPayload>
/**
 * Model Weapon
 * 
 */
export type Weapon = $Result.DefaultSelection<Prisma.$WeaponPayload>
/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rules
 * const rules = await prisma.rule.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Rules
   * const rules = await prisma.rule.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs>;

  /**
   * `prisma.mode`: Exposes CRUD operations for the **Mode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modes
    * const modes = await prisma.mode.findMany()
    * ```
    */
  get mode(): Prisma.ModeDelegate<ExtArgs>;

  /**
   * `prisma.modeOnRule`: Exposes CRUD operations for the **ModeOnRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModeOnRules
    * const modeOnRules = await prisma.modeOnRule.findMany()
    * ```
    */
  get modeOnRule(): Prisma.ModeOnRuleDelegate<ExtArgs>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<ExtArgs>;

  /**
   * `prisma.specialWeapon`: Exposes CRUD operations for the **SpecialWeapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialWeapons
    * const specialWeapons = await prisma.specialWeapon.findMany()
    * ```
    */
  get specialWeapon(): Prisma.SpecialWeaponDelegate<ExtArgs>;

  /**
   * `prisma.weaponType`: Exposes CRUD operations for the **WeaponType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeaponTypes
    * const weaponTypes = await prisma.weaponType.findMany()
    * ```
    */
  get weaponType(): Prisma.WeaponTypeDelegate<ExtArgs>;

  /**
   * `prisma.subWeapon`: Exposes CRUD operations for the **SubWeapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubWeapons
    * const subWeapons = await prisma.subWeapon.findMany()
    * ```
    */
  get subWeapon(): Prisma.SubWeaponDelegate<ExtArgs>;

  /**
   * `prisma.mainWeapon`: Exposes CRUD operations for the **MainWeapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainWeapons
    * const mainWeapons = await prisma.mainWeapon.findMany()
    * ```
    */
  get mainWeapon(): Prisma.MainWeaponDelegate<ExtArgs>;

  /**
   * `prisma.weapon`: Exposes CRUD operations for the **Weapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weapons
    * const weapons = await prisma.weapon.findMany()
    * ```
    */
  get weapon(): Prisma.WeaponDelegate<ExtArgs>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Rule: 'Rule',
    Mode: 'Mode',
    ModeOnRule: 'ModeOnRule',
    Stage: 'Stage',
    SpecialWeapon: 'SpecialWeapon',
    WeaponType: 'WeaponType',
    SubWeapon: 'SubWeapon',
    MainWeapon: 'MainWeapon',
    Weapon: 'Weapon',
    Season: 'Season'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'rule' | 'mode' | 'modeOnRule' | 'stage' | 'specialWeapon' | 'weaponType' | 'subWeapon' | 'mainWeapon' | 'weapon' | 'season'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>,
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      Mode: {
        payload: Prisma.$ModePayload<ExtArgs>
        fields: Prisma.ModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>
          }
          findFirst: {
            args: Prisma.ModeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>
          }
          findMany: {
            args: Prisma.ModeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>[]
          }
          create: {
            args: Prisma.ModeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>
          }
          delete: {
            args: Prisma.ModeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>
          }
          update: {
            args: Prisma.ModeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>
          }
          deleteMany: {
            args: Prisma.ModeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModePayload>
          }
          aggregate: {
            args: Prisma.ModeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMode>
          }
          groupBy: {
            args: Prisma.ModeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeCountArgs<ExtArgs>,
            result: $Utils.Optional<ModeCountAggregateOutputType> | number
          }
        }
      }
      ModeOnRule: {
        payload: Prisma.$ModeOnRulePayload<ExtArgs>
        fields: Prisma.ModeOnRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeOnRuleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeOnRuleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>
          }
          findFirst: {
            args: Prisma.ModeOnRuleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeOnRuleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>
          }
          findMany: {
            args: Prisma.ModeOnRuleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>[]
          }
          create: {
            args: Prisma.ModeOnRuleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>
          }
          delete: {
            args: Prisma.ModeOnRuleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>
          }
          update: {
            args: Prisma.ModeOnRuleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>
          }
          deleteMany: {
            args: Prisma.ModeOnRuleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModeOnRuleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModeOnRuleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModeOnRulePayload>
          }
          aggregate: {
            args: Prisma.ModeOnRuleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModeOnRule>
          }
          groupBy: {
            args: Prisma.ModeOnRuleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModeOnRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeOnRuleCountArgs<ExtArgs>,
            result: $Utils.Optional<ModeOnRuleCountAggregateOutputType> | number
          }
        }
      }
      Stage: {
        payload: Prisma.$StagePayload<ExtArgs>
        fields: Prisma.StageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findFirst: {
            args: Prisma.StageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findMany: {
            args: Prisma.StageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          create: {
            args: Prisma.StageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          delete: {
            args: Prisma.StageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          update: {
            args: Prisma.StageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          deleteMany: {
            args: Prisma.StageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.StageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageCountArgs<ExtArgs>,
            result: $Utils.Optional<StageCountAggregateOutputType> | number
          }
        }
      }
      SpecialWeapon: {
        payload: Prisma.$SpecialWeaponPayload<ExtArgs>
        fields: Prisma.SpecialWeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialWeaponFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialWeaponFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>
          }
          findFirst: {
            args: Prisma.SpecialWeaponFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialWeaponFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>
          }
          findMany: {
            args: Prisma.SpecialWeaponFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>[]
          }
          create: {
            args: Prisma.SpecialWeaponCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>
          }
          delete: {
            args: Prisma.SpecialWeaponDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>
          }
          update: {
            args: Prisma.SpecialWeaponUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>
          }
          deleteMany: {
            args: Prisma.SpecialWeaponDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialWeaponUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SpecialWeaponUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecialWeaponPayload>
          }
          aggregate: {
            args: Prisma.SpecialWeaponAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpecialWeapon>
          }
          groupBy: {
            args: Prisma.SpecialWeaponGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SpecialWeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialWeaponCountArgs<ExtArgs>,
            result: $Utils.Optional<SpecialWeaponCountAggregateOutputType> | number
          }
        }
      }
      WeaponType: {
        payload: Prisma.$WeaponTypePayload<ExtArgs>
        fields: Prisma.WeaponTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>
          }
          findFirst: {
            args: Prisma.WeaponTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>
          }
          findMany: {
            args: Prisma.WeaponTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>[]
          }
          create: {
            args: Prisma.WeaponTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>
          }
          delete: {
            args: Prisma.WeaponTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>
          }
          update: {
            args: Prisma.WeaponTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>
          }
          deleteMany: {
            args: Prisma.WeaponTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WeaponTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponTypePayload>
          }
          aggregate: {
            args: Prisma.WeaponTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWeaponType>
          }
          groupBy: {
            args: Prisma.WeaponTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WeaponTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<WeaponTypeCountAggregateOutputType> | number
          }
        }
      }
      SubWeapon: {
        payload: Prisma.$SubWeaponPayload<ExtArgs>
        fields: Prisma.SubWeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubWeaponFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubWeaponFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>
          }
          findFirst: {
            args: Prisma.SubWeaponFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubWeaponFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>
          }
          findMany: {
            args: Prisma.SubWeaponFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>[]
          }
          create: {
            args: Prisma.SubWeaponCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>
          }
          delete: {
            args: Prisma.SubWeaponDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>
          }
          update: {
            args: Prisma.SubWeaponUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>
          }
          deleteMany: {
            args: Prisma.SubWeaponDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubWeaponUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubWeaponUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubWeaponPayload>
          }
          aggregate: {
            args: Prisma.SubWeaponAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubWeapon>
          }
          groupBy: {
            args: Prisma.SubWeaponGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubWeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubWeaponCountArgs<ExtArgs>,
            result: $Utils.Optional<SubWeaponCountAggregateOutputType> | number
          }
        }
      }
      MainWeapon: {
        payload: Prisma.$MainWeaponPayload<ExtArgs>
        fields: Prisma.MainWeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainWeaponFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainWeaponFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>
          }
          findFirst: {
            args: Prisma.MainWeaponFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainWeaponFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>
          }
          findMany: {
            args: Prisma.MainWeaponFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>[]
          }
          create: {
            args: Prisma.MainWeaponCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>
          }
          delete: {
            args: Prisma.MainWeaponDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>
          }
          update: {
            args: Prisma.MainWeaponUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>
          }
          deleteMany: {
            args: Prisma.MainWeaponDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MainWeaponUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MainWeaponUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MainWeaponPayload>
          }
          aggregate: {
            args: Prisma.MainWeaponAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMainWeapon>
          }
          groupBy: {
            args: Prisma.MainWeaponGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MainWeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainWeaponCountArgs<ExtArgs>,
            result: $Utils.Optional<MainWeaponCountAggregateOutputType> | number
          }
        }
      }
      Weapon: {
        payload: Prisma.$WeaponPayload<ExtArgs>
        fields: Prisma.WeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findFirst: {
            args: Prisma.WeaponFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findMany: {
            args: Prisma.WeaponFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          create: {
            args: Prisma.WeaponCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          delete: {
            args: Prisma.WeaponDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          update: {
            args: Prisma.WeaponUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          deleteMany: {
            args: Prisma.WeaponDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WeaponUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          aggregate: {
            args: Prisma.WeaponAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWeapon>
          }
          groupBy: {
            args: Prisma.WeaponGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponCountArgs<ExtArgs>,
            result: $Utils.Optional<WeaponCountAggregateOutputType> | number
          }
        }
      }
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>,
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RuleCountOutputType
   */

  export type RuleCountOutputType = {
    modes: number
  }

  export type RuleCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    modes?: boolean | RuleCountOutputTypeCountModesArgs
  }

  // Custom InputTypes

  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleCountOutputType
     */
    select?: RuleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeCountModesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModeOnRuleWhereInput
  }



  /**
   * Count Type ModeCountOutputType
   */

  export type ModeCountOutputType = {
    rules: number
  }

  export type ModeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    rules?: boolean | ModeCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes

  /**
   * ModeCountOutputType without action
   */
  export type ModeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeCountOutputType
     */
    select?: ModeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModeCountOutputType without action
   */
  export type ModeCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModeOnRuleWhereInput
  }



  /**
   * Count Type SpecialWeaponCountOutputType
   */

  export type SpecialWeaponCountOutputType = {
    Weapon: number
  }

  export type SpecialWeaponCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | SpecialWeaponCountOutputTypeCountWeaponArgs
  }

  // Custom InputTypes

  /**
   * SpecialWeaponCountOutputType without action
   */
  export type SpecialWeaponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeaponCountOutputType
     */
    select?: SpecialWeaponCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SpecialWeaponCountOutputType without action
   */
  export type SpecialWeaponCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }



  /**
   * Count Type WeaponTypeCountOutputType
   */

  export type WeaponTypeCountOutputType = {
    Weapon: number
    MainWeapon: number
  }

  export type WeaponTypeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | WeaponTypeCountOutputTypeCountWeaponArgs
    MainWeapon?: boolean | WeaponTypeCountOutputTypeCountMainWeaponArgs
  }

  // Custom InputTypes

  /**
   * WeaponTypeCountOutputType without action
   */
  export type WeaponTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponTypeCountOutputType
     */
    select?: WeaponTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WeaponTypeCountOutputType without action
   */
  export type WeaponTypeCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }


  /**
   * WeaponTypeCountOutputType without action
   */
  export type WeaponTypeCountOutputTypeCountMainWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MainWeaponWhereInput
  }



  /**
   * Count Type SubWeaponCountOutputType
   */

  export type SubWeaponCountOutputType = {
    Weapon: number
  }

  export type SubWeaponCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | SubWeaponCountOutputTypeCountWeaponArgs
  }

  // Custom InputTypes

  /**
   * SubWeaponCountOutputType without action
   */
  export type SubWeaponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeaponCountOutputType
     */
    select?: SubWeaponCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubWeaponCountOutputType without action
   */
  export type SubWeaponCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }



  /**
   * Count Type MainWeaponCountOutputType
   */

  export type MainWeaponCountOutputType = {
    Weapon: number
  }

  export type MainWeaponCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | MainWeaponCountOutputTypeCountWeaponArgs
  }

  // Custom InputTypes

  /**
   * MainWeaponCountOutputType without action
   */
  export type MainWeaponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeaponCountOutputType
     */
    select?: MainWeaponCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MainWeaponCountOutputType without action
   */
  export type MainWeaponCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }



  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    Weapon: number
    Stage: number
    SpecialWeapon: number
    SubWeapon: number
    MainWeapon: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | SeasonCountOutputTypeCountWeaponArgs
    Stage?: boolean | SeasonCountOutputTypeCountStageArgs
    SpecialWeapon?: boolean | SeasonCountOutputTypeCountSpecialWeaponArgs
    SubWeapon?: boolean | SeasonCountOutputTypeCountSubWeaponArgs
    MainWeapon?: boolean | SeasonCountOutputTypeCountMainWeaponArgs
  }

  // Custom InputTypes

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }


  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountStageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }


  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountSpecialWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SpecialWeaponWhereInput
  }


  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountSubWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubWeaponWhereInput
  }


  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountMainWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MainWeaponWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    id: number | null
  }

  export type RuleSumAggregateOutputType = {
    id: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RuleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    id?: true
  }

  export type RuleSumAggregateInputType = {
    id?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: number
    name: string
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    modes?: boolean | Rule$modesArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RuleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    modes?: boolean | Rule$modesArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RulePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      modes: Prisma.$ModeOnRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }


  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RuleFindManyArgs, 'select' | 'include'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RuleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RuleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RuleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
    **/
    create<T extends RuleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RuleCreateArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
    **/
    delete<T extends RuleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RuleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RuleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RuleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
    **/
    upsert<T extends RuleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>
    ): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    modes<T extends Rule$modesArgs<ExtArgs> = {}>(args?: Subset<T, Rule$modesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rule model
   */ 
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'Int'>
    readonly name: FieldRef<"Rule", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }


  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }


  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }


  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }


  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }


  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }


  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }


  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
  }


  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }


  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }


  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
  }


  /**
   * Rule.modes
   */
  export type Rule$modesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    where?: ModeOnRuleWhereInput
    orderBy?: ModeOnRuleOrderByWithRelationInput | ModeOnRuleOrderByWithRelationInput[]
    cursor?: ModeOnRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeOnRuleScalarFieldEnum | ModeOnRuleScalarFieldEnum[]
  }


  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RuleInclude<ExtArgs> | null
  }



  /**
   * Model Mode
   */

  export type AggregateMode = {
    _count: ModeCountAggregateOutputType | null
    _avg: ModeAvgAggregateOutputType | null
    _sum: ModeSumAggregateOutputType | null
    _min: ModeMinAggregateOutputType | null
    _max: ModeMaxAggregateOutputType | null
  }

  export type ModeAvgAggregateOutputType = {
    id: number | null
    maxMembers: number | null
  }

  export type ModeSumAggregateOutputType = {
    id: number | null
    maxMembers: number | null
  }

  export type ModeMinAggregateOutputType = {
    id: number | null
    name: string | null
    maxMembers: number | null
    fessMode: boolean | null
  }

  export type ModeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    maxMembers: number | null
    fessMode: boolean | null
  }

  export type ModeCountAggregateOutputType = {
    id: number
    name: number
    maxMembers: number
    fessMode: number
    _all: number
  }


  export type ModeAvgAggregateInputType = {
    id?: true
    maxMembers?: true
  }

  export type ModeSumAggregateInputType = {
    id?: true
    maxMembers?: true
  }

  export type ModeMinAggregateInputType = {
    id?: true
    name?: true
    maxMembers?: true
    fessMode?: true
  }

  export type ModeMaxAggregateInputType = {
    id?: true
    name?: true
    maxMembers?: true
    fessMode?: true
  }

  export type ModeCountAggregateInputType = {
    id?: true
    name?: true
    maxMembers?: true
    fessMode?: true
    _all?: true
  }

  export type ModeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mode to aggregate.
     */
    where?: ModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modes to fetch.
     */
    orderBy?: ModeOrderByWithRelationInput | ModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modes
    **/
    _count?: true | ModeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeMaxAggregateInputType
  }

  export type GetModeAggregateType<T extends ModeAggregateArgs> = {
        [P in keyof T & keyof AggregateMode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMode[P]>
      : GetScalarType<T[P], AggregateMode[P]>
  }




  export type ModeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModeWhereInput
    orderBy?: ModeOrderByWithAggregationInput | ModeOrderByWithAggregationInput[]
    by: ModeScalarFieldEnum[] | ModeScalarFieldEnum
    having?: ModeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeCountAggregateInputType | true
    _avg?: ModeAvgAggregateInputType
    _sum?: ModeSumAggregateInputType
    _min?: ModeMinAggregateInputType
    _max?: ModeMaxAggregateInputType
  }

  export type ModeGroupByOutputType = {
    id: number
    name: string
    maxMembers: number
    fessMode: boolean
    _count: ModeCountAggregateOutputType | null
    _avg: ModeAvgAggregateOutputType | null
    _sum: ModeSumAggregateOutputType | null
    _min: ModeMinAggregateOutputType | null
    _max: ModeMaxAggregateOutputType | null
  }

  type GetModeGroupByPayload<T extends ModeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeGroupByOutputType[P]>
            : GetScalarType<T[P], ModeGroupByOutputType[P]>
        }
      >
    >


  export type ModeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxMembers?: boolean
    fessMode?: boolean
    rules?: boolean | Mode$rulesArgs<ExtArgs>
    _count?: boolean | ModeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mode"]>

  export type ModeSelectScalar = {
    id?: boolean
    name?: boolean
    maxMembers?: boolean
    fessMode?: boolean
  }

  export type ModeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    rules?: boolean | Mode$rulesArgs<ExtArgs>
    _count?: boolean | ModeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Mode"
    objects: {
      rules: Prisma.$ModeOnRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      maxMembers: number
      fessMode: boolean
    }, ExtArgs["result"]["mode"]>
    composites: {}
  }


  type ModeGetPayload<S extends boolean | null | undefined | ModeDefaultArgs> = $Result.GetResult<Prisma.$ModePayload, S>

  type ModeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ModeFindManyArgs, 'select' | 'include'> & {
      select?: ModeCountAggregateInputType | true
    }

  export interface ModeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mode'], meta: { name: 'Mode' } }
    /**
     * Find zero or one Mode that matches the filter.
     * @param {ModeFindUniqueArgs} args - Arguments to find a Mode
     * @example
     * // Get one Mode
     * const mode = await prisma.mode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModeFindUniqueArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModeFindUniqueOrThrowArgs} args - Arguments to find a Mode
     * @example
     * // Get one Mode
     * const mode = await prisma.mode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeFindFirstArgs} args - Arguments to find a Mode
     * @example
     * // Get one Mode
     * const mode = await prisma.mode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeFindFirstArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeFindFirstOrThrowArgs} args - Arguments to find a Mode
     * @example
     * // Get one Mode
     * const mode = await prisma.mode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Modes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modes
     * const modes = await prisma.mode.findMany()
     * 
     * // Get first 10 Modes
     * const modes = await prisma.mode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modeWithIdOnly = await prisma.mode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mode.
     * @param {ModeCreateArgs} args - Arguments to create a Mode.
     * @example
     * // Create one Mode
     * const Mode = await prisma.mode.create({
     *   data: {
     *     // ... data to create a Mode
     *   }
     * })
     * 
    **/
    create<T extends ModeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModeCreateArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Mode.
     * @param {ModeDeleteArgs} args - Arguments to delete one Mode.
     * @example
     * // Delete one Mode
     * const Mode = await prisma.mode.delete({
     *   where: {
     *     // ... filter to delete one Mode
     *   }
     * })
     * 
    **/
    delete<T extends ModeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModeDeleteArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mode.
     * @param {ModeUpdateArgs} args - Arguments to update one Mode.
     * @example
     * // Update one Mode
     * const mode = await prisma.mode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModeUpdateArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Modes.
     * @param {ModeDeleteManyArgs} args - Arguments to filter Modes to delete.
     * @example
     * // Delete a few Modes
     * const { count } = await prisma.mode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modes
     * const mode = await prisma.mode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mode.
     * @param {ModeUpsertArgs} args - Arguments to update or create a Mode.
     * @example
     * // Update or create a Mode
     * const mode = await prisma.mode.upsert({
     *   create: {
     *     // ... data to create a Mode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mode we want to update
     *   }
     * })
    **/
    upsert<T extends ModeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModeUpsertArgs<ExtArgs>>
    ): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Modes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeCountArgs} args - Arguments to filter Modes to count.
     * @example
     * // Count the number of Modes
     * const count = await prisma.mode.count({
     *   where: {
     *     // ... the filter for the Modes we want to count
     *   }
     * })
    **/
    count<T extends ModeCountArgs>(
      args?: Subset<T, ModeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModeAggregateArgs>(args: Subset<T, ModeAggregateArgs>): Prisma.PrismaPromise<GetModeAggregateType<T>>

    /**
     * Group by Mode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeGroupByArgs['orderBy'] }
        : { orderBy?: ModeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mode model
   */
  readonly fields: ModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rules<T extends Mode$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Mode$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mode model
   */ 
  interface ModeFieldRefs {
    readonly id: FieldRef<"Mode", 'Int'>
    readonly name: FieldRef<"Mode", 'String'>
    readonly maxMembers: FieldRef<"Mode", 'Int'>
    readonly fessMode: FieldRef<"Mode", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Mode findUnique
   */
  export type ModeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * Filter, which Mode to fetch.
     */
    where: ModeWhereUniqueInput
  }


  /**
   * Mode findUniqueOrThrow
   */
  export type ModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * Filter, which Mode to fetch.
     */
    where: ModeWhereUniqueInput
  }


  /**
   * Mode findFirst
   */
  export type ModeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * Filter, which Mode to fetch.
     */
    where?: ModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modes to fetch.
     */
    orderBy?: ModeOrderByWithRelationInput | ModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modes.
     */
    cursor?: ModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modes.
     */
    distinct?: ModeScalarFieldEnum | ModeScalarFieldEnum[]
  }


  /**
   * Mode findFirstOrThrow
   */
  export type ModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * Filter, which Mode to fetch.
     */
    where?: ModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modes to fetch.
     */
    orderBy?: ModeOrderByWithRelationInput | ModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modes.
     */
    cursor?: ModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modes.
     */
    distinct?: ModeScalarFieldEnum | ModeScalarFieldEnum[]
  }


  /**
   * Mode findMany
   */
  export type ModeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * Filter, which Modes to fetch.
     */
    where?: ModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modes to fetch.
     */
    orderBy?: ModeOrderByWithRelationInput | ModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modes.
     */
    cursor?: ModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modes.
     */
    skip?: number
    distinct?: ModeScalarFieldEnum | ModeScalarFieldEnum[]
  }


  /**
   * Mode create
   */
  export type ModeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mode.
     */
    data: XOR<ModeCreateInput, ModeUncheckedCreateInput>
  }


  /**
   * Mode update
   */
  export type ModeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mode.
     */
    data: XOR<ModeUpdateInput, ModeUncheckedUpdateInput>
    /**
     * Choose, which Mode to update.
     */
    where: ModeWhereUniqueInput
  }


  /**
   * Mode updateMany
   */
  export type ModeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modes.
     */
    data: XOR<ModeUpdateManyMutationInput, ModeUncheckedUpdateManyInput>
    /**
     * Filter which Modes to update
     */
    where?: ModeWhereInput
  }


  /**
   * Mode upsert
   */
  export type ModeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mode to update in case it exists.
     */
    where: ModeWhereUniqueInput
    /**
     * In case the Mode found by the `where` argument doesn't exist, create a new Mode with this data.
     */
    create: XOR<ModeCreateInput, ModeUncheckedCreateInput>
    /**
     * In case the Mode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeUpdateInput, ModeUncheckedUpdateInput>
  }


  /**
   * Mode delete
   */
  export type ModeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
    /**
     * Filter which Mode to delete.
     */
    where: ModeWhereUniqueInput
  }


  /**
   * Mode deleteMany
   */
  export type ModeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modes to delete
     */
    where?: ModeWhereInput
  }


  /**
   * Mode.rules
   */
  export type Mode$rulesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    where?: ModeOnRuleWhereInput
    orderBy?: ModeOnRuleOrderByWithRelationInput | ModeOnRuleOrderByWithRelationInput[]
    cursor?: ModeOnRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeOnRuleScalarFieldEnum | ModeOnRuleScalarFieldEnum[]
  }


  /**
   * Mode without action
   */
  export type ModeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mode
     */
    select?: ModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeInclude<ExtArgs> | null
  }



  /**
   * Model ModeOnRule
   */

  export type AggregateModeOnRule = {
    _count: ModeOnRuleCountAggregateOutputType | null
    _avg: ModeOnRuleAvgAggregateOutputType | null
    _sum: ModeOnRuleSumAggregateOutputType | null
    _min: ModeOnRuleMinAggregateOutputType | null
    _max: ModeOnRuleMaxAggregateOutputType | null
  }

  export type ModeOnRuleAvgAggregateOutputType = {
    ruleId: number | null
    modeId: number | null
  }

  export type ModeOnRuleSumAggregateOutputType = {
    ruleId: number | null
    modeId: number | null
  }

  export type ModeOnRuleMinAggregateOutputType = {
    ruleId: number | null
    modeId: number | null
  }

  export type ModeOnRuleMaxAggregateOutputType = {
    ruleId: number | null
    modeId: number | null
  }

  export type ModeOnRuleCountAggregateOutputType = {
    ruleId: number
    modeId: number
    _all: number
  }


  export type ModeOnRuleAvgAggregateInputType = {
    ruleId?: true
    modeId?: true
  }

  export type ModeOnRuleSumAggregateInputType = {
    ruleId?: true
    modeId?: true
  }

  export type ModeOnRuleMinAggregateInputType = {
    ruleId?: true
    modeId?: true
  }

  export type ModeOnRuleMaxAggregateInputType = {
    ruleId?: true
    modeId?: true
  }

  export type ModeOnRuleCountAggregateInputType = {
    ruleId?: true
    modeId?: true
    _all?: true
  }

  export type ModeOnRuleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeOnRule to aggregate.
     */
    where?: ModeOnRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeOnRules to fetch.
     */
    orderBy?: ModeOnRuleOrderByWithRelationInput | ModeOnRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeOnRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeOnRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeOnRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModeOnRules
    **/
    _count?: true | ModeOnRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeOnRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeOnRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeOnRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeOnRuleMaxAggregateInputType
  }

  export type GetModeOnRuleAggregateType<T extends ModeOnRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModeOnRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModeOnRule[P]>
      : GetScalarType<T[P], AggregateModeOnRule[P]>
  }




  export type ModeOnRuleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModeOnRuleWhereInput
    orderBy?: ModeOnRuleOrderByWithAggregationInput | ModeOnRuleOrderByWithAggregationInput[]
    by: ModeOnRuleScalarFieldEnum[] | ModeOnRuleScalarFieldEnum
    having?: ModeOnRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeOnRuleCountAggregateInputType | true
    _avg?: ModeOnRuleAvgAggregateInputType
    _sum?: ModeOnRuleSumAggregateInputType
    _min?: ModeOnRuleMinAggregateInputType
    _max?: ModeOnRuleMaxAggregateInputType
  }

  export type ModeOnRuleGroupByOutputType = {
    ruleId: number
    modeId: number
    _count: ModeOnRuleCountAggregateOutputType | null
    _avg: ModeOnRuleAvgAggregateOutputType | null
    _sum: ModeOnRuleSumAggregateOutputType | null
    _min: ModeOnRuleMinAggregateOutputType | null
    _max: ModeOnRuleMaxAggregateOutputType | null
  }

  type GetModeOnRuleGroupByPayload<T extends ModeOnRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeOnRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeOnRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeOnRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModeOnRuleGroupByOutputType[P]>
        }
      >
    >


  export type ModeOnRuleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ruleId?: boolean
    modeId?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    mode?: boolean | ModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeOnRule"]>

  export type ModeOnRuleSelectScalar = {
    ruleId?: boolean
    modeId?: boolean
  }

  export type ModeOnRuleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    mode?: boolean | ModeDefaultArgs<ExtArgs>
  }


  export type $ModeOnRulePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ModeOnRule"
    objects: {
      rule: Prisma.$RulePayload<ExtArgs>
      mode: Prisma.$ModePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      ruleId: number
      modeId: number
    }, ExtArgs["result"]["modeOnRule"]>
    composites: {}
  }


  type ModeOnRuleGetPayload<S extends boolean | null | undefined | ModeOnRuleDefaultArgs> = $Result.GetResult<Prisma.$ModeOnRulePayload, S>

  type ModeOnRuleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ModeOnRuleFindManyArgs, 'select' | 'include'> & {
      select?: ModeOnRuleCountAggregateInputType | true
    }

  export interface ModeOnRuleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModeOnRule'], meta: { name: 'ModeOnRule' } }
    /**
     * Find zero or one ModeOnRule that matches the filter.
     * @param {ModeOnRuleFindUniqueArgs} args - Arguments to find a ModeOnRule
     * @example
     * // Get one ModeOnRule
     * const modeOnRule = await prisma.modeOnRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModeOnRuleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModeOnRuleFindUniqueArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ModeOnRule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModeOnRuleFindUniqueOrThrowArgs} args - Arguments to find a ModeOnRule
     * @example
     * // Get one ModeOnRule
     * const modeOnRule = await prisma.modeOnRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModeOnRuleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeOnRuleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ModeOnRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleFindFirstArgs} args - Arguments to find a ModeOnRule
     * @example
     * // Get one ModeOnRule
     * const modeOnRule = await prisma.modeOnRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModeOnRuleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeOnRuleFindFirstArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ModeOnRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleFindFirstOrThrowArgs} args - Arguments to find a ModeOnRule
     * @example
     * // Get one ModeOnRule
     * const modeOnRule = await prisma.modeOnRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModeOnRuleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeOnRuleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ModeOnRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModeOnRules
     * const modeOnRules = await prisma.modeOnRule.findMany()
     * 
     * // Get first 10 ModeOnRules
     * const modeOnRules = await prisma.modeOnRule.findMany({ take: 10 })
     * 
     * // Only select the `ruleId`
     * const modeOnRuleWithRuleIdOnly = await prisma.modeOnRule.findMany({ select: { ruleId: true } })
     * 
    **/
    findMany<T extends ModeOnRuleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeOnRuleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ModeOnRule.
     * @param {ModeOnRuleCreateArgs} args - Arguments to create a ModeOnRule.
     * @example
     * // Create one ModeOnRule
     * const ModeOnRule = await prisma.modeOnRule.create({
     *   data: {
     *     // ... data to create a ModeOnRule
     *   }
     * })
     * 
    **/
    create<T extends ModeOnRuleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModeOnRuleCreateArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ModeOnRule.
     * @param {ModeOnRuleDeleteArgs} args - Arguments to delete one ModeOnRule.
     * @example
     * // Delete one ModeOnRule
     * const ModeOnRule = await prisma.modeOnRule.delete({
     *   where: {
     *     // ... filter to delete one ModeOnRule
     *   }
     * })
     * 
    **/
    delete<T extends ModeOnRuleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModeOnRuleDeleteArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ModeOnRule.
     * @param {ModeOnRuleUpdateArgs} args - Arguments to update one ModeOnRule.
     * @example
     * // Update one ModeOnRule
     * const modeOnRule = await prisma.modeOnRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModeOnRuleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModeOnRuleUpdateArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ModeOnRules.
     * @param {ModeOnRuleDeleteManyArgs} args - Arguments to filter ModeOnRules to delete.
     * @example
     * // Delete a few ModeOnRules
     * const { count } = await prisma.modeOnRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModeOnRuleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModeOnRuleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeOnRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModeOnRules
     * const modeOnRule = await prisma.modeOnRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModeOnRuleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModeOnRuleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModeOnRule.
     * @param {ModeOnRuleUpsertArgs} args - Arguments to update or create a ModeOnRule.
     * @example
     * // Update or create a ModeOnRule
     * const modeOnRule = await prisma.modeOnRule.upsert({
     *   create: {
     *     // ... data to create a ModeOnRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModeOnRule we want to update
     *   }
     * })
    **/
    upsert<T extends ModeOnRuleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModeOnRuleUpsertArgs<ExtArgs>>
    ): Prisma__ModeOnRuleClient<$Result.GetResult<Prisma.$ModeOnRulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ModeOnRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleCountArgs} args - Arguments to filter ModeOnRules to count.
     * @example
     * // Count the number of ModeOnRules
     * const count = await prisma.modeOnRule.count({
     *   where: {
     *     // ... the filter for the ModeOnRules we want to count
     *   }
     * })
    **/
    count<T extends ModeOnRuleCountArgs>(
      args?: Subset<T, ModeOnRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeOnRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModeOnRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModeOnRuleAggregateArgs>(args: Subset<T, ModeOnRuleAggregateArgs>): Prisma.PrismaPromise<GetModeOnRuleAggregateType<T>>

    /**
     * Group by ModeOnRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeOnRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModeOnRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeOnRuleGroupByArgs['orderBy'] }
        : { orderBy?: ModeOnRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModeOnRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeOnRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModeOnRule model
   */
  readonly fields: ModeOnRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModeOnRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeOnRuleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rule<T extends RuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuleDefaultArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    mode<T extends ModeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModeDefaultArgs<ExtArgs>>): Prisma__ModeClient<$Result.GetResult<Prisma.$ModePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ModeOnRule model
   */ 
  interface ModeOnRuleFieldRefs {
    readonly ruleId: FieldRef<"ModeOnRule", 'Int'>
    readonly modeId: FieldRef<"ModeOnRule", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ModeOnRule findUnique
   */
  export type ModeOnRuleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * Filter, which ModeOnRule to fetch.
     */
    where: ModeOnRuleWhereUniqueInput
  }


  /**
   * ModeOnRule findUniqueOrThrow
   */
  export type ModeOnRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * Filter, which ModeOnRule to fetch.
     */
    where: ModeOnRuleWhereUniqueInput
  }


  /**
   * ModeOnRule findFirst
   */
  export type ModeOnRuleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * Filter, which ModeOnRule to fetch.
     */
    where?: ModeOnRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeOnRules to fetch.
     */
    orderBy?: ModeOnRuleOrderByWithRelationInput | ModeOnRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeOnRules.
     */
    cursor?: ModeOnRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeOnRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeOnRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeOnRules.
     */
    distinct?: ModeOnRuleScalarFieldEnum | ModeOnRuleScalarFieldEnum[]
  }


  /**
   * ModeOnRule findFirstOrThrow
   */
  export type ModeOnRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * Filter, which ModeOnRule to fetch.
     */
    where?: ModeOnRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeOnRules to fetch.
     */
    orderBy?: ModeOnRuleOrderByWithRelationInput | ModeOnRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeOnRules.
     */
    cursor?: ModeOnRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeOnRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeOnRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeOnRules.
     */
    distinct?: ModeOnRuleScalarFieldEnum | ModeOnRuleScalarFieldEnum[]
  }


  /**
   * ModeOnRule findMany
   */
  export type ModeOnRuleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * Filter, which ModeOnRules to fetch.
     */
    where?: ModeOnRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeOnRules to fetch.
     */
    orderBy?: ModeOnRuleOrderByWithRelationInput | ModeOnRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModeOnRules.
     */
    cursor?: ModeOnRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeOnRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeOnRules.
     */
    skip?: number
    distinct?: ModeOnRuleScalarFieldEnum | ModeOnRuleScalarFieldEnum[]
  }


  /**
   * ModeOnRule create
   */
  export type ModeOnRuleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ModeOnRule.
     */
    data: XOR<ModeOnRuleCreateInput, ModeOnRuleUncheckedCreateInput>
  }


  /**
   * ModeOnRule update
   */
  export type ModeOnRuleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ModeOnRule.
     */
    data: XOR<ModeOnRuleUpdateInput, ModeOnRuleUncheckedUpdateInput>
    /**
     * Choose, which ModeOnRule to update.
     */
    where: ModeOnRuleWhereUniqueInput
  }


  /**
   * ModeOnRule updateMany
   */
  export type ModeOnRuleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModeOnRules.
     */
    data: XOR<ModeOnRuleUpdateManyMutationInput, ModeOnRuleUncheckedUpdateManyInput>
    /**
     * Filter which ModeOnRules to update
     */
    where?: ModeOnRuleWhereInput
  }


  /**
   * ModeOnRule upsert
   */
  export type ModeOnRuleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ModeOnRule to update in case it exists.
     */
    where: ModeOnRuleWhereUniqueInput
    /**
     * In case the ModeOnRule found by the `where` argument doesn't exist, create a new ModeOnRule with this data.
     */
    create: XOR<ModeOnRuleCreateInput, ModeOnRuleUncheckedCreateInput>
    /**
     * In case the ModeOnRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeOnRuleUpdateInput, ModeOnRuleUncheckedUpdateInput>
  }


  /**
   * ModeOnRule delete
   */
  export type ModeOnRuleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
    /**
     * Filter which ModeOnRule to delete.
     */
    where: ModeOnRuleWhereUniqueInput
  }


  /**
   * ModeOnRule deleteMany
   */
  export type ModeOnRuleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeOnRules to delete
     */
    where?: ModeOnRuleWhereInput
  }


  /**
   * ModeOnRule without action
   */
  export type ModeOnRuleDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeOnRule
     */
    select?: ModeOnRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModeOnRuleInclude<ExtArgs> | null
  }



  /**
   * Model Stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type StageSumAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type StageMinAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
  }

  export type StageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    name: number
    seasonId: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type StageSumAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stage to aggregate.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type StageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
    orderBy?: StageOrderByWithAggregationInput | StageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: number
    name: string
    seasonId: number
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type StageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectScalar = {
    id?: boolean
    name?: boolean
    seasonId?: boolean
  }

  export type StageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
  }


  export type $StagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Stage"
    objects: {
      releaseSeason: Prisma.$SeasonPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      seasonId: number
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }


  type StageGetPayload<S extends boolean | null | undefined | StageDefaultArgs> = $Result.GetResult<Prisma.$StagePayload, S>

  type StageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StageFindManyArgs, 'select' | 'include'> & {
      select?: StageCountAggregateInputType | true
    }

  export interface StageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stage'], meta: { name: 'Stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StageFindUniqueArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindFirstArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
    **/
    create<T extends StageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StageCreateArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
    **/
    delete<T extends StageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StageDeleteArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StageUpdateArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
    **/
    upsert<T extends StageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StageUpsertArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stage model
   */
  readonly fields: StageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    releaseSeason<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Stage model
   */ 
  interface StageFieldRefs {
    readonly id: FieldRef<"Stage", 'Int'>
    readonly name: FieldRef<"Stage", 'String'>
    readonly seasonId: FieldRef<"Stage", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage findUniqueOrThrow
   */
  export type StageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Stage findFirstOrThrow
   */
  export type StageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Stage findMany
   */
  export type StageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Stage create
   */
  export type StageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to create a Stage.
     */
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }


  /**
   * Stage update
   */
  export type StageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to update a Stage.
     */
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
  }


  /**
   * Stage upsert
   */
  export type StageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The filter to search for the Stage to update in case it exists.
     */
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     */
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }


  /**
   * Stage delete
   */
  export type StageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter which Stage to delete.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StageWhereInput
  }


  /**
   * Stage without action
   */
  export type StageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
  }



  /**
   * Model SpecialWeapon
   */

  export type AggregateSpecialWeapon = {
    _count: SpecialWeaponCountAggregateOutputType | null
    _avg: SpecialWeaponAvgAggregateOutputType | null
    _sum: SpecialWeaponSumAggregateOutputType | null
    _min: SpecialWeaponMinAggregateOutputType | null
    _max: SpecialWeaponMaxAggregateOutputType | null
  }

  export type SpecialWeaponAvgAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type SpecialWeaponSumAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type SpecialWeaponMinAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
  }

  export type SpecialWeaponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
  }

  export type SpecialWeaponCountAggregateOutputType = {
    id: number
    name: number
    seasonId: number
    _all: number
  }


  export type SpecialWeaponAvgAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type SpecialWeaponSumAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type SpecialWeaponMinAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
  }

  export type SpecialWeaponMaxAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
  }

  export type SpecialWeaponCountAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    _all?: true
  }

  export type SpecialWeaponAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialWeapon to aggregate.
     */
    where?: SpecialWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialWeapons to fetch.
     */
    orderBy?: SpecialWeaponOrderByWithRelationInput | SpecialWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialWeapons
    **/
    _count?: true | SpecialWeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialWeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialWeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialWeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialWeaponMaxAggregateInputType
  }

  export type GetSpecialWeaponAggregateType<T extends SpecialWeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialWeapon[P]>
      : GetScalarType<T[P], AggregateSpecialWeapon[P]>
  }




  export type SpecialWeaponGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SpecialWeaponWhereInput
    orderBy?: SpecialWeaponOrderByWithAggregationInput | SpecialWeaponOrderByWithAggregationInput[]
    by: SpecialWeaponScalarFieldEnum[] | SpecialWeaponScalarFieldEnum
    having?: SpecialWeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialWeaponCountAggregateInputType | true
    _avg?: SpecialWeaponAvgAggregateInputType
    _sum?: SpecialWeaponSumAggregateInputType
    _min?: SpecialWeaponMinAggregateInputType
    _max?: SpecialWeaponMaxAggregateInputType
  }

  export type SpecialWeaponGroupByOutputType = {
    id: number
    name: string
    seasonId: number
    _count: SpecialWeaponCountAggregateOutputType | null
    _avg: SpecialWeaponAvgAggregateOutputType | null
    _sum: SpecialWeaponSumAggregateOutputType | null
    _min: SpecialWeaponMinAggregateOutputType | null
    _max: SpecialWeaponMaxAggregateOutputType | null
  }

  type GetSpecialWeaponGroupByPayload<T extends SpecialWeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialWeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialWeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialWeaponGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialWeaponGroupByOutputType[P]>
        }
      >
    >


  export type SpecialWeaponSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
    Weapon?: boolean | SpecialWeapon$WeaponArgs<ExtArgs>
    _count?: boolean | SpecialWeaponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialWeapon"]>

  export type SpecialWeaponSelectScalar = {
    id?: boolean
    name?: boolean
    seasonId?: boolean
  }

  export type SpecialWeaponInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
    Weapon?: boolean | SpecialWeapon$WeaponArgs<ExtArgs>
    _count?: boolean | SpecialWeaponCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SpecialWeaponPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SpecialWeapon"
    objects: {
      releaseSeason: Prisma.$SeasonPayload<ExtArgs>
      Weapon: Prisma.$WeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      seasonId: number
    }, ExtArgs["result"]["specialWeapon"]>
    composites: {}
  }


  type SpecialWeaponGetPayload<S extends boolean | null | undefined | SpecialWeaponDefaultArgs> = $Result.GetResult<Prisma.$SpecialWeaponPayload, S>

  type SpecialWeaponCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SpecialWeaponFindManyArgs, 'select' | 'include'> & {
      select?: SpecialWeaponCountAggregateInputType | true
    }

  export interface SpecialWeaponDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialWeapon'], meta: { name: 'SpecialWeapon' } }
    /**
     * Find zero or one SpecialWeapon that matches the filter.
     * @param {SpecialWeaponFindUniqueArgs} args - Arguments to find a SpecialWeapon
     * @example
     * // Get one SpecialWeapon
     * const specialWeapon = await prisma.specialWeapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpecialWeaponFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialWeaponFindUniqueArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SpecialWeapon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpecialWeaponFindUniqueOrThrowArgs} args - Arguments to find a SpecialWeapon
     * @example
     * // Get one SpecialWeapon
     * const specialWeapon = await prisma.specialWeapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpecialWeaponFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialWeaponFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SpecialWeapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponFindFirstArgs} args - Arguments to find a SpecialWeapon
     * @example
     * // Get one SpecialWeapon
     * const specialWeapon = await prisma.specialWeapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpecialWeaponFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialWeaponFindFirstArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SpecialWeapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponFindFirstOrThrowArgs} args - Arguments to find a SpecialWeapon
     * @example
     * // Get one SpecialWeapon
     * const specialWeapon = await prisma.specialWeapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpecialWeaponFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialWeaponFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SpecialWeapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialWeapons
     * const specialWeapons = await prisma.specialWeapon.findMany()
     * 
     * // Get first 10 SpecialWeapons
     * const specialWeapons = await prisma.specialWeapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialWeaponWithIdOnly = await prisma.specialWeapon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpecialWeaponFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialWeaponFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SpecialWeapon.
     * @param {SpecialWeaponCreateArgs} args - Arguments to create a SpecialWeapon.
     * @example
     * // Create one SpecialWeapon
     * const SpecialWeapon = await prisma.specialWeapon.create({
     *   data: {
     *     // ... data to create a SpecialWeapon
     *   }
     * })
     * 
    **/
    create<T extends SpecialWeaponCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialWeaponCreateArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a SpecialWeapon.
     * @param {SpecialWeaponDeleteArgs} args - Arguments to delete one SpecialWeapon.
     * @example
     * // Delete one SpecialWeapon
     * const SpecialWeapon = await prisma.specialWeapon.delete({
     *   where: {
     *     // ... filter to delete one SpecialWeapon
     *   }
     * })
     * 
    **/
    delete<T extends SpecialWeaponDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialWeaponDeleteArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SpecialWeapon.
     * @param {SpecialWeaponUpdateArgs} args - Arguments to update one SpecialWeapon.
     * @example
     * // Update one SpecialWeapon
     * const specialWeapon = await prisma.specialWeapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpecialWeaponUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialWeaponUpdateArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SpecialWeapons.
     * @param {SpecialWeaponDeleteManyArgs} args - Arguments to filter SpecialWeapons to delete.
     * @example
     * // Delete a few SpecialWeapons
     * const { count } = await prisma.specialWeapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpecialWeaponDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecialWeaponDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialWeapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialWeapons
     * const specialWeapon = await prisma.specialWeapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpecialWeaponUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialWeaponUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpecialWeapon.
     * @param {SpecialWeaponUpsertArgs} args - Arguments to update or create a SpecialWeapon.
     * @example
     * // Update or create a SpecialWeapon
     * const specialWeapon = await prisma.specialWeapon.upsert({
     *   create: {
     *     // ... data to create a SpecialWeapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialWeapon we want to update
     *   }
     * })
    **/
    upsert<T extends SpecialWeaponUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SpecialWeaponUpsertArgs<ExtArgs>>
    ): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SpecialWeapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponCountArgs} args - Arguments to filter SpecialWeapons to count.
     * @example
     * // Count the number of SpecialWeapons
     * const count = await prisma.specialWeapon.count({
     *   where: {
     *     // ... the filter for the SpecialWeapons we want to count
     *   }
     * })
    **/
    count<T extends SpecialWeaponCountArgs>(
      args?: Subset<T, SpecialWeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialWeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialWeapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialWeaponAggregateArgs>(args: Subset<T, SpecialWeaponAggregateArgs>): Prisma.PrismaPromise<GetSpecialWeaponAggregateType<T>>

    /**
     * Group by SpecialWeapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialWeaponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialWeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialWeaponGroupByArgs['orderBy'] }
        : { orderBy?: SpecialWeaponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialWeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialWeapon model
   */
  readonly fields: SpecialWeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialWeapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialWeaponClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    releaseSeason<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Weapon<T extends SpecialWeapon$WeaponArgs<ExtArgs> = {}>(args?: Subset<T, SpecialWeapon$WeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SpecialWeapon model
   */ 
  interface SpecialWeaponFieldRefs {
    readonly id: FieldRef<"SpecialWeapon", 'Int'>
    readonly name: FieldRef<"SpecialWeapon", 'String'>
    readonly seasonId: FieldRef<"SpecialWeapon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SpecialWeapon findUnique
   */
  export type SpecialWeaponFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SpecialWeapon to fetch.
     */
    where: SpecialWeaponWhereUniqueInput
  }


  /**
   * SpecialWeapon findUniqueOrThrow
   */
  export type SpecialWeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SpecialWeapon to fetch.
     */
    where: SpecialWeaponWhereUniqueInput
  }


  /**
   * SpecialWeapon findFirst
   */
  export type SpecialWeaponFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SpecialWeapon to fetch.
     */
    where?: SpecialWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialWeapons to fetch.
     */
    orderBy?: SpecialWeaponOrderByWithRelationInput | SpecialWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialWeapons.
     */
    cursor?: SpecialWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialWeapons.
     */
    distinct?: SpecialWeaponScalarFieldEnum | SpecialWeaponScalarFieldEnum[]
  }


  /**
   * SpecialWeapon findFirstOrThrow
   */
  export type SpecialWeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SpecialWeapon to fetch.
     */
    where?: SpecialWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialWeapons to fetch.
     */
    orderBy?: SpecialWeaponOrderByWithRelationInput | SpecialWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialWeapons.
     */
    cursor?: SpecialWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialWeapons.
     */
    distinct?: SpecialWeaponScalarFieldEnum | SpecialWeaponScalarFieldEnum[]
  }


  /**
   * SpecialWeapon findMany
   */
  export type SpecialWeaponFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SpecialWeapons to fetch.
     */
    where?: SpecialWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialWeapons to fetch.
     */
    orderBy?: SpecialWeaponOrderByWithRelationInput | SpecialWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialWeapons.
     */
    cursor?: SpecialWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialWeapons.
     */
    skip?: number
    distinct?: SpecialWeaponScalarFieldEnum | SpecialWeaponScalarFieldEnum[]
  }


  /**
   * SpecialWeapon create
   */
  export type SpecialWeaponCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialWeapon.
     */
    data: XOR<SpecialWeaponCreateInput, SpecialWeaponUncheckedCreateInput>
  }


  /**
   * SpecialWeapon update
   */
  export type SpecialWeaponUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialWeapon.
     */
    data: XOR<SpecialWeaponUpdateInput, SpecialWeaponUncheckedUpdateInput>
    /**
     * Choose, which SpecialWeapon to update.
     */
    where: SpecialWeaponWhereUniqueInput
  }


  /**
   * SpecialWeapon updateMany
   */
  export type SpecialWeaponUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialWeapons.
     */
    data: XOR<SpecialWeaponUpdateManyMutationInput, SpecialWeaponUncheckedUpdateManyInput>
    /**
     * Filter which SpecialWeapons to update
     */
    where?: SpecialWeaponWhereInput
  }


  /**
   * SpecialWeapon upsert
   */
  export type SpecialWeaponUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialWeapon to update in case it exists.
     */
    where: SpecialWeaponWhereUniqueInput
    /**
     * In case the SpecialWeapon found by the `where` argument doesn't exist, create a new SpecialWeapon with this data.
     */
    create: XOR<SpecialWeaponCreateInput, SpecialWeaponUncheckedCreateInput>
    /**
     * In case the SpecialWeapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialWeaponUpdateInput, SpecialWeaponUncheckedUpdateInput>
  }


  /**
   * SpecialWeapon delete
   */
  export type SpecialWeaponDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    /**
     * Filter which SpecialWeapon to delete.
     */
    where: SpecialWeaponWhereUniqueInput
  }


  /**
   * SpecialWeapon deleteMany
   */
  export type SpecialWeaponDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialWeapons to delete
     */
    where?: SpecialWeaponWhereInput
  }


  /**
   * SpecialWeapon.Weapon
   */
  export type SpecialWeapon$WeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * SpecialWeapon without action
   */
  export type SpecialWeaponDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
  }



  /**
   * Model WeaponType
   */

  export type AggregateWeaponType = {
    _count: WeaponTypeCountAggregateOutputType | null
    _avg: WeaponTypeAvgAggregateOutputType | null
    _sum: WeaponTypeSumAggregateOutputType | null
    _min: WeaponTypeMinAggregateOutputType | null
    _max: WeaponTypeMaxAggregateOutputType | null
  }

  export type WeaponTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type WeaponTypeSumAggregateOutputType = {
    id: number | null
  }

  export type WeaponTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type WeaponTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type WeaponTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type WeaponTypeAvgAggregateInputType = {
    id?: true
  }

  export type WeaponTypeSumAggregateInputType = {
    id?: true
  }

  export type WeaponTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type WeaponTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type WeaponTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type WeaponTypeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeaponType to aggregate.
     */
    where?: WeaponTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponTypes to fetch.
     */
    orderBy?: WeaponTypeOrderByWithRelationInput | WeaponTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeaponTypes
    **/
    _count?: true | WeaponTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponTypeMaxAggregateInputType
  }

  export type GetWeaponTypeAggregateType<T extends WeaponTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWeaponType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeaponType[P]>
      : GetScalarType<T[P], AggregateWeaponType[P]>
  }




  export type WeaponTypeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponTypeWhereInput
    orderBy?: WeaponTypeOrderByWithAggregationInput | WeaponTypeOrderByWithAggregationInput[]
    by: WeaponTypeScalarFieldEnum[] | WeaponTypeScalarFieldEnum
    having?: WeaponTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponTypeCountAggregateInputType | true
    _avg?: WeaponTypeAvgAggregateInputType
    _sum?: WeaponTypeSumAggregateInputType
    _min?: WeaponTypeMinAggregateInputType
    _max?: WeaponTypeMaxAggregateInputType
  }

  export type WeaponTypeGroupByOutputType = {
    id: number
    name: string
    _count: WeaponTypeCountAggregateOutputType | null
    _avg: WeaponTypeAvgAggregateOutputType | null
    _sum: WeaponTypeSumAggregateOutputType | null
    _min: WeaponTypeMinAggregateOutputType | null
    _max: WeaponTypeMaxAggregateOutputType | null
  }

  type GetWeaponTypeGroupByPayload<T extends WeaponTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponTypeGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponTypeGroupByOutputType[P]>
        }
      >
    >


  export type WeaponTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Weapon?: boolean | WeaponType$WeaponArgs<ExtArgs>
    MainWeapon?: boolean | WeaponType$MainWeaponArgs<ExtArgs>
    _count?: boolean | WeaponTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weaponType"]>

  export type WeaponTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type WeaponTypeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | WeaponType$WeaponArgs<ExtArgs>
    MainWeapon?: boolean | WeaponType$MainWeaponArgs<ExtArgs>
    _count?: boolean | WeaponTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WeaponTypePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "WeaponType"
    objects: {
      Weapon: Prisma.$WeaponPayload<ExtArgs>[]
      MainWeapon: Prisma.$MainWeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["weaponType"]>
    composites: {}
  }


  type WeaponTypeGetPayload<S extends boolean | null | undefined | WeaponTypeDefaultArgs> = $Result.GetResult<Prisma.$WeaponTypePayload, S>

  type WeaponTypeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WeaponTypeFindManyArgs, 'select' | 'include'> & {
      select?: WeaponTypeCountAggregateInputType | true
    }

  export interface WeaponTypeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeaponType'], meta: { name: 'WeaponType' } }
    /**
     * Find zero or one WeaponType that matches the filter.
     * @param {WeaponTypeFindUniqueArgs} args - Arguments to find a WeaponType
     * @example
     * // Get one WeaponType
     * const weaponType = await prisma.weaponType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeaponTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WeaponType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WeaponTypeFindUniqueOrThrowArgs} args - Arguments to find a WeaponType
     * @example
     * // Get one WeaponType
     * const weaponType = await prisma.weaponType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeaponTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WeaponType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeFindFirstArgs} args - Arguments to find a WeaponType
     * @example
     * // Get one WeaponType
     * const weaponType = await prisma.weaponType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeaponTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponTypeFindFirstArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WeaponType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeFindFirstOrThrowArgs} args - Arguments to find a WeaponType
     * @example
     * // Get one WeaponType
     * const weaponType = await prisma.weaponType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeaponTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WeaponTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeaponTypes
     * const weaponTypes = await prisma.weaponType.findMany()
     * 
     * // Get first 10 WeaponTypes
     * const weaponTypes = await prisma.weaponType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponTypeWithIdOnly = await prisma.weaponType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeaponTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WeaponType.
     * @param {WeaponTypeCreateArgs} args - Arguments to create a WeaponType.
     * @example
     * // Create one WeaponType
     * const WeaponType = await prisma.weaponType.create({
     *   data: {
     *     // ... data to create a WeaponType
     *   }
     * })
     * 
    **/
    create<T extends WeaponTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponTypeCreateArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a WeaponType.
     * @param {WeaponTypeDeleteArgs} args - Arguments to delete one WeaponType.
     * @example
     * // Delete one WeaponType
     * const WeaponType = await prisma.weaponType.delete({
     *   where: {
     *     // ... filter to delete one WeaponType
     *   }
     * })
     * 
    **/
    delete<T extends WeaponTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponTypeDeleteArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WeaponType.
     * @param {WeaponTypeUpdateArgs} args - Arguments to update one WeaponType.
     * @example
     * // Update one WeaponType
     * const weaponType = await prisma.weaponType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeaponTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponTypeUpdateArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WeaponTypes.
     * @param {WeaponTypeDeleteManyArgs} args - Arguments to filter WeaponTypes to delete.
     * @example
     * // Delete a few WeaponTypes
     * const { count } = await prisma.weaponType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeaponTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeaponTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeaponTypes
     * const weaponType = await prisma.weaponType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeaponTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeaponType.
     * @param {WeaponTypeUpsertArgs} args - Arguments to update or create a WeaponType.
     * @example
     * // Update or create a WeaponType
     * const weaponType = await prisma.weaponType.upsert({
     *   create: {
     *     // ... data to create a WeaponType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeaponType we want to update
     *   }
     * })
    **/
    upsert<T extends WeaponTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponTypeUpsertArgs<ExtArgs>>
    ): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WeaponTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeCountArgs} args - Arguments to filter WeaponTypes to count.
     * @example
     * // Count the number of WeaponTypes
     * const count = await prisma.weaponType.count({
     *   where: {
     *     // ... the filter for the WeaponTypes we want to count
     *   }
     * })
    **/
    count<T extends WeaponTypeCountArgs>(
      args?: Subset<T, WeaponTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeaponType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeaponTypeAggregateArgs>(args: Subset<T, WeaponTypeAggregateArgs>): Prisma.PrismaPromise<GetWeaponTypeAggregateType<T>>

    /**
     * Group by WeaponType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeaponTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponTypeGroupByArgs['orderBy'] }
        : { orderBy?: WeaponTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeaponTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeaponType model
   */
  readonly fields: WeaponTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeaponType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponTypeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Weapon<T extends WeaponType$WeaponArgs<ExtArgs> = {}>(args?: Subset<T, WeaponType$WeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    MainWeapon<T extends WeaponType$MainWeaponArgs<ExtArgs> = {}>(args?: Subset<T, WeaponType$MainWeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WeaponType model
   */ 
  interface WeaponTypeFieldRefs {
    readonly id: FieldRef<"WeaponType", 'Int'>
    readonly name: FieldRef<"WeaponType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WeaponType findUnique
   */
  export type WeaponTypeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeaponType to fetch.
     */
    where: WeaponTypeWhereUniqueInput
  }


  /**
   * WeaponType findUniqueOrThrow
   */
  export type WeaponTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeaponType to fetch.
     */
    where: WeaponTypeWhereUniqueInput
  }


  /**
   * WeaponType findFirst
   */
  export type WeaponTypeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeaponType to fetch.
     */
    where?: WeaponTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponTypes to fetch.
     */
    orderBy?: WeaponTypeOrderByWithRelationInput | WeaponTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeaponTypes.
     */
    cursor?: WeaponTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeaponTypes.
     */
    distinct?: WeaponTypeScalarFieldEnum | WeaponTypeScalarFieldEnum[]
  }


  /**
   * WeaponType findFirstOrThrow
   */
  export type WeaponTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeaponType to fetch.
     */
    where?: WeaponTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponTypes to fetch.
     */
    orderBy?: WeaponTypeOrderByWithRelationInput | WeaponTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeaponTypes.
     */
    cursor?: WeaponTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeaponTypes.
     */
    distinct?: WeaponTypeScalarFieldEnum | WeaponTypeScalarFieldEnum[]
  }


  /**
   * WeaponType findMany
   */
  export type WeaponTypeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeaponTypes to fetch.
     */
    where?: WeaponTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponTypes to fetch.
     */
    orderBy?: WeaponTypeOrderByWithRelationInput | WeaponTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeaponTypes.
     */
    cursor?: WeaponTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponTypes.
     */
    skip?: number
    distinct?: WeaponTypeScalarFieldEnum | WeaponTypeScalarFieldEnum[]
  }


  /**
   * WeaponType create
   */
  export type WeaponTypeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a WeaponType.
     */
    data: XOR<WeaponTypeCreateInput, WeaponTypeUncheckedCreateInput>
  }


  /**
   * WeaponType update
   */
  export type WeaponTypeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a WeaponType.
     */
    data: XOR<WeaponTypeUpdateInput, WeaponTypeUncheckedUpdateInput>
    /**
     * Choose, which WeaponType to update.
     */
    where: WeaponTypeWhereUniqueInput
  }


  /**
   * WeaponType updateMany
   */
  export type WeaponTypeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeaponTypes.
     */
    data: XOR<WeaponTypeUpdateManyMutationInput, WeaponTypeUncheckedUpdateManyInput>
    /**
     * Filter which WeaponTypes to update
     */
    where?: WeaponTypeWhereInput
  }


  /**
   * WeaponType upsert
   */
  export type WeaponTypeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the WeaponType to update in case it exists.
     */
    where: WeaponTypeWhereUniqueInput
    /**
     * In case the WeaponType found by the `where` argument doesn't exist, create a new WeaponType with this data.
     */
    create: XOR<WeaponTypeCreateInput, WeaponTypeUncheckedCreateInput>
    /**
     * In case the WeaponType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponTypeUpdateInput, WeaponTypeUncheckedUpdateInput>
  }


  /**
   * WeaponType delete
   */
  export type WeaponTypeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
    /**
     * Filter which WeaponType to delete.
     */
    where: WeaponTypeWhereUniqueInput
  }


  /**
   * WeaponType deleteMany
   */
  export type WeaponTypeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeaponTypes to delete
     */
    where?: WeaponTypeWhereInput
  }


  /**
   * WeaponType.Weapon
   */
  export type WeaponType$WeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * WeaponType.MainWeapon
   */
  export type WeaponType$MainWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    where?: MainWeaponWhereInput
    orderBy?: MainWeaponOrderByWithRelationInput | MainWeaponOrderByWithRelationInput[]
    cursor?: MainWeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainWeaponScalarFieldEnum | MainWeaponScalarFieldEnum[]
  }


  /**
   * WeaponType without action
   */
  export type WeaponTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponType
     */
    select?: WeaponTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponTypeInclude<ExtArgs> | null
  }



  /**
   * Model SubWeapon
   */

  export type AggregateSubWeapon = {
    _count: SubWeaponCountAggregateOutputType | null
    _avg: SubWeaponAvgAggregateOutputType | null
    _sum: SubWeaponSumAggregateOutputType | null
    _min: SubWeaponMinAggregateOutputType | null
    _max: SubWeaponMaxAggregateOutputType | null
  }

  export type SubWeaponAvgAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type SubWeaponSumAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type SubWeaponMinAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
  }

  export type SubWeaponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
  }

  export type SubWeaponCountAggregateOutputType = {
    id: number
    name: number
    seasonId: number
    _all: number
  }


  export type SubWeaponAvgAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type SubWeaponSumAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type SubWeaponMinAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
  }

  export type SubWeaponMaxAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
  }

  export type SubWeaponCountAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    _all?: true
  }

  export type SubWeaponAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubWeapon to aggregate.
     */
    where?: SubWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubWeapons to fetch.
     */
    orderBy?: SubWeaponOrderByWithRelationInput | SubWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubWeapons
    **/
    _count?: true | SubWeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubWeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubWeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubWeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubWeaponMaxAggregateInputType
  }

  export type GetSubWeaponAggregateType<T extends SubWeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateSubWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubWeapon[P]>
      : GetScalarType<T[P], AggregateSubWeapon[P]>
  }




  export type SubWeaponGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubWeaponWhereInput
    orderBy?: SubWeaponOrderByWithAggregationInput | SubWeaponOrderByWithAggregationInput[]
    by: SubWeaponScalarFieldEnum[] | SubWeaponScalarFieldEnum
    having?: SubWeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubWeaponCountAggregateInputType | true
    _avg?: SubWeaponAvgAggregateInputType
    _sum?: SubWeaponSumAggregateInputType
    _min?: SubWeaponMinAggregateInputType
    _max?: SubWeaponMaxAggregateInputType
  }

  export type SubWeaponGroupByOutputType = {
    id: number
    name: string
    seasonId: number
    _count: SubWeaponCountAggregateOutputType | null
    _avg: SubWeaponAvgAggregateOutputType | null
    _sum: SubWeaponSumAggregateOutputType | null
    _min: SubWeaponMinAggregateOutputType | null
    _max: SubWeaponMaxAggregateOutputType | null
  }

  type GetSubWeaponGroupByPayload<T extends SubWeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubWeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubWeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubWeaponGroupByOutputType[P]>
            : GetScalarType<T[P], SubWeaponGroupByOutputType[P]>
        }
      >
    >


  export type SubWeaponSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
    Weapon?: boolean | SubWeapon$WeaponArgs<ExtArgs>
    _count?: boolean | SubWeaponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subWeapon"]>

  export type SubWeaponSelectScalar = {
    id?: boolean
    name?: boolean
    seasonId?: boolean
  }

  export type SubWeaponInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
    Weapon?: boolean | SubWeapon$WeaponArgs<ExtArgs>
    _count?: boolean | SubWeaponCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SubWeaponPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SubWeapon"
    objects: {
      releaseSeason: Prisma.$SeasonPayload<ExtArgs>
      Weapon: Prisma.$WeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      seasonId: number
    }, ExtArgs["result"]["subWeapon"]>
    composites: {}
  }


  type SubWeaponGetPayload<S extends boolean | null | undefined | SubWeaponDefaultArgs> = $Result.GetResult<Prisma.$SubWeaponPayload, S>

  type SubWeaponCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SubWeaponFindManyArgs, 'select' | 'include'> & {
      select?: SubWeaponCountAggregateInputType | true
    }

  export interface SubWeaponDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubWeapon'], meta: { name: 'SubWeapon' } }
    /**
     * Find zero or one SubWeapon that matches the filter.
     * @param {SubWeaponFindUniqueArgs} args - Arguments to find a SubWeapon
     * @example
     * // Get one SubWeapon
     * const subWeapon = await prisma.subWeapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubWeaponFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubWeaponFindUniqueArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubWeapon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubWeaponFindUniqueOrThrowArgs} args - Arguments to find a SubWeapon
     * @example
     * // Get one SubWeapon
     * const subWeapon = await prisma.subWeapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubWeaponFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubWeaponFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubWeapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponFindFirstArgs} args - Arguments to find a SubWeapon
     * @example
     * // Get one SubWeapon
     * const subWeapon = await prisma.subWeapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubWeaponFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubWeaponFindFirstArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubWeapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponFindFirstOrThrowArgs} args - Arguments to find a SubWeapon
     * @example
     * // Get one SubWeapon
     * const subWeapon = await prisma.subWeapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubWeaponFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubWeaponFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubWeapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubWeapons
     * const subWeapons = await prisma.subWeapon.findMany()
     * 
     * // Get first 10 SubWeapons
     * const subWeapons = await prisma.subWeapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subWeaponWithIdOnly = await prisma.subWeapon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubWeaponFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubWeaponFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubWeapon.
     * @param {SubWeaponCreateArgs} args - Arguments to create a SubWeapon.
     * @example
     * // Create one SubWeapon
     * const SubWeapon = await prisma.subWeapon.create({
     *   data: {
     *     // ... data to create a SubWeapon
     *   }
     * })
     * 
    **/
    create<T extends SubWeaponCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubWeaponCreateArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a SubWeapon.
     * @param {SubWeaponDeleteArgs} args - Arguments to delete one SubWeapon.
     * @example
     * // Delete one SubWeapon
     * const SubWeapon = await prisma.subWeapon.delete({
     *   where: {
     *     // ... filter to delete one SubWeapon
     *   }
     * })
     * 
    **/
    delete<T extends SubWeaponDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubWeaponDeleteArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubWeapon.
     * @param {SubWeaponUpdateArgs} args - Arguments to update one SubWeapon.
     * @example
     * // Update one SubWeapon
     * const subWeapon = await prisma.subWeapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubWeaponUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubWeaponUpdateArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubWeapons.
     * @param {SubWeaponDeleteManyArgs} args - Arguments to filter SubWeapons to delete.
     * @example
     * // Delete a few SubWeapons
     * const { count } = await prisma.subWeapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubWeaponDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubWeaponDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubWeapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubWeapons
     * const subWeapon = await prisma.subWeapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubWeaponUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubWeaponUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubWeapon.
     * @param {SubWeaponUpsertArgs} args - Arguments to update or create a SubWeapon.
     * @example
     * // Update or create a SubWeapon
     * const subWeapon = await prisma.subWeapon.upsert({
     *   create: {
     *     // ... data to create a SubWeapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubWeapon we want to update
     *   }
     * })
    **/
    upsert<T extends SubWeaponUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubWeaponUpsertArgs<ExtArgs>>
    ): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubWeapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponCountArgs} args - Arguments to filter SubWeapons to count.
     * @example
     * // Count the number of SubWeapons
     * const count = await prisma.subWeapon.count({
     *   where: {
     *     // ... the filter for the SubWeapons we want to count
     *   }
     * })
    **/
    count<T extends SubWeaponCountArgs>(
      args?: Subset<T, SubWeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubWeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubWeapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubWeaponAggregateArgs>(args: Subset<T, SubWeaponAggregateArgs>): Prisma.PrismaPromise<GetSubWeaponAggregateType<T>>

    /**
     * Group by SubWeapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubWeaponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubWeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubWeaponGroupByArgs['orderBy'] }
        : { orderBy?: SubWeaponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubWeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubWeapon model
   */
  readonly fields: SubWeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubWeapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubWeaponClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    releaseSeason<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Weapon<T extends SubWeapon$WeaponArgs<ExtArgs> = {}>(args?: Subset<T, SubWeapon$WeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SubWeapon model
   */ 
  interface SubWeaponFieldRefs {
    readonly id: FieldRef<"SubWeapon", 'Int'>
    readonly name: FieldRef<"SubWeapon", 'String'>
    readonly seasonId: FieldRef<"SubWeapon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SubWeapon findUnique
   */
  export type SubWeaponFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SubWeapon to fetch.
     */
    where: SubWeaponWhereUniqueInput
  }


  /**
   * SubWeapon findUniqueOrThrow
   */
  export type SubWeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SubWeapon to fetch.
     */
    where: SubWeaponWhereUniqueInput
  }


  /**
   * SubWeapon findFirst
   */
  export type SubWeaponFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SubWeapon to fetch.
     */
    where?: SubWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubWeapons to fetch.
     */
    orderBy?: SubWeaponOrderByWithRelationInput | SubWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubWeapons.
     */
    cursor?: SubWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubWeapons.
     */
    distinct?: SubWeaponScalarFieldEnum | SubWeaponScalarFieldEnum[]
  }


  /**
   * SubWeapon findFirstOrThrow
   */
  export type SubWeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SubWeapon to fetch.
     */
    where?: SubWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubWeapons to fetch.
     */
    orderBy?: SubWeaponOrderByWithRelationInput | SubWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubWeapons.
     */
    cursor?: SubWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubWeapons.
     */
    distinct?: SubWeaponScalarFieldEnum | SubWeaponScalarFieldEnum[]
  }


  /**
   * SubWeapon findMany
   */
  export type SubWeaponFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * Filter, which SubWeapons to fetch.
     */
    where?: SubWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubWeapons to fetch.
     */
    orderBy?: SubWeaponOrderByWithRelationInput | SubWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubWeapons.
     */
    cursor?: SubWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubWeapons.
     */
    skip?: number
    distinct?: SubWeaponScalarFieldEnum | SubWeaponScalarFieldEnum[]
  }


  /**
   * SubWeapon create
   */
  export type SubWeaponCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * The data needed to create a SubWeapon.
     */
    data: XOR<SubWeaponCreateInput, SubWeaponUncheckedCreateInput>
  }


  /**
   * SubWeapon update
   */
  export type SubWeaponUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * The data needed to update a SubWeapon.
     */
    data: XOR<SubWeaponUpdateInput, SubWeaponUncheckedUpdateInput>
    /**
     * Choose, which SubWeapon to update.
     */
    where: SubWeaponWhereUniqueInput
  }


  /**
   * SubWeapon updateMany
   */
  export type SubWeaponUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubWeapons.
     */
    data: XOR<SubWeaponUpdateManyMutationInput, SubWeaponUncheckedUpdateManyInput>
    /**
     * Filter which SubWeapons to update
     */
    where?: SubWeaponWhereInput
  }


  /**
   * SubWeapon upsert
   */
  export type SubWeaponUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * The filter to search for the SubWeapon to update in case it exists.
     */
    where: SubWeaponWhereUniqueInput
    /**
     * In case the SubWeapon found by the `where` argument doesn't exist, create a new SubWeapon with this data.
     */
    create: XOR<SubWeaponCreateInput, SubWeaponUncheckedCreateInput>
    /**
     * In case the SubWeapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubWeaponUpdateInput, SubWeaponUncheckedUpdateInput>
  }


  /**
   * SubWeapon delete
   */
  export type SubWeaponDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    /**
     * Filter which SubWeapon to delete.
     */
    where: SubWeaponWhereUniqueInput
  }


  /**
   * SubWeapon deleteMany
   */
  export type SubWeaponDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubWeapons to delete
     */
    where?: SubWeaponWhereInput
  }


  /**
   * SubWeapon.Weapon
   */
  export type SubWeapon$WeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * SubWeapon without action
   */
  export type SubWeaponDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
  }



  /**
   * Model MainWeapon
   */

  export type AggregateMainWeapon = {
    _count: MainWeaponCountAggregateOutputType | null
    _avg: MainWeaponAvgAggregateOutputType | null
    _sum: MainWeaponSumAggregateOutputType | null
    _min: MainWeaponMinAggregateOutputType | null
    _max: MainWeaponMaxAggregateOutputType | null
  }

  export type MainWeaponAvgAggregateOutputType = {
    id: number | null
    seasonId: number | null
    weaponTypeId: number | null
  }

  export type MainWeaponSumAggregateOutputType = {
    id: number | null
    seasonId: number | null
    weaponTypeId: number | null
  }

  export type MainWeaponMinAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
    weaponTypeId: number | null
  }

  export type MainWeaponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    seasonId: number | null
    weaponTypeId: number | null
  }

  export type MainWeaponCountAggregateOutputType = {
    id: number
    name: number
    seasonId: number
    weaponTypeId: number
    _all: number
  }


  export type MainWeaponAvgAggregateInputType = {
    id?: true
    seasonId?: true
    weaponTypeId?: true
  }

  export type MainWeaponSumAggregateInputType = {
    id?: true
    seasonId?: true
    weaponTypeId?: true
  }

  export type MainWeaponMinAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    weaponTypeId?: true
  }

  export type MainWeaponMaxAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    weaponTypeId?: true
  }

  export type MainWeaponCountAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    weaponTypeId?: true
    _all?: true
  }

  export type MainWeaponAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainWeapon to aggregate.
     */
    where?: MainWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainWeapons to fetch.
     */
    orderBy?: MainWeaponOrderByWithRelationInput | MainWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainWeapons
    **/
    _count?: true | MainWeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MainWeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MainWeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainWeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainWeaponMaxAggregateInputType
  }

  export type GetMainWeaponAggregateType<T extends MainWeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateMainWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainWeapon[P]>
      : GetScalarType<T[P], AggregateMainWeapon[P]>
  }




  export type MainWeaponGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MainWeaponWhereInput
    orderBy?: MainWeaponOrderByWithAggregationInput | MainWeaponOrderByWithAggregationInput[]
    by: MainWeaponScalarFieldEnum[] | MainWeaponScalarFieldEnum
    having?: MainWeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainWeaponCountAggregateInputType | true
    _avg?: MainWeaponAvgAggregateInputType
    _sum?: MainWeaponSumAggregateInputType
    _min?: MainWeaponMinAggregateInputType
    _max?: MainWeaponMaxAggregateInputType
  }

  export type MainWeaponGroupByOutputType = {
    id: number
    name: string
    seasonId: number
    weaponTypeId: number
    _count: MainWeaponCountAggregateOutputType | null
    _avg: MainWeaponAvgAggregateOutputType | null
    _sum: MainWeaponSumAggregateOutputType | null
    _min: MainWeaponMinAggregateOutputType | null
    _max: MainWeaponMaxAggregateOutputType | null
  }

  type GetMainWeaponGroupByPayload<T extends MainWeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainWeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainWeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainWeaponGroupByOutputType[P]>
            : GetScalarType<T[P], MainWeaponGroupByOutputType[P]>
        }
      >
    >


  export type MainWeaponSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    weaponTypeId?: boolean
    weaponType?: boolean | WeaponTypeDefaultArgs<ExtArgs>
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
    Weapon?: boolean | MainWeapon$WeaponArgs<ExtArgs>
    _count?: boolean | MainWeaponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainWeapon"]>

  export type MainWeaponSelectScalar = {
    id?: boolean
    name?: boolean
    seasonId?: boolean
    weaponTypeId?: boolean
  }

  export type MainWeaponInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    weaponType?: boolean | WeaponTypeDefaultArgs<ExtArgs>
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
    Weapon?: boolean | MainWeapon$WeaponArgs<ExtArgs>
    _count?: boolean | MainWeaponCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MainWeaponPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MainWeapon"
    objects: {
      weaponType: Prisma.$WeaponTypePayload<ExtArgs>
      releaseSeason: Prisma.$SeasonPayload<ExtArgs>
      Weapon: Prisma.$WeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      seasonId: number
      weaponTypeId: number
    }, ExtArgs["result"]["mainWeapon"]>
    composites: {}
  }


  type MainWeaponGetPayload<S extends boolean | null | undefined | MainWeaponDefaultArgs> = $Result.GetResult<Prisma.$MainWeaponPayload, S>

  type MainWeaponCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MainWeaponFindManyArgs, 'select' | 'include'> & {
      select?: MainWeaponCountAggregateInputType | true
    }

  export interface MainWeaponDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainWeapon'], meta: { name: 'MainWeapon' } }
    /**
     * Find zero or one MainWeapon that matches the filter.
     * @param {MainWeaponFindUniqueArgs} args - Arguments to find a MainWeapon
     * @example
     * // Get one MainWeapon
     * const mainWeapon = await prisma.mainWeapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MainWeaponFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MainWeaponFindUniqueArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MainWeapon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MainWeaponFindUniqueOrThrowArgs} args - Arguments to find a MainWeapon
     * @example
     * // Get one MainWeapon
     * const mainWeapon = await prisma.mainWeapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MainWeaponFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MainWeaponFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MainWeapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponFindFirstArgs} args - Arguments to find a MainWeapon
     * @example
     * // Get one MainWeapon
     * const mainWeapon = await prisma.mainWeapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MainWeaponFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MainWeaponFindFirstArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MainWeapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponFindFirstOrThrowArgs} args - Arguments to find a MainWeapon
     * @example
     * // Get one MainWeapon
     * const mainWeapon = await prisma.mainWeapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MainWeaponFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MainWeaponFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MainWeapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainWeapons
     * const mainWeapons = await prisma.mainWeapon.findMany()
     * 
     * // Get first 10 MainWeapons
     * const mainWeapons = await prisma.mainWeapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainWeaponWithIdOnly = await prisma.mainWeapon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MainWeaponFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MainWeaponFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MainWeapon.
     * @param {MainWeaponCreateArgs} args - Arguments to create a MainWeapon.
     * @example
     * // Create one MainWeapon
     * const MainWeapon = await prisma.mainWeapon.create({
     *   data: {
     *     // ... data to create a MainWeapon
     *   }
     * })
     * 
    **/
    create<T extends MainWeaponCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MainWeaponCreateArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MainWeapon.
     * @param {MainWeaponDeleteArgs} args - Arguments to delete one MainWeapon.
     * @example
     * // Delete one MainWeapon
     * const MainWeapon = await prisma.mainWeapon.delete({
     *   where: {
     *     // ... filter to delete one MainWeapon
     *   }
     * })
     * 
    **/
    delete<T extends MainWeaponDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MainWeaponDeleteArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MainWeapon.
     * @param {MainWeaponUpdateArgs} args - Arguments to update one MainWeapon.
     * @example
     * // Update one MainWeapon
     * const mainWeapon = await prisma.mainWeapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MainWeaponUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MainWeaponUpdateArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MainWeapons.
     * @param {MainWeaponDeleteManyArgs} args - Arguments to filter MainWeapons to delete.
     * @example
     * // Delete a few MainWeapons
     * const { count } = await prisma.mainWeapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MainWeaponDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MainWeaponDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainWeapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainWeapons
     * const mainWeapon = await prisma.mainWeapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MainWeaponUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MainWeaponUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MainWeapon.
     * @param {MainWeaponUpsertArgs} args - Arguments to update or create a MainWeapon.
     * @example
     * // Update or create a MainWeapon
     * const mainWeapon = await prisma.mainWeapon.upsert({
     *   create: {
     *     // ... data to create a MainWeapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainWeapon we want to update
     *   }
     * })
    **/
    upsert<T extends MainWeaponUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MainWeaponUpsertArgs<ExtArgs>>
    ): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MainWeapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponCountArgs} args - Arguments to filter MainWeapons to count.
     * @example
     * // Count the number of MainWeapons
     * const count = await prisma.mainWeapon.count({
     *   where: {
     *     // ... the filter for the MainWeapons we want to count
     *   }
     * })
    **/
    count<T extends MainWeaponCountArgs>(
      args?: Subset<T, MainWeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainWeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainWeapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MainWeaponAggregateArgs>(args: Subset<T, MainWeaponAggregateArgs>): Prisma.PrismaPromise<GetMainWeaponAggregateType<T>>

    /**
     * Group by MainWeapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainWeaponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MainWeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainWeaponGroupByArgs['orderBy'] }
        : { orderBy?: MainWeaponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MainWeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainWeapon model
   */
  readonly fields: MainWeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainWeapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainWeaponClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    weaponType<T extends WeaponTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeaponTypeDefaultArgs<ExtArgs>>): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    releaseSeason<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Weapon<T extends MainWeapon$WeaponArgs<ExtArgs> = {}>(args?: Subset<T, MainWeapon$WeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MainWeapon model
   */ 
  interface MainWeaponFieldRefs {
    readonly id: FieldRef<"MainWeapon", 'Int'>
    readonly name: FieldRef<"MainWeapon", 'String'>
    readonly seasonId: FieldRef<"MainWeapon", 'Int'>
    readonly weaponTypeId: FieldRef<"MainWeapon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * MainWeapon findUnique
   */
  export type MainWeaponFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * Filter, which MainWeapon to fetch.
     */
    where: MainWeaponWhereUniqueInput
  }


  /**
   * MainWeapon findUniqueOrThrow
   */
  export type MainWeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * Filter, which MainWeapon to fetch.
     */
    where: MainWeaponWhereUniqueInput
  }


  /**
   * MainWeapon findFirst
   */
  export type MainWeaponFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * Filter, which MainWeapon to fetch.
     */
    where?: MainWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainWeapons to fetch.
     */
    orderBy?: MainWeaponOrderByWithRelationInput | MainWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainWeapons.
     */
    cursor?: MainWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainWeapons.
     */
    distinct?: MainWeaponScalarFieldEnum | MainWeaponScalarFieldEnum[]
  }


  /**
   * MainWeapon findFirstOrThrow
   */
  export type MainWeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * Filter, which MainWeapon to fetch.
     */
    where?: MainWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainWeapons to fetch.
     */
    orderBy?: MainWeaponOrderByWithRelationInput | MainWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainWeapons.
     */
    cursor?: MainWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainWeapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainWeapons.
     */
    distinct?: MainWeaponScalarFieldEnum | MainWeaponScalarFieldEnum[]
  }


  /**
   * MainWeapon findMany
   */
  export type MainWeaponFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * Filter, which MainWeapons to fetch.
     */
    where?: MainWeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainWeapons to fetch.
     */
    orderBy?: MainWeaponOrderByWithRelationInput | MainWeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainWeapons.
     */
    cursor?: MainWeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainWeapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainWeapons.
     */
    skip?: number
    distinct?: MainWeaponScalarFieldEnum | MainWeaponScalarFieldEnum[]
  }


  /**
   * MainWeapon create
   */
  export type MainWeaponCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * The data needed to create a MainWeapon.
     */
    data: XOR<MainWeaponCreateInput, MainWeaponUncheckedCreateInput>
  }


  /**
   * MainWeapon update
   */
  export type MainWeaponUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * The data needed to update a MainWeapon.
     */
    data: XOR<MainWeaponUpdateInput, MainWeaponUncheckedUpdateInput>
    /**
     * Choose, which MainWeapon to update.
     */
    where: MainWeaponWhereUniqueInput
  }


  /**
   * MainWeapon updateMany
   */
  export type MainWeaponUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainWeapons.
     */
    data: XOR<MainWeaponUpdateManyMutationInput, MainWeaponUncheckedUpdateManyInput>
    /**
     * Filter which MainWeapons to update
     */
    where?: MainWeaponWhereInput
  }


  /**
   * MainWeapon upsert
   */
  export type MainWeaponUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * The filter to search for the MainWeapon to update in case it exists.
     */
    where: MainWeaponWhereUniqueInput
    /**
     * In case the MainWeapon found by the `where` argument doesn't exist, create a new MainWeapon with this data.
     */
    create: XOR<MainWeaponCreateInput, MainWeaponUncheckedCreateInput>
    /**
     * In case the MainWeapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainWeaponUpdateInput, MainWeaponUncheckedUpdateInput>
  }


  /**
   * MainWeapon delete
   */
  export type MainWeaponDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    /**
     * Filter which MainWeapon to delete.
     */
    where: MainWeaponWhereUniqueInput
  }


  /**
   * MainWeapon deleteMany
   */
  export type MainWeaponDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainWeapons to delete
     */
    where?: MainWeaponWhereInput
  }


  /**
   * MainWeapon.Weapon
   */
  export type MainWeapon$WeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * MainWeapon without action
   */
  export type MainWeaponDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
  }



  /**
   * Model Weapon
   */

  export type AggregateWeapon = {
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  export type WeaponAvgAggregateOutputType = {
    id: number | null
    subWeaponId: number | null
    specialWeaponId: number | null
    seasonId: number | null
    weaponTypeId: number | null
    mainWeaponId: number | null
  }

  export type WeaponSumAggregateOutputType = {
    id: number | null
    subWeaponId: number | null
    specialWeaponId: number | null
    seasonId: number | null
    weaponTypeId: number | null
    mainWeaponId: number | null
  }

  export type WeaponMinAggregateOutputType = {
    id: number | null
    name: string | null
    subWeaponId: number | null
    specialWeaponId: number | null
    seasonId: number | null
    weaponTypeId: number | null
    mainWeaponId: number | null
  }

  export type WeaponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subWeaponId: number | null
    specialWeaponId: number | null
    seasonId: number | null
    weaponTypeId: number | null
    mainWeaponId: number | null
  }

  export type WeaponCountAggregateOutputType = {
    id: number
    name: number
    subWeaponId: number
    specialWeaponId: number
    seasonId: number
    weaponTypeId: number
    mainWeaponId: number
    _all: number
  }


  export type WeaponAvgAggregateInputType = {
    id?: true
    subWeaponId?: true
    specialWeaponId?: true
    seasonId?: true
    weaponTypeId?: true
    mainWeaponId?: true
  }

  export type WeaponSumAggregateInputType = {
    id?: true
    subWeaponId?: true
    specialWeaponId?: true
    seasonId?: true
    weaponTypeId?: true
    mainWeaponId?: true
  }

  export type WeaponMinAggregateInputType = {
    id?: true
    name?: true
    subWeaponId?: true
    specialWeaponId?: true
    seasonId?: true
    weaponTypeId?: true
    mainWeaponId?: true
  }

  export type WeaponMaxAggregateInputType = {
    id?: true
    name?: true
    subWeaponId?: true
    specialWeaponId?: true
    seasonId?: true
    weaponTypeId?: true
    mainWeaponId?: true
  }

  export type WeaponCountAggregateInputType = {
    id?: true
    name?: true
    subWeaponId?: true
    specialWeaponId?: true
    seasonId?: true
    weaponTypeId?: true
    mainWeaponId?: true
    _all?: true
  }

  export type WeaponAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapon to aggregate.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weapons
    **/
    _count?: true | WeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponMaxAggregateInputType
  }

  export type GetWeaponAggregateType<T extends WeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeapon[P]>
      : GetScalarType<T[P], AggregateWeapon[P]>
  }




  export type WeaponGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithAggregationInput | WeaponOrderByWithAggregationInput[]
    by: WeaponScalarFieldEnum[] | WeaponScalarFieldEnum
    having?: WeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponCountAggregateInputType | true
    _avg?: WeaponAvgAggregateInputType
    _sum?: WeaponSumAggregateInputType
    _min?: WeaponMinAggregateInputType
    _max?: WeaponMaxAggregateInputType
  }

  export type WeaponGroupByOutputType = {
    id: number
    name: string
    subWeaponId: number
    specialWeaponId: number
    seasonId: number
    weaponTypeId: number
    mainWeaponId: number
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  type GetWeaponGroupByPayload<T extends WeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponGroupByOutputType[P]>
        }
      >
    >


  export type WeaponSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subWeaponId?: boolean
    specialWeaponId?: boolean
    seasonId?: boolean
    weaponTypeId?: boolean
    mainWeaponId?: boolean
    mainWeapon?: boolean | MainWeaponDefaultArgs<ExtArgs>
    subWeapon?: boolean | SubWeaponDefaultArgs<ExtArgs>
    specialWeapon?: boolean | SpecialWeaponDefaultArgs<ExtArgs>
    weaponType?: boolean | WeaponTypeDefaultArgs<ExtArgs>
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectScalar = {
    id?: boolean
    name?: boolean
    subWeaponId?: boolean
    specialWeaponId?: boolean
    seasonId?: boolean
    weaponTypeId?: boolean
    mainWeaponId?: boolean
  }

  export type WeaponInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    mainWeapon?: boolean | MainWeaponDefaultArgs<ExtArgs>
    subWeapon?: boolean | SubWeaponDefaultArgs<ExtArgs>
    specialWeapon?: boolean | SpecialWeaponDefaultArgs<ExtArgs>
    weaponType?: boolean | WeaponTypeDefaultArgs<ExtArgs>
    releaseSeason?: boolean | SeasonDefaultArgs<ExtArgs>
  }


  export type $WeaponPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Weapon"
    objects: {
      mainWeapon: Prisma.$MainWeaponPayload<ExtArgs>
      subWeapon: Prisma.$SubWeaponPayload<ExtArgs>
      specialWeapon: Prisma.$SpecialWeaponPayload<ExtArgs>
      weaponType: Prisma.$WeaponTypePayload<ExtArgs>
      releaseSeason: Prisma.$SeasonPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      subWeaponId: number
      specialWeaponId: number
      seasonId: number
      weaponTypeId: number
      mainWeaponId: number
    }, ExtArgs["result"]["weapon"]>
    composites: {}
  }


  type WeaponGetPayload<S extends boolean | null | undefined | WeaponDefaultArgs> = $Result.GetResult<Prisma.$WeaponPayload, S>

  type WeaponCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WeaponFindManyArgs, 'select' | 'include'> & {
      select?: WeaponCountAggregateInputType | true
    }

  export interface WeaponDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weapon'], meta: { name: 'Weapon' } }
    /**
     * Find zero or one Weapon that matches the filter.
     * @param {WeaponFindUniqueArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeaponFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponFindUniqueArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Weapon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WeaponFindUniqueOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeaponFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Weapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeaponFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponFindFirstArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Weapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeaponFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Weapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weapons
     * const weapons = await prisma.weapon.findMany()
     * 
     * // Get first 10 Weapons
     * const weapons = await prisma.weapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponWithIdOnly = await prisma.weapon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeaponFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Weapon.
     * @param {WeaponCreateArgs} args - Arguments to create a Weapon.
     * @example
     * // Create one Weapon
     * const Weapon = await prisma.weapon.create({
     *   data: {
     *     // ... data to create a Weapon
     *   }
     * })
     * 
    **/
    create<T extends WeaponCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponCreateArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Weapon.
     * @param {WeaponDeleteArgs} args - Arguments to delete one Weapon.
     * @example
     * // Delete one Weapon
     * const Weapon = await prisma.weapon.delete({
     *   where: {
     *     // ... filter to delete one Weapon
     *   }
     * })
     * 
    **/
    delete<T extends WeaponDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponDeleteArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Weapon.
     * @param {WeaponUpdateArgs} args - Arguments to update one Weapon.
     * @example
     * // Update one Weapon
     * const weapon = await prisma.weapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeaponUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponUpdateArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Weapons.
     * @param {WeaponDeleteManyArgs} args - Arguments to filter Weapons to delete.
     * @example
     * // Delete a few Weapons
     * const { count } = await prisma.weapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeaponDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeaponDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weapons
     * const weapon = await prisma.weapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeaponUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Weapon.
     * @param {WeaponUpsertArgs} args - Arguments to update or create a Weapon.
     * @example
     * // Update or create a Weapon
     * const weapon = await prisma.weapon.upsert({
     *   create: {
     *     // ... data to create a Weapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weapon we want to update
     *   }
     * })
    **/
    upsert<T extends WeaponUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WeaponUpsertArgs<ExtArgs>>
    ): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponCountArgs} args - Arguments to filter Weapons to count.
     * @example
     * // Count the number of Weapons
     * const count = await prisma.weapon.count({
     *   where: {
     *     // ... the filter for the Weapons we want to count
     *   }
     * })
    **/
    count<T extends WeaponCountArgs>(
      args?: Subset<T, WeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeaponAggregateArgs>(args: Subset<T, WeaponAggregateArgs>): Prisma.PrismaPromise<GetWeaponAggregateType<T>>

    /**
     * Group by Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponGroupByArgs['orderBy'] }
        : { orderBy?: WeaponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weapon model
   */
  readonly fields: WeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mainWeapon<T extends MainWeaponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainWeaponDefaultArgs<ExtArgs>>): Prisma__MainWeaponClient<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subWeapon<T extends SubWeaponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubWeaponDefaultArgs<ExtArgs>>): Prisma__SubWeaponClient<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    specialWeapon<T extends SpecialWeaponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialWeaponDefaultArgs<ExtArgs>>): Prisma__SpecialWeaponClient<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    weaponType<T extends WeaponTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeaponTypeDefaultArgs<ExtArgs>>): Prisma__WeaponTypeClient<$Result.GetResult<Prisma.$WeaponTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    releaseSeason<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Weapon model
   */ 
  interface WeaponFieldRefs {
    readonly id: FieldRef<"Weapon", 'Int'>
    readonly name: FieldRef<"Weapon", 'String'>
    readonly subWeaponId: FieldRef<"Weapon", 'Int'>
    readonly specialWeaponId: FieldRef<"Weapon", 'Int'>
    readonly seasonId: FieldRef<"Weapon", 'Int'>
    readonly weaponTypeId: FieldRef<"Weapon", 'Int'>
    readonly mainWeaponId: FieldRef<"Weapon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Weapon findUnique
   */
  export type WeaponFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }


  /**
   * Weapon findUniqueOrThrow
   */
  export type WeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }


  /**
   * Weapon findFirst
   */
  export type WeaponFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * Weapon findFirstOrThrow
   */
  export type WeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * Weapon findMany
   */
  export type WeaponFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapons to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * Weapon create
   */
  export type WeaponCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The data needed to create a Weapon.
     */
    data: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
  }


  /**
   * Weapon update
   */
  export type WeaponUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The data needed to update a Weapon.
     */
    data: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
    /**
     * Choose, which Weapon to update.
     */
    where: WeaponWhereUniqueInput
  }


  /**
   * Weapon updateMany
   */
  export type WeaponUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weapons.
     */
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyInput>
    /**
     * Filter which Weapons to update
     */
    where?: WeaponWhereInput
  }


  /**
   * Weapon upsert
   */
  export type WeaponUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The filter to search for the Weapon to update in case it exists.
     */
    where: WeaponWhereUniqueInput
    /**
     * In case the Weapon found by the `where` argument doesn't exist, create a new Weapon with this data.
     */
    create: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
    /**
     * In case the Weapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
  }


  /**
   * Weapon delete
   */
  export type WeaponDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter which Weapon to delete.
     */
    where: WeaponWhereUniqueInput
  }


  /**
   * Weapon deleteMany
   */
  export type WeaponDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapons to delete
     */
    where?: WeaponWhereInput
  }


  /**
   * Weapon without action
   */
  export type WeaponDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
  }



  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    id: number | null
  }

  export type SeasonSumAggregateOutputType = {
    id: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    id?: true
  }

  export type SeasonSumAggregateInputType = {
    id?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    Weapon?: boolean | Season$WeaponArgs<ExtArgs>
    Stage?: boolean | Season$StageArgs<ExtArgs>
    SpecialWeapon?: boolean | Season$SpecialWeaponArgs<ExtArgs>
    SubWeapon?: boolean | Season$SubWeaponArgs<ExtArgs>
    MainWeapon?: boolean | Season$MainWeaponArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type SeasonInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Weapon?: boolean | Season$WeaponArgs<ExtArgs>
    Stage?: boolean | Season$StageArgs<ExtArgs>
    SpecialWeapon?: boolean | Season$SpecialWeaponArgs<ExtArgs>
    SubWeapon?: boolean | Season$SubWeaponArgs<ExtArgs>
    MainWeapon?: boolean | Season$MainWeaponArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SeasonPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      Weapon: Prisma.$WeaponPayload<ExtArgs>[]
      Stage: Prisma.$StagePayload<ExtArgs>[]
      SpecialWeapon: Prisma.$SpecialWeaponPayload<ExtArgs>[]
      SubWeapon: Prisma.$SubWeaponPayload<ExtArgs>[]
      MainWeapon: Prisma.$MainWeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["season"]>
    composites: {}
  }


  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SeasonFindManyArgs, 'select' | 'include'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeasonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Season that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeasonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeasonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
    **/
    create<T extends SeasonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
    **/
    delete<T extends SeasonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeasonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeasonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeasonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
    **/
    upsert<T extends SeasonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Weapon<T extends Season$WeaponArgs<ExtArgs> = {}>(args?: Subset<T, Season$WeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    Stage<T extends Season$StageArgs<ExtArgs> = {}>(args?: Subset<T, Season$StageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findMany'> | Null>;

    SpecialWeapon<T extends Season$SpecialWeaponArgs<ExtArgs> = {}>(args?: Subset<T, Season$SpecialWeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialWeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    SubWeapon<T extends Season$SubWeaponArgs<ExtArgs> = {}>(args?: Subset<T, Season$SubWeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubWeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    MainWeapon<T extends Season$MainWeaponArgs<ExtArgs> = {}>(args?: Subset<T, Season$MainWeaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainWeaponPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Season model
   */ 
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'Int'>
    readonly name: FieldRef<"Season", 'String'>
    readonly startDate: FieldRef<"Season", 'DateTime'>
    readonly endDate: FieldRef<"Season", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }


  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
  }


  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }


  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
  }


  /**
   * Season.Weapon
   */
  export type Season$WeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }


  /**
   * Season.Stage
   */
  export type Season$StageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Season.SpecialWeapon
   */
  export type Season$SpecialWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialWeapon
     */
    select?: SpecialWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecialWeaponInclude<ExtArgs> | null
    where?: SpecialWeaponWhereInput
    orderBy?: SpecialWeaponOrderByWithRelationInput | SpecialWeaponOrderByWithRelationInput[]
    cursor?: SpecialWeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialWeaponScalarFieldEnum | SpecialWeaponScalarFieldEnum[]
  }


  /**
   * Season.SubWeapon
   */
  export type Season$SubWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubWeapon
     */
    select?: SubWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubWeaponInclude<ExtArgs> | null
    where?: SubWeaponWhereInput
    orderBy?: SubWeaponOrderByWithRelationInput | SubWeaponOrderByWithRelationInput[]
    cursor?: SubWeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubWeaponScalarFieldEnum | SubWeaponScalarFieldEnum[]
  }


  /**
   * Season.MainWeapon
   */
  export type Season$MainWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainWeapon
     */
    select?: MainWeaponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MainWeaponInclude<ExtArgs> | null
    where?: MainWeaponWhereInput
    orderBy?: MainWeaponOrderByWithRelationInput | MainWeaponOrderByWithRelationInput[]
    cursor?: MainWeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainWeaponScalarFieldEnum | MainWeaponScalarFieldEnum[]
  }


  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RuleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const ModeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    maxMembers: 'maxMembers',
    fessMode: 'fessMode'
  };

  export type ModeScalarFieldEnum = (typeof ModeScalarFieldEnum)[keyof typeof ModeScalarFieldEnum]


  export const ModeOnRuleScalarFieldEnum: {
    ruleId: 'ruleId',
    modeId: 'modeId'
  };

  export type ModeOnRuleScalarFieldEnum = (typeof ModeOnRuleScalarFieldEnum)[keyof typeof ModeOnRuleScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seasonId: 'seasonId'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const SpecialWeaponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seasonId: 'seasonId'
  };

  export type SpecialWeaponScalarFieldEnum = (typeof SpecialWeaponScalarFieldEnum)[keyof typeof SpecialWeaponScalarFieldEnum]


  export const WeaponTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type WeaponTypeScalarFieldEnum = (typeof WeaponTypeScalarFieldEnum)[keyof typeof WeaponTypeScalarFieldEnum]


  export const SubWeaponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seasonId: 'seasonId'
  };

  export type SubWeaponScalarFieldEnum = (typeof SubWeaponScalarFieldEnum)[keyof typeof SubWeaponScalarFieldEnum]


  export const MainWeaponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seasonId: 'seasonId',
    weaponTypeId: 'weaponTypeId'
  };

  export type MainWeaponScalarFieldEnum = (typeof MainWeaponScalarFieldEnum)[keyof typeof MainWeaponScalarFieldEnum]


  export const WeaponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subWeaponId: 'subWeaponId',
    specialWeaponId: 'specialWeaponId',
    seasonId: 'seasonId',
    weaponTypeId: 'weaponTypeId',
    mainWeaponId: 'mainWeaponId'
  };

  export type WeaponScalarFieldEnum = (typeof WeaponScalarFieldEnum)[keyof typeof WeaponScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: IntFilter<"Rule"> | number
    name?: StringFilter<"Rule"> | string
    modes?: ModeOnRuleListRelationFilter
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    modes?: ModeOnRuleOrderByRelationAggregateInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    name?: StringFilter<"Rule"> | string
    modes?: ModeOnRuleListRelationFilter
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rule"> | number
    name?: StringWithAggregatesFilter<"Rule"> | string
  }

  export type ModeWhereInput = {
    AND?: ModeWhereInput | ModeWhereInput[]
    OR?: ModeWhereInput[]
    NOT?: ModeWhereInput | ModeWhereInput[]
    id?: IntFilter<"Mode"> | number
    name?: StringFilter<"Mode"> | string
    maxMembers?: IntFilter<"Mode"> | number
    fessMode?: BoolFilter<"Mode"> | boolean
    rules?: ModeOnRuleListRelationFilter
  }

  export type ModeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    maxMembers?: SortOrder
    fessMode?: SortOrder
    rules?: ModeOnRuleOrderByRelationAggregateInput
  }

  export type ModeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModeWhereInput | ModeWhereInput[]
    OR?: ModeWhereInput[]
    NOT?: ModeWhereInput | ModeWhereInput[]
    name?: StringFilter<"Mode"> | string
    maxMembers?: IntFilter<"Mode"> | number
    fessMode?: BoolFilter<"Mode"> | boolean
    rules?: ModeOnRuleListRelationFilter
  }, "id">

  export type ModeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    maxMembers?: SortOrder
    fessMode?: SortOrder
    _count?: ModeCountOrderByAggregateInput
    _avg?: ModeAvgOrderByAggregateInput
    _max?: ModeMaxOrderByAggregateInput
    _min?: ModeMinOrderByAggregateInput
    _sum?: ModeSumOrderByAggregateInput
  }

  export type ModeScalarWhereWithAggregatesInput = {
    AND?: ModeScalarWhereWithAggregatesInput | ModeScalarWhereWithAggregatesInput[]
    OR?: ModeScalarWhereWithAggregatesInput[]
    NOT?: ModeScalarWhereWithAggregatesInput | ModeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mode"> | number
    name?: StringWithAggregatesFilter<"Mode"> | string
    maxMembers?: IntWithAggregatesFilter<"Mode"> | number
    fessMode?: BoolWithAggregatesFilter<"Mode"> | boolean
  }

  export type ModeOnRuleWhereInput = {
    AND?: ModeOnRuleWhereInput | ModeOnRuleWhereInput[]
    OR?: ModeOnRuleWhereInput[]
    NOT?: ModeOnRuleWhereInput | ModeOnRuleWhereInput[]
    ruleId?: IntFilter<"ModeOnRule"> | number
    modeId?: IntFilter<"ModeOnRule"> | number
    rule?: XOR<RuleRelationFilter, RuleWhereInput>
    mode?: XOR<ModeRelationFilter, ModeWhereInput>
  }

  export type ModeOnRuleOrderByWithRelationInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
    rule?: RuleOrderByWithRelationInput
    mode?: ModeOrderByWithRelationInput
  }

  export type ModeOnRuleWhereUniqueInput = Prisma.AtLeast<{
    ruleId_modeId?: ModeOnRuleRuleIdModeIdCompoundUniqueInput
    AND?: ModeOnRuleWhereInput | ModeOnRuleWhereInput[]
    OR?: ModeOnRuleWhereInput[]
    NOT?: ModeOnRuleWhereInput | ModeOnRuleWhereInput[]
    ruleId?: IntFilter<"ModeOnRule"> | number
    modeId?: IntFilter<"ModeOnRule"> | number
    rule?: XOR<RuleRelationFilter, RuleWhereInput>
    mode?: XOR<ModeRelationFilter, ModeWhereInput>
  }, "ruleId_modeId">

  export type ModeOnRuleOrderByWithAggregationInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
    _count?: ModeOnRuleCountOrderByAggregateInput
    _avg?: ModeOnRuleAvgOrderByAggregateInput
    _max?: ModeOnRuleMaxOrderByAggregateInput
    _min?: ModeOnRuleMinOrderByAggregateInput
    _sum?: ModeOnRuleSumOrderByAggregateInput
  }

  export type ModeOnRuleScalarWhereWithAggregatesInput = {
    AND?: ModeOnRuleScalarWhereWithAggregatesInput | ModeOnRuleScalarWhereWithAggregatesInput[]
    OR?: ModeOnRuleScalarWhereWithAggregatesInput[]
    NOT?: ModeOnRuleScalarWhereWithAggregatesInput | ModeOnRuleScalarWhereWithAggregatesInput[]
    ruleId?: IntWithAggregatesFilter<"ModeOnRule"> | number
    modeId?: IntWithAggregatesFilter<"ModeOnRule"> | number
  }

  export type StageWhereInput = {
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    id?: IntFilter<"Stage"> | number
    name?: StringFilter<"Stage"> | string
    seasonId?: IntFilter<"Stage"> | number
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
  }

  export type StageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    releaseSeason?: SeasonOrderByWithRelationInput
  }

  export type StageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    name?: StringFilter<"Stage"> | string
    seasonId?: IntFilter<"Stage"> | number
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
  }, "id">

  export type StageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    _count?: StageCountOrderByAggregateInput
    _avg?: StageAvgOrderByAggregateInput
    _max?: StageMaxOrderByAggregateInput
    _min?: StageMinOrderByAggregateInput
    _sum?: StageSumOrderByAggregateInput
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    OR?: StageScalarWhereWithAggregatesInput[]
    NOT?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stage"> | number
    name?: StringWithAggregatesFilter<"Stage"> | string
    seasonId?: IntWithAggregatesFilter<"Stage"> | number
  }

  export type SpecialWeaponWhereInput = {
    AND?: SpecialWeaponWhereInput | SpecialWeaponWhereInput[]
    OR?: SpecialWeaponWhereInput[]
    NOT?: SpecialWeaponWhereInput | SpecialWeaponWhereInput[]
    id?: IntFilter<"SpecialWeapon"> | number
    name?: StringFilter<"SpecialWeapon"> | string
    seasonId?: IntFilter<"SpecialWeapon"> | number
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
    Weapon?: WeaponListRelationFilter
  }

  export type SpecialWeaponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    releaseSeason?: SeasonOrderByWithRelationInput
    Weapon?: WeaponOrderByRelationAggregateInput
  }

  export type SpecialWeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpecialWeaponWhereInput | SpecialWeaponWhereInput[]
    OR?: SpecialWeaponWhereInput[]
    NOT?: SpecialWeaponWhereInput | SpecialWeaponWhereInput[]
    name?: StringFilter<"SpecialWeapon"> | string
    seasonId?: IntFilter<"SpecialWeapon"> | number
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
    Weapon?: WeaponListRelationFilter
  }, "id">

  export type SpecialWeaponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    _count?: SpecialWeaponCountOrderByAggregateInput
    _avg?: SpecialWeaponAvgOrderByAggregateInput
    _max?: SpecialWeaponMaxOrderByAggregateInput
    _min?: SpecialWeaponMinOrderByAggregateInput
    _sum?: SpecialWeaponSumOrderByAggregateInput
  }

  export type SpecialWeaponScalarWhereWithAggregatesInput = {
    AND?: SpecialWeaponScalarWhereWithAggregatesInput | SpecialWeaponScalarWhereWithAggregatesInput[]
    OR?: SpecialWeaponScalarWhereWithAggregatesInput[]
    NOT?: SpecialWeaponScalarWhereWithAggregatesInput | SpecialWeaponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpecialWeapon"> | number
    name?: StringWithAggregatesFilter<"SpecialWeapon"> | string
    seasonId?: IntWithAggregatesFilter<"SpecialWeapon"> | number
  }

  export type WeaponTypeWhereInput = {
    AND?: WeaponTypeWhereInput | WeaponTypeWhereInput[]
    OR?: WeaponTypeWhereInput[]
    NOT?: WeaponTypeWhereInput | WeaponTypeWhereInput[]
    id?: IntFilter<"WeaponType"> | number
    name?: StringFilter<"WeaponType"> | string
    Weapon?: WeaponListRelationFilter
    MainWeapon?: MainWeaponListRelationFilter
  }

  export type WeaponTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Weapon?: WeaponOrderByRelationAggregateInput
    MainWeapon?: MainWeaponOrderByRelationAggregateInput
  }

  export type WeaponTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeaponTypeWhereInput | WeaponTypeWhereInput[]
    OR?: WeaponTypeWhereInput[]
    NOT?: WeaponTypeWhereInput | WeaponTypeWhereInput[]
    name?: StringFilter<"WeaponType"> | string
    Weapon?: WeaponListRelationFilter
    MainWeapon?: MainWeaponListRelationFilter
  }, "id">

  export type WeaponTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: WeaponTypeCountOrderByAggregateInput
    _avg?: WeaponTypeAvgOrderByAggregateInput
    _max?: WeaponTypeMaxOrderByAggregateInput
    _min?: WeaponTypeMinOrderByAggregateInput
    _sum?: WeaponTypeSumOrderByAggregateInput
  }

  export type WeaponTypeScalarWhereWithAggregatesInput = {
    AND?: WeaponTypeScalarWhereWithAggregatesInput | WeaponTypeScalarWhereWithAggregatesInput[]
    OR?: WeaponTypeScalarWhereWithAggregatesInput[]
    NOT?: WeaponTypeScalarWhereWithAggregatesInput | WeaponTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeaponType"> | number
    name?: StringWithAggregatesFilter<"WeaponType"> | string
  }

  export type SubWeaponWhereInput = {
    AND?: SubWeaponWhereInput | SubWeaponWhereInput[]
    OR?: SubWeaponWhereInput[]
    NOT?: SubWeaponWhereInput | SubWeaponWhereInput[]
    id?: IntFilter<"SubWeapon"> | number
    name?: StringFilter<"SubWeapon"> | string
    seasonId?: IntFilter<"SubWeapon"> | number
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
    Weapon?: WeaponListRelationFilter
  }

  export type SubWeaponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    releaseSeason?: SeasonOrderByWithRelationInput
    Weapon?: WeaponOrderByRelationAggregateInput
  }

  export type SubWeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubWeaponWhereInput | SubWeaponWhereInput[]
    OR?: SubWeaponWhereInput[]
    NOT?: SubWeaponWhereInput | SubWeaponWhereInput[]
    name?: StringFilter<"SubWeapon"> | string
    seasonId?: IntFilter<"SubWeapon"> | number
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
    Weapon?: WeaponListRelationFilter
  }, "id">

  export type SubWeaponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    _count?: SubWeaponCountOrderByAggregateInput
    _avg?: SubWeaponAvgOrderByAggregateInput
    _max?: SubWeaponMaxOrderByAggregateInput
    _min?: SubWeaponMinOrderByAggregateInput
    _sum?: SubWeaponSumOrderByAggregateInput
  }

  export type SubWeaponScalarWhereWithAggregatesInput = {
    AND?: SubWeaponScalarWhereWithAggregatesInput | SubWeaponScalarWhereWithAggregatesInput[]
    OR?: SubWeaponScalarWhereWithAggregatesInput[]
    NOT?: SubWeaponScalarWhereWithAggregatesInput | SubWeaponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubWeapon"> | number
    name?: StringWithAggregatesFilter<"SubWeapon"> | string
    seasonId?: IntWithAggregatesFilter<"SubWeapon"> | number
  }

  export type MainWeaponWhereInput = {
    AND?: MainWeaponWhereInput | MainWeaponWhereInput[]
    OR?: MainWeaponWhereInput[]
    NOT?: MainWeaponWhereInput | MainWeaponWhereInput[]
    id?: IntFilter<"MainWeapon"> | number
    name?: StringFilter<"MainWeapon"> | string
    seasonId?: IntFilter<"MainWeapon"> | number
    weaponTypeId?: IntFilter<"MainWeapon"> | number
    weaponType?: XOR<WeaponTypeRelationFilter, WeaponTypeWhereInput>
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
    Weapon?: WeaponListRelationFilter
  }

  export type MainWeaponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    weaponType?: WeaponTypeOrderByWithRelationInput
    releaseSeason?: SeasonOrderByWithRelationInput
    Weapon?: WeaponOrderByRelationAggregateInput
  }

  export type MainWeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MainWeaponWhereInput | MainWeaponWhereInput[]
    OR?: MainWeaponWhereInput[]
    NOT?: MainWeaponWhereInput | MainWeaponWhereInput[]
    name?: StringFilter<"MainWeapon"> | string
    seasonId?: IntFilter<"MainWeapon"> | number
    weaponTypeId?: IntFilter<"MainWeapon"> | number
    weaponType?: XOR<WeaponTypeRelationFilter, WeaponTypeWhereInput>
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
    Weapon?: WeaponListRelationFilter
  }, "id">

  export type MainWeaponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    _count?: MainWeaponCountOrderByAggregateInput
    _avg?: MainWeaponAvgOrderByAggregateInput
    _max?: MainWeaponMaxOrderByAggregateInput
    _min?: MainWeaponMinOrderByAggregateInput
    _sum?: MainWeaponSumOrderByAggregateInput
  }

  export type MainWeaponScalarWhereWithAggregatesInput = {
    AND?: MainWeaponScalarWhereWithAggregatesInput | MainWeaponScalarWhereWithAggregatesInput[]
    OR?: MainWeaponScalarWhereWithAggregatesInput[]
    NOT?: MainWeaponScalarWhereWithAggregatesInput | MainWeaponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MainWeapon"> | number
    name?: StringWithAggregatesFilter<"MainWeapon"> | string
    seasonId?: IntWithAggregatesFilter<"MainWeapon"> | number
    weaponTypeId?: IntWithAggregatesFilter<"MainWeapon"> | number
  }

  export type WeaponWhereInput = {
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    id?: IntFilter<"Weapon"> | number
    name?: StringFilter<"Weapon"> | string
    subWeaponId?: IntFilter<"Weapon"> | number
    specialWeaponId?: IntFilter<"Weapon"> | number
    seasonId?: IntFilter<"Weapon"> | number
    weaponTypeId?: IntFilter<"Weapon"> | number
    mainWeaponId?: IntFilter<"Weapon"> | number
    mainWeapon?: XOR<MainWeaponRelationFilter, MainWeaponWhereInput>
    subWeapon?: XOR<SubWeaponRelationFilter, SubWeaponWhereInput>
    specialWeapon?: XOR<SpecialWeaponRelationFilter, SpecialWeaponWhereInput>
    weaponType?: XOR<WeaponTypeRelationFilter, WeaponTypeWhereInput>
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
  }

  export type WeaponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
    mainWeapon?: MainWeaponOrderByWithRelationInput
    subWeapon?: SubWeaponOrderByWithRelationInput
    specialWeapon?: SpecialWeaponOrderByWithRelationInput
    weaponType?: WeaponTypeOrderByWithRelationInput
    releaseSeason?: SeasonOrderByWithRelationInput
  }

  export type WeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    name?: StringFilter<"Weapon"> | string
    subWeaponId?: IntFilter<"Weapon"> | number
    specialWeaponId?: IntFilter<"Weapon"> | number
    seasonId?: IntFilter<"Weapon"> | number
    weaponTypeId?: IntFilter<"Weapon"> | number
    mainWeaponId?: IntFilter<"Weapon"> | number
    mainWeapon?: XOR<MainWeaponRelationFilter, MainWeaponWhereInput>
    subWeapon?: XOR<SubWeaponRelationFilter, SubWeaponWhereInput>
    specialWeapon?: XOR<SpecialWeaponRelationFilter, SpecialWeaponWhereInput>
    weaponType?: XOR<WeaponTypeRelationFilter, WeaponTypeWhereInput>
    releaseSeason?: XOR<SeasonRelationFilter, SeasonWhereInput>
  }, "id">

  export type WeaponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
    _count?: WeaponCountOrderByAggregateInput
    _avg?: WeaponAvgOrderByAggregateInput
    _max?: WeaponMaxOrderByAggregateInput
    _min?: WeaponMinOrderByAggregateInput
    _sum?: WeaponSumOrderByAggregateInput
  }

  export type WeaponScalarWhereWithAggregatesInput = {
    AND?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    OR?: WeaponScalarWhereWithAggregatesInput[]
    NOT?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Weapon"> | number
    name?: StringWithAggregatesFilter<"Weapon"> | string
    subWeaponId?: IntWithAggregatesFilter<"Weapon"> | number
    specialWeaponId?: IntWithAggregatesFilter<"Weapon"> | number
    seasonId?: IntWithAggregatesFilter<"Weapon"> | number
    weaponTypeId?: IntWithAggregatesFilter<"Weapon"> | number
    mainWeaponId?: IntWithAggregatesFilter<"Weapon"> | number
  }

  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: IntFilter<"Season"> | number
    name?: StringFilter<"Season"> | string
    startDate?: DateTimeFilter<"Season"> | Date | string
    endDate?: DateTimeFilter<"Season"> | Date | string
    Weapon?: WeaponListRelationFilter
    Stage?: StageListRelationFilter
    SpecialWeapon?: SpecialWeaponListRelationFilter
    SubWeapon?: SubWeaponListRelationFilter
    MainWeapon?: MainWeaponListRelationFilter
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    Weapon?: WeaponOrderByRelationAggregateInput
    Stage?: StageOrderByRelationAggregateInput
    SpecialWeapon?: SpecialWeaponOrderByRelationAggregateInput
    SubWeapon?: SubWeaponOrderByRelationAggregateInput
    MainWeapon?: MainWeaponOrderByRelationAggregateInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    name?: StringFilter<"Season"> | string
    startDate?: DateTimeFilter<"Season"> | Date | string
    endDate?: DateTimeFilter<"Season"> | Date | string
    Weapon?: WeaponListRelationFilter
    Stage?: StageListRelationFilter
    SpecialWeapon?: SpecialWeaponListRelationFilter
    SubWeapon?: SubWeaponListRelationFilter
    MainWeapon?: MainWeaponListRelationFilter
  }, "id">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Season"> | number
    name?: StringWithAggregatesFilter<"Season"> | string
    startDate?: DateTimeWithAggregatesFilter<"Season"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Season"> | Date | string
  }

  export type RuleCreateInput = {
    id: number
    name: string
    modes?: ModeOnRuleCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateInput = {
    id: number
    name: string
    modes?: ModeOnRuleUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    modes?: ModeOnRuleUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    modes?: ModeOnRuleUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModeCreateInput = {
    id: number
    name: string
    maxMembers: number
    fessMode: boolean
    rules?: ModeOnRuleCreateNestedManyWithoutModeInput
  }

  export type ModeUncheckedCreateInput = {
    id: number
    name: string
    maxMembers: number
    fessMode: boolean
    rules?: ModeOnRuleUncheckedCreateNestedManyWithoutModeInput
  }

  export type ModeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    fessMode?: BoolFieldUpdateOperationsInput | boolean
    rules?: ModeOnRuleUpdateManyWithoutModeNestedInput
  }

  export type ModeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    fessMode?: BoolFieldUpdateOperationsInput | boolean
    rules?: ModeOnRuleUncheckedUpdateManyWithoutModeNestedInput
  }

  export type ModeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    fessMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    fessMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModeOnRuleCreateInput = {
    rule: RuleCreateNestedOneWithoutModesInput
    mode: ModeCreateNestedOneWithoutRulesInput
  }

  export type ModeOnRuleUncheckedCreateInput = {
    ruleId: number
    modeId: number
  }

  export type ModeOnRuleUpdateInput = {
    rule?: RuleUpdateOneRequiredWithoutModesNestedInput
    mode?: ModeUpdateOneRequiredWithoutRulesNestedInput
  }

  export type ModeOnRuleUncheckedUpdateInput = {
    ruleId?: IntFieldUpdateOperationsInput | number
    modeId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeOnRuleUpdateManyMutationInput = {

  }

  export type ModeOnRuleUncheckedUpdateManyInput = {
    ruleId?: IntFieldUpdateOperationsInput | number
    modeId?: IntFieldUpdateOperationsInput | number
  }

  export type StageCreateInput = {
    id: number
    name: string
    releaseSeason: SeasonCreateNestedOneWithoutStageInput
  }

  export type StageUncheckedCreateInput = {
    id: number
    name: string
    seasonId: number
  }

  export type StageUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseSeason?: SeasonUpdateOneRequiredWithoutStageNestedInput
  }

  export type StageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type StageUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialWeaponCreateInput = {
    id: number
    name: string
    releaseSeason: SeasonCreateNestedOneWithoutSpecialWeaponInput
    Weapon?: WeaponCreateNestedManyWithoutSpecialWeaponInput
  }

  export type SpecialWeaponUncheckedCreateInput = {
    id: number
    name: string
    seasonId: number
    Weapon?: WeaponUncheckedCreateNestedManyWithoutSpecialWeaponInput
  }

  export type SpecialWeaponUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseSeason?: SeasonUpdateOneRequiredWithoutSpecialWeaponNestedInput
    Weapon?: WeaponUpdateManyWithoutSpecialWeaponNestedInput
  }

  export type SpecialWeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
    Weapon?: WeaponUncheckedUpdateManyWithoutSpecialWeaponNestedInput
  }

  export type SpecialWeaponUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialWeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponTypeCreateInput = {
    id: number
    name: string
    Weapon?: WeaponCreateNestedManyWithoutWeaponTypeInput
    MainWeapon?: MainWeaponCreateNestedManyWithoutWeaponTypeInput
  }

  export type WeaponTypeUncheckedCreateInput = {
    id: number
    name: string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutWeaponTypeInput
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutWeaponTypeInput
  }

  export type WeaponTypeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUpdateManyWithoutWeaponTypeNestedInput
    MainWeapon?: MainWeaponUpdateManyWithoutWeaponTypeNestedInput
  }

  export type WeaponTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUncheckedUpdateManyWithoutWeaponTypeNestedInput
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutWeaponTypeNestedInput
  }

  export type WeaponTypeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubWeaponCreateInput = {
    id: number
    name: string
    releaseSeason: SeasonCreateNestedOneWithoutSubWeaponInput
    Weapon?: WeaponCreateNestedManyWithoutSubWeaponInput
  }

  export type SubWeaponUncheckedCreateInput = {
    id: number
    name: string
    seasonId: number
    Weapon?: WeaponUncheckedCreateNestedManyWithoutSubWeaponInput
  }

  export type SubWeaponUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseSeason?: SeasonUpdateOneRequiredWithoutSubWeaponNestedInput
    Weapon?: WeaponUpdateManyWithoutSubWeaponNestedInput
  }

  export type SubWeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
    Weapon?: WeaponUncheckedUpdateManyWithoutSubWeaponNestedInput
  }

  export type SubWeaponUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubWeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type MainWeaponCreateInput = {
    id: number
    name: string
    weaponType: WeaponTypeCreateNestedOneWithoutMainWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutMainWeaponInput
    Weapon?: WeaponCreateNestedManyWithoutMainWeaponInput
  }

  export type MainWeaponUncheckedCreateInput = {
    id: number
    name: string
    seasonId: number
    weaponTypeId: number
    Weapon?: WeaponUncheckedCreateNestedManyWithoutMainWeaponInput
  }

  export type MainWeaponUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weaponType?: WeaponTypeUpdateOneRequiredWithoutMainWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutMainWeaponNestedInput
    Weapon?: WeaponUpdateManyWithoutMainWeaponNestedInput
  }

  export type MainWeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    Weapon?: WeaponUncheckedUpdateManyWithoutMainWeaponNestedInput
  }

  export type MainWeaponUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MainWeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponCreateInput = {
    id: number
    name: string
    mainWeapon: MainWeaponCreateNestedOneWithoutWeaponInput
    subWeapon: SubWeaponCreateNestedOneWithoutWeaponInput
    specialWeapon: SpecialWeaponCreateNestedOneWithoutWeaponInput
    weaponType: WeaponTypeCreateNestedOneWithoutWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateInput = {
    id: number
    name: string
    subWeaponId: number
    specialWeaponId: number
    seasonId: number
    weaponTypeId: number
    mainWeaponId: number
  }

  export type WeaponUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mainWeapon?: MainWeaponUpdateOneRequiredWithoutWeaponNestedInput
    subWeapon?: SubWeaponUpdateOneRequiredWithoutWeaponNestedInput
    specialWeapon?: SpecialWeaponUpdateOneRequiredWithoutWeaponNestedInput
    weaponType?: WeaponTypeUpdateOneRequiredWithoutWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type SeasonCreateInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUncheckedCreateInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ModeOnRuleListRelationFilter = {
    every?: ModeOnRuleWhereInput
    some?: ModeOnRuleWhereInput
    none?: ModeOnRuleWhereInput
  }

  export type ModeOnRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxMembers?: SortOrder
    fessMode?: SortOrder
  }

  export type ModeAvgOrderByAggregateInput = {
    id?: SortOrder
    maxMembers?: SortOrder
  }

  export type ModeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxMembers?: SortOrder
    fessMode?: SortOrder
  }

  export type ModeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxMembers?: SortOrder
    fessMode?: SortOrder
  }

  export type ModeSumOrderByAggregateInput = {
    id?: SortOrder
    maxMembers?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RuleRelationFilter = {
    is?: RuleWhereInput
    isNot?: RuleWhereInput
  }

  export type ModeRelationFilter = {
    is?: ModeWhereInput
    isNot?: ModeWhereInput
  }

  export type ModeOnRuleRuleIdModeIdCompoundUniqueInput = {
    ruleId: number
    modeId: number
  }

  export type ModeOnRuleCountOrderByAggregateInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
  }

  export type ModeOnRuleAvgOrderByAggregateInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
  }

  export type ModeOnRuleMaxOrderByAggregateInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
  }

  export type ModeOnRuleMinOrderByAggregateInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
  }

  export type ModeOnRuleSumOrderByAggregateInput = {
    ruleId?: SortOrder
    modeId?: SortOrder
  }

  export type SeasonRelationFilter = {
    is?: SeasonWhereInput
    isNot?: SeasonWhereInput
  }

  export type StageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type StageAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type StageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type StageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type StageSumOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type WeaponListRelationFilter = {
    every?: WeaponWhereInput
    some?: WeaponWhereInput
    none?: WeaponWhereInput
  }

  export type WeaponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialWeaponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type SpecialWeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type SpecialWeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type SpecialWeaponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type SpecialWeaponSumOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type MainWeaponListRelationFilter = {
    every?: MainWeaponWhereInput
    some?: MainWeaponWhereInput
    none?: MainWeaponWhereInput
  }

  export type MainWeaponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeaponTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WeaponTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeaponTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WeaponTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WeaponTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubWeaponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type SubWeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type SubWeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type SubWeaponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
  }

  export type SubWeaponSumOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type WeaponTypeRelationFilter = {
    is?: WeaponTypeWhereInput
    isNot?: WeaponTypeWhereInput
  }

  export type MainWeaponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
  }

  export type MainWeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
  }

  export type MainWeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
  }

  export type MainWeaponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
  }

  export type MainWeaponSumOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
  }

  export type MainWeaponRelationFilter = {
    is?: MainWeaponWhereInput
    isNot?: MainWeaponWhereInput
  }

  export type SubWeaponRelationFilter = {
    is?: SubWeaponWhereInput
    isNot?: SubWeaponWhereInput
  }

  export type SpecialWeaponRelationFilter = {
    is?: SpecialWeaponWhereInput
    isNot?: SpecialWeaponWhereInput
  }

  export type WeaponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
  }

  export type WeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
  }

  export type WeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
  }

  export type WeaponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
  }

  export type WeaponSumOrderByAggregateInput = {
    id?: SortOrder
    subWeaponId?: SortOrder
    specialWeaponId?: SortOrder
    seasonId?: SortOrder
    weaponTypeId?: SortOrder
    mainWeaponId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StageListRelationFilter = {
    every?: StageWhereInput
    some?: StageWhereInput
    none?: StageWhereInput
  }

  export type SpecialWeaponListRelationFilter = {
    every?: SpecialWeaponWhereInput
    some?: SpecialWeaponWhereInput
    none?: SpecialWeaponWhereInput
  }

  export type SubWeaponListRelationFilter = {
    every?: SubWeaponWhereInput
    some?: SubWeaponWhereInput
    none?: SubWeaponWhereInput
  }

  export type StageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialWeaponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubWeaponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ModeOnRuleCreateNestedManyWithoutRuleInput = {
    create?: XOR<ModeOnRuleCreateWithoutRuleInput, ModeOnRuleUncheckedCreateWithoutRuleInput> | ModeOnRuleCreateWithoutRuleInput[] | ModeOnRuleUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutRuleInput | ModeOnRuleCreateOrConnectWithoutRuleInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
  }

  export type ModeOnRuleUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<ModeOnRuleCreateWithoutRuleInput, ModeOnRuleUncheckedCreateWithoutRuleInput> | ModeOnRuleCreateWithoutRuleInput[] | ModeOnRuleUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutRuleInput | ModeOnRuleCreateOrConnectWithoutRuleInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ModeOnRuleUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ModeOnRuleCreateWithoutRuleInput, ModeOnRuleUncheckedCreateWithoutRuleInput> | ModeOnRuleCreateWithoutRuleInput[] | ModeOnRuleUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutRuleInput | ModeOnRuleCreateOrConnectWithoutRuleInput[]
    upsert?: ModeOnRuleUpsertWithWhereUniqueWithoutRuleInput | ModeOnRuleUpsertWithWhereUniqueWithoutRuleInput[]
    set?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    disconnect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    delete?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    update?: ModeOnRuleUpdateWithWhereUniqueWithoutRuleInput | ModeOnRuleUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ModeOnRuleUpdateManyWithWhereWithoutRuleInput | ModeOnRuleUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ModeOnRuleScalarWhereInput | ModeOnRuleScalarWhereInput[]
  }

  export type ModeOnRuleUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ModeOnRuleCreateWithoutRuleInput, ModeOnRuleUncheckedCreateWithoutRuleInput> | ModeOnRuleCreateWithoutRuleInput[] | ModeOnRuleUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutRuleInput | ModeOnRuleCreateOrConnectWithoutRuleInput[]
    upsert?: ModeOnRuleUpsertWithWhereUniqueWithoutRuleInput | ModeOnRuleUpsertWithWhereUniqueWithoutRuleInput[]
    set?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    disconnect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    delete?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    update?: ModeOnRuleUpdateWithWhereUniqueWithoutRuleInput | ModeOnRuleUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ModeOnRuleUpdateManyWithWhereWithoutRuleInput | ModeOnRuleUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ModeOnRuleScalarWhereInput | ModeOnRuleScalarWhereInput[]
  }

  export type ModeOnRuleCreateNestedManyWithoutModeInput = {
    create?: XOR<ModeOnRuleCreateWithoutModeInput, ModeOnRuleUncheckedCreateWithoutModeInput> | ModeOnRuleCreateWithoutModeInput[] | ModeOnRuleUncheckedCreateWithoutModeInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutModeInput | ModeOnRuleCreateOrConnectWithoutModeInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
  }

  export type ModeOnRuleUncheckedCreateNestedManyWithoutModeInput = {
    create?: XOR<ModeOnRuleCreateWithoutModeInput, ModeOnRuleUncheckedCreateWithoutModeInput> | ModeOnRuleCreateWithoutModeInput[] | ModeOnRuleUncheckedCreateWithoutModeInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutModeInput | ModeOnRuleCreateOrConnectWithoutModeInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModeOnRuleUpdateManyWithoutModeNestedInput = {
    create?: XOR<ModeOnRuleCreateWithoutModeInput, ModeOnRuleUncheckedCreateWithoutModeInput> | ModeOnRuleCreateWithoutModeInput[] | ModeOnRuleUncheckedCreateWithoutModeInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutModeInput | ModeOnRuleCreateOrConnectWithoutModeInput[]
    upsert?: ModeOnRuleUpsertWithWhereUniqueWithoutModeInput | ModeOnRuleUpsertWithWhereUniqueWithoutModeInput[]
    set?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    disconnect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    delete?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    update?: ModeOnRuleUpdateWithWhereUniqueWithoutModeInput | ModeOnRuleUpdateWithWhereUniqueWithoutModeInput[]
    updateMany?: ModeOnRuleUpdateManyWithWhereWithoutModeInput | ModeOnRuleUpdateManyWithWhereWithoutModeInput[]
    deleteMany?: ModeOnRuleScalarWhereInput | ModeOnRuleScalarWhereInput[]
  }

  export type ModeOnRuleUncheckedUpdateManyWithoutModeNestedInput = {
    create?: XOR<ModeOnRuleCreateWithoutModeInput, ModeOnRuleUncheckedCreateWithoutModeInput> | ModeOnRuleCreateWithoutModeInput[] | ModeOnRuleUncheckedCreateWithoutModeInput[]
    connectOrCreate?: ModeOnRuleCreateOrConnectWithoutModeInput | ModeOnRuleCreateOrConnectWithoutModeInput[]
    upsert?: ModeOnRuleUpsertWithWhereUniqueWithoutModeInput | ModeOnRuleUpsertWithWhereUniqueWithoutModeInput[]
    set?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    disconnect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    delete?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    connect?: ModeOnRuleWhereUniqueInput | ModeOnRuleWhereUniqueInput[]
    update?: ModeOnRuleUpdateWithWhereUniqueWithoutModeInput | ModeOnRuleUpdateWithWhereUniqueWithoutModeInput[]
    updateMany?: ModeOnRuleUpdateManyWithWhereWithoutModeInput | ModeOnRuleUpdateManyWithWhereWithoutModeInput[]
    deleteMany?: ModeOnRuleScalarWhereInput | ModeOnRuleScalarWhereInput[]
  }

  export type RuleCreateNestedOneWithoutModesInput = {
    create?: XOR<RuleCreateWithoutModesInput, RuleUncheckedCreateWithoutModesInput>
    connectOrCreate?: RuleCreateOrConnectWithoutModesInput
    connect?: RuleWhereUniqueInput
  }

  export type ModeCreateNestedOneWithoutRulesInput = {
    create?: XOR<ModeCreateWithoutRulesInput, ModeUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ModeCreateOrConnectWithoutRulesInput
    connect?: ModeWhereUniqueInput
  }

  export type RuleUpdateOneRequiredWithoutModesNestedInput = {
    create?: XOR<RuleCreateWithoutModesInput, RuleUncheckedCreateWithoutModesInput>
    connectOrCreate?: RuleCreateOrConnectWithoutModesInput
    upsert?: RuleUpsertWithoutModesInput
    connect?: RuleWhereUniqueInput
    update?: XOR<XOR<RuleUpdateToOneWithWhereWithoutModesInput, RuleUpdateWithoutModesInput>, RuleUncheckedUpdateWithoutModesInput>
  }

  export type ModeUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<ModeCreateWithoutRulesInput, ModeUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ModeCreateOrConnectWithoutRulesInput
    upsert?: ModeUpsertWithoutRulesInput
    connect?: ModeWhereUniqueInput
    update?: XOR<XOR<ModeUpdateToOneWithWhereWithoutRulesInput, ModeUpdateWithoutRulesInput>, ModeUncheckedUpdateWithoutRulesInput>
  }

  export type SeasonCreateNestedOneWithoutStageInput = {
    create?: XOR<SeasonCreateWithoutStageInput, SeasonUncheckedCreateWithoutStageInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutStageInput
    connect?: SeasonWhereUniqueInput
  }

  export type SeasonUpdateOneRequiredWithoutStageNestedInput = {
    create?: XOR<SeasonCreateWithoutStageInput, SeasonUncheckedCreateWithoutStageInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutStageInput
    upsert?: SeasonUpsertWithoutStageInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutStageInput, SeasonUpdateWithoutStageInput>, SeasonUncheckedUpdateWithoutStageInput>
  }

  export type SeasonCreateNestedOneWithoutSpecialWeaponInput = {
    create?: XOR<SeasonCreateWithoutSpecialWeaponInput, SeasonUncheckedCreateWithoutSpecialWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutSpecialWeaponInput
    connect?: SeasonWhereUniqueInput
  }

  export type WeaponCreateNestedManyWithoutSpecialWeaponInput = {
    create?: XOR<WeaponCreateWithoutSpecialWeaponInput, WeaponUncheckedCreateWithoutSpecialWeaponInput> | WeaponCreateWithoutSpecialWeaponInput[] | WeaponUncheckedCreateWithoutSpecialWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSpecialWeaponInput | WeaponCreateOrConnectWithoutSpecialWeaponInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutSpecialWeaponInput = {
    create?: XOR<WeaponCreateWithoutSpecialWeaponInput, WeaponUncheckedCreateWithoutSpecialWeaponInput> | WeaponCreateWithoutSpecialWeaponInput[] | WeaponUncheckedCreateWithoutSpecialWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSpecialWeaponInput | WeaponCreateOrConnectWithoutSpecialWeaponInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type SeasonUpdateOneRequiredWithoutSpecialWeaponNestedInput = {
    create?: XOR<SeasonCreateWithoutSpecialWeaponInput, SeasonUncheckedCreateWithoutSpecialWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutSpecialWeaponInput
    upsert?: SeasonUpsertWithoutSpecialWeaponInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutSpecialWeaponInput, SeasonUpdateWithoutSpecialWeaponInput>, SeasonUncheckedUpdateWithoutSpecialWeaponInput>
  }

  export type WeaponUpdateManyWithoutSpecialWeaponNestedInput = {
    create?: XOR<WeaponCreateWithoutSpecialWeaponInput, WeaponUncheckedCreateWithoutSpecialWeaponInput> | WeaponCreateWithoutSpecialWeaponInput[] | WeaponUncheckedCreateWithoutSpecialWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSpecialWeaponInput | WeaponCreateOrConnectWithoutSpecialWeaponInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutSpecialWeaponInput | WeaponUpsertWithWhereUniqueWithoutSpecialWeaponInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutSpecialWeaponInput | WeaponUpdateWithWhereUniqueWithoutSpecialWeaponInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutSpecialWeaponInput | WeaponUpdateManyWithWhereWithoutSpecialWeaponInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutSpecialWeaponNestedInput = {
    create?: XOR<WeaponCreateWithoutSpecialWeaponInput, WeaponUncheckedCreateWithoutSpecialWeaponInput> | WeaponCreateWithoutSpecialWeaponInput[] | WeaponUncheckedCreateWithoutSpecialWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSpecialWeaponInput | WeaponCreateOrConnectWithoutSpecialWeaponInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutSpecialWeaponInput | WeaponUpsertWithWhereUniqueWithoutSpecialWeaponInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutSpecialWeaponInput | WeaponUpdateWithWhereUniqueWithoutSpecialWeaponInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutSpecialWeaponInput | WeaponUpdateManyWithWhereWithoutSpecialWeaponInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type WeaponCreateNestedManyWithoutWeaponTypeInput = {
    create?: XOR<WeaponCreateWithoutWeaponTypeInput, WeaponUncheckedCreateWithoutWeaponTypeInput> | WeaponCreateWithoutWeaponTypeInput[] | WeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutWeaponTypeInput | WeaponCreateOrConnectWithoutWeaponTypeInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type MainWeaponCreateNestedManyWithoutWeaponTypeInput = {
    create?: XOR<MainWeaponCreateWithoutWeaponTypeInput, MainWeaponUncheckedCreateWithoutWeaponTypeInput> | MainWeaponCreateWithoutWeaponTypeInput[] | MainWeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutWeaponTypeInput | MainWeaponCreateOrConnectWithoutWeaponTypeInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutWeaponTypeInput = {
    create?: XOR<WeaponCreateWithoutWeaponTypeInput, WeaponUncheckedCreateWithoutWeaponTypeInput> | WeaponCreateWithoutWeaponTypeInput[] | WeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutWeaponTypeInput | WeaponCreateOrConnectWithoutWeaponTypeInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type MainWeaponUncheckedCreateNestedManyWithoutWeaponTypeInput = {
    create?: XOR<MainWeaponCreateWithoutWeaponTypeInput, MainWeaponUncheckedCreateWithoutWeaponTypeInput> | MainWeaponCreateWithoutWeaponTypeInput[] | MainWeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutWeaponTypeInput | MainWeaponCreateOrConnectWithoutWeaponTypeInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
  }

  export type WeaponUpdateManyWithoutWeaponTypeNestedInput = {
    create?: XOR<WeaponCreateWithoutWeaponTypeInput, WeaponUncheckedCreateWithoutWeaponTypeInput> | WeaponCreateWithoutWeaponTypeInput[] | WeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutWeaponTypeInput | WeaponCreateOrConnectWithoutWeaponTypeInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutWeaponTypeInput | WeaponUpsertWithWhereUniqueWithoutWeaponTypeInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutWeaponTypeInput | WeaponUpdateWithWhereUniqueWithoutWeaponTypeInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutWeaponTypeInput | WeaponUpdateManyWithWhereWithoutWeaponTypeInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type MainWeaponUpdateManyWithoutWeaponTypeNestedInput = {
    create?: XOR<MainWeaponCreateWithoutWeaponTypeInput, MainWeaponUncheckedCreateWithoutWeaponTypeInput> | MainWeaponCreateWithoutWeaponTypeInput[] | MainWeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutWeaponTypeInput | MainWeaponCreateOrConnectWithoutWeaponTypeInput[]
    upsert?: MainWeaponUpsertWithWhereUniqueWithoutWeaponTypeInput | MainWeaponUpsertWithWhereUniqueWithoutWeaponTypeInput[]
    set?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    disconnect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    delete?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    update?: MainWeaponUpdateWithWhereUniqueWithoutWeaponTypeInput | MainWeaponUpdateWithWhereUniqueWithoutWeaponTypeInput[]
    updateMany?: MainWeaponUpdateManyWithWhereWithoutWeaponTypeInput | MainWeaponUpdateManyWithWhereWithoutWeaponTypeInput[]
    deleteMany?: MainWeaponScalarWhereInput | MainWeaponScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutWeaponTypeNestedInput = {
    create?: XOR<WeaponCreateWithoutWeaponTypeInput, WeaponUncheckedCreateWithoutWeaponTypeInput> | WeaponCreateWithoutWeaponTypeInput[] | WeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutWeaponTypeInput | WeaponCreateOrConnectWithoutWeaponTypeInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutWeaponTypeInput | WeaponUpsertWithWhereUniqueWithoutWeaponTypeInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutWeaponTypeInput | WeaponUpdateWithWhereUniqueWithoutWeaponTypeInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutWeaponTypeInput | WeaponUpdateManyWithWhereWithoutWeaponTypeInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type MainWeaponUncheckedUpdateManyWithoutWeaponTypeNestedInput = {
    create?: XOR<MainWeaponCreateWithoutWeaponTypeInput, MainWeaponUncheckedCreateWithoutWeaponTypeInput> | MainWeaponCreateWithoutWeaponTypeInput[] | MainWeaponUncheckedCreateWithoutWeaponTypeInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutWeaponTypeInput | MainWeaponCreateOrConnectWithoutWeaponTypeInput[]
    upsert?: MainWeaponUpsertWithWhereUniqueWithoutWeaponTypeInput | MainWeaponUpsertWithWhereUniqueWithoutWeaponTypeInput[]
    set?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    disconnect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    delete?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    update?: MainWeaponUpdateWithWhereUniqueWithoutWeaponTypeInput | MainWeaponUpdateWithWhereUniqueWithoutWeaponTypeInput[]
    updateMany?: MainWeaponUpdateManyWithWhereWithoutWeaponTypeInput | MainWeaponUpdateManyWithWhereWithoutWeaponTypeInput[]
    deleteMany?: MainWeaponScalarWhereInput | MainWeaponScalarWhereInput[]
  }

  export type SeasonCreateNestedOneWithoutSubWeaponInput = {
    create?: XOR<SeasonCreateWithoutSubWeaponInput, SeasonUncheckedCreateWithoutSubWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutSubWeaponInput
    connect?: SeasonWhereUniqueInput
  }

  export type WeaponCreateNestedManyWithoutSubWeaponInput = {
    create?: XOR<WeaponCreateWithoutSubWeaponInput, WeaponUncheckedCreateWithoutSubWeaponInput> | WeaponCreateWithoutSubWeaponInput[] | WeaponUncheckedCreateWithoutSubWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSubWeaponInput | WeaponCreateOrConnectWithoutSubWeaponInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutSubWeaponInput = {
    create?: XOR<WeaponCreateWithoutSubWeaponInput, WeaponUncheckedCreateWithoutSubWeaponInput> | WeaponCreateWithoutSubWeaponInput[] | WeaponUncheckedCreateWithoutSubWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSubWeaponInput | WeaponCreateOrConnectWithoutSubWeaponInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type SeasonUpdateOneRequiredWithoutSubWeaponNestedInput = {
    create?: XOR<SeasonCreateWithoutSubWeaponInput, SeasonUncheckedCreateWithoutSubWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutSubWeaponInput
    upsert?: SeasonUpsertWithoutSubWeaponInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutSubWeaponInput, SeasonUpdateWithoutSubWeaponInput>, SeasonUncheckedUpdateWithoutSubWeaponInput>
  }

  export type WeaponUpdateManyWithoutSubWeaponNestedInput = {
    create?: XOR<WeaponCreateWithoutSubWeaponInput, WeaponUncheckedCreateWithoutSubWeaponInput> | WeaponCreateWithoutSubWeaponInput[] | WeaponUncheckedCreateWithoutSubWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSubWeaponInput | WeaponCreateOrConnectWithoutSubWeaponInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutSubWeaponInput | WeaponUpsertWithWhereUniqueWithoutSubWeaponInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutSubWeaponInput | WeaponUpdateWithWhereUniqueWithoutSubWeaponInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutSubWeaponInput | WeaponUpdateManyWithWhereWithoutSubWeaponInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutSubWeaponNestedInput = {
    create?: XOR<WeaponCreateWithoutSubWeaponInput, WeaponUncheckedCreateWithoutSubWeaponInput> | WeaponCreateWithoutSubWeaponInput[] | WeaponUncheckedCreateWithoutSubWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutSubWeaponInput | WeaponCreateOrConnectWithoutSubWeaponInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutSubWeaponInput | WeaponUpsertWithWhereUniqueWithoutSubWeaponInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutSubWeaponInput | WeaponUpdateWithWhereUniqueWithoutSubWeaponInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutSubWeaponInput | WeaponUpdateManyWithWhereWithoutSubWeaponInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type WeaponTypeCreateNestedOneWithoutMainWeaponInput = {
    create?: XOR<WeaponTypeCreateWithoutMainWeaponInput, WeaponTypeUncheckedCreateWithoutMainWeaponInput>
    connectOrCreate?: WeaponTypeCreateOrConnectWithoutMainWeaponInput
    connect?: WeaponTypeWhereUniqueInput
  }

  export type SeasonCreateNestedOneWithoutMainWeaponInput = {
    create?: XOR<SeasonCreateWithoutMainWeaponInput, SeasonUncheckedCreateWithoutMainWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutMainWeaponInput
    connect?: SeasonWhereUniqueInput
  }

  export type WeaponCreateNestedManyWithoutMainWeaponInput = {
    create?: XOR<WeaponCreateWithoutMainWeaponInput, WeaponUncheckedCreateWithoutMainWeaponInput> | WeaponCreateWithoutMainWeaponInput[] | WeaponUncheckedCreateWithoutMainWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutMainWeaponInput | WeaponCreateOrConnectWithoutMainWeaponInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutMainWeaponInput = {
    create?: XOR<WeaponCreateWithoutMainWeaponInput, WeaponUncheckedCreateWithoutMainWeaponInput> | WeaponCreateWithoutMainWeaponInput[] | WeaponUncheckedCreateWithoutMainWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutMainWeaponInput | WeaponCreateOrConnectWithoutMainWeaponInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type WeaponTypeUpdateOneRequiredWithoutMainWeaponNestedInput = {
    create?: XOR<WeaponTypeCreateWithoutMainWeaponInput, WeaponTypeUncheckedCreateWithoutMainWeaponInput>
    connectOrCreate?: WeaponTypeCreateOrConnectWithoutMainWeaponInput
    upsert?: WeaponTypeUpsertWithoutMainWeaponInput
    connect?: WeaponTypeWhereUniqueInput
    update?: XOR<XOR<WeaponTypeUpdateToOneWithWhereWithoutMainWeaponInput, WeaponTypeUpdateWithoutMainWeaponInput>, WeaponTypeUncheckedUpdateWithoutMainWeaponInput>
  }

  export type SeasonUpdateOneRequiredWithoutMainWeaponNestedInput = {
    create?: XOR<SeasonCreateWithoutMainWeaponInput, SeasonUncheckedCreateWithoutMainWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutMainWeaponInput
    upsert?: SeasonUpsertWithoutMainWeaponInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutMainWeaponInput, SeasonUpdateWithoutMainWeaponInput>, SeasonUncheckedUpdateWithoutMainWeaponInput>
  }

  export type WeaponUpdateManyWithoutMainWeaponNestedInput = {
    create?: XOR<WeaponCreateWithoutMainWeaponInput, WeaponUncheckedCreateWithoutMainWeaponInput> | WeaponCreateWithoutMainWeaponInput[] | WeaponUncheckedCreateWithoutMainWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutMainWeaponInput | WeaponCreateOrConnectWithoutMainWeaponInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutMainWeaponInput | WeaponUpsertWithWhereUniqueWithoutMainWeaponInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutMainWeaponInput | WeaponUpdateWithWhereUniqueWithoutMainWeaponInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutMainWeaponInput | WeaponUpdateManyWithWhereWithoutMainWeaponInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutMainWeaponNestedInput = {
    create?: XOR<WeaponCreateWithoutMainWeaponInput, WeaponUncheckedCreateWithoutMainWeaponInput> | WeaponCreateWithoutMainWeaponInput[] | WeaponUncheckedCreateWithoutMainWeaponInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutMainWeaponInput | WeaponCreateOrConnectWithoutMainWeaponInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutMainWeaponInput | WeaponUpsertWithWhereUniqueWithoutMainWeaponInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutMainWeaponInput | WeaponUpdateWithWhereUniqueWithoutMainWeaponInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutMainWeaponInput | WeaponUpdateManyWithWhereWithoutMainWeaponInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type MainWeaponCreateNestedOneWithoutWeaponInput = {
    create?: XOR<MainWeaponCreateWithoutWeaponInput, MainWeaponUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: MainWeaponCreateOrConnectWithoutWeaponInput
    connect?: MainWeaponWhereUniqueInput
  }

  export type SubWeaponCreateNestedOneWithoutWeaponInput = {
    create?: XOR<SubWeaponCreateWithoutWeaponInput, SubWeaponUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: SubWeaponCreateOrConnectWithoutWeaponInput
    connect?: SubWeaponWhereUniqueInput
  }

  export type SpecialWeaponCreateNestedOneWithoutWeaponInput = {
    create?: XOR<SpecialWeaponCreateWithoutWeaponInput, SpecialWeaponUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: SpecialWeaponCreateOrConnectWithoutWeaponInput
    connect?: SpecialWeaponWhereUniqueInput
  }

  export type WeaponTypeCreateNestedOneWithoutWeaponInput = {
    create?: XOR<WeaponTypeCreateWithoutWeaponInput, WeaponTypeUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: WeaponTypeCreateOrConnectWithoutWeaponInput
    connect?: WeaponTypeWhereUniqueInput
  }

  export type SeasonCreateNestedOneWithoutWeaponInput = {
    create?: XOR<SeasonCreateWithoutWeaponInput, SeasonUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutWeaponInput
    connect?: SeasonWhereUniqueInput
  }

  export type MainWeaponUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<MainWeaponCreateWithoutWeaponInput, MainWeaponUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: MainWeaponCreateOrConnectWithoutWeaponInput
    upsert?: MainWeaponUpsertWithoutWeaponInput
    connect?: MainWeaponWhereUniqueInput
    update?: XOR<XOR<MainWeaponUpdateToOneWithWhereWithoutWeaponInput, MainWeaponUpdateWithoutWeaponInput>, MainWeaponUncheckedUpdateWithoutWeaponInput>
  }

  export type SubWeaponUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<SubWeaponCreateWithoutWeaponInput, SubWeaponUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: SubWeaponCreateOrConnectWithoutWeaponInput
    upsert?: SubWeaponUpsertWithoutWeaponInput
    connect?: SubWeaponWhereUniqueInput
    update?: XOR<XOR<SubWeaponUpdateToOneWithWhereWithoutWeaponInput, SubWeaponUpdateWithoutWeaponInput>, SubWeaponUncheckedUpdateWithoutWeaponInput>
  }

  export type SpecialWeaponUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<SpecialWeaponCreateWithoutWeaponInput, SpecialWeaponUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: SpecialWeaponCreateOrConnectWithoutWeaponInput
    upsert?: SpecialWeaponUpsertWithoutWeaponInput
    connect?: SpecialWeaponWhereUniqueInput
    update?: XOR<XOR<SpecialWeaponUpdateToOneWithWhereWithoutWeaponInput, SpecialWeaponUpdateWithoutWeaponInput>, SpecialWeaponUncheckedUpdateWithoutWeaponInput>
  }

  export type WeaponTypeUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<WeaponTypeCreateWithoutWeaponInput, WeaponTypeUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: WeaponTypeCreateOrConnectWithoutWeaponInput
    upsert?: WeaponTypeUpsertWithoutWeaponInput
    connect?: WeaponTypeWhereUniqueInput
    update?: XOR<XOR<WeaponTypeUpdateToOneWithWhereWithoutWeaponInput, WeaponTypeUpdateWithoutWeaponInput>, WeaponTypeUncheckedUpdateWithoutWeaponInput>
  }

  export type SeasonUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<SeasonCreateWithoutWeaponInput, SeasonUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutWeaponInput
    upsert?: SeasonUpsertWithoutWeaponInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutWeaponInput, SeasonUpdateWithoutWeaponInput>, SeasonUncheckedUpdateWithoutWeaponInput>
  }

  export type WeaponCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<WeaponCreateWithoutReleaseSeasonInput, WeaponUncheckedCreateWithoutReleaseSeasonInput> | WeaponCreateWithoutReleaseSeasonInput[] | WeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutReleaseSeasonInput | WeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type StageCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<StageCreateWithoutReleaseSeasonInput, StageUncheckedCreateWithoutReleaseSeasonInput> | StageCreateWithoutReleaseSeasonInput[] | StageUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: StageCreateOrConnectWithoutReleaseSeasonInput | StageCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type SpecialWeaponCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<SpecialWeaponCreateWithoutReleaseSeasonInput, SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput> | SpecialWeaponCreateWithoutReleaseSeasonInput[] | SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput | SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
  }

  export type SubWeaponCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<SubWeaponCreateWithoutReleaseSeasonInput, SubWeaponUncheckedCreateWithoutReleaseSeasonInput> | SubWeaponCreateWithoutReleaseSeasonInput[] | SubWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SubWeaponCreateOrConnectWithoutReleaseSeasonInput | SubWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
  }

  export type MainWeaponCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<MainWeaponCreateWithoutReleaseSeasonInput, MainWeaponUncheckedCreateWithoutReleaseSeasonInput> | MainWeaponCreateWithoutReleaseSeasonInput[] | MainWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutReleaseSeasonInput | MainWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<WeaponCreateWithoutReleaseSeasonInput, WeaponUncheckedCreateWithoutReleaseSeasonInput> | WeaponCreateWithoutReleaseSeasonInput[] | WeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutReleaseSeasonInput | WeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type StageUncheckedCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<StageCreateWithoutReleaseSeasonInput, StageUncheckedCreateWithoutReleaseSeasonInput> | StageCreateWithoutReleaseSeasonInput[] | StageUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: StageCreateOrConnectWithoutReleaseSeasonInput | StageCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type SpecialWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<SpecialWeaponCreateWithoutReleaseSeasonInput, SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput> | SpecialWeaponCreateWithoutReleaseSeasonInput[] | SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput | SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
  }

  export type SubWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<SubWeaponCreateWithoutReleaseSeasonInput, SubWeaponUncheckedCreateWithoutReleaseSeasonInput> | SubWeaponCreateWithoutReleaseSeasonInput[] | SubWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SubWeaponCreateOrConnectWithoutReleaseSeasonInput | SubWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
  }

  export type MainWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput = {
    create?: XOR<MainWeaponCreateWithoutReleaseSeasonInput, MainWeaponUncheckedCreateWithoutReleaseSeasonInput> | MainWeaponCreateWithoutReleaseSeasonInput[] | MainWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutReleaseSeasonInput | MainWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WeaponUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<WeaponCreateWithoutReleaseSeasonInput, WeaponUncheckedCreateWithoutReleaseSeasonInput> | WeaponCreateWithoutReleaseSeasonInput[] | WeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutReleaseSeasonInput | WeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | WeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | WeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutReleaseSeasonInput | WeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type StageUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<StageCreateWithoutReleaseSeasonInput, StageUncheckedCreateWithoutReleaseSeasonInput> | StageCreateWithoutReleaseSeasonInput[] | StageUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: StageCreateOrConnectWithoutReleaseSeasonInput | StageCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutReleaseSeasonInput | StageUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutReleaseSeasonInput | StageUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: StageUpdateManyWithWhereWithoutReleaseSeasonInput | StageUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type SpecialWeaponUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<SpecialWeaponCreateWithoutReleaseSeasonInput, SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput> | SpecialWeaponCreateWithoutReleaseSeasonInput[] | SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput | SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: SpecialWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | SpecialWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    disconnect?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    delete?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    connect?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    update?: SpecialWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | SpecialWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: SpecialWeaponUpdateManyWithWhereWithoutReleaseSeasonInput | SpecialWeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: SpecialWeaponScalarWhereInput | SpecialWeaponScalarWhereInput[]
  }

  export type SubWeaponUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<SubWeaponCreateWithoutReleaseSeasonInput, SubWeaponUncheckedCreateWithoutReleaseSeasonInput> | SubWeaponCreateWithoutReleaseSeasonInput[] | SubWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SubWeaponCreateOrConnectWithoutReleaseSeasonInput | SubWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: SubWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | SubWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    disconnect?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    delete?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    connect?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    update?: SubWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | SubWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: SubWeaponUpdateManyWithWhereWithoutReleaseSeasonInput | SubWeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: SubWeaponScalarWhereInput | SubWeaponScalarWhereInput[]
  }

  export type MainWeaponUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<MainWeaponCreateWithoutReleaseSeasonInput, MainWeaponUncheckedCreateWithoutReleaseSeasonInput> | MainWeaponCreateWithoutReleaseSeasonInput[] | MainWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutReleaseSeasonInput | MainWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: MainWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | MainWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    disconnect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    delete?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    update?: MainWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | MainWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: MainWeaponUpdateManyWithWhereWithoutReleaseSeasonInput | MainWeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: MainWeaponScalarWhereInput | MainWeaponScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<WeaponCreateWithoutReleaseSeasonInput, WeaponUncheckedCreateWithoutReleaseSeasonInput> | WeaponCreateWithoutReleaseSeasonInput[] | WeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutReleaseSeasonInput | WeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | WeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | WeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutReleaseSeasonInput | WeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type StageUncheckedUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<StageCreateWithoutReleaseSeasonInput, StageUncheckedCreateWithoutReleaseSeasonInput> | StageCreateWithoutReleaseSeasonInput[] | StageUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: StageCreateOrConnectWithoutReleaseSeasonInput | StageCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutReleaseSeasonInput | StageUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutReleaseSeasonInput | StageUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: StageUpdateManyWithWhereWithoutReleaseSeasonInput | StageUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<SpecialWeaponCreateWithoutReleaseSeasonInput, SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput> | SpecialWeaponCreateWithoutReleaseSeasonInput[] | SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput | SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: SpecialWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | SpecialWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    disconnect?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    delete?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    connect?: SpecialWeaponWhereUniqueInput | SpecialWeaponWhereUniqueInput[]
    update?: SpecialWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | SpecialWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: SpecialWeaponUpdateManyWithWhereWithoutReleaseSeasonInput | SpecialWeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: SpecialWeaponScalarWhereInput | SpecialWeaponScalarWhereInput[]
  }

  export type SubWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<SubWeaponCreateWithoutReleaseSeasonInput, SubWeaponUncheckedCreateWithoutReleaseSeasonInput> | SubWeaponCreateWithoutReleaseSeasonInput[] | SubWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: SubWeaponCreateOrConnectWithoutReleaseSeasonInput | SubWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: SubWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | SubWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    disconnect?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    delete?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    connect?: SubWeaponWhereUniqueInput | SubWeaponWhereUniqueInput[]
    update?: SubWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | SubWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: SubWeaponUpdateManyWithWhereWithoutReleaseSeasonInput | SubWeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: SubWeaponScalarWhereInput | SubWeaponScalarWhereInput[]
  }

  export type MainWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput = {
    create?: XOR<MainWeaponCreateWithoutReleaseSeasonInput, MainWeaponUncheckedCreateWithoutReleaseSeasonInput> | MainWeaponCreateWithoutReleaseSeasonInput[] | MainWeaponUncheckedCreateWithoutReleaseSeasonInput[]
    connectOrCreate?: MainWeaponCreateOrConnectWithoutReleaseSeasonInput | MainWeaponCreateOrConnectWithoutReleaseSeasonInput[]
    upsert?: MainWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput | MainWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput[]
    set?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    disconnect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    delete?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    connect?: MainWeaponWhereUniqueInput | MainWeaponWhereUniqueInput[]
    update?: MainWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput | MainWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput[]
    updateMany?: MainWeaponUpdateManyWithWhereWithoutReleaseSeasonInput | MainWeaponUpdateManyWithWhereWithoutReleaseSeasonInput[]
    deleteMany?: MainWeaponScalarWhereInput | MainWeaponScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ModeOnRuleCreateWithoutRuleInput = {
    mode: ModeCreateNestedOneWithoutRulesInput
  }

  export type ModeOnRuleUncheckedCreateWithoutRuleInput = {
    modeId: number
  }

  export type ModeOnRuleCreateOrConnectWithoutRuleInput = {
    where: ModeOnRuleWhereUniqueInput
    create: XOR<ModeOnRuleCreateWithoutRuleInput, ModeOnRuleUncheckedCreateWithoutRuleInput>
  }

  export type ModeOnRuleUpsertWithWhereUniqueWithoutRuleInput = {
    where: ModeOnRuleWhereUniqueInput
    update: XOR<ModeOnRuleUpdateWithoutRuleInput, ModeOnRuleUncheckedUpdateWithoutRuleInput>
    create: XOR<ModeOnRuleCreateWithoutRuleInput, ModeOnRuleUncheckedCreateWithoutRuleInput>
  }

  export type ModeOnRuleUpdateWithWhereUniqueWithoutRuleInput = {
    where: ModeOnRuleWhereUniqueInput
    data: XOR<ModeOnRuleUpdateWithoutRuleInput, ModeOnRuleUncheckedUpdateWithoutRuleInput>
  }

  export type ModeOnRuleUpdateManyWithWhereWithoutRuleInput = {
    where: ModeOnRuleScalarWhereInput
    data: XOR<ModeOnRuleUpdateManyMutationInput, ModeOnRuleUncheckedUpdateManyWithoutRuleInput>
  }

  export type ModeOnRuleScalarWhereInput = {
    AND?: ModeOnRuleScalarWhereInput | ModeOnRuleScalarWhereInput[]
    OR?: ModeOnRuleScalarWhereInput[]
    NOT?: ModeOnRuleScalarWhereInput | ModeOnRuleScalarWhereInput[]
    ruleId?: IntFilter<"ModeOnRule"> | number
    modeId?: IntFilter<"ModeOnRule"> | number
  }

  export type ModeOnRuleCreateWithoutModeInput = {
    rule: RuleCreateNestedOneWithoutModesInput
  }

  export type ModeOnRuleUncheckedCreateWithoutModeInput = {
    ruleId: number
  }

  export type ModeOnRuleCreateOrConnectWithoutModeInput = {
    where: ModeOnRuleWhereUniqueInput
    create: XOR<ModeOnRuleCreateWithoutModeInput, ModeOnRuleUncheckedCreateWithoutModeInput>
  }

  export type ModeOnRuleUpsertWithWhereUniqueWithoutModeInput = {
    where: ModeOnRuleWhereUniqueInput
    update: XOR<ModeOnRuleUpdateWithoutModeInput, ModeOnRuleUncheckedUpdateWithoutModeInput>
    create: XOR<ModeOnRuleCreateWithoutModeInput, ModeOnRuleUncheckedCreateWithoutModeInput>
  }

  export type ModeOnRuleUpdateWithWhereUniqueWithoutModeInput = {
    where: ModeOnRuleWhereUniqueInput
    data: XOR<ModeOnRuleUpdateWithoutModeInput, ModeOnRuleUncheckedUpdateWithoutModeInput>
  }

  export type ModeOnRuleUpdateManyWithWhereWithoutModeInput = {
    where: ModeOnRuleScalarWhereInput
    data: XOR<ModeOnRuleUpdateManyMutationInput, ModeOnRuleUncheckedUpdateManyWithoutModeInput>
  }

  export type RuleCreateWithoutModesInput = {
    id: number
    name: string
  }

  export type RuleUncheckedCreateWithoutModesInput = {
    id: number
    name: string
  }

  export type RuleCreateOrConnectWithoutModesInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutModesInput, RuleUncheckedCreateWithoutModesInput>
  }

  export type ModeCreateWithoutRulesInput = {
    id: number
    name: string
    maxMembers: number
    fessMode: boolean
  }

  export type ModeUncheckedCreateWithoutRulesInput = {
    id: number
    name: string
    maxMembers: number
    fessMode: boolean
  }

  export type ModeCreateOrConnectWithoutRulesInput = {
    where: ModeWhereUniqueInput
    create: XOR<ModeCreateWithoutRulesInput, ModeUncheckedCreateWithoutRulesInput>
  }

  export type RuleUpsertWithoutModesInput = {
    update: XOR<RuleUpdateWithoutModesInput, RuleUncheckedUpdateWithoutModesInput>
    create: XOR<RuleCreateWithoutModesInput, RuleUncheckedCreateWithoutModesInput>
    where?: RuleWhereInput
  }

  export type RuleUpdateToOneWithWhereWithoutModesInput = {
    where?: RuleWhereInput
    data: XOR<RuleUpdateWithoutModesInput, RuleUncheckedUpdateWithoutModesInput>
  }

  export type RuleUpdateWithoutModesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RuleUncheckedUpdateWithoutModesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModeUpsertWithoutRulesInput = {
    update: XOR<ModeUpdateWithoutRulesInput, ModeUncheckedUpdateWithoutRulesInput>
    create: XOR<ModeCreateWithoutRulesInput, ModeUncheckedCreateWithoutRulesInput>
    where?: ModeWhereInput
  }

  export type ModeUpdateToOneWithWhereWithoutRulesInput = {
    where?: ModeWhereInput
    data: XOR<ModeUpdateWithoutRulesInput, ModeUncheckedUpdateWithoutRulesInput>
  }

  export type ModeUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    fessMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModeUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    fessMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonCreateWithoutStageInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUncheckedCreateWithoutStageInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonCreateOrConnectWithoutStageInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutStageInput, SeasonUncheckedCreateWithoutStageInput>
  }

  export type SeasonUpsertWithoutStageInput = {
    update: XOR<SeasonUpdateWithoutStageInput, SeasonUncheckedUpdateWithoutStageInput>
    create: XOR<SeasonCreateWithoutStageInput, SeasonUncheckedCreateWithoutStageInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutStageInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutStageInput, SeasonUncheckedUpdateWithoutStageInput>
  }

  export type SeasonUpdateWithoutStageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutStageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonCreateWithoutSpecialWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUncheckedCreateWithoutSpecialWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonCreateOrConnectWithoutSpecialWeaponInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutSpecialWeaponInput, SeasonUncheckedCreateWithoutSpecialWeaponInput>
  }

  export type WeaponCreateWithoutSpecialWeaponInput = {
    id: number
    name: string
    mainWeapon: MainWeaponCreateNestedOneWithoutWeaponInput
    subWeapon: SubWeaponCreateNestedOneWithoutWeaponInput
    weaponType: WeaponTypeCreateNestedOneWithoutWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutSpecialWeaponInput = {
    id: number
    name: string
    subWeaponId: number
    seasonId: number
    weaponTypeId: number
    mainWeaponId: number
  }

  export type WeaponCreateOrConnectWithoutSpecialWeaponInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutSpecialWeaponInput, WeaponUncheckedCreateWithoutSpecialWeaponInput>
  }

  export type SeasonUpsertWithoutSpecialWeaponInput = {
    update: XOR<SeasonUpdateWithoutSpecialWeaponInput, SeasonUncheckedUpdateWithoutSpecialWeaponInput>
    create: XOR<SeasonCreateWithoutSpecialWeaponInput, SeasonUncheckedCreateWithoutSpecialWeaponInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutSpecialWeaponInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutSpecialWeaponInput, SeasonUncheckedUpdateWithoutSpecialWeaponInput>
  }

  export type SeasonUpdateWithoutSpecialWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutSpecialWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type WeaponUpsertWithWhereUniqueWithoutSpecialWeaponInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutSpecialWeaponInput, WeaponUncheckedUpdateWithoutSpecialWeaponInput>
    create: XOR<WeaponCreateWithoutSpecialWeaponInput, WeaponUncheckedCreateWithoutSpecialWeaponInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutSpecialWeaponInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutSpecialWeaponInput, WeaponUncheckedUpdateWithoutSpecialWeaponInput>
  }

  export type WeaponUpdateManyWithWhereWithoutSpecialWeaponInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutSpecialWeaponInput>
  }

  export type WeaponScalarWhereInput = {
    AND?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
    OR?: WeaponScalarWhereInput[]
    NOT?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
    id?: IntFilter<"Weapon"> | number
    name?: StringFilter<"Weapon"> | string
    subWeaponId?: IntFilter<"Weapon"> | number
    specialWeaponId?: IntFilter<"Weapon"> | number
    seasonId?: IntFilter<"Weapon"> | number
    weaponTypeId?: IntFilter<"Weapon"> | number
    mainWeaponId?: IntFilter<"Weapon"> | number
  }

  export type WeaponCreateWithoutWeaponTypeInput = {
    id: number
    name: string
    mainWeapon: MainWeaponCreateNestedOneWithoutWeaponInput
    subWeapon: SubWeaponCreateNestedOneWithoutWeaponInput
    specialWeapon: SpecialWeaponCreateNestedOneWithoutWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutWeaponTypeInput = {
    id: number
    name: string
    subWeaponId: number
    specialWeaponId: number
    seasonId: number
    mainWeaponId: number
  }

  export type WeaponCreateOrConnectWithoutWeaponTypeInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutWeaponTypeInput, WeaponUncheckedCreateWithoutWeaponTypeInput>
  }

  export type MainWeaponCreateWithoutWeaponTypeInput = {
    id: number
    name: string
    releaseSeason: SeasonCreateNestedOneWithoutMainWeaponInput
    Weapon?: WeaponCreateNestedManyWithoutMainWeaponInput
  }

  export type MainWeaponUncheckedCreateWithoutWeaponTypeInput = {
    id: number
    name: string
    seasonId: number
    Weapon?: WeaponUncheckedCreateNestedManyWithoutMainWeaponInput
  }

  export type MainWeaponCreateOrConnectWithoutWeaponTypeInput = {
    where: MainWeaponWhereUniqueInput
    create: XOR<MainWeaponCreateWithoutWeaponTypeInput, MainWeaponUncheckedCreateWithoutWeaponTypeInput>
  }

  export type WeaponUpsertWithWhereUniqueWithoutWeaponTypeInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutWeaponTypeInput, WeaponUncheckedUpdateWithoutWeaponTypeInput>
    create: XOR<WeaponCreateWithoutWeaponTypeInput, WeaponUncheckedCreateWithoutWeaponTypeInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutWeaponTypeInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutWeaponTypeInput, WeaponUncheckedUpdateWithoutWeaponTypeInput>
  }

  export type WeaponUpdateManyWithWhereWithoutWeaponTypeInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutWeaponTypeInput>
  }

  export type MainWeaponUpsertWithWhereUniqueWithoutWeaponTypeInput = {
    where: MainWeaponWhereUniqueInput
    update: XOR<MainWeaponUpdateWithoutWeaponTypeInput, MainWeaponUncheckedUpdateWithoutWeaponTypeInput>
    create: XOR<MainWeaponCreateWithoutWeaponTypeInput, MainWeaponUncheckedCreateWithoutWeaponTypeInput>
  }

  export type MainWeaponUpdateWithWhereUniqueWithoutWeaponTypeInput = {
    where: MainWeaponWhereUniqueInput
    data: XOR<MainWeaponUpdateWithoutWeaponTypeInput, MainWeaponUncheckedUpdateWithoutWeaponTypeInput>
  }

  export type MainWeaponUpdateManyWithWhereWithoutWeaponTypeInput = {
    where: MainWeaponScalarWhereInput
    data: XOR<MainWeaponUpdateManyMutationInput, MainWeaponUncheckedUpdateManyWithoutWeaponTypeInput>
  }

  export type MainWeaponScalarWhereInput = {
    AND?: MainWeaponScalarWhereInput | MainWeaponScalarWhereInput[]
    OR?: MainWeaponScalarWhereInput[]
    NOT?: MainWeaponScalarWhereInput | MainWeaponScalarWhereInput[]
    id?: IntFilter<"MainWeapon"> | number
    name?: StringFilter<"MainWeapon"> | string
    seasonId?: IntFilter<"MainWeapon"> | number
    weaponTypeId?: IntFilter<"MainWeapon"> | number
  }

  export type SeasonCreateWithoutSubWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUncheckedCreateWithoutSubWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonCreateOrConnectWithoutSubWeaponInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutSubWeaponInput, SeasonUncheckedCreateWithoutSubWeaponInput>
  }

  export type WeaponCreateWithoutSubWeaponInput = {
    id: number
    name: string
    mainWeapon: MainWeaponCreateNestedOneWithoutWeaponInput
    specialWeapon: SpecialWeaponCreateNestedOneWithoutWeaponInput
    weaponType: WeaponTypeCreateNestedOneWithoutWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutSubWeaponInput = {
    id: number
    name: string
    specialWeaponId: number
    seasonId: number
    weaponTypeId: number
    mainWeaponId: number
  }

  export type WeaponCreateOrConnectWithoutSubWeaponInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutSubWeaponInput, WeaponUncheckedCreateWithoutSubWeaponInput>
  }

  export type SeasonUpsertWithoutSubWeaponInput = {
    update: XOR<SeasonUpdateWithoutSubWeaponInput, SeasonUncheckedUpdateWithoutSubWeaponInput>
    create: XOR<SeasonCreateWithoutSubWeaponInput, SeasonUncheckedCreateWithoutSubWeaponInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutSubWeaponInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutSubWeaponInput, SeasonUncheckedUpdateWithoutSubWeaponInput>
  }

  export type SeasonUpdateWithoutSubWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutSubWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type WeaponUpsertWithWhereUniqueWithoutSubWeaponInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutSubWeaponInput, WeaponUncheckedUpdateWithoutSubWeaponInput>
    create: XOR<WeaponCreateWithoutSubWeaponInput, WeaponUncheckedCreateWithoutSubWeaponInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutSubWeaponInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutSubWeaponInput, WeaponUncheckedUpdateWithoutSubWeaponInput>
  }

  export type WeaponUpdateManyWithWhereWithoutSubWeaponInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutSubWeaponInput>
  }

  export type WeaponTypeCreateWithoutMainWeaponInput = {
    id: number
    name: string
    Weapon?: WeaponCreateNestedManyWithoutWeaponTypeInput
  }

  export type WeaponTypeUncheckedCreateWithoutMainWeaponInput = {
    id: number
    name: string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutWeaponTypeInput
  }

  export type WeaponTypeCreateOrConnectWithoutMainWeaponInput = {
    where: WeaponTypeWhereUniqueInput
    create: XOR<WeaponTypeCreateWithoutMainWeaponInput, WeaponTypeUncheckedCreateWithoutMainWeaponInput>
  }

  export type SeasonCreateWithoutMainWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUncheckedCreateWithoutMainWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    Stage?: StageUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonCreateOrConnectWithoutMainWeaponInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutMainWeaponInput, SeasonUncheckedCreateWithoutMainWeaponInput>
  }

  export type WeaponCreateWithoutMainWeaponInput = {
    id: number
    name: string
    subWeapon: SubWeaponCreateNestedOneWithoutWeaponInput
    specialWeapon: SpecialWeaponCreateNestedOneWithoutWeaponInput
    weaponType: WeaponTypeCreateNestedOneWithoutWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutMainWeaponInput = {
    id: number
    name: string
    subWeaponId: number
    specialWeaponId: number
    seasonId: number
    weaponTypeId: number
  }

  export type WeaponCreateOrConnectWithoutMainWeaponInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutMainWeaponInput, WeaponUncheckedCreateWithoutMainWeaponInput>
  }

  export type WeaponTypeUpsertWithoutMainWeaponInput = {
    update: XOR<WeaponTypeUpdateWithoutMainWeaponInput, WeaponTypeUncheckedUpdateWithoutMainWeaponInput>
    create: XOR<WeaponTypeCreateWithoutMainWeaponInput, WeaponTypeUncheckedCreateWithoutMainWeaponInput>
    where?: WeaponTypeWhereInput
  }

  export type WeaponTypeUpdateToOneWithWhereWithoutMainWeaponInput = {
    where?: WeaponTypeWhereInput
    data: XOR<WeaponTypeUpdateWithoutMainWeaponInput, WeaponTypeUncheckedUpdateWithoutMainWeaponInput>
  }

  export type WeaponTypeUpdateWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUpdateManyWithoutWeaponTypeNestedInput
  }

  export type WeaponTypeUncheckedUpdateWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUncheckedUpdateManyWithoutWeaponTypeNestedInput
  }

  export type SeasonUpsertWithoutMainWeaponInput = {
    update: XOR<SeasonUpdateWithoutMainWeaponInput, SeasonUncheckedUpdateWithoutMainWeaponInput>
    create: XOR<SeasonCreateWithoutMainWeaponInput, SeasonUncheckedCreateWithoutMainWeaponInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutMainWeaponInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutMainWeaponInput, SeasonUncheckedUpdateWithoutMainWeaponInput>
  }

  export type SeasonUpdateWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Weapon?: WeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    Stage?: StageUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type WeaponUpsertWithWhereUniqueWithoutMainWeaponInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutMainWeaponInput, WeaponUncheckedUpdateWithoutMainWeaponInput>
    create: XOR<WeaponCreateWithoutMainWeaponInput, WeaponUncheckedCreateWithoutMainWeaponInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutMainWeaponInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutMainWeaponInput, WeaponUncheckedUpdateWithoutMainWeaponInput>
  }

  export type WeaponUpdateManyWithWhereWithoutMainWeaponInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutMainWeaponInput>
  }

  export type MainWeaponCreateWithoutWeaponInput = {
    id: number
    name: string
    weaponType: WeaponTypeCreateNestedOneWithoutMainWeaponInput
    releaseSeason: SeasonCreateNestedOneWithoutMainWeaponInput
  }

  export type MainWeaponUncheckedCreateWithoutWeaponInput = {
    id: number
    name: string
    seasonId: number
    weaponTypeId: number
  }

  export type MainWeaponCreateOrConnectWithoutWeaponInput = {
    where: MainWeaponWhereUniqueInput
    create: XOR<MainWeaponCreateWithoutWeaponInput, MainWeaponUncheckedCreateWithoutWeaponInput>
  }

  export type SubWeaponCreateWithoutWeaponInput = {
    id: number
    name: string
    releaseSeason: SeasonCreateNestedOneWithoutSubWeaponInput
  }

  export type SubWeaponUncheckedCreateWithoutWeaponInput = {
    id: number
    name: string
    seasonId: number
  }

  export type SubWeaponCreateOrConnectWithoutWeaponInput = {
    where: SubWeaponWhereUniqueInput
    create: XOR<SubWeaponCreateWithoutWeaponInput, SubWeaponUncheckedCreateWithoutWeaponInput>
  }

  export type SpecialWeaponCreateWithoutWeaponInput = {
    id: number
    name: string
    releaseSeason: SeasonCreateNestedOneWithoutSpecialWeaponInput
  }

  export type SpecialWeaponUncheckedCreateWithoutWeaponInput = {
    id: number
    name: string
    seasonId: number
  }

  export type SpecialWeaponCreateOrConnectWithoutWeaponInput = {
    where: SpecialWeaponWhereUniqueInput
    create: XOR<SpecialWeaponCreateWithoutWeaponInput, SpecialWeaponUncheckedCreateWithoutWeaponInput>
  }

  export type WeaponTypeCreateWithoutWeaponInput = {
    id: number
    name: string
    MainWeapon?: MainWeaponCreateNestedManyWithoutWeaponTypeInput
  }

  export type WeaponTypeUncheckedCreateWithoutWeaponInput = {
    id: number
    name: string
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutWeaponTypeInput
  }

  export type WeaponTypeCreateOrConnectWithoutWeaponInput = {
    where: WeaponTypeWhereUniqueInput
    create: XOR<WeaponTypeCreateWithoutWeaponInput, WeaponTypeUncheckedCreateWithoutWeaponInput>
  }

  export type SeasonCreateWithoutWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Stage?: StageCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonUncheckedCreateWithoutWeaponInput = {
    id: number
    name: string
    startDate: Date | string
    endDate: Date | string
    Stage?: StageUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SpecialWeapon?: SpecialWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    SubWeapon?: SubWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
    MainWeapon?: MainWeaponUncheckedCreateNestedManyWithoutReleaseSeasonInput
  }

  export type SeasonCreateOrConnectWithoutWeaponInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutWeaponInput, SeasonUncheckedCreateWithoutWeaponInput>
  }

  export type MainWeaponUpsertWithoutWeaponInput = {
    update: XOR<MainWeaponUpdateWithoutWeaponInput, MainWeaponUncheckedUpdateWithoutWeaponInput>
    create: XOR<MainWeaponCreateWithoutWeaponInput, MainWeaponUncheckedCreateWithoutWeaponInput>
    where?: MainWeaponWhereInput
  }

  export type MainWeaponUpdateToOneWithWhereWithoutWeaponInput = {
    where?: MainWeaponWhereInput
    data: XOR<MainWeaponUpdateWithoutWeaponInput, MainWeaponUncheckedUpdateWithoutWeaponInput>
  }

  export type MainWeaponUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weaponType?: WeaponTypeUpdateOneRequiredWithoutMainWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutMainWeaponNestedInput
  }

  export type MainWeaponUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type SubWeaponUpsertWithoutWeaponInput = {
    update: XOR<SubWeaponUpdateWithoutWeaponInput, SubWeaponUncheckedUpdateWithoutWeaponInput>
    create: XOR<SubWeaponCreateWithoutWeaponInput, SubWeaponUncheckedCreateWithoutWeaponInput>
    where?: SubWeaponWhereInput
  }

  export type SubWeaponUpdateToOneWithWhereWithoutWeaponInput = {
    where?: SubWeaponWhereInput
    data: XOR<SubWeaponUpdateWithoutWeaponInput, SubWeaponUncheckedUpdateWithoutWeaponInput>
  }

  export type SubWeaponUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseSeason?: SeasonUpdateOneRequiredWithoutSubWeaponNestedInput
  }

  export type SubWeaponUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialWeaponUpsertWithoutWeaponInput = {
    update: XOR<SpecialWeaponUpdateWithoutWeaponInput, SpecialWeaponUncheckedUpdateWithoutWeaponInput>
    create: XOR<SpecialWeaponCreateWithoutWeaponInput, SpecialWeaponUncheckedCreateWithoutWeaponInput>
    where?: SpecialWeaponWhereInput
  }

  export type SpecialWeaponUpdateToOneWithWhereWithoutWeaponInput = {
    where?: SpecialWeaponWhereInput
    data: XOR<SpecialWeaponUpdateWithoutWeaponInput, SpecialWeaponUncheckedUpdateWithoutWeaponInput>
  }

  export type SpecialWeaponUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseSeason?: SeasonUpdateOneRequiredWithoutSpecialWeaponNestedInput
  }

  export type SpecialWeaponUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponTypeUpsertWithoutWeaponInput = {
    update: XOR<WeaponTypeUpdateWithoutWeaponInput, WeaponTypeUncheckedUpdateWithoutWeaponInput>
    create: XOR<WeaponTypeCreateWithoutWeaponInput, WeaponTypeUncheckedCreateWithoutWeaponInput>
    where?: WeaponTypeWhereInput
  }

  export type WeaponTypeUpdateToOneWithWhereWithoutWeaponInput = {
    where?: WeaponTypeWhereInput
    data: XOR<WeaponTypeUpdateWithoutWeaponInput, WeaponTypeUncheckedUpdateWithoutWeaponInput>
  }

  export type WeaponTypeUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    MainWeapon?: MainWeaponUpdateManyWithoutWeaponTypeNestedInput
  }

  export type WeaponTypeUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutWeaponTypeNestedInput
  }

  export type SeasonUpsertWithoutWeaponInput = {
    update: XOR<SeasonUpdateWithoutWeaponInput, SeasonUncheckedUpdateWithoutWeaponInput>
    create: XOR<SeasonCreateWithoutWeaponInput, SeasonUncheckedCreateWithoutWeaponInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutWeaponInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutWeaponInput, SeasonUncheckedUpdateWithoutWeaponInput>
  }

  export type SeasonUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Stage?: StageUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Stage?: StageUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SpecialWeapon?: SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    SubWeapon?: SubWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
    MainWeapon?: MainWeaponUncheckedUpdateManyWithoutReleaseSeasonNestedInput
  }

  export type WeaponCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    mainWeapon: MainWeaponCreateNestedOneWithoutWeaponInput
    subWeapon: SubWeaponCreateNestedOneWithoutWeaponInput
    specialWeapon: SpecialWeaponCreateNestedOneWithoutWeaponInput
    weaponType: WeaponTypeCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    subWeaponId: number
    specialWeaponId: number
    weaponTypeId: number
    mainWeaponId: number
  }

  export type WeaponCreateOrConnectWithoutReleaseSeasonInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutReleaseSeasonInput, WeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type StageCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
  }

  export type StageUncheckedCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
  }

  export type StageCreateOrConnectWithoutReleaseSeasonInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutReleaseSeasonInput, StageUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type SpecialWeaponCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    Weapon?: WeaponCreateNestedManyWithoutSpecialWeaponInput
  }

  export type SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutSpecialWeaponInput
  }

  export type SpecialWeaponCreateOrConnectWithoutReleaseSeasonInput = {
    where: SpecialWeaponWhereUniqueInput
    create: XOR<SpecialWeaponCreateWithoutReleaseSeasonInput, SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type SubWeaponCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    Weapon?: WeaponCreateNestedManyWithoutSubWeaponInput
  }

  export type SubWeaponUncheckedCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    Weapon?: WeaponUncheckedCreateNestedManyWithoutSubWeaponInput
  }

  export type SubWeaponCreateOrConnectWithoutReleaseSeasonInput = {
    where: SubWeaponWhereUniqueInput
    create: XOR<SubWeaponCreateWithoutReleaseSeasonInput, SubWeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type MainWeaponCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    weaponType: WeaponTypeCreateNestedOneWithoutMainWeaponInput
    Weapon?: WeaponCreateNestedManyWithoutMainWeaponInput
  }

  export type MainWeaponUncheckedCreateWithoutReleaseSeasonInput = {
    id: number
    name: string
    weaponTypeId: number
    Weapon?: WeaponUncheckedCreateNestedManyWithoutMainWeaponInput
  }

  export type MainWeaponCreateOrConnectWithoutReleaseSeasonInput = {
    where: MainWeaponWhereUniqueInput
    create: XOR<MainWeaponCreateWithoutReleaseSeasonInput, MainWeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type WeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutReleaseSeasonInput, WeaponUncheckedUpdateWithoutReleaseSeasonInput>
    create: XOR<WeaponCreateWithoutReleaseSeasonInput, WeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutReleaseSeasonInput, WeaponUncheckedUpdateWithoutReleaseSeasonInput>
  }

  export type WeaponUpdateManyWithWhereWithoutReleaseSeasonInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutReleaseSeasonInput>
  }

  export type StageUpsertWithWhereUniqueWithoutReleaseSeasonInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutReleaseSeasonInput, StageUncheckedUpdateWithoutReleaseSeasonInput>
    create: XOR<StageCreateWithoutReleaseSeasonInput, StageUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type StageUpdateWithWhereUniqueWithoutReleaseSeasonInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutReleaseSeasonInput, StageUncheckedUpdateWithoutReleaseSeasonInput>
  }

  export type StageUpdateManyWithWhereWithoutReleaseSeasonInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutReleaseSeasonInput>
  }

  export type StageScalarWhereInput = {
    AND?: StageScalarWhereInput | StageScalarWhereInput[]
    OR?: StageScalarWhereInput[]
    NOT?: StageScalarWhereInput | StageScalarWhereInput[]
    id?: IntFilter<"Stage"> | number
    name?: StringFilter<"Stage"> | string
    seasonId?: IntFilter<"Stage"> | number
  }

  export type SpecialWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput = {
    where: SpecialWeaponWhereUniqueInput
    update: XOR<SpecialWeaponUpdateWithoutReleaseSeasonInput, SpecialWeaponUncheckedUpdateWithoutReleaseSeasonInput>
    create: XOR<SpecialWeaponCreateWithoutReleaseSeasonInput, SpecialWeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type SpecialWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput = {
    where: SpecialWeaponWhereUniqueInput
    data: XOR<SpecialWeaponUpdateWithoutReleaseSeasonInput, SpecialWeaponUncheckedUpdateWithoutReleaseSeasonInput>
  }

  export type SpecialWeaponUpdateManyWithWhereWithoutReleaseSeasonInput = {
    where: SpecialWeaponScalarWhereInput
    data: XOR<SpecialWeaponUpdateManyMutationInput, SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonInput>
  }

  export type SpecialWeaponScalarWhereInput = {
    AND?: SpecialWeaponScalarWhereInput | SpecialWeaponScalarWhereInput[]
    OR?: SpecialWeaponScalarWhereInput[]
    NOT?: SpecialWeaponScalarWhereInput | SpecialWeaponScalarWhereInput[]
    id?: IntFilter<"SpecialWeapon"> | number
    name?: StringFilter<"SpecialWeapon"> | string
    seasonId?: IntFilter<"SpecialWeapon"> | number
  }

  export type SubWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput = {
    where: SubWeaponWhereUniqueInput
    update: XOR<SubWeaponUpdateWithoutReleaseSeasonInput, SubWeaponUncheckedUpdateWithoutReleaseSeasonInput>
    create: XOR<SubWeaponCreateWithoutReleaseSeasonInput, SubWeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type SubWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput = {
    where: SubWeaponWhereUniqueInput
    data: XOR<SubWeaponUpdateWithoutReleaseSeasonInput, SubWeaponUncheckedUpdateWithoutReleaseSeasonInput>
  }

  export type SubWeaponUpdateManyWithWhereWithoutReleaseSeasonInput = {
    where: SubWeaponScalarWhereInput
    data: XOR<SubWeaponUpdateManyMutationInput, SubWeaponUncheckedUpdateManyWithoutReleaseSeasonInput>
  }

  export type SubWeaponScalarWhereInput = {
    AND?: SubWeaponScalarWhereInput | SubWeaponScalarWhereInput[]
    OR?: SubWeaponScalarWhereInput[]
    NOT?: SubWeaponScalarWhereInput | SubWeaponScalarWhereInput[]
    id?: IntFilter<"SubWeapon"> | number
    name?: StringFilter<"SubWeapon"> | string
    seasonId?: IntFilter<"SubWeapon"> | number
  }

  export type MainWeaponUpsertWithWhereUniqueWithoutReleaseSeasonInput = {
    where: MainWeaponWhereUniqueInput
    update: XOR<MainWeaponUpdateWithoutReleaseSeasonInput, MainWeaponUncheckedUpdateWithoutReleaseSeasonInput>
    create: XOR<MainWeaponCreateWithoutReleaseSeasonInput, MainWeaponUncheckedCreateWithoutReleaseSeasonInput>
  }

  export type MainWeaponUpdateWithWhereUniqueWithoutReleaseSeasonInput = {
    where: MainWeaponWhereUniqueInput
    data: XOR<MainWeaponUpdateWithoutReleaseSeasonInput, MainWeaponUncheckedUpdateWithoutReleaseSeasonInput>
  }

  export type MainWeaponUpdateManyWithWhereWithoutReleaseSeasonInput = {
    where: MainWeaponScalarWhereInput
    data: XOR<MainWeaponUpdateManyMutationInput, MainWeaponUncheckedUpdateManyWithoutReleaseSeasonInput>
  }

  export type ModeOnRuleUpdateWithoutRuleInput = {
    mode?: ModeUpdateOneRequiredWithoutRulesNestedInput
  }

  export type ModeOnRuleUncheckedUpdateWithoutRuleInput = {
    modeId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeOnRuleUncheckedUpdateManyWithoutRuleInput = {
    modeId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeOnRuleUpdateWithoutModeInput = {
    rule?: RuleUpdateOneRequiredWithoutModesNestedInput
  }

  export type ModeOnRuleUncheckedUpdateWithoutModeInput = {
    ruleId?: IntFieldUpdateOperationsInput | number
  }

  export type ModeOnRuleUncheckedUpdateManyWithoutModeInput = {
    ruleId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUpdateWithoutSpecialWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mainWeapon?: MainWeaponUpdateOneRequiredWithoutWeaponNestedInput
    subWeapon?: SubWeaponUpdateOneRequiredWithoutWeaponNestedInput
    weaponType?: WeaponTypeUpdateOneRequiredWithoutWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutSpecialWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUncheckedUpdateManyWithoutSpecialWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUpdateWithoutWeaponTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mainWeapon?: MainWeaponUpdateOneRequiredWithoutWeaponNestedInput
    subWeapon?: SubWeaponUpdateOneRequiredWithoutWeaponNestedInput
    specialWeapon?: SpecialWeaponUpdateOneRequiredWithoutWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutWeaponTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUncheckedUpdateManyWithoutWeaponTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type MainWeaponUpdateWithoutWeaponTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseSeason?: SeasonUpdateOneRequiredWithoutMainWeaponNestedInput
    Weapon?: WeaponUpdateManyWithoutMainWeaponNestedInput
  }

  export type MainWeaponUncheckedUpdateWithoutWeaponTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
    Weapon?: WeaponUncheckedUpdateManyWithoutMainWeaponNestedInput
  }

  export type MainWeaponUncheckedUpdateManyWithoutWeaponTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUpdateWithoutSubWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mainWeapon?: MainWeaponUpdateOneRequiredWithoutWeaponNestedInput
    specialWeapon?: SpecialWeaponUpdateOneRequiredWithoutWeaponNestedInput
    weaponType?: WeaponTypeUpdateOneRequiredWithoutWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutSubWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUncheckedUpdateManyWithoutSubWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUpdateWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeapon?: SubWeaponUpdateOneRequiredWithoutWeaponNestedInput
    specialWeapon?: SpecialWeaponUpdateOneRequiredWithoutWeaponNestedInput
    weaponType?: WeaponTypeUpdateOneRequiredWithoutWeaponNestedInput
    releaseSeason?: SeasonUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUncheckedUpdateManyWithoutMainWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    seasonId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mainWeapon?: MainWeaponUpdateOneRequiredWithoutWeaponNestedInput
    subWeapon?: SubWeaponUpdateOneRequiredWithoutWeaponNestedInput
    specialWeapon?: SpecialWeaponUpdateOneRequiredWithoutWeaponNestedInput
    weaponType?: WeaponTypeUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponUncheckedUpdateManyWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subWeaponId?: IntFieldUpdateOperationsInput | number
    specialWeaponId?: IntFieldUpdateOperationsInput | number
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    mainWeaponId?: IntFieldUpdateOperationsInput | number
  }

  export type StageUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StageUncheckedUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StageUncheckedUpdateManyWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialWeaponUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUpdateManyWithoutSpecialWeaponNestedInput
  }

  export type SpecialWeaponUncheckedUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUncheckedUpdateManyWithoutSpecialWeaponNestedInput
  }

  export type SpecialWeaponUncheckedUpdateManyWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubWeaponUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUpdateManyWithoutSubWeaponNestedInput
  }

  export type SubWeaponUncheckedUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Weapon?: WeaponUncheckedUpdateManyWithoutSubWeaponNestedInput
  }

  export type SubWeaponUncheckedUpdateManyWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MainWeaponUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weaponType?: WeaponTypeUpdateOneRequiredWithoutMainWeaponNestedInput
    Weapon?: WeaponUpdateManyWithoutMainWeaponNestedInput
  }

  export type MainWeaponUncheckedUpdateWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weaponTypeId?: IntFieldUpdateOperationsInput | number
    Weapon?: WeaponUncheckedUpdateManyWithoutMainWeaponNestedInput
  }

  export type MainWeaponUncheckedUpdateManyWithoutReleaseSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weaponTypeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RuleCountOutputTypeDefaultArgs instead
     */
    export type RuleCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = RuleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModeCountOutputTypeDefaultArgs instead
     */
    export type ModeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ModeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialWeaponCountOutputTypeDefaultArgs instead
     */
    export type SpecialWeaponCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SpecialWeaponCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeaponTypeCountOutputTypeDefaultArgs instead
     */
    export type WeaponTypeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = WeaponTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubWeaponCountOutputTypeDefaultArgs instead
     */
    export type SubWeaponCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SubWeaponCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MainWeaponCountOutputTypeDefaultArgs instead
     */
    export type MainWeaponCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MainWeaponCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeasonCountOutputTypeDefaultArgs instead
     */
    export type SeasonCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SeasonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RuleDefaultArgs instead
     */
    export type RuleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = RuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModeDefaultArgs instead
     */
    export type ModeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ModeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModeOnRuleDefaultArgs instead
     */
    export type ModeOnRuleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ModeOnRuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StageDefaultArgs instead
     */
    export type StageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = StageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialWeaponDefaultArgs instead
     */
    export type SpecialWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SpecialWeaponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeaponTypeDefaultArgs instead
     */
    export type WeaponTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = WeaponTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubWeaponDefaultArgs instead
     */
    export type SubWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SubWeaponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MainWeaponDefaultArgs instead
     */
    export type MainWeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MainWeaponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeaponDefaultArgs instead
     */
    export type WeaponArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = WeaponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeasonDefaultArgs instead
     */
    export type SeasonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SeasonDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}