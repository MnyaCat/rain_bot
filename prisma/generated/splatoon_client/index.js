
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\MnyaCat\\Documents\\nodejs-project\\rain_bot\\prisma\\generated\\splatoon_client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.2.0",
  "engineVersion": "2804dc98259d2ea960602aca6b8e7fdc03c1758f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "SPLATOON_DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvc3BsYXRvb25fY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICAgIHByb3ZpZGVyID0gInNxbGl0ZSIKICAgIHVybCAgICAgID0gZW52KCJTUExBVE9PTl9EQl9VUkwiKQp9Cgptb2RlbCBSdWxlIHsKICAgIGlkICAgIEludCAgICAgICAgICBAaWQKICAgIG5hbWUgIFN0cmluZwogICAgbW9kZXMgTW9kZU9uUnVsZVtdCn0KCm1vZGVsIE1vZGUgewogICAgaWQgICAgICAgICBJbnQgICAgICAgICAgQGlkCiAgICBuYW1lICAgICAgIFN0cmluZwogICAgbWF4TWVtYmVycyBJbnQKICAgIGZlc3NNb2RlICAgQm9vbGVhbgogICAgcnVsZXMgICAgICBNb2RlT25SdWxlW10KfQoKbW9kZWwgTW9kZU9uUnVsZSB7CiAgICBydWxlICAgUnVsZSBAcmVsYXRpb24oZmllbGRzOiBbcnVsZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHJ1bGVJZCBJbnQKICAgIG1vZGUgICBNb2RlIEByZWxhdGlvbihmaWVsZHM6IFttb2RlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgbW9kZUlkIEludAoKICAgIEBAaWQoW3J1bGVJZCwgbW9kZUlkXSkKfQoKbW9kZWwgU3RhZ2UgewogICAgaWQgICAgICAgICAgICBJbnQgICAgQGlkCiAgICBuYW1lICAgICAgICAgIFN0cmluZwogICAgcmVsZWFzZVNlYXNvbiBTZWFzb24gQHJlbGF0aW9uKGZpZWxkczogW3NlYXNvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHNlYXNvbklkICAgICAgSW50Cn0KCm1vZGVsIFNwZWNpYWxXZWFwb24gewogICAgaWQgICAgICAgICAgICBJbnQgICAgICBAaWQKICAgIG5hbWUgICAgICAgICAgU3RyaW5nCiAgICByZWxlYXNlU2Vhc29uIFNlYXNvbiAgIEByZWxhdGlvbihmaWVsZHM6IFtzZWFzb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICBXZWFwb24gICAgICAgIFdlYXBvbltdCiAgICBzZWFzb25JZCAgICAgIEludAp9Cgptb2RlbCBXZWFwb25UeXBlIHsKICAgIGlkICAgICAgICAgSW50ICAgICAgICAgIEBpZAogICAgbmFtZSAgICAgICBTdHJpbmcKICAgIFdlYXBvbiAgICAgV2VhcG9uW10KICAgIE1haW5XZWFwb24gTWFpbldlYXBvbltdCn0KCm1vZGVsIFN1YldlYXBvbiB7CiAgICBpZCAgICAgICAgICAgIEludCAgICAgIEBpZAogICAgbmFtZSAgICAgICAgICBTdHJpbmcKICAgIHJlbGVhc2VTZWFzb24gU2Vhc29uICAgQHJlbGF0aW9uKGZpZWxkczogW3NlYXNvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIFdlYXBvbiAgICAgICAgV2VhcG9uW10KICAgIHNlYXNvbklkICAgICAgSW50Cn0KCm1vZGVsIE1haW5XZWFwb24gewogICAgaWQgICAgICAgICAgICBJbnQgICAgICAgIEBpZAogICAgbmFtZSAgICAgICAgICBTdHJpbmcKICAgIHdlYXBvblR5cGUgICAgV2VhcG9uVHlwZSBAcmVsYXRpb24oZmllbGRzOiBbd2VhcG9uVHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHJlbGVhc2VTZWFzb24gU2Vhc29uICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2Vhc29uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgc2Vhc29uSWQgICAgICBJbnQKICAgIFdlYXBvbiAgICAgICAgV2VhcG9uW10KICAgIHdlYXBvblR5cGVJZCAgSW50Cn0KCm1vZGVsIFdlYXBvbiB7CiAgICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICBAaWQKICAgIG5hbWUgICAgICAgICAgICBTdHJpbmcKICAgIG1haW5XZWFwb24gICAgICBNYWluV2VhcG9uICAgIEByZWxhdGlvbihmaWVsZHM6IFttYWluV2VhcG9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgc3ViV2VhcG9uICAgICAgIFN1YldlYXBvbiAgICAgQHJlbGF0aW9uKGZpZWxkczogW3N1YldlYXBvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHNwZWNpYWxXZWFwb24gICBTcGVjaWFsV2VhcG9uIEByZWxhdGlvbihmaWVsZHM6IFtzcGVjaWFsV2VhcG9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgd2VhcG9uVHlwZSAgICAgIFdlYXBvblR5cGUgICAgQHJlbGF0aW9uKGZpZWxkczogW3dlYXBvblR5cGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICByZWxlYXNlU2Vhc29uICAgU2Vhc29uICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2Vhc29uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgc3ViV2VhcG9uSWQgICAgIEludAogICAgc3BlY2lhbFdlYXBvbklkIEludAogICAgc2Vhc29uSWQgICAgICAgIEludAogICAgd2VhcG9uVHlwZUlkICAgIEludAogICAgbWFpbldlYXBvbklkICAgIEludAp9Cgptb2RlbCBTZWFzb24gewogICAgaWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkCiAgICBuYW1lICAgICAgICAgIFN0cmluZwogICAgc3RhcnREYXRlICAgICBEYXRlVGltZQogICAgZW5kRGF0ZSAgICAgICBEYXRlVGltZQogICAgV2VhcG9uICAgICAgICBXZWFwb25bXQogICAgU3RhZ2UgICAgICAgICBTdGFnZVtdCiAgICBTcGVjaWFsV2VhcG9uIFNwZWNpYWxXZWFwb25bXQogICAgU3ViV2VhcG9uICAgICBTdWJXZWFwb25bXQogICAgTWFpbldlYXBvbiAgICBNYWluV2VhcG9uW10KfQo=",
  "inlineSchemaHash": "eef84d4ebff5fbbb9a3102503bef7a213cf646abd7261416354d35d502eb2242"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/splatoon_client",
    "generated/splatoon_client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Rule\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModeOnRule\",\"relationName\":\"ModeOnRuleToRule\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mode\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxMembers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fessMode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModeOnRule\",\"relationName\":\"ModeToModeOnRule\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModeOnRule\":{\"dbName\":null,\"fields\":[{\"name\":\"rule\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rule\",\"relationName\":\"ModeOnRuleToRule\",\"relationFromFields\":[\"ruleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mode\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mode\",\"relationName\":\"ModeToModeOnRule\",\"relationFromFields\":[\"modeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ruleId\",\"modeId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Stage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseSeason\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"SeasonToStage\",\"relationFromFields\":[\"seasonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SpecialWeapon\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseSeason\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"SeasonToSpecialWeapon\",\"relationFromFields\":[\"seasonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Weapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Weapon\",\"relationName\":\"SpecialWeaponToWeapon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WeaponType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Weapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Weapon\",\"relationName\":\"WeaponToWeaponType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MainWeapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MainWeapon\",\"relationName\":\"MainWeaponToWeaponType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubWeapon\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseSeason\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"SeasonToSubWeapon\",\"relationFromFields\":[\"seasonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Weapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Weapon\",\"relationName\":\"SubWeaponToWeapon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MainWeapon\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeaponType\",\"relationName\":\"MainWeaponToWeaponType\",\"relationFromFields\":[\"weaponTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseSeason\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"MainWeaponToSeason\",\"relationFromFields\":[\"seasonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Weapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Weapon\",\"relationName\":\"MainWeaponToWeapon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Weapon\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainWeapon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MainWeapon\",\"relationName\":\"MainWeaponToWeapon\",\"relationFromFields\":[\"mainWeaponId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subWeapon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubWeapon\",\"relationName\":\"SubWeaponToWeapon\",\"relationFromFields\":[\"subWeaponId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialWeapon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SpecialWeapon\",\"relationName\":\"SpecialWeaponToWeapon\",\"relationFromFields\":[\"specialWeaponId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeaponType\",\"relationName\":\"WeaponToWeaponType\",\"relationFromFields\":[\"weaponTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseSeason\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"SeasonToWeapon\",\"relationFromFields\":[\"seasonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subWeaponId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialWeaponId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainWeaponId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Season\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Weapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Weapon\",\"relationName\":\"SeasonToWeapon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Stage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stage\",\"relationName\":\"SeasonToStage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SpecialWeapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SpecialWeapon\",\"relationName\":\"SeasonToSpecialWeapon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubWeapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubWeapon\",\"relationName\":\"SeasonToSubWeapon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MainWeapon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MainWeapon\",\"relationName\":\"MainWeaponToSeason\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/splatoon_client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/splatoon_client/schema.prisma")
