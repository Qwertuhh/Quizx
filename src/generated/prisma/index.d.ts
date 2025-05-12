
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuestionAndAnswer
 * 
 */
export type QuestionAndAnswer = $Result.DefaultSelection<Prisma.$QuestionAndAnswerPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model UserAnswers
 * 
 */
export type UserAnswers = $Result.DefaultSelection<Prisma.$UserAnswersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionType: {
  MCQ_SINGLE: 'MCQ_SINGLE',
  MCQ_MULTI: 'MCQ_MULTI',
  TRUE_FALSE: 'TRUE_FALSE',
  SHORT_ANSWER: 'SHORT_ANSWER',
  NUMERICAL: 'NUMERICAL'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const QuizResultState: {
  IN_PROGRESS: 'IN_PROGRESS',
  HOST_ONLY: 'HOST_ONLY',
  OPEN_TO_ALL: 'OPEN_TO_ALL'
};

export type QuizResultState = (typeof QuizResultState)[keyof typeof QuizResultState]

}

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type QuizResultState = $Enums.QuizResultState

export const QuizResultState: typeof $Enums.QuizResultState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionAndAnswer`: Exposes CRUD operations for the **QuestionAndAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionAndAnswers
    * const questionAndAnswers = await prisma.questionAndAnswer.findMany()
    * ```
    */
  get questionAndAnswer(): Prisma.QuestionAndAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAnswers`: Exposes CRUD operations for the **UserAnswers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnswers
    * const userAnswers = await prisma.userAnswers.findMany()
    * ```
    */
  get userAnswers(): Prisma.UserAnswersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Quiz: 'Quiz',
    QuestionAndAnswer: 'QuestionAndAnswer',
    Answer: 'Answer',
    UserAnswers: 'UserAnswers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "quiz" | "questionAndAnswer" | "answer" | "userAnswers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuestionAndAnswer: {
        payload: Prisma.$QuestionAndAnswerPayload<ExtArgs>
        fields: Prisma.QuestionAndAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionAndAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionAndAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>
          }
          findFirst: {
            args: Prisma.QuestionAndAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionAndAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>
          }
          findMany: {
            args: Prisma.QuestionAndAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>[]
          }
          create: {
            args: Prisma.QuestionAndAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>
          }
          createMany: {
            args: Prisma.QuestionAndAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionAndAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>[]
          }
          delete: {
            args: Prisma.QuestionAndAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>
          }
          update: {
            args: Prisma.QuestionAndAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>
          }
          deleteMany: {
            args: Prisma.QuestionAndAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionAndAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionAndAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>[]
          }
          upsert: {
            args: Prisma.QuestionAndAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAndAnswerPayload>
          }
          aggregate: {
            args: Prisma.QuestionAndAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionAndAnswer>
          }
          groupBy: {
            args: Prisma.QuestionAndAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionAndAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionAndAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionAndAnswerCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      UserAnswers: {
        payload: Prisma.$UserAnswersPayload<ExtArgs>
        fields: Prisma.UserAnswersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnswersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnswersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          findFirst: {
            args: Prisma.UserAnswersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnswersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          findMany: {
            args: Prisma.UserAnswersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          create: {
            args: Prisma.UserAnswersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          createMany: {
            args: Prisma.UserAnswersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAnswersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          delete: {
            args: Prisma.UserAnswersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          update: {
            args: Prisma.UserAnswersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          deleteMany: {
            args: Prisma.UserAnswersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnswersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAnswersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          upsert: {
            args: Prisma.UserAnswersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          aggregate: {
            args: Prisma.UserAnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnswers>
          }
          groupBy: {
            args: Prisma.UserAnswersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnswersCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnswersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    quiz?: QuizOmit
    questionAndAnswer?: QuestionAndAnswerOmit
    answer?: AnswerOmit
    userAnswers?: UserAnswersOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hostedQuizzes: number
    userAnswers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostedQuizzes?: boolean | UserCountOutputTypeCountHostedQuizzesArgs
    userAnswers?: boolean | UserCountOutputTypeCountUserAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostedQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    userAnswers: number
    QuestionAndAnswer: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnswers?: boolean | QuizCountOutputTypeCountUserAnswersArgs
    QuestionAndAnswer?: boolean | QuizCountOutputTypeCountQuestionAndAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionAndAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAndAnswerWhereInput
  }


  /**
   * Count Type UserAnswersCountOutputType
   */

  export type UserAnswersCountOutputType = {
    answers: number
  }

  export type UserAnswersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UserAnswersCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserAnswersCountOutputType without action
   */
  export type UserAnswersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswersCountOutputType
     */
    select?: UserAnswersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserAnswersCountOutputType without action
   */
  export type UserAnswersCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    hostedQuizzes?: boolean | User$hostedQuizzesArgs<ExtArgs>
    userAnswers?: boolean | User$userAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostedQuizzes?: boolean | User$hostedQuizzesArgs<ExtArgs>
    userAnswers?: boolean | User$userAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hostedQuizzes: Prisma.$QuizPayload<ExtArgs>[]
      userAnswers: Prisma.$UserAnswersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostedQuizzes<T extends User$hostedQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$hostedQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAnswers<T extends User$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, User$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hostedQuizzes
   */
  export type User$hostedQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * User.userAnswers
   */
  export type User$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    level: number | null
  }

  export type QuizSumAggregateOutputType = {
    level: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    resultState: $Enums.QuizResultState | null
    createdAt: Date | null
    updatedAt: Date | null
    hostId: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    resultState: $Enums.QuizResultState | null
    createdAt: Date | null
    updatedAt: Date | null
    hostId: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    name: number
    level: number
    topics: number
    resultState: number
    createdAt: number
    updatedAt: number
    hostId: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    level?: true
  }

  export type QuizSumAggregateInputType = {
    level?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    resultState?: true
    createdAt?: true
    updatedAt?: true
    hostId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    resultState?: true
    createdAt?: true
    updatedAt?: true
    hostId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    topics?: true
    resultState?: true
    createdAt?: true
    updatedAt?: true
    hostId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    name: string
    level: number
    topics: string[]
    resultState: $Enums.QuizResultState
    createdAt: Date
    updatedAt: Date
    hostId: string
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    topics?: boolean
    resultState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    userAnswers?: boolean | Quiz$userAnswersArgs<ExtArgs>
    QuestionAndAnswer?: boolean | Quiz$QuestionAndAnswerArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    topics?: boolean
    resultState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    topics?: boolean
    resultState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    topics?: boolean
    resultState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "topics" | "resultState" | "createdAt" | "updatedAt" | "hostId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    userAnswers?: boolean | Quiz$userAnswersArgs<ExtArgs>
    QuestionAndAnswer?: boolean | Quiz$QuestionAndAnswerArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      userAnswers: Prisma.$UserAnswersPayload<ExtArgs>[]
      QuestionAndAnswer: Prisma.$QuestionAndAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: number
      topics: string[]
      resultState: $Enums.QuizResultState
      createdAt: Date
      updatedAt: Date
      hostId: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userAnswers<T extends Quiz$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    QuestionAndAnswer<T extends Quiz$QuestionAndAnswerArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$QuestionAndAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly name: FieldRef<"Quiz", 'String'>
    readonly level: FieldRef<"Quiz", 'Int'>
    readonly topics: FieldRef<"Quiz", 'String[]'>
    readonly resultState: FieldRef<"Quiz", 'QuizResultState'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
    readonly hostId: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.userAnswers
   */
  export type Quiz$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * Quiz.QuestionAndAnswer
   */
  export type Quiz$QuestionAndAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    where?: QuestionAndAnswerWhereInput
    orderBy?: QuestionAndAnswerOrderByWithRelationInput | QuestionAndAnswerOrderByWithRelationInput[]
    cursor?: QuestionAndAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAndAnswerScalarFieldEnum | QuestionAndAnswerScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuestionAndAnswer
   */

  export type AggregateQuestionAndAnswer = {
    _count: QuestionAndAnswerCountAggregateOutputType | null
    _min: QuestionAndAnswerMinAggregateOutputType | null
    _max: QuestionAndAnswerMaxAggregateOutputType | null
  }

  export type QuestionAndAnswerMinAggregateOutputType = {
    id: string | null
    text: string | null
    type: $Enums.QuestionType | null
    correctAnswer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    quizId: string | null
  }

  export type QuestionAndAnswerMaxAggregateOutputType = {
    id: string | null
    text: string | null
    type: $Enums.QuestionType | null
    correctAnswer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    quizId: string | null
  }

  export type QuestionAndAnswerCountAggregateOutputType = {
    id: number
    text: number
    type: number
    options: number
    correctAnswer: number
    correctOptions: number
    createdAt: number
    updatedAt: number
    quizId: number
    _all: number
  }


  export type QuestionAndAnswerMinAggregateInputType = {
    id?: true
    text?: true
    type?: true
    correctAnswer?: true
    createdAt?: true
    updatedAt?: true
    quizId?: true
  }

  export type QuestionAndAnswerMaxAggregateInputType = {
    id?: true
    text?: true
    type?: true
    correctAnswer?: true
    createdAt?: true
    updatedAt?: true
    quizId?: true
  }

  export type QuestionAndAnswerCountAggregateInputType = {
    id?: true
    text?: true
    type?: true
    options?: true
    correctAnswer?: true
    correctOptions?: true
    createdAt?: true
    updatedAt?: true
    quizId?: true
    _all?: true
  }

  export type QuestionAndAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAndAnswer to aggregate.
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAndAnswers to fetch.
     */
    orderBy?: QuestionAndAnswerOrderByWithRelationInput | QuestionAndAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionAndAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAndAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAndAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionAndAnswers
    **/
    _count?: true | QuestionAndAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionAndAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionAndAnswerMaxAggregateInputType
  }

  export type GetQuestionAndAnswerAggregateType<T extends QuestionAndAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionAndAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionAndAnswer[P]>
      : GetScalarType<T[P], AggregateQuestionAndAnswer[P]>
  }




  export type QuestionAndAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAndAnswerWhereInput
    orderBy?: QuestionAndAnswerOrderByWithAggregationInput | QuestionAndAnswerOrderByWithAggregationInput[]
    by: QuestionAndAnswerScalarFieldEnum[] | QuestionAndAnswerScalarFieldEnum
    having?: QuestionAndAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionAndAnswerCountAggregateInputType | true
    _min?: QuestionAndAnswerMinAggregateInputType
    _max?: QuestionAndAnswerMaxAggregateInputType
  }

  export type QuestionAndAnswerGroupByOutputType = {
    id: string
    text: string
    type: $Enums.QuestionType
    options: string[]
    correctAnswer: string | null
    correctOptions: string[]
    createdAt: Date
    updatedAt: Date
    quizId: string
    _count: QuestionAndAnswerCountAggregateOutputType | null
    _min: QuestionAndAnswerMinAggregateOutputType | null
    _max: QuestionAndAnswerMaxAggregateOutputType | null
  }

  type GetQuestionAndAnswerGroupByPayload<T extends QuestionAndAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionAndAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionAndAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionAndAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionAndAnswerGroupByOutputType[P]>
        }
      >
    >


  export type QuestionAndAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    correctAnswer?: boolean
    correctOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAndAnswer"]>

  export type QuestionAndAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    correctAnswer?: boolean
    correctOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAndAnswer"]>

  export type QuestionAndAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    correctAnswer?: boolean
    correctOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAndAnswer"]>

  export type QuestionAndAnswerSelectScalar = {
    id?: boolean
    text?: boolean
    type?: boolean
    options?: boolean
    correctAnswer?: boolean
    correctOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizId?: boolean
  }

  export type QuestionAndAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "type" | "options" | "correctAnswer" | "correctOptions" | "createdAt" | "updatedAt" | "quizId", ExtArgs["result"]["questionAndAnswer"]>
  export type QuestionAndAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionAndAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionAndAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuestionAndAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionAndAnswer"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      type: $Enums.QuestionType
      options: string[]
      correctAnswer: string | null
      correctOptions: string[]
      createdAt: Date
      updatedAt: Date
      quizId: string
    }, ExtArgs["result"]["questionAndAnswer"]>
    composites: {}
  }

  type QuestionAndAnswerGetPayload<S extends boolean | null | undefined | QuestionAndAnswerDefaultArgs> = $Result.GetResult<Prisma.$QuestionAndAnswerPayload, S>

  type QuestionAndAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionAndAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionAndAnswerCountAggregateInputType | true
    }

  export interface QuestionAndAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionAndAnswer'], meta: { name: 'QuestionAndAnswer' } }
    /**
     * Find zero or one QuestionAndAnswer that matches the filter.
     * @param {QuestionAndAnswerFindUniqueArgs} args - Arguments to find a QuestionAndAnswer
     * @example
     * // Get one QuestionAndAnswer
     * const questionAndAnswer = await prisma.questionAndAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionAndAnswerFindUniqueArgs>(args: SelectSubset<T, QuestionAndAnswerFindUniqueArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionAndAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionAndAnswerFindUniqueOrThrowArgs} args - Arguments to find a QuestionAndAnswer
     * @example
     * // Get one QuestionAndAnswer
     * const questionAndAnswer = await prisma.questionAndAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionAndAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionAndAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAndAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerFindFirstArgs} args - Arguments to find a QuestionAndAnswer
     * @example
     * // Get one QuestionAndAnswer
     * const questionAndAnswer = await prisma.questionAndAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionAndAnswerFindFirstArgs>(args?: SelectSubset<T, QuestionAndAnswerFindFirstArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAndAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerFindFirstOrThrowArgs} args - Arguments to find a QuestionAndAnswer
     * @example
     * // Get one QuestionAndAnswer
     * const questionAndAnswer = await prisma.questionAndAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionAndAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionAndAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionAndAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionAndAnswers
     * const questionAndAnswers = await prisma.questionAndAnswer.findMany()
     * 
     * // Get first 10 QuestionAndAnswers
     * const questionAndAnswers = await prisma.questionAndAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionAndAnswerWithIdOnly = await prisma.questionAndAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionAndAnswerFindManyArgs>(args?: SelectSubset<T, QuestionAndAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionAndAnswer.
     * @param {QuestionAndAnswerCreateArgs} args - Arguments to create a QuestionAndAnswer.
     * @example
     * // Create one QuestionAndAnswer
     * const QuestionAndAnswer = await prisma.questionAndAnswer.create({
     *   data: {
     *     // ... data to create a QuestionAndAnswer
     *   }
     * })
     * 
     */
    create<T extends QuestionAndAnswerCreateArgs>(args: SelectSubset<T, QuestionAndAnswerCreateArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionAndAnswers.
     * @param {QuestionAndAnswerCreateManyArgs} args - Arguments to create many QuestionAndAnswers.
     * @example
     * // Create many QuestionAndAnswers
     * const questionAndAnswer = await prisma.questionAndAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionAndAnswerCreateManyArgs>(args?: SelectSubset<T, QuestionAndAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionAndAnswers and returns the data saved in the database.
     * @param {QuestionAndAnswerCreateManyAndReturnArgs} args - Arguments to create many QuestionAndAnswers.
     * @example
     * // Create many QuestionAndAnswers
     * const questionAndAnswer = await prisma.questionAndAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionAndAnswers and only return the `id`
     * const questionAndAnswerWithIdOnly = await prisma.questionAndAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionAndAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionAndAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionAndAnswer.
     * @param {QuestionAndAnswerDeleteArgs} args - Arguments to delete one QuestionAndAnswer.
     * @example
     * // Delete one QuestionAndAnswer
     * const QuestionAndAnswer = await prisma.questionAndAnswer.delete({
     *   where: {
     *     // ... filter to delete one QuestionAndAnswer
     *   }
     * })
     * 
     */
    delete<T extends QuestionAndAnswerDeleteArgs>(args: SelectSubset<T, QuestionAndAnswerDeleteArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionAndAnswer.
     * @param {QuestionAndAnswerUpdateArgs} args - Arguments to update one QuestionAndAnswer.
     * @example
     * // Update one QuestionAndAnswer
     * const questionAndAnswer = await prisma.questionAndAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionAndAnswerUpdateArgs>(args: SelectSubset<T, QuestionAndAnswerUpdateArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionAndAnswers.
     * @param {QuestionAndAnswerDeleteManyArgs} args - Arguments to filter QuestionAndAnswers to delete.
     * @example
     * // Delete a few QuestionAndAnswers
     * const { count } = await prisma.questionAndAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionAndAnswerDeleteManyArgs>(args?: SelectSubset<T, QuestionAndAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAndAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionAndAnswers
     * const questionAndAnswer = await prisma.questionAndAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionAndAnswerUpdateManyArgs>(args: SelectSubset<T, QuestionAndAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAndAnswers and returns the data updated in the database.
     * @param {QuestionAndAnswerUpdateManyAndReturnArgs} args - Arguments to update many QuestionAndAnswers.
     * @example
     * // Update many QuestionAndAnswers
     * const questionAndAnswer = await prisma.questionAndAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionAndAnswers and only return the `id`
     * const questionAndAnswerWithIdOnly = await prisma.questionAndAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionAndAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionAndAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionAndAnswer.
     * @param {QuestionAndAnswerUpsertArgs} args - Arguments to update or create a QuestionAndAnswer.
     * @example
     * // Update or create a QuestionAndAnswer
     * const questionAndAnswer = await prisma.questionAndAnswer.upsert({
     *   create: {
     *     // ... data to create a QuestionAndAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionAndAnswer we want to update
     *   }
     * })
     */
    upsert<T extends QuestionAndAnswerUpsertArgs>(args: SelectSubset<T, QuestionAndAnswerUpsertArgs<ExtArgs>>): Prisma__QuestionAndAnswerClient<$Result.GetResult<Prisma.$QuestionAndAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionAndAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerCountArgs} args - Arguments to filter QuestionAndAnswers to count.
     * @example
     * // Count the number of QuestionAndAnswers
     * const count = await prisma.questionAndAnswer.count({
     *   where: {
     *     // ... the filter for the QuestionAndAnswers we want to count
     *   }
     * })
    **/
    count<T extends QuestionAndAnswerCountArgs>(
      args?: Subset<T, QuestionAndAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionAndAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionAndAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAndAnswerAggregateArgs>(args: Subset<T, QuestionAndAnswerAggregateArgs>): Prisma.PrismaPromise<GetQuestionAndAnswerAggregateType<T>>

    /**
     * Group by QuestionAndAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAndAnswerGroupByArgs} args - Group by arguments.
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
      T extends QuestionAndAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionAndAnswerGroupByArgs['orderBy'] }
        : { orderBy?: QuestionAndAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionAndAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAndAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionAndAnswer model
   */
  readonly fields: QuestionAndAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionAndAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionAndAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionAndAnswer model
   */
  interface QuestionAndAnswerFieldRefs {
    readonly id: FieldRef<"QuestionAndAnswer", 'String'>
    readonly text: FieldRef<"QuestionAndAnswer", 'String'>
    readonly type: FieldRef<"QuestionAndAnswer", 'QuestionType'>
    readonly options: FieldRef<"QuestionAndAnswer", 'String[]'>
    readonly correctAnswer: FieldRef<"QuestionAndAnswer", 'String'>
    readonly correctOptions: FieldRef<"QuestionAndAnswer", 'String[]'>
    readonly createdAt: FieldRef<"QuestionAndAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionAndAnswer", 'DateTime'>
    readonly quizId: FieldRef<"QuestionAndAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionAndAnswer findUnique
   */
  export type QuestionAndAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAndAnswer to fetch.
     */
    where: QuestionAndAnswerWhereUniqueInput
  }

  /**
   * QuestionAndAnswer findUniqueOrThrow
   */
  export type QuestionAndAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAndAnswer to fetch.
     */
    where: QuestionAndAnswerWhereUniqueInput
  }

  /**
   * QuestionAndAnswer findFirst
   */
  export type QuestionAndAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAndAnswer to fetch.
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAndAnswers to fetch.
     */
    orderBy?: QuestionAndAnswerOrderByWithRelationInput | QuestionAndAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAndAnswers.
     */
    cursor?: QuestionAndAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAndAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAndAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAndAnswers.
     */
    distinct?: QuestionAndAnswerScalarFieldEnum | QuestionAndAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAndAnswer findFirstOrThrow
   */
  export type QuestionAndAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAndAnswer to fetch.
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAndAnswers to fetch.
     */
    orderBy?: QuestionAndAnswerOrderByWithRelationInput | QuestionAndAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAndAnswers.
     */
    cursor?: QuestionAndAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAndAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAndAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAndAnswers.
     */
    distinct?: QuestionAndAnswerScalarFieldEnum | QuestionAndAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAndAnswer findMany
   */
  export type QuestionAndAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAndAnswers to fetch.
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAndAnswers to fetch.
     */
    orderBy?: QuestionAndAnswerOrderByWithRelationInput | QuestionAndAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionAndAnswers.
     */
    cursor?: QuestionAndAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAndAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAndAnswers.
     */
    skip?: number
    distinct?: QuestionAndAnswerScalarFieldEnum | QuestionAndAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAndAnswer create
   */
  export type QuestionAndAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionAndAnswer.
     */
    data: XOR<QuestionAndAnswerCreateInput, QuestionAndAnswerUncheckedCreateInput>
  }

  /**
   * QuestionAndAnswer createMany
   */
  export type QuestionAndAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionAndAnswers.
     */
    data: QuestionAndAnswerCreateManyInput | QuestionAndAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionAndAnswer createManyAndReturn
   */
  export type QuestionAndAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionAndAnswers.
     */
    data: QuestionAndAnswerCreateManyInput | QuestionAndAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAndAnswer update
   */
  export type QuestionAndAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionAndAnswer.
     */
    data: XOR<QuestionAndAnswerUpdateInput, QuestionAndAnswerUncheckedUpdateInput>
    /**
     * Choose, which QuestionAndAnswer to update.
     */
    where: QuestionAndAnswerWhereUniqueInput
  }

  /**
   * QuestionAndAnswer updateMany
   */
  export type QuestionAndAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionAndAnswers.
     */
    data: XOR<QuestionAndAnswerUpdateManyMutationInput, QuestionAndAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAndAnswers to update
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * Limit how many QuestionAndAnswers to update.
     */
    limit?: number
  }

  /**
   * QuestionAndAnswer updateManyAndReturn
   */
  export type QuestionAndAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * The data used to update QuestionAndAnswers.
     */
    data: XOR<QuestionAndAnswerUpdateManyMutationInput, QuestionAndAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAndAnswers to update
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * Limit how many QuestionAndAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAndAnswer upsert
   */
  export type QuestionAndAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionAndAnswer to update in case it exists.
     */
    where: QuestionAndAnswerWhereUniqueInput
    /**
     * In case the QuestionAndAnswer found by the `where` argument doesn't exist, create a new QuestionAndAnswer with this data.
     */
    create: XOR<QuestionAndAnswerCreateInput, QuestionAndAnswerUncheckedCreateInput>
    /**
     * In case the QuestionAndAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionAndAnswerUpdateInput, QuestionAndAnswerUncheckedUpdateInput>
  }

  /**
   * QuestionAndAnswer delete
   */
  export type QuestionAndAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
    /**
     * Filter which QuestionAndAnswer to delete.
     */
    where: QuestionAndAnswerWhereUniqueInput
  }

  /**
   * QuestionAndAnswer deleteMany
   */
  export type QuestionAndAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAndAnswers to delete
     */
    where?: QuestionAndAnswerWhereInput
    /**
     * Limit how many QuestionAndAnswers to delete.
     */
    limit?: number
  }

  /**
   * QuestionAndAnswer without action
   */
  export type QuestionAndAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAndAnswer
     */
    select?: QuestionAndAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAndAnswer
     */
    omit?: QuestionAndAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAndAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    type: $Enums.QuestionType | null
    submittedAnswer: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    questionId: string | null
    userAnswersId: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    type: $Enums.QuestionType | null
    submittedAnswer: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    questionId: string | null
    userAnswersId: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    type: number
    submittedAnswer: number
    submittedOptions: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    questionId: number
    userAnswersId: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    type?: true
    submittedAnswer?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    userAnswersId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    type?: true
    submittedAnswer?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    userAnswersId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    type?: true
    submittedAnswer?: true
    submittedOptions?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    userAnswersId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    type: $Enums.QuestionType
    submittedAnswer: string | null
    submittedOptions: string[]
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    questionId: string
    userAnswersId: string
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    submittedAnswer?: boolean
    submittedOptions?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    userAnswersId?: boolean
    UserAnswers?: boolean | UserAnswersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    submittedAnswer?: boolean
    submittedOptions?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    userAnswersId?: boolean
    UserAnswers?: boolean | UserAnswersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    submittedAnswer?: boolean
    submittedOptions?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    userAnswersId?: boolean
    UserAnswers?: boolean | UserAnswersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    type?: boolean
    submittedAnswer?: boolean
    submittedOptions?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    userAnswersId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "submittedAnswer" | "submittedOptions" | "isCorrect" | "createdAt" | "updatedAt" | "questionId" | "userAnswersId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserAnswers?: boolean | UserAnswersDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserAnswers?: boolean | UserAnswersDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserAnswers?: boolean | UserAnswersDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      UserAnswers: Prisma.$UserAnswersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.QuestionType
      submittedAnswer: string | null
      submittedOptions: string[]
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
      questionId: string
      userAnswersId: string
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserAnswers<T extends UserAnswersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAnswersDefaultArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly type: FieldRef<"Answer", 'QuestionType'>
    readonly submittedAnswer: FieldRef<"Answer", 'String'>
    readonly submittedOptions: FieldRef<"Answer", 'String[]'>
    readonly isCorrect: FieldRef<"Answer", 'Boolean'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly userAnswersId: FieldRef<"Answer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserAnswers
   */

  export type AggregateUserAnswers = {
    _count: UserAnswersCountAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  export type UserAnswersMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    collectedInfo: string | null
  }

  export type UserAnswersMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    collectedInfo: string | null
  }

  export type UserAnswersCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    collectedInfo: number
    _all: number
  }


  export type UserAnswersMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    collectedInfo?: true
  }

  export type UserAnswersMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    collectedInfo?: true
  }

  export type UserAnswersCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    collectedInfo?: true
    _all?: true
  }

  export type UserAnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to aggregate.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnswers
    **/
    _count?: true | UserAnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnswersMaxAggregateInputType
  }

  export type GetUserAnswersAggregateType<T extends UserAnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnswers[P]>
      : GetScalarType<T[P], AggregateUserAnswers[P]>
  }




  export type UserAnswersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithAggregationInput | UserAnswersOrderByWithAggregationInput[]
    by: UserAnswersScalarFieldEnum[] | UserAnswersScalarFieldEnum
    having?: UserAnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnswersCountAggregateInputType | true
    _min?: UserAnswersMinAggregateInputType
    _max?: UserAnswersMaxAggregateInputType
  }

  export type UserAnswersGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    collectedInfo: string
    _count: UserAnswersCountAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  type GetUserAnswersGroupByPayload<T extends UserAnswersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
        }
      >
    >


  export type UserAnswersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    collectedInfo?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | UserAnswers$answersArgs<ExtArgs>
    _count?: boolean | UserAnswersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    collectedInfo?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    collectedInfo?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    collectedInfo?: boolean
  }

  export type UserAnswersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "collectedInfo", ExtArgs["result"]["userAnswers"]>
  export type UserAnswersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    answers?: boolean | UserAnswers$answersArgs<ExtArgs>
    _count?: boolean | UserAnswersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserAnswersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type UserAnswersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $UserAnswersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnswers"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      collectedInfo: string
    }, ExtArgs["result"]["userAnswers"]>
    composites: {}
  }

  type UserAnswersGetPayload<S extends boolean | null | undefined | UserAnswersDefaultArgs> = $Result.GetResult<Prisma.$UserAnswersPayload, S>

  type UserAnswersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnswersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnswersCountAggregateInputType | true
    }

  export interface UserAnswersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnswers'], meta: { name: 'UserAnswers' } }
    /**
     * Find zero or one UserAnswers that matches the filter.
     * @param {UserAnswersFindUniqueArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnswersFindUniqueArgs>(args: SelectSubset<T, UserAnswersFindUniqueArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnswers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnswersFindUniqueOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnswersFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnswersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnswersFindFirstArgs>(args?: SelectSubset<T, UserAnswersFindFirstArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnswersFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnswersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany()
     * 
     * // Get first 10 UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnswersFindManyArgs>(args?: SelectSubset<T, UserAnswersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnswers.
     * @param {UserAnswersCreateArgs} args - Arguments to create a UserAnswers.
     * @example
     * // Create one UserAnswers
     * const UserAnswers = await prisma.userAnswers.create({
     *   data: {
     *     // ... data to create a UserAnswers
     *   }
     * })
     * 
     */
    create<T extends UserAnswersCreateArgs>(args: SelectSubset<T, UserAnswersCreateArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnswers.
     * @param {UserAnswersCreateManyArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswers = await prisma.userAnswers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnswersCreateManyArgs>(args?: SelectSubset<T, UserAnswersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAnswers and returns the data saved in the database.
     * @param {UserAnswersCreateManyAndReturnArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswers = await prisma.userAnswers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAnswers and only return the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAnswersCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAnswersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAnswers.
     * @param {UserAnswersDeleteArgs} args - Arguments to delete one UserAnswers.
     * @example
     * // Delete one UserAnswers
     * const UserAnswers = await prisma.userAnswers.delete({
     *   where: {
     *     // ... filter to delete one UserAnswers
     *   }
     * })
     * 
     */
    delete<T extends UserAnswersDeleteArgs>(args: SelectSubset<T, UserAnswersDeleteArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnswers.
     * @param {UserAnswersUpdateArgs} args - Arguments to update one UserAnswers.
     * @example
     * // Update one UserAnswers
     * const userAnswers = await prisma.userAnswers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnswersUpdateArgs>(args: SelectSubset<T, UserAnswersUpdateArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnswers.
     * @param {UserAnswersDeleteManyArgs} args - Arguments to filter UserAnswers to delete.
     * @example
     * // Delete a few UserAnswers
     * const { count } = await prisma.userAnswers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnswersDeleteManyArgs>(args?: SelectSubset<T, UserAnswersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnswersUpdateManyArgs>(args: SelectSubset<T, UserAnswersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers and returns the data updated in the database.
     * @param {UserAnswersUpdateManyAndReturnArgs} args - Arguments to update many UserAnswers.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAnswers and only return the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAnswersUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAnswersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAnswers.
     * @param {UserAnswersUpsertArgs} args - Arguments to update or create a UserAnswers.
     * @example
     * // Update or create a UserAnswers
     * const userAnswers = await prisma.userAnswers.upsert({
     *   create: {
     *     // ... data to create a UserAnswers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnswers we want to update
     *   }
     * })
     */
    upsert<T extends UserAnswersUpsertArgs>(args: SelectSubset<T, UserAnswersUpsertArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersCountArgs} args - Arguments to filter UserAnswers to count.
     * @example
     * // Count the number of UserAnswers
     * const count = await prisma.userAnswers.count({
     *   where: {
     *     // ... the filter for the UserAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserAnswersCountArgs>(
      args?: Subset<T, UserAnswersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAnswersAggregateArgs>(args: Subset<T, UserAnswersAggregateArgs>): Prisma.PrismaPromise<GetUserAnswersAggregateType<T>>

    /**
     * Group by UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersGroupByArgs} args - Group by arguments.
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
      T extends UserAnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnswersGroupByArgs['orderBy'] }
        : { orderBy?: UserAnswersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnswers model
   */
  readonly fields: UserAnswersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnswers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnswersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends UserAnswers$answersArgs<ExtArgs> = {}>(args?: Subset<T, UserAnswers$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAnswers model
   */
  interface UserAnswersFieldRefs {
    readonly id: FieldRef<"UserAnswers", 'String'>
    readonly userId: FieldRef<"UserAnswers", 'String'>
    readonly quizId: FieldRef<"UserAnswers", 'String'>
    readonly collectedInfo: FieldRef<"UserAnswers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserAnswers findUnique
   */
  export type UserAnswersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findUniqueOrThrow
   */
  export type UserAnswersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findFirst
   */
  export type UserAnswersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers findFirstOrThrow
   */
  export type UserAnswersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers findMany
   */
  export type UserAnswersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers create
   */
  export type UserAnswersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnswers.
     */
    data: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
  }

  /**
   * UserAnswers createMany
   */
  export type UserAnswersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswersCreateManyInput | UserAnswersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnswers createManyAndReturn
   */
  export type UserAnswersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswersCreateManyInput | UserAnswersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswers update
   */
  export type UserAnswersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnswers.
     */
    data: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
    /**
     * Choose, which UserAnswers to update.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers updateMany
   */
  export type UserAnswersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
  }

  /**
   * UserAnswers updateManyAndReturn
   */
  export type UserAnswersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswers upsert
   */
  export type UserAnswersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnswers to update in case it exists.
     */
    where: UserAnswersWhereUniqueInput
    /**
     * In case the UserAnswers found by the `where` argument doesn't exist, create a new UserAnswers with this data.
     */
    create: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
    /**
     * In case the UserAnswers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
  }

  /**
   * UserAnswers delete
   */
  export type UserAnswersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter which UserAnswers to delete.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers deleteMany
   */
  export type UserAnswersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to delete
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserAnswers.answers
   */
  export type UserAnswers$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * UserAnswers without action
   */
  export type UserAnswersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    topics: 'topics',
    resultState: 'resultState',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hostId: 'hostId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionAndAnswerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    type: 'type',
    options: 'options',
    correctAnswer: 'correctAnswer',
    correctOptions: 'correctOptions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    quizId: 'quizId'
  };

  export type QuestionAndAnswerScalarFieldEnum = (typeof QuestionAndAnswerScalarFieldEnum)[keyof typeof QuestionAndAnswerScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    submittedAnswer: 'submittedAnswer',
    submittedOptions: 'submittedOptions',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    questionId: 'questionId',
    userAnswersId: 'userAnswersId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const UserAnswersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    collectedInfo: 'collectedInfo'
  };

  export type UserAnswersScalarFieldEnum = (typeof UserAnswersScalarFieldEnum)[keyof typeof UserAnswersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'QuizResultState'
   */
  export type EnumQuizResultStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizResultState'>
    


  /**
   * Reference to a field of type 'QuizResultState[]'
   */
  export type ListEnumQuizResultStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizResultState[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hostedQuizzes?: QuizListRelationFilter
    userAnswers?: UserAnswersListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hostedQuizzes?: QuizOrderByRelationAggregateInput
    userAnswers?: UserAnswersOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    hostedQuizzes?: QuizListRelationFilter
    userAnswers?: UserAnswersListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    name?: StringFilter<"Quiz"> | string
    level?: IntFilter<"Quiz"> | number
    topics?: StringNullableListFilter<"Quiz">
    resultState?: EnumQuizResultStateFilter<"Quiz"> | $Enums.QuizResultState
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    hostId?: StringFilter<"Quiz"> | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    userAnswers?: UserAnswersListRelationFilter
    QuestionAndAnswer?: QuestionAndAnswerListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topics?: SortOrder
    resultState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostId?: SortOrder
    host?: UserOrderByWithRelationInput
    userAnswers?: UserAnswersOrderByRelationAggregateInput
    QuestionAndAnswer?: QuestionAndAnswerOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    name?: StringFilter<"Quiz"> | string
    level?: IntFilter<"Quiz"> | number
    topics?: StringNullableListFilter<"Quiz">
    resultState?: EnumQuizResultStateFilter<"Quiz"> | $Enums.QuizResultState
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    hostId?: StringFilter<"Quiz"> | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    userAnswers?: UserAnswersListRelationFilter
    QuestionAndAnswer?: QuestionAndAnswerListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topics?: SortOrder
    resultState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    name?: StringWithAggregatesFilter<"Quiz"> | string
    level?: IntWithAggregatesFilter<"Quiz"> | number
    topics?: StringNullableListFilter<"Quiz">
    resultState?: EnumQuizResultStateWithAggregatesFilter<"Quiz"> | $Enums.QuizResultState
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    hostId?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type QuestionAndAnswerWhereInput = {
    AND?: QuestionAndAnswerWhereInput | QuestionAndAnswerWhereInput[]
    OR?: QuestionAndAnswerWhereInput[]
    NOT?: QuestionAndAnswerWhereInput | QuestionAndAnswerWhereInput[]
    id?: StringFilter<"QuestionAndAnswer"> | string
    text?: StringFilter<"QuestionAndAnswer"> | string
    type?: EnumQuestionTypeFilter<"QuestionAndAnswer"> | $Enums.QuestionType
    options?: StringNullableListFilter<"QuestionAndAnswer">
    correctAnswer?: StringNullableFilter<"QuestionAndAnswer"> | string | null
    correctOptions?: StringNullableListFilter<"QuestionAndAnswer">
    createdAt?: DateTimeFilter<"QuestionAndAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionAndAnswer"> | Date | string
    quizId?: StringFilter<"QuestionAndAnswer"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuestionAndAnswerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    correctOptions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuestionAndAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionAndAnswerWhereInput | QuestionAndAnswerWhereInput[]
    OR?: QuestionAndAnswerWhereInput[]
    NOT?: QuestionAndAnswerWhereInput | QuestionAndAnswerWhereInput[]
    text?: StringFilter<"QuestionAndAnswer"> | string
    type?: EnumQuestionTypeFilter<"QuestionAndAnswer"> | $Enums.QuestionType
    options?: StringNullableListFilter<"QuestionAndAnswer">
    correctAnswer?: StringNullableFilter<"QuestionAndAnswer"> | string | null
    correctOptions?: StringNullableListFilter<"QuestionAndAnswer">
    createdAt?: DateTimeFilter<"QuestionAndAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionAndAnswer"> | Date | string
    quizId?: StringFilter<"QuestionAndAnswer"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id">

  export type QuestionAndAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    correctOptions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
    _count?: QuestionAndAnswerCountOrderByAggregateInput
    _max?: QuestionAndAnswerMaxOrderByAggregateInput
    _min?: QuestionAndAnswerMinOrderByAggregateInput
  }

  export type QuestionAndAnswerScalarWhereWithAggregatesInput = {
    AND?: QuestionAndAnswerScalarWhereWithAggregatesInput | QuestionAndAnswerScalarWhereWithAggregatesInput[]
    OR?: QuestionAndAnswerScalarWhereWithAggregatesInput[]
    NOT?: QuestionAndAnswerScalarWhereWithAggregatesInput | QuestionAndAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionAndAnswer"> | string
    text?: StringWithAggregatesFilter<"QuestionAndAnswer"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"QuestionAndAnswer"> | $Enums.QuestionType
    options?: StringNullableListFilter<"QuestionAndAnswer">
    correctAnswer?: StringNullableWithAggregatesFilter<"QuestionAndAnswer"> | string | null
    correctOptions?: StringNullableListFilter<"QuestionAndAnswer">
    createdAt?: DateTimeWithAggregatesFilter<"QuestionAndAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionAndAnswer"> | Date | string
    quizId?: StringWithAggregatesFilter<"QuestionAndAnswer"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    type?: EnumQuestionTypeFilter<"Answer"> | $Enums.QuestionType
    submittedAnswer?: StringNullableFilter<"Answer"> | string | null
    submittedOptions?: StringNullableListFilter<"Answer">
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    questionId?: StringFilter<"Answer"> | string
    userAnswersId?: StringFilter<"Answer"> | string
    UserAnswers?: XOR<UserAnswersScalarRelationFilter, UserAnswersWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    submittedAnswer?: SortOrderInput | SortOrder
    submittedOptions?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    userAnswersId?: SortOrder
    UserAnswers?: UserAnswersOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    type?: EnumQuestionTypeFilter<"Answer"> | $Enums.QuestionType
    submittedAnswer?: StringNullableFilter<"Answer"> | string | null
    submittedOptions?: StringNullableListFilter<"Answer">
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    questionId?: StringFilter<"Answer"> | string
    userAnswersId?: StringFilter<"Answer"> | string
    UserAnswers?: XOR<UserAnswersScalarRelationFilter, UserAnswersWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    submittedAnswer?: SortOrderInput | SortOrder
    submittedOptions?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    userAnswersId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"Answer"> | $Enums.QuestionType
    submittedAnswer?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    submittedOptions?: StringNullableListFilter<"Answer">
    isCorrect?: BoolWithAggregatesFilter<"Answer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    userAnswersId?: StringWithAggregatesFilter<"Answer"> | string
  }

  export type UserAnswersWhereInput = {
    AND?: UserAnswersWhereInput | UserAnswersWhereInput[]
    OR?: UserAnswersWhereInput[]
    NOT?: UserAnswersWhereInput | UserAnswersWhereInput[]
    id?: StringFilter<"UserAnswers"> | string
    userId?: StringFilter<"UserAnswers"> | string
    quizId?: StringFilter<"UserAnswers"> | string
    collectedInfo?: StringFilter<"UserAnswers"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type UserAnswersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    collectedInfo?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type UserAnswersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAnswersWhereInput | UserAnswersWhereInput[]
    OR?: UserAnswersWhereInput[]
    NOT?: UserAnswersWhereInput | UserAnswersWhereInput[]
    userId?: StringFilter<"UserAnswers"> | string
    quizId?: StringFilter<"UserAnswers"> | string
    collectedInfo?: StringFilter<"UserAnswers"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type UserAnswersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    collectedInfo?: SortOrder
    _count?: UserAnswersCountOrderByAggregateInput
    _max?: UserAnswersMaxOrderByAggregateInput
    _min?: UserAnswersMinOrderByAggregateInput
  }

  export type UserAnswersScalarWhereWithAggregatesInput = {
    AND?: UserAnswersScalarWhereWithAggregatesInput | UserAnswersScalarWhereWithAggregatesInput[]
    OR?: UserAnswersScalarWhereWithAggregatesInput[]
    NOT?: UserAnswersScalarWhereWithAggregatesInput | UserAnswersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAnswers"> | string
    userId?: StringWithAggregatesFilter<"UserAnswers"> | string
    quizId?: StringWithAggregatesFilter<"UserAnswers"> | string
    collectedInfo?: StringWithAggregatesFilter<"UserAnswers"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    hostedQuizzes?: QuizCreateNestedManyWithoutHostInput
    userAnswers?: UserAnswersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    hostedQuizzes?: QuizUncheckedCreateNestedManyWithoutHostInput
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hostedQuizzes?: QuizUpdateManyWithoutHostNestedInput
    userAnswers?: UserAnswersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hostedQuizzes?: QuizUncheckedUpdateManyWithoutHostNestedInput
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedQuizzesInput
    userAnswers?: UserAnswersCreateNestedManyWithoutQuizInput
    QuestionAndAnswer?: QuestionAndAnswerCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    hostId: string
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuizInput
    QuestionAndAnswer?: QuestionAndAnswerUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedQuizzesNestedInput
    userAnswers?: UserAnswersUpdateManyWithoutQuizNestedInput
    QuestionAndAnswer?: QuestionAndAnswerUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: StringFieldUpdateOperationsInput | string
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutQuizNestedInput
    QuestionAndAnswer?: QuestionAndAnswerUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    hostId: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAndAnswerCreateInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: QuestionAndAnswerCreateoptionsInput | string[]
    correctAnswer?: string | null
    correctOptions?: QuestionAndAnswerCreatecorrectOptionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionAndAnswerInput
  }

  export type QuestionAndAnswerUncheckedCreateInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: QuestionAndAnswerCreateoptionsInput | string[]
    correctAnswer?: string | null
    correctOptions?: QuestionAndAnswerCreatecorrectOptionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    quizId: string
  }

  export type QuestionAndAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionAndAnswerNestedInput
  }

  export type QuestionAndAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAndAnswerCreateManyInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: QuestionAndAnswerCreateoptionsInput | string[]
    correctAnswer?: string | null
    correctOptions?: QuestionAndAnswerCreatecorrectOptionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    quizId: string
  }

  export type QuestionAndAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAndAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    id?: string
    type: $Enums.QuestionType
    submittedAnswer?: string | null
    submittedOptions?: AnswerCreatesubmittedOptionsInput | string[]
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    UserAnswers: UserAnswersCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    type: $Enums.QuestionType
    submittedAnswer?: string | null
    submittedOptions?: AnswerCreatesubmittedOptionsInput | string[]
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    userAnswersId: string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    UserAnswers?: UserAnswersUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswersId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    type: $Enums.QuestionType
    submittedAnswer?: string | null
    submittedOptions?: AnswerCreatesubmittedOptionsInput | string[]
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    userAnswersId: string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswersId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnswersCreateInput = {
    id?: string
    collectedInfo: string
    user: UserCreateNestedOneWithoutUserAnswersInput
    quiz: QuizCreateNestedOneWithoutUserAnswersInput
    answers?: AnswerCreateNestedManyWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    collectedInfo: string
    answers?: AnswerUncheckedCreateNestedManyWithoutUserAnswersInput
  }

  export type UserAnswersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
    quiz?: QuizUpdateOneRequiredWithoutUserAnswersNestedInput
    answers?: AnswerUpdateManyWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutUserAnswersNestedInput
  }

  export type UserAnswersCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    collectedInfo: string
  }

  export type UserAnswersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnswersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type UserAnswersListRelationFilter = {
    every?: UserAnswersWhereInput
    some?: UserAnswersWhereInput
    none?: UserAnswersWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumQuizResultStateFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizResultState | EnumQuizResultStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizResultStateFilter<$PrismaModel> | $Enums.QuizResultState
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionAndAnswerListRelationFilter = {
    every?: QuestionAndAnswerWhereInput
    some?: QuestionAndAnswerWhereInput
    none?: QuestionAndAnswerWhereInput
  }

  export type QuestionAndAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    topics?: SortOrder
    resultState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostId?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    resultState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    resultState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostId?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumQuizResultStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizResultState | EnumQuizResultStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizResultStateWithAggregatesFilter<$PrismaModel> | $Enums.QuizResultState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizResultStateFilter<$PrismaModel>
    _max?: NestedEnumQuizResultStateFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionAndAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    correctOptions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionAndAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
  }

  export type QuestionAndAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserAnswersScalarRelationFilter = {
    is?: UserAnswersWhereInput
    isNot?: UserAnswersWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    submittedAnswer?: SortOrder
    submittedOptions?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    userAnswersId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    submittedAnswer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    userAnswersId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    submittedAnswer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    userAnswersId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAnswersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    collectedInfo?: SortOrder
  }

  export type UserAnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    collectedInfo?: SortOrder
  }

  export type UserAnswersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    collectedInfo?: SortOrder
  }

  export type QuizCreateNestedManyWithoutHostInput = {
    create?: XOR<QuizCreateWithoutHostInput, QuizUncheckedCreateWithoutHostInput> | QuizCreateWithoutHostInput[] | QuizUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutHostInput | QuizCreateOrConnectWithoutHostInput[]
    createMany?: QuizCreateManyHostInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserAnswersCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<QuizCreateWithoutHostInput, QuizUncheckedCreateWithoutHostInput> | QuizCreateWithoutHostInput[] | QuizUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutHostInput | QuizCreateOrConnectWithoutHostInput[]
    createMany?: QuizCreateManyHostInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type QuizUpdateManyWithoutHostNestedInput = {
    create?: XOR<QuizCreateWithoutHostInput, QuizUncheckedCreateWithoutHostInput> | QuizCreateWithoutHostInput[] | QuizUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutHostInput | QuizCreateOrConnectWithoutHostInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutHostInput | QuizUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: QuizCreateManyHostInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutHostInput | QuizUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutHostInput | QuizUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserAnswersUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutUserInput | UserAnswersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutUserInput | UserAnswersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutUserInput | UserAnswersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<QuizCreateWithoutHostInput, QuizUncheckedCreateWithoutHostInput> | QuizCreateWithoutHostInput[] | QuizUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutHostInput | QuizCreateOrConnectWithoutHostInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutHostInput | QuizUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: QuizCreateManyHostInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutHostInput | QuizUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutHostInput | QuizUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserAnswersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput> | UserAnswersCreateWithoutUserInput[] | UserAnswersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutUserInput | UserAnswersCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutUserInput | UserAnswersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswersCreateManyUserInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutUserInput | UserAnswersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutUserInput | UserAnswersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type QuizCreatetopicsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutHostedQuizzesInput = {
    create?: XOR<UserCreateWithoutHostedQuizzesInput, UserUncheckedCreateWithoutHostedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type UserAnswersCreateNestedManyWithoutQuizInput = {
    create?: XOR<UserAnswersCreateWithoutQuizInput, UserAnswersUncheckedCreateWithoutQuizInput> | UserAnswersCreateWithoutQuizInput[] | UserAnswersUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuizInput | UserAnswersCreateOrConnectWithoutQuizInput[]
    createMany?: UserAnswersCreateManyQuizInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type QuestionAndAnswerCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionAndAnswerCreateWithoutQuizInput, QuestionAndAnswerUncheckedCreateWithoutQuizInput> | QuestionAndAnswerCreateWithoutQuizInput[] | QuestionAndAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionAndAnswerCreateOrConnectWithoutQuizInput | QuestionAndAnswerCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionAndAnswerCreateManyQuizInputEnvelope
    connect?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<UserAnswersCreateWithoutQuizInput, UserAnswersUncheckedCreateWithoutQuizInput> | UserAnswersCreateWithoutQuizInput[] | UserAnswersUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuizInput | UserAnswersCreateOrConnectWithoutQuizInput[]
    createMany?: UserAnswersCreateManyQuizInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type QuestionAndAnswerUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionAndAnswerCreateWithoutQuizInput, QuestionAndAnswerUncheckedCreateWithoutQuizInput> | QuestionAndAnswerCreateWithoutQuizInput[] | QuestionAndAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionAndAnswerCreateOrConnectWithoutQuizInput | QuestionAndAnswerCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionAndAnswerCreateManyQuizInputEnvelope
    connect?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizUpdatetopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumQuizResultStateFieldUpdateOperationsInput = {
    set?: $Enums.QuizResultState
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutHostedQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutHostedQuizzesInput, UserUncheckedCreateWithoutHostedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedQuizzesInput
    upsert?: UserUpsertWithoutHostedQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostedQuizzesInput, UserUpdateWithoutHostedQuizzesInput>, UserUncheckedUpdateWithoutHostedQuizzesInput>
  }

  export type UserAnswersUpdateManyWithoutQuizNestedInput = {
    create?: XOR<UserAnswersCreateWithoutQuizInput, UserAnswersUncheckedCreateWithoutQuizInput> | UserAnswersCreateWithoutQuizInput[] | UserAnswersUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuizInput | UserAnswersCreateOrConnectWithoutQuizInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutQuizInput | UserAnswersUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: UserAnswersCreateManyQuizInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutQuizInput | UserAnswersUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutQuizInput | UserAnswersUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type QuestionAndAnswerUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionAndAnswerCreateWithoutQuizInput, QuestionAndAnswerUncheckedCreateWithoutQuizInput> | QuestionAndAnswerCreateWithoutQuizInput[] | QuestionAndAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionAndAnswerCreateOrConnectWithoutQuizInput | QuestionAndAnswerCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionAndAnswerUpsertWithWhereUniqueWithoutQuizInput | QuestionAndAnswerUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionAndAnswerCreateManyQuizInputEnvelope
    set?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    disconnect?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    delete?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    connect?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    update?: QuestionAndAnswerUpdateWithWhereUniqueWithoutQuizInput | QuestionAndAnswerUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionAndAnswerUpdateManyWithWhereWithoutQuizInput | QuestionAndAnswerUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionAndAnswerScalarWhereInput | QuestionAndAnswerScalarWhereInput[]
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<UserAnswersCreateWithoutQuizInput, UserAnswersUncheckedCreateWithoutQuizInput> | UserAnswersCreateWithoutQuizInput[] | UserAnswersUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuizInput | UserAnswersCreateOrConnectWithoutQuizInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutQuizInput | UserAnswersUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: UserAnswersCreateManyQuizInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutQuizInput | UserAnswersUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutQuizInput | UserAnswersUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type QuestionAndAnswerUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionAndAnswerCreateWithoutQuizInput, QuestionAndAnswerUncheckedCreateWithoutQuizInput> | QuestionAndAnswerCreateWithoutQuizInput[] | QuestionAndAnswerUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionAndAnswerCreateOrConnectWithoutQuizInput | QuestionAndAnswerCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionAndAnswerUpsertWithWhereUniqueWithoutQuizInput | QuestionAndAnswerUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionAndAnswerCreateManyQuizInputEnvelope
    set?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    disconnect?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    delete?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    connect?: QuestionAndAnswerWhereUniqueInput | QuestionAndAnswerWhereUniqueInput[]
    update?: QuestionAndAnswerUpdateWithWhereUniqueWithoutQuizInput | QuestionAndAnswerUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionAndAnswerUpdateManyWithWhereWithoutQuizInput | QuestionAndAnswerUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionAndAnswerScalarWhereInput | QuestionAndAnswerScalarWhereInput[]
  }

  export type QuestionAndAnswerCreateoptionsInput = {
    set: string[]
  }

  export type QuestionAndAnswerCreatecorrectOptionsInput = {
    set: string[]
  }

  export type QuizCreateNestedOneWithoutQuestionAndAnswerInput = {
    create?: XOR<QuizCreateWithoutQuestionAndAnswerInput, QuizUncheckedCreateWithoutQuestionAndAnswerInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionAndAnswerInput
    connect?: QuizWhereUniqueInput
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type QuestionAndAnswerUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuestionAndAnswerUpdatecorrectOptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionAndAnswerNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionAndAnswerInput, QuizUncheckedCreateWithoutQuestionAndAnswerInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionAndAnswerInput
    upsert?: QuizUpsertWithoutQuestionAndAnswerInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionAndAnswerInput, QuizUpdateWithoutQuestionAndAnswerInput>, QuizUncheckedUpdateWithoutQuestionAndAnswerInput>
  }

  export type AnswerCreatesubmittedOptionsInput = {
    set: string[]
  }

  export type UserAnswersCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserAnswersCreateWithoutAnswersInput, UserAnswersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserAnswersCreateOrConnectWithoutAnswersInput
    connect?: UserAnswersWhereUniqueInput
  }

  export type AnswerUpdatesubmittedOptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserAnswersUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserAnswersCreateWithoutAnswersInput, UserAnswersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserAnswersCreateOrConnectWithoutAnswersInput
    upsert?: UserAnswersUpsertWithoutAnswersInput
    connect?: UserAnswersWhereUniqueInput
    update?: XOR<XOR<UserAnswersUpdateToOneWithWhereWithoutAnswersInput, UserAnswersUpdateWithoutAnswersInput>, UserAnswersUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<QuizCreateWithoutUserAnswersInput, QuizUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: QuizCreateOrConnectWithoutUserAnswersInput
    connect?: QuizWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutUserAnswersInput = {
    create?: XOR<AnswerCreateWithoutUserAnswersInput, AnswerUncheckedCreateWithoutUserAnswersInput> | AnswerCreateWithoutUserAnswersInput[] | AnswerUncheckedCreateWithoutUserAnswersInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserAnswersInput | AnswerCreateOrConnectWithoutUserAnswersInput[]
    createMany?: AnswerCreateManyUserAnswersInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutUserAnswersInput = {
    create?: XOR<AnswerCreateWithoutUserAnswersInput, AnswerUncheckedCreateWithoutUserAnswersInput> | AnswerCreateWithoutUserAnswersInput[] | AnswerUncheckedCreateWithoutUserAnswersInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserAnswersInput | AnswerCreateOrConnectWithoutUserAnswersInput[]
    createMany?: AnswerCreateManyUserAnswersInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnswersInput
    upsert?: UserUpsertWithoutUserAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAnswersInput, UserUpdateWithoutUserAnswersInput>, UserUncheckedUpdateWithoutUserAnswersInput>
  }

  export type QuizUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<QuizCreateWithoutUserAnswersInput, QuizUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: QuizCreateOrConnectWithoutUserAnswersInput
    upsert?: QuizUpsertWithoutUserAnswersInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutUserAnswersInput, QuizUpdateWithoutUserAnswersInput>, QuizUncheckedUpdateWithoutUserAnswersInput>
  }

  export type AnswerUpdateManyWithoutUserAnswersNestedInput = {
    create?: XOR<AnswerCreateWithoutUserAnswersInput, AnswerUncheckedCreateWithoutUserAnswersInput> | AnswerCreateWithoutUserAnswersInput[] | AnswerUncheckedCreateWithoutUserAnswersInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserAnswersInput | AnswerCreateOrConnectWithoutUserAnswersInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserAnswersInput | AnswerUpsertWithWhereUniqueWithoutUserAnswersInput[]
    createMany?: AnswerCreateManyUserAnswersInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserAnswersInput | AnswerUpdateWithWhereUniqueWithoutUserAnswersInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserAnswersInput | AnswerUpdateManyWithWhereWithoutUserAnswersInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutUserAnswersNestedInput = {
    create?: XOR<AnswerCreateWithoutUserAnswersInput, AnswerUncheckedCreateWithoutUserAnswersInput> | AnswerCreateWithoutUserAnswersInput[] | AnswerUncheckedCreateWithoutUserAnswersInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserAnswersInput | AnswerCreateOrConnectWithoutUserAnswersInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserAnswersInput | AnswerUpsertWithWhereUniqueWithoutUserAnswersInput[]
    createMany?: AnswerCreateManyUserAnswersInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserAnswersInput | AnswerUpdateWithWhereUniqueWithoutUserAnswersInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserAnswersInput | AnswerUpdateManyWithWhereWithoutUserAnswersInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumQuizResultStateFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizResultState | EnumQuizResultStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizResultStateFilter<$PrismaModel> | $Enums.QuizResultState
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumQuizResultStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizResultState | EnumQuizResultStateFieldRefInput<$PrismaModel>
    in?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizResultState[] | ListEnumQuizResultStateFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizResultStateWithAggregatesFilter<$PrismaModel> | $Enums.QuizResultState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizResultStateFilter<$PrismaModel>
    _max?: NestedEnumQuizResultStateFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type QuizCreateWithoutHostInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    userAnswers?: UserAnswersCreateNestedManyWithoutQuizInput
    QuestionAndAnswer?: QuestionAndAnswerCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutHostInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuizInput
    QuestionAndAnswer?: QuestionAndAnswerUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutHostInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutHostInput, QuizUncheckedCreateWithoutHostInput>
  }

  export type QuizCreateManyHostInputEnvelope = {
    data: QuizCreateManyHostInput | QuizCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type UserAnswersCreateWithoutUserInput = {
    id?: string
    collectedInfo: string
    quiz: QuizCreateNestedOneWithoutUserAnswersInput
    answers?: AnswerCreateNestedManyWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    collectedInfo: string
    answers?: AnswerUncheckedCreateNestedManyWithoutUserAnswersInput
  }

  export type UserAnswersCreateOrConnectWithoutUserInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput>
  }

  export type UserAnswersCreateManyUserInputEnvelope = {
    data: UserAnswersCreateManyUserInput | UserAnswersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutHostInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutHostInput, QuizUncheckedUpdateWithoutHostInput>
    create: XOR<QuizCreateWithoutHostInput, QuizUncheckedCreateWithoutHostInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutHostInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutHostInput, QuizUncheckedUpdateWithoutHostInput>
  }

  export type QuizUpdateManyWithWhereWithoutHostInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutHostInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    name?: StringFilter<"Quiz"> | string
    level?: IntFilter<"Quiz"> | number
    topics?: StringNullableListFilter<"Quiz">
    resultState?: EnumQuizResultStateFilter<"Quiz"> | $Enums.QuizResultState
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    hostId?: StringFilter<"Quiz"> | string
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutUserInput, UserAnswersUncheckedUpdateWithoutUserInput>
    create: XOR<UserAnswersCreateWithoutUserInput, UserAnswersUncheckedCreateWithoutUserInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutUserInput, UserAnswersUncheckedUpdateWithoutUserInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutUserInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAnswersScalarWhereInput = {
    AND?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
    OR?: UserAnswersScalarWhereInput[]
    NOT?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
    id?: StringFilter<"UserAnswers"> | string
    userId?: StringFilter<"UserAnswers"> | string
    quizId?: StringFilter<"UserAnswers"> | string
    collectedInfo?: StringFilter<"UserAnswers"> | string
  }

  export type UserCreateWithoutHostedQuizzesInput = {
    id?: string
    name: string
    email: string
    userAnswers?: UserAnswersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHostedQuizzesInput = {
    id?: string
    name: string
    email: string
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHostedQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostedQuizzesInput, UserUncheckedCreateWithoutHostedQuizzesInput>
  }

  export type UserAnswersCreateWithoutQuizInput = {
    id?: string
    collectedInfo: string
    user: UserCreateNestedOneWithoutUserAnswersInput
    answers?: AnswerCreateNestedManyWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    collectedInfo: string
    answers?: AnswerUncheckedCreateNestedManyWithoutUserAnswersInput
  }

  export type UserAnswersCreateOrConnectWithoutQuizInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutQuizInput, UserAnswersUncheckedCreateWithoutQuizInput>
  }

  export type UserAnswersCreateManyQuizInputEnvelope = {
    data: UserAnswersCreateManyQuizInput | UserAnswersCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuestionAndAnswerCreateWithoutQuizInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: QuestionAndAnswerCreateoptionsInput | string[]
    correctAnswer?: string | null
    correctOptions?: QuestionAndAnswerCreatecorrectOptionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAndAnswerUncheckedCreateWithoutQuizInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: QuestionAndAnswerCreateoptionsInput | string[]
    correctAnswer?: string | null
    correctOptions?: QuestionAndAnswerCreatecorrectOptionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAndAnswerCreateOrConnectWithoutQuizInput = {
    where: QuestionAndAnswerWhereUniqueInput
    create: XOR<QuestionAndAnswerCreateWithoutQuizInput, QuestionAndAnswerUncheckedCreateWithoutQuizInput>
  }

  export type QuestionAndAnswerCreateManyQuizInputEnvelope = {
    data: QuestionAndAnswerCreateManyQuizInput | QuestionAndAnswerCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHostedQuizzesInput = {
    update: XOR<UserUpdateWithoutHostedQuizzesInput, UserUncheckedUpdateWithoutHostedQuizzesInput>
    create: XOR<UserCreateWithoutHostedQuizzesInput, UserUncheckedCreateWithoutHostedQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostedQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostedQuizzesInput, UserUncheckedUpdateWithoutHostedQuizzesInput>
  }

  export type UserUpdateWithoutHostedQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userAnswers?: UserAnswersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHostedQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutQuizInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutQuizInput, UserAnswersUncheckedUpdateWithoutQuizInput>
    create: XOR<UserAnswersCreateWithoutQuizInput, UserAnswersUncheckedCreateWithoutQuizInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutQuizInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutQuizInput, UserAnswersUncheckedUpdateWithoutQuizInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutQuizInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionAndAnswerUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionAndAnswerWhereUniqueInput
    update: XOR<QuestionAndAnswerUpdateWithoutQuizInput, QuestionAndAnswerUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionAndAnswerCreateWithoutQuizInput, QuestionAndAnswerUncheckedCreateWithoutQuizInput>
  }

  export type QuestionAndAnswerUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionAndAnswerWhereUniqueInput
    data: XOR<QuestionAndAnswerUpdateWithoutQuizInput, QuestionAndAnswerUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionAndAnswerUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionAndAnswerScalarWhereInput
    data: XOR<QuestionAndAnswerUpdateManyMutationInput, QuestionAndAnswerUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionAndAnswerScalarWhereInput = {
    AND?: QuestionAndAnswerScalarWhereInput | QuestionAndAnswerScalarWhereInput[]
    OR?: QuestionAndAnswerScalarWhereInput[]
    NOT?: QuestionAndAnswerScalarWhereInput | QuestionAndAnswerScalarWhereInput[]
    id?: StringFilter<"QuestionAndAnswer"> | string
    text?: StringFilter<"QuestionAndAnswer"> | string
    type?: EnumQuestionTypeFilter<"QuestionAndAnswer"> | $Enums.QuestionType
    options?: StringNullableListFilter<"QuestionAndAnswer">
    correctAnswer?: StringNullableFilter<"QuestionAndAnswer"> | string | null
    correctOptions?: StringNullableListFilter<"QuestionAndAnswer">
    createdAt?: DateTimeFilter<"QuestionAndAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionAndAnswer"> | Date | string
    quizId?: StringFilter<"QuestionAndAnswer"> | string
  }

  export type QuizCreateWithoutQuestionAndAnswerInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedQuizzesInput
    userAnswers?: UserAnswersCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionAndAnswerInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    hostId: string
    userAnswers?: UserAnswersUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionAndAnswerInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionAndAnswerInput, QuizUncheckedCreateWithoutQuestionAndAnswerInput>
  }

  export type QuizUpsertWithoutQuestionAndAnswerInput = {
    update: XOR<QuizUpdateWithoutQuestionAndAnswerInput, QuizUncheckedUpdateWithoutQuestionAndAnswerInput>
    create: XOR<QuizCreateWithoutQuestionAndAnswerInput, QuizUncheckedCreateWithoutQuestionAndAnswerInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionAndAnswerInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionAndAnswerInput, QuizUncheckedUpdateWithoutQuestionAndAnswerInput>
  }

  export type QuizUpdateWithoutQuestionAndAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedQuizzesNestedInput
    userAnswers?: UserAnswersUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionAndAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: StringFieldUpdateOperationsInput | string
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserAnswersCreateWithoutAnswersInput = {
    id?: string
    collectedInfo: string
    user: UserCreateNestedOneWithoutUserAnswersInput
    quiz: QuizCreateNestedOneWithoutUserAnswersInput
  }

  export type UserAnswersUncheckedCreateWithoutAnswersInput = {
    id?: string
    userId: string
    quizId: string
    collectedInfo: string
  }

  export type UserAnswersCreateOrConnectWithoutAnswersInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutAnswersInput, UserAnswersUncheckedCreateWithoutAnswersInput>
  }

  export type UserAnswersUpsertWithoutAnswersInput = {
    update: XOR<UserAnswersUpdateWithoutAnswersInput, UserAnswersUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserAnswersCreateWithoutAnswersInput, UserAnswersUncheckedCreateWithoutAnswersInput>
    where?: UserAnswersWhereInput
  }

  export type UserAnswersUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserAnswersWhereInput
    data: XOR<UserAnswersUpdateWithoutAnswersInput, UserAnswersUncheckedUpdateWithoutAnswersInput>
  }

  export type UserAnswersUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
    quiz?: QuizUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    email: string
    hostedQuizzes?: QuizCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    email: string
    hostedQuizzes?: QuizUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutUserAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
  }

  export type QuizCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedQuizzesInput
    QuestionAndAnswer?: QuestionAndAnswerCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
    hostId: string
    QuestionAndAnswer?: QuestionAndAnswerUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutUserAnswersInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutUserAnswersInput, QuizUncheckedCreateWithoutUserAnswersInput>
  }

  export type AnswerCreateWithoutUserAnswersInput = {
    id?: string
    type: $Enums.QuestionType
    submittedAnswer?: string | null
    submittedOptions?: AnswerCreatesubmittedOptionsInput | string[]
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type AnswerUncheckedCreateWithoutUserAnswersInput = {
    id?: string
    type: $Enums.QuestionType
    submittedAnswer?: string | null
    submittedOptions?: AnswerCreatesubmittedOptionsInput | string[]
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type AnswerCreateOrConnectWithoutUserAnswersInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserAnswersInput, AnswerUncheckedCreateWithoutUserAnswersInput>
  }

  export type AnswerCreateManyUserAnswersInputEnvelope = {
    data: AnswerCreateManyUserAnswersInput | AnswerCreateManyUserAnswersInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserAnswersInput = {
    update: XOR<UserUpdateWithoutUserAnswersInput, UserUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAnswersInput, UserUncheckedUpdateWithoutUserAnswersInput>
  }

  export type UserUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hostedQuizzes?: QuizUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hostedQuizzes?: QuizUncheckedUpdateManyWithoutHostNestedInput
  }

  export type QuizUpsertWithoutUserAnswersInput = {
    update: XOR<QuizUpdateWithoutUserAnswersInput, QuizUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<QuizCreateWithoutUserAnswersInput, QuizUncheckedCreateWithoutUserAnswersInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutUserAnswersInput, QuizUncheckedUpdateWithoutUserAnswersInput>
  }

  export type QuizUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedQuizzesNestedInput
    QuestionAndAnswer?: QuestionAndAnswerUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: StringFieldUpdateOperationsInput | string
    QuestionAndAnswer?: QuestionAndAnswerUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutUserAnswersInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutUserAnswersInput, AnswerUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<AnswerCreateWithoutUserAnswersInput, AnswerUncheckedCreateWithoutUserAnswersInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutUserAnswersInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutUserAnswersInput, AnswerUncheckedUpdateWithoutUserAnswersInput>
  }

  export type AnswerUpdateManyWithWhereWithoutUserAnswersInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutUserAnswersInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    type?: EnumQuestionTypeFilter<"Answer"> | $Enums.QuestionType
    submittedAnswer?: StringNullableFilter<"Answer"> | string | null
    submittedOptions?: StringNullableListFilter<"Answer">
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    questionId?: StringFilter<"Answer"> | string
    userAnswersId?: StringFilter<"Answer"> | string
  }

  export type QuizCreateManyHostInput = {
    id?: string
    name: string
    level: number
    topics?: QuizCreatetopicsInput | string[]
    resultState: $Enums.QuizResultState
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswersCreateManyUserInput = {
    id?: string
    quizId: string
    collectedInfo: string
  }

  export type QuizUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAnswers?: UserAnswersUpdateManyWithoutQuizNestedInput
    QuestionAndAnswer?: QuestionAndAnswerUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAnswers?: UserAnswersUncheckedUpdateManyWithoutQuizNestedInput
    QuestionAndAnswer?: QuestionAndAnswerUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    topics?: QuizUpdatetopicsInput | string[]
    resultState?: EnumQuizResultStateFieldUpdateOperationsInput | $Enums.QuizResultState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutUserAnswersNestedInput
    answers?: AnswerUpdateManyWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
  }

  export type UserAnswersCreateManyQuizInput = {
    id?: string
    userId: string
    collectedInfo: string
  }

  export type QuestionAndAnswerCreateManyQuizInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    options?: QuestionAndAnswerCreateoptionsInput | string[]
    correctAnswer?: string | null
    correctOptions?: QuestionAndAnswerCreatecorrectOptionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAnswersUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
    answers?: AnswerUpdateManyWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutUserAnswersNestedInput
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectedInfo?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAndAnswerUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAndAnswerUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAndAnswerUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    options?: QuestionAndAnswerUpdateoptionsInput | string[]
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    correctOptions?: QuestionAndAnswerUpdatecorrectOptionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyUserAnswersInput = {
    id?: string
    type: $Enums.QuestionType
    submittedAnswer?: string | null
    submittedOptions?: AnswerCreatesubmittedOptionsInput | string[]
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type AnswerUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    submittedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    submittedOptions?: AnswerUpdatesubmittedOptionsInput | string[]
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }



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