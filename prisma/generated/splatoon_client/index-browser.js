
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.2.0
 * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
 */
Prisma.prismaVersion = {
  client: "5.2.0",
  engine: "2804dc98259d2ea960602aca6b8e7fdc03c1758f"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.RuleScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ModeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  maxMembers: 'maxMembers',
  fessMode: 'fessMode'
};

exports.Prisma.ModeOnRuleScalarFieldEnum = {
  ruleId: 'ruleId',
  modeId: 'modeId'
};

exports.Prisma.StageScalarFieldEnum = {
  id: 'id',
  name: 'name',
  seasonId: 'seasonId'
};

exports.Prisma.SpecialWeaponScalarFieldEnum = {
  id: 'id',
  name: 'name',
  seasonId: 'seasonId'
};

exports.Prisma.WeaponTypeScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SubWeaponScalarFieldEnum = {
  id: 'id',
  name: 'name',
  seasonId: 'seasonId'
};

exports.Prisma.MainWeaponScalarFieldEnum = {
  id: 'id',
  name: 'name',
  seasonId: 'seasonId',
  weaponTypeId: 'weaponTypeId'
};

exports.Prisma.WeaponScalarFieldEnum = {
  id: 'id',
  name: 'name',
  subWeaponId: 'subWeaponId',
  specialWeaponId: 'specialWeaponId',
  seasonId: 'seasonId',
  weaponTypeId: 'weaponTypeId',
  mainWeaponId: 'mainWeaponId'
};

exports.Prisma.SeasonScalarFieldEnum = {
  id: 'id',
  name: 'name',
  startDate: 'startDate',
  endDate: 'endDate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
